"""
scripts/extract_machine_matte.py
Reproducible Alpha-Matte Extraction Workflow for Celestial Android Goddess
==========================================================================
Extracts the foreground celestial goddess figure from the baked-in fake checkerboard
without naively removing white/gray tones inside the artwork itself.

Input:  public/assets/hero/Celestial Android Goddess in Bloom.png (original RGB)
Output: public/assets/hero/celestial_android_goddess_extracted.png (clean RGBA)
"""

import os
import numpy as np
from PIL import Image
from scipy import ndimage

def extract_matte(input_path: str, output_path: str):
    print(f"[Matte Extraction] Loading: {input_path}")
    im = Image.open(input_path)
    arr = np.array(im, dtype=float)
    H, W, _ = arr.shape

    # Color saturation/chroma and luminance
    chroma = np.max(arr, axis=2) - np.min(arr, axis=2)
    lum = np.mean(arr, axis=2)

    # Checkerboard characteristic signature:
    # Highly neutral (chroma < 7.0) AND falling into either the white tile range (~230..255)
    # or the gray tile range (~185..218).
    is_bg_candidate = (chroma < 7.0) & (
        ((lum > 228) & (lum < 256)) |
        ((lum > 185) & (lum < 218))
    )

    # Morphological closing to seal microscopic 1px seams between adjacent tiles
    is_bg_closed = ndimage.binary_closing(is_bg_candidate, structure=np.ones((3, 3)))

    # Connected component labeling anchored to image boundaries
    labeled, num_features = ndimage.label(is_bg_closed)
    border_labels = np.unique(np.concatenate([
        labeled[0, :], labeled[-1, :], labeled[:, 0], labeled[:, -1]
    ]))
    border_labels = border_labels[border_labels > 0]
    exterior_bg = np.isin(labeled, border_labels)

    # Include any secondary open background pockets (> 400 px) with low chroma
    component_sizes = np.bincount(labeled.ravel())
    for lab, size in enumerate(component_sizes):
        if lab > 0 and size > 400:
            mask = (labeled == lab)
            if np.mean(chroma[mask]) < 5.0 and (
                np.mean(lum[mask]) > 220 or (190 < np.mean(lum[mask]) < 215)
            ):
                exterior_bg |= mask

    # Invert background to get candidate foreground mask
    fg_mask = ~exterior_bg

    # Remove disconnected stray background noise specs (< 80 px)
    labeled_fg, _ = ndimage.label(fg_mask)
    fg_sizes = np.bincount(labeled_fg.ravel())
    small_specs = np.isin(labeled_fg, np.where(fg_sizes < 80)[0])
    fg_mask[small_specs] = False

    # Protect internal highlights/gems within the figure (< 300 px) that are not exterior
    labeled_holes, _ = ndimage.label(~fg_mask)
    hole_sizes = np.bincount(labeled_holes.ravel())
    for h_lab, h_size in enumerate(hole_sizes):
        if h_lab > 0 and h_size < 300:
            if h_lab not in border_labels:
                fg_mask[labeled_holes == h_lab] = True

    # Sub-pixel smooth edge anti-aliasing via Euclidean distance transform
    dist_in = ndimage.distance_transform_edt(fg_mask)
    dist_out = ndimage.distance_transform_edt(~fg_mask)

    alpha = np.clip((dist_in - 0.5) / 1.5, 0.0, 1.0)
    alpha[dist_out > 1.5] = 0.0

    # Ensure zero boundary leakage on the canvas frame edges
    alpha[0, :] = 0.0
    alpha[:, 0] = 0.0
    alpha[-1, :] = 0.0
    alpha[:, -1] = 0.0

    # Assemble 8-bit RGBA
    rgba = np.dstack([arr, (alpha * 255.0).astype(np.uint8)]).astype(np.uint8)
    out_img = Image.fromarray(rgba, "RGBA")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    out_img.save(output_path, "PNG")
    print(f"[Matte Extraction] Successfully saved clean RGBA asset: {output_path} ({out_img.size})")

if __name__ == "__main__":
    src = "public/assets/hero/Celestial Android Goddess in Bloom.png"
    dst = "public/assets/hero/celestial_android_goddess_extracted.png"
    extract_matte(src, dst)

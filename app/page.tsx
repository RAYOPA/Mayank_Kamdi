"use client";
import './globals.css';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const layers = document.querySelectorAll('.hero-layer');
    const title = document.querySelector('.hero-content h1');
    const subtitle = document.querySelector('.hero-content p');
    const ctas = document.querySelectorAll('.hero-content .cta-btn');

// Guard against missing elements
if (!layers.length || !title || !subtitle) {
  console.warn('Hero elements not found, skipping animations');
  return;
}

    // Stage A – Entrance sequence
    const entrance = gsap.timeline();
    entrance.from(layers, { opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: 'power2.out' })
      .from(title, { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
      .from(subtitle, { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
      .from(ctas, { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }, '-=0.6');

    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    // Stage B – Layered parallax (scroll‑driven) – skip on touch devices
    if (!isTouch) {
      layers.forEach((layer, i) => {
        const depth = (i + 1) * 20; // increasing strength per layer
        gsap.to(layer, {
          y: depth,
          ease: 'none',
          scrollTrigger: {
            trigger: layer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }


    // Stage C – Scroll‑triggered title scaling
    gsap.to(title, {
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="hero-container">
      {/* Layer 0: Background SVG */}
      <Image src="/assets/hero/hero_background_layer.svg" alt="" className="hero-layer" aria-hidden="true" fill priority />
      {/* Layer 1: Left Hero Artwork */}
      <Image src="/assets/hero/mayank_left_hero_artwork.png" alt="" className="hero-layer" aria-hidden="true" fill priority />
      {/* Layer 2: Right Goddess */}
      <Image src="/assets/hero/Celestial Android Goddess in Bloom.png" alt="" className="hero-layer" aria-hidden="true" fill priority />
      {/* Layer 3: Technical Orrery */}
      <Image src="/assets/hero/Celestial Cyborg Orrery in Blue Ink.png" alt="" className="hero-layer" aria-hidden="true" fill priority />
      {/* Layer 4: Left Botanical */}
      <Image src="/assets/hero/Golden Celestial Garden Ornament.png" alt="" className="hero-layer" aria-hidden="true" fill priority />
      {/* Layer 5: Right Botanical */}
      <Image src="/assets/hero/Celestial Botanical Corner in Gold and Blue.png" alt="" className="hero-layer" aria-hidden="true" fill priority />
      {/* Layer 6: Foreground Ribbons */}
      <Image src="/assets/hero/Golden Ribbons Over a Dreamy Valley.png" alt="" className="hero-layer" aria-hidden="true" fill priority />

      {/* Content Overlay */}
      <section className="hero-content" aria-label="Hero Section">
        <h1>Mayank Kamdi</h1>
        <p>AI Engineer · Builder · Creative Technologist</p>
        <div>
          <a href="#projects" className="cta-btn">Explore My Work</a>
          <a href="#about" className="cta-btn" style={{ marginLeft: '1rem' }}>About Me</a>
        </div>
      </section>
    </main>
  );
}

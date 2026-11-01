import urllib.request

try:
    with urllib.request.urlopen('http://localhost:3000/') as response:
        html = response.read().decode('utf-8')
        print('HTTP Status:', response.status)
        print('HTML length:', len(html))
        # Check key components in rendered HTML
        for term in ['fresco-hero', 'fresco-frame', 'fresco-svg--under', 'fresco-svg--over', 'MK', 'Mayank Kamdi', 'Explore My Work', 'About Me', 'celestial_android_goddess_extracted.png', 'mayank_left_hero_artwork.png']:
            print(f'Contains "{term}":', term in html)
except Exception as e:
    print('HTTP fetch error:', e)

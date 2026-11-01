"use client";

import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* External CSS from BIOS site */}
        <link rel="stylesheet" href="https://bios.notyouraverage.xyz/static/theme/css/tokens.css" />
        <link rel="stylesheet" href="https://bios.notyouraverage.xyz/static/theme/css/base.css" />
        <link rel="stylesheet" href="https://bios.notyouraverage.xyz/static/theme/css/components.css" />
        <link rel="stylesheet" href="https://bios.notyouraverage.xyz/static/theme/css/worlds.css" />
        <link rel="stylesheet" href="https://bios.notyouraverage.xyz/static/theme/css/pages.css" />
        <link rel="stylesheet" href="https://bios.notyouraverage.xyz/static/home/home.css" />
      </Head>
      <header className="site-header site-header--home">
        <div className="site-header__bar">
          <a className="brand" href="/">
            <svg className="brand__logo" viewBox="0 0 322 162" width="99" height="50" role="img" aria-label="BIOS Hackathon, home" focusable="false">
              <use href="#bios-logo" width="322" height="162" />
            </svg>
            <span className="brand__sub">Bringing Innovation<br />On-Stage</span>
          </a>
          <nav className="nav-primary" aria-label="Primary">
            <ul>
              <li><a className="nav-link" href="/" aria-current="page">Home</a></li>
              <li><a className="nav-link" href="/tracks">Tracks</a></li>
              <li><a className="nav-link" href="/guide">Guide</a></li>
              <li><a className="nav-link" href="/announcements">Announcements</a></li>
              <li><a className="nav-link" href="/sponsors">Sponsors</a></li>
              <li><a className="nav-link" href="/history">BIOS 25</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <a className="btn btn--primary btn--sm nav-login" href="/signin?next=/dashboard">Login</a>
            <button id="mobile-menu-button" className="nav-toggle nav-toggle--guest" type="button" aria-controls="mobile-menu" aria-expanded="false">
              <span className="nav-toggle__icon" aria-hidden="true"><span></span></span>
              <span className="nav-toggle__label">Menu</span>
            </button>
            <nav id="mobile-menu" className="nav-menu hidden" aria-label="Pages">
              <div className="nav-menu__group nav-menu__group--pages">
                <p className="nav-menu__title">Explore</p>
                <ul>
                  <li style={{'--i': 0}}><a className="nav-menu__link" href="/" aria-current="page">Home</a></li>
                  <li style={{'--i': 1}}><a className="nav-menu__link" href="/tracks">Tracks</a></li>
                  <li style={{'--i': 2}}><a className="nav-menu__link" href="/guide">Guide</a></li>
                  <li style={{'--i': 3}}><a className="nav-menu__link" href="/announcements">Announcements</a></li>
                  <li style={{'--i': 4}}><a className="nav-menu__link" href="/sponsors">Sponsors</a></li>
                  <li style={{'--i': 5}}><a className="nav-menu__link" href="/history">BIOS 25</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="app-main" id="main-content" tabIndex={-1}>
        {/* HERO SECTION */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__stage" data-o-fill="https://bios.notyouraverage.xyz/static/theme/art/o-fill.webp">
            <div className="art-frame" role="img" aria-label="Painting: on the left a woman among roses, vines, birds and a lyre reaches out; on the right a figure of blue mosaic, circuitry and geometric flowers reaches back. Their fingertips almost touch beneath the word BIOS.">
              <div className="art-cam">
                {/* apparatus */}
                <svg className="art-svg art-svg--under" viewBox="0 0 1672 941" aria-hidden="true" focusable="false">
                  <defs>
                    <linearGradient id="thread-grad" gradientUnits="userSpaceOnUse" x1="0" y1="160" x2="0" y2="556">
                      <stop offset="0" stopColor="#8f6436" stopOpacity={0.22} />
                      <stop offset=".3" stopColor="#a0692c" stopOpacity={0.5} />
                      <stop offset=".62" stopColor="#a86a22" stopOpacity={0.7} />
                      <stop offset=".95" stopColor="#946020" stopOpacity={0.55} />
                      <stop offset="1" stopColor="#946020" stopOpacity={0.1} />
                    </linearGradient>
                    <radialGradient id="orb-grad" cx=".4" cy=".36" r=".72">
                      <stop offset="0" stopColor="#f7e2bf" />
                      <stop offset=".42" stopColor="#dc9d3c" />
                      <stop offset="1" stopColor="#a5650f" />
                    </radialGradient>
                  </defs>
                  <g className="apparatus">
                    <path className="thread" d="M836.7 165V187.8M836.7 301.4V553" />
                    <g className="apparatus__beads">
                      <circle className="bead" cx="836.7" cy="368.2" r="1.8" />
                      <path className="tick" d="M830.2 397.4H843.2" />
                      <path className="orb-rays" d="M830.7 439.9L820.7 441.2L830.7 442.5ZM842.7 439.9L852.7 441.2L842.7 442.5ZM835.4 435.2L836.7 426.2L838 435.2ZM835.4 447.2L836.7 456.2L838 447.2Z" />
                      <circle className="orb" cx="836.7" cy="441.2" r="7.4" />
                      <path className="diamond" d="M836.7 505L843.3 511.4L836.7 517.8L830.1 511.4Z" />
                      <circle className="bead" cx="836.7" cy="537.4" r="2" />
                    </g>
                    <circle className="field-ring" cx="836.7" cy="441.6" r="44.2" />
                  </g>
                </svg>

                <picture className="art-layer art-layer--human">
                  <source type="image/avif" srcSet="https://bios.notyouraverage.xyz/static/theme/art/art-human.avif" />
                  <img src="https://bios.notyouraverage.xyz/static/theme/art/art-human.webp" width="842" height="941" alt="" decoding="async" fetchPriority="high" />
                </picture>
                <picture className="art-layer art-layer--machine">
                  <source type="image/avif" srcSet="https://bios.notyouraverage.xyz/static/theme/art/art-machine.avif" />
                  <img src="https://bios.notyouraverage.xyz/static/theme/art/art-machine.webp" width="830" height="941" alt="" decoding="async" fetchPriority="high" />
                </picture>
                {/* logo vectors */}
                <svg className="art-svg art-svg--over" viewBox="0 0 1672 941" aria-hidden="true" focusable="false">
                  <defs>
                    <clipPath id="clip-phase-bio" clipPathUnits="userSpaceOnUse"><path d="M836.7 188.9A55.7 55.7 0 0 1 836.7 300.3Z"/></clipPath>
                    <clipPath id="clip-phase-os" clipPathUnits="userSpaceOnUse"><path d="M836.7 188.9A55.7 55.7 0 0 1 836.7 300.3Z"/></clipPath>
                    <radialGradient id="dot-grad" cx=".42" cy=".38" r=".7"><stop offset="0" stopColor="#ecc47a"/><stop offset="1" stopColor="#c48a33"/></radialGradient>
                  </defs>
                  <g className="logo">
                    <g className="word word--bio">
                      <use className="glyph" href="#g-B" />
                      <use className="glyph" href="#g-I" />
                      <g className="o o--bio">
                        <g className="o__rot">
                          <g clipPath="url(#clip-phase-bio)">
                            <image className="o__fill" href="https://bios.notyouraverage.xyz/static/theme/art/o-fill.webp" x="779.2" y="187.1" width="115" height="115" preserveAspectRatio="none" />
                            <image className="o__fill o__fill--gold" href="https://bios.notyouraverage.xyz/static/theme/art/o-fill-gold.webp" x="779.2" y="187.1" width="115" height="115" preserveAspectRatio="none" />
                          </g>
                          <path className="o__hand" d="M836.7 187.8V301.4" />
                        </g>
                        <circle className="o__ring" cx="836.7" cy="244.6" r="56.8" />
                        <circle className="o__dot" cx="836.7" cy="244.6" r="6.3" />
                      </g>
                    </g>
                    <g className="word word--os">
                      <g className="o o--os">
                        <g className="o__rot">
                          <g clipPath="url(#clip-phase-os)">
                            <image className="o__fill" href="https://bios.notyouraverage.xyz/static/theme/art/o-fill.webp" x="779.2" y="187.1" width="115" height="115" preserveAspectRatio="none" />
                          </g>
                          <path className="o__hand" d="M836.7 187.8V301.4" />
                        </g>
                        <circle className="o__ring" cx="836.7" cy="244.6" r="56.8" />
                        <circle className="o__dot" cx="836.7" cy="244.6" r="6.3" />
                      </g>
                      <use className="glyph" href="#g-S" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <canvas className="hero__gl" aria-hidden="true"></canvas>
          <div className="hero__glint" aria-hidden="true"><span></span></div>
          <div className="hero__captions" aria-hidden="true">
            <p className="caption caption--bio"><span>humanity</span><span>nature</span><span>life</span></p>
            <p className="caption caption--os"><span>computation</span><span>systems</span><span>machines</span></p>
          </div>
          <div className="hero__copy">
            <h1 id="hero-title" className="sr-only">BIOS Hackathon: Bringing Innovation On-Stage</h1>
            <p className="hero__actions">
              <a className="btn btn--primary" href="/signin?next=/tracks">Register</a>
              <a className="btn btn--secondary" href="/tracks">Explore Tracks</a>
            </p>
            <p className="hero__tagline"><span className="hero__paper">A hackathon where <em className="w-bio">life</em> and <em className="w-os">computation</em> meet.</span></p>
            <p className="hero__meta"><span>BIOS V2</span><span aria-hidden="true">·</span><span>Thapar Institute, Patiala</span></p>
          </div>
          <p className="hero__cue" aria-hidden="true"><span>Scroll</span></p>
        </section>

        {/* Existing About, Work, Skills, Contact sections (unchanged) */}
        <section id="about" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--cobalt)', marginBottom: '1rem' }}>About Mayank Kamdi</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-secondary)' }}>
            I am an AI Engineer and Creative Technologist bridging the boundary between rigorous mathematical systems and expressive human experiences. Specializing in generative models, high-performance web systems, and creative computation.
          </p>
        </section>
        <section id="work" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', borderTop: '1px solid rgba(110, 74, 34, 0.15)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--cobalt)', marginBottom: '1rem' }}>Selected Work</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-secondary)' }}>
            Explorations in autonomous agents, interactive WebGL shaders, distributed AI architectures, and human-centric software.
          </p>
        </section>
        <section id="skills" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', borderTop: '1px solid rgba(110, 74, 34, 0.15)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--cobalt)', marginBottom: '1rem' }}>Technical Disciplines</h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--ink-secondary)' }}>
            PyTorch · Next.js · TypeScript · WebGL / GLSL · Distributed Systems · Agentic Systems · Cloud Architecture
          </p>
        </section>
        <section id="contact" style={{ padding: '6rem 2rem 10rem', maxWidth: '1000px', margin: '0 auto', borderTop: '1px solid rgba(110, 74, 34, 0.15)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--cobalt)', marginBottom: '1rem' }}>Initiate Contact</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-secondary)' }}>
            Available for innovative engineering challenges, technical leadership, and creative collaborations.
          </p>
        </section>
      </main>

      <footer className="site-footer home-footer">
        <div className="site-footer__inner">
          <svg className="site-footer__logo" viewBox="0 0 322 162" width="118" height="59" aria-hidden="true" focusable="false">
            <use href="#bios-logo" width="322" height="162" />
          </svg>
          <div>
            <p className="site-footer__small">©  BIOS Hackathon • Made with love for innovators</p>
          </div>
          <ul className="site-footer__links" aria-label="Community">
            <li><a href="https://discord.gg/SsVuHQzX8" target="_blank" rel="noopener">Discord</a></li>
            <li><a href="https://www.instagram.com/bioshackathon" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
          <div className="home-footer__devfolio" role="group" aria-label="Apply through Devfolio">
            <a className="home-footer__devfolio-brand" href="https://devfolio.co" target="_blank" rel="sponsored noopener">
              <span>Hackathon platform partner</span>
              <img src="https://bios.notyouraverage.xyz/static/theme/art/partners/devfolio-lockup-dark.svg" alt="DEVFOLIO LOGO" width="619" height="129" decoding="async" />
            </a>
            <div className="apply-button" data-hackathon-slug="biosv2" data-button-theme="light" style={{ height: '44px', width: '312px' }}></div>
          </div>
        </div>
      </footer>
    </>
  );
}

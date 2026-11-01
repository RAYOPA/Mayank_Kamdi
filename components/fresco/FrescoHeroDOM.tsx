"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export interface FrescoHeroDOMProps {
  onExploreClick?: () => void;
  onAboutClick?: () => void;
  onConnectClick?: () => void;
}

/**
 * components/fresco/FrescoHeroDOM.tsx
 * Faithful Reconstruction of Reference Hero Image
 * =================================================
 * Canvas: Canonical 1672 × 941 aspect ratio (~1.7768)
 * Layer 0: Parchment Canvas & Cosmic Garden Plate
 * Layer 1: Left Apollo / Human Artwork (Fingertip meeting at center spark)
 * Layer 2: Right Celestial Android Goddess Artwork (Alpha-extracted, meeting at center spark)
 * Layer 3: Touchpoint Glint at (839px, 682px)
 * Layer 4: Real HTML Navigation, Headline, Tagline, and CTA overlay
 */
export const FrescoHeroDOM: React.FC<FrescoHeroDOMProps> = ({
  onExploreClick,
  onAboutClick,
  onConnectClick,
}) => {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handleMqChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mq.addEventListener) {
      mq.addEventListener('change', handleMqChange);
      return () => mq.removeEventListener('change', handleMqChange);
    }
  }, []);

  return (
    <section className="fresco-hero" id="top" aria-label="Mayank Kamdi Hero Presentation">
      {/* 0. Parchment Ground Texture */}
      <div className="fresco-paper" aria-hidden="true" />

      {/* 1. Universal Responsive Canvas Stage (1672 × 941 reference frame) */}
      <div className="fresco-stage" aria-hidden="true">
        <div className="fresco-frame">
          {/* Base Artwork Plate: Celestial Garden with Ornate Cosmic Borders */}
          <div className="fresco-layer fresco-layer--bg">
            <Image
              src="/assets/hero/Celestial Garden with Ornate Cosmic Borders.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1672px) 100vw, 1672px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Left Human Artwork Layer ("BIO" / Human Imagination) */}
          <div className="fresco-layer fresco-layer--human">
            <div
              style={{
                position: 'absolute',
                left: '-6.58%',
                top: '2.44%',
                width: '74.58%',
                height: '105.05%',
              }}
            >
              <Image
                src="/assets/hero/mayank_left_hero_artwork.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1672px) 75vw, 1250px"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
          </div>

          {/* Right Machine Artwork Layer ("OS" / Machine Intelligence) */}
          <div className="fresco-layer fresco-layer--machine">
            <div
              style={{
                position: 'absolute',
                left: '50.96%',
                top: '17.64%',
                width: '70.75%',
                height: '110.6%',
              }}
            >
              <Image
                src="/assets/hero/celestial_android_goddess_extracted.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1672px) 71vw, 1185px"
                style={{ objectFit: 'contain', objectPosition: 'right center' }}
              />
            </div>
          </div>

          {/* Breathing Golden Light Spark at the Creation Touchpoint (839px, 682px) */}
          <div
            className={`fresco-glint ${prefersReducedMotion ? 'is-paused' : ''}`}
            style={{
              left: '50.18%',
              top: '72.48%',
            }}
          />
        </div>
      </div>

      {/* 2. Semantic Content & Interaction Overlay */}
      <div className="fresco-content">
        {/* Top Navigation */}
        <header className="fresco-nav">
          {/* Brand Mark (Left) */}
          <a href="#top" className="fresco-brand" aria-label="Mayank Kamdi home">
            <span className="fresco-brand__star" aria-hidden="true">✦</span>
            <span className="fresco-brand__title">M A Y A N K . K A M D I</span>
          </a>

          {/* Center Navigation Links */}
          <nav aria-label="Primary Navigation" className="fresco-nav__menu">
            <ul className="fresco-nav__links">
              <li className="fresco-nav__item fresco-nav__item--active">
                <a href="#top" aria-current="page">HOME</a>
                <span className="fresco-nav__indicator" aria-hidden="true" />
              </li>
              <li className="fresco-nav__item"><a href="#about">ABOUT</a></li>
              <li className="fresco-nav__item"><a href="#work">PROJECTS</a></li>
              <li className="fresco-nav__item"><a href="#experience">EXPERIENCE</a></li>
              <li className="fresco-nav__item"><a href="#journey">JOURNEY</a></li>
              <li className="fresco-nav__item"><a href="#blog">BLOG</a></li>
              <li className="fresco-nav__item"><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          {/* Right Action & Compass Rose */}
          <div className="fresco-nav__right">
            <a
              href="#contact"
              className="btn-nav-connect"
              onClick={onConnectClick}
            >
              LET&apos;S CONNECT <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <div className="fresco-compass-rose" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1" opacity="0.6" />
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeWidth="0.8" opacity="0.4" />
                <polygon points="12,5 13.5,10.5 19,12 13.5,13.5 12,19 10.5,13.5 5,12 10.5,10.5" fill="currentColor" opacity="0.75" />
              </svg>
            </div>
          </div>
        </header>

        {/* Central Messaging & Typography Hierarchy */}
        <div className="fresco-center-copy">
          {/* Top 8-Point Compass Star */}
          <div className="fresco-star-emblem" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30" fill="none">
              <circle cx="16" cy="16" r="3" fill="#D4AF37" />
              <path
                d="M16 2L17.5 12.5L28 14L18.5 17.5L20 28L15 19.5L10 27L12.5 17L3 15L13.5 13Z"
                fill="#B07A35"
                opacity="0.9"
              />
              <path
                d="M16 4V28M4 16H28"
                stroke="#D4AF37"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Eyebrow with flanking rules */}
          <div className="fresco-eyebrow-container">
            <span className="fresco-eyebrow-rule" aria-hidden="true" />
            <p className="fresco-eyebrow">BUILD ✦ LEARN ✦ EXPLORE ✦ CREATE</p>
            <span className="fresco-eyebrow-rule" aria-hidden="true" />
          </div>

          {/* Two-Line Display Title */}
          <h1 className="fresco-title">
            <span className="fresco-title__line fresco-title__line--mayank">MAYANK</span>
            <span className="fresco-title__line fresco-title__line--kamdi">KAMDI</span>
          </h1>

          {/* Subtitle */}
          <p className="fresco-subtitle">
            AI ENGINEER &nbsp;✦&nbsp; BUILDER &nbsp;✦&nbsp; CREATIVE TECHNOLOGIST
          </p>

          {/* Hero Tagline */}
          <p className="fresco-tagline">
            Where Human Imagination<br />
            Meets Artificial Intelligence.
          </p>

          {/* Description Body */}
          <p className="fresco-description">
            I build intelligent systems, explore emerging technologies,<br />
            and turn ambitious ideas into meaningful digital experiences.
          </p>

          {/* Accessible Action Buttons */}
          <div className="fresco-actions">
            <a
              href="#work"
              className="btn-hero-primary"
              onClick={onExploreClick}
            >
              EXPLORE MY WORK <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#about"
              className="btn-hero-secondary"
              onClick={onAboutClick}
            >
              ABOUT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


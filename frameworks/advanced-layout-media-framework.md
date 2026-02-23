# Advanced Layout & Visual Media Framework

> Netradičné layouty a profesionálna práca s vizuálnymi médiami.
> Pre dizajnérov a developerov, ktorí chcú vystúpiť z "Bootstrap šablóny".
> Verzia 1.0

---

## Obsah

### Časť 1: Advanced Layouts
1. [Layout Philosophy](#layout-philosophy)
2. [Breaking the Grid](#1-breaking-the-grid)
3. [Asymmetric Layouts](#2-asymmetric-layouts)
4. [Overlapping Elements](#3-overlapping-elements)
5. [Scroll-Driven Layouts](#4-scroll-driven-layouts)
6. [Bento Grid Layouts](#5-bento-grid-layouts)
7. [Editorial Layouts](#6-editorial-layouts)
8. [Broken Grid / Art Direction](#7-broken-grid--art-direction)
9. [Dynamic & Responsive Layouts](#8-dynamic--responsive-layouts)
10. [Experimental Techniques](#9-experimental-techniques)

### Časť 2: Visual Media
11. [Media Philosophy](#media-philosophy)
12. [Photography in UI](#10-photography-in-ui)
13. [Illustrations](#11-illustrations)
14. [Iconography](#12-iconography)
15. [Video & Motion](#13-video--motion)
16. [3D & Interactive Media](#14-3d--interactive-media)
17. [Data Visualization as Design](#15-data-visualization-as-design)
18. [Texture & Grain](#16-texture--grain)
19. [Mixed Media Compositions](#17-mixed-media-compositions)
20. [Media Performance](#18-media-performance)

---

# ČASŤ 1: ADVANCED LAYOUTS

## Layout Philosophy

### Prečo väčšina webov vyzerá rovnako

```
PROBLÉM:
1. Bootstrap/Tailwind grid = 12 stĺpcov, všetko symetrické
2. Každá sekcia = full-width container
3. Obsah vždy v strede
4. Hero → Features → Testimonials → CTA (opakovane)
5. Strach z "prázdneho priestoru"

VÝSLEDOK:
Funkčné, ale nezaujímavé. Vymeniteľné. Generické.
```

### Princípy unikátnych layoutov

```
1. TENSION — Vytváraj vizuálne napätie cez nerovnováhu
2. RHYTHM — Striedaj veľké a malé, plné a prázdne
3. HIERARCHY — Nie všetko je rovnako dôležité
4. SURPRISE — Občasné porušenie pravidiel
5. INTENTION — Každé rozhodnutie má dôvod
```

### Kedy použiť netradičný layout

```
✅ VHODNÉ:
- Brand/portfolio stránky
- Landing pages
- Editorial content
- Kreatívne agentúry
- Product showcases
- Storytelling

⚠️ OPATRNE:
- E-commerce (funkčnosť > kreativita)
- Dashboards (clarity > style)
- Documentation
- Forms/Applications
- High-traffic utility sites
```

---

## 1. Breaking the Grid

### Beyond 12 Columns

```css
/* Klasický grid */
.grid-classic {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Asymetrický grid */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr;
  gap: 24px;
}

/* Golden ratio grid */
.grid-golden {
  display: grid;
  grid-template-columns: 1fr 1.618fr;
  gap: 32px;
}

/* Fibonacci-inspired */
.grid-fibonacci {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 3fr 5fr;
  gap: 16px;
}

/* Modular grid (rôzne veľkosti buniek) */
.grid-modular {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 150px);
  gap: 16px;
}

.item-large {
  grid-column: span 3;
  grid-row: span 2;
}

.item-tall {
  grid-column: span 2;
  grid-row: span 3;
}
```

### CSS Grid Areas for Complex Layouts

```css
.editorial-layout {
  display: grid;
  grid-template-areas:
    "hero    hero    sidebar"
    "main    main    sidebar"
    "quote   quote   quote"
    "gallery gallery gallery";
  grid-template-columns: 1fr 1fr 300px;
  grid-template-rows: 60vh auto auto auto;
  gap: 32px;
}

.hero { grid-area: hero; }
.main { grid-area: main; }
.sidebar { grid-area: sidebar; }
.quote { grid-area: quote; }
.gallery { grid-area: gallery; }

/* Responzívna zmena */
@media (max-width: 1024px) {
  .editorial-layout {
    grid-template-areas:
      "hero"
      "main"
      "sidebar"
      "quote"
      "gallery";
    grid-template-columns: 1fr;
  }
}
```

### Viewport-Based Sizing

```css
/* Elementy založené na viewport, nie kontajneri */
.hero-text {
  font-size: clamp(3rem, 8vw, 10rem);
  line-height: 0.9;
}

.full-bleed-image {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.offset-section {
  width: 80vw;
  margin-left: 10vw;
}

.asymmetric-section {
  width: 70vw;
  margin-left: 20vw; /* Posunuté doprava */
}
```

---

## 2. Asymmetric Layouts

### The 60-40 Split

```css
/* Namiesto 50-50 použi 60-40 alebo 70-30 */
.split-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* 60-40 */
  gap: 64px;
  align-items: center;
}

/* Striedanie na každej sekcii */
.split-layout:nth-child(even) {
  grid-template-columns: 1fr 1.5fr; /* 40-60 */
}

.split-layout:nth-child(even) .content {
  order: 2; /* Prehodí poradie */
}
```

### Offset Content

```css
.offset-layout {
  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
  gap: 32px;
}

.content-left {
  grid-column: 1 / 3; /* Začína od okraja */
}

.content-right {
  grid-column: 3 / 5;
  margin-top: 120px; /* Vertikálny offset */
}

/* Alternatíva s CSS */
.offset-container {
  display: flex;
  gap: 48px;
}

.offset-item:nth-child(even) {
  transform: translateY(80px);
}
```

### Diagonal Flow

```css
.diagonal-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.diagonal-item:nth-child(1) { 
  grid-column: 1;
  justify-self: start;
}

.diagonal-item:nth-child(2) { 
  grid-column: 2;
  justify-self: center;
  margin-top: 100px;
}

.diagonal-item:nth-child(3) { 
  grid-column: 3;
  justify-self: end;
  margin-top: 200px;
}
```

---

## 3. Overlapping Elements

### Z-Index Layering

```css
.overlap-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 80px);
}

.background-element {
  grid-column: 1 / 8;
  grid-row: 1 / 5;
  z-index: 1;
}

.foreground-element {
  grid-column: 5 / 13;
  grid-row: 2 / 7;
  z-index: 2;
}

.text-overlay {
  grid-column: 3 / 10;
  grid-row: 3 / 6;
  z-index: 3;
}
```

### Negative Margins (Controlled)

```css
.overlap-section {
  position: relative;
}

.overlap-image {
  width: 60%;
}

.overlap-content {
  position: relative;
  margin-top: -120px; /* Prekrýva obrázok */
  margin-left: 30%;
  background: white;
  padding: 48px;
  z-index: 2;
  
  /* Shadow pre hĺbku */
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
}
```

### Text Over Image (Done Right)

```css
.hero-overlap {
  position: relative;
  min-height: 100vh;
}

.hero-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 15vh 0;
  max-width: 50%;
}

/* Gradient pre čitateľnosť */
.hero-overlap::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    white 0%,
    white 60%,
    transparent 100%
  );
  z-index: 1;
}
```

### Floating Elements

```css
.floating-card {
  position: absolute;
  /* Pozícia mimo gridu */
  top: -40px;
  right: -60px;
  
  /* Alebo s calc pre responzivitu */
  right: calc(-5vw);
  
  background: white;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  
  /* Subtle rotation pre dynamiku */
  transform: rotate(-3deg);
}
```

---

## 4. Scroll-Driven Layouts

### Scroll Snap Sections

```css
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroll-section {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Horizontal scroll gallery */
.horizontal-scroll {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 24px;
  padding: 48px;
}

.horizontal-item {
  flex: 0 0 80vw;
  scroll-snap-align: center;
}
```

### Scroll-Linked Animations (CSS)

```css
/* Native CSS scroll-driven animations */
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-reveal {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% entry 50%;
}

/* Parallax effect */
@keyframes parallax {
  from { transform: translateY(100px); }
  to { transform: translateY(-100px); }
}

.parallax-element {
  animation: parallax linear;
  animation-timeline: scroll();
}
```

### Scroll-Linked Animations (JavaScript)

```javascript
// Intersection Observer pre scroll reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Optional: unobserve after reveal
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el);
});

// Scroll progress pre parallax
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;
  
  document.documentElement.style.setProperty('--scroll-progress', progress);
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
```

```css
/* Použitie scroll progress */
.progress-bar {
  transform: scaleX(var(--scroll-progress, 0));
  transform-origin: left;
}

.parallax-slow {
  transform: translateY(calc(var(--scroll-progress) * -200px));
}

.parallax-fast {
  transform: translateY(calc(var(--scroll-progress) * -400px));
}
```

### Sticky Elements

```css
.sticky-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.sticky-content {
  position: sticky;
  top: 100px; /* Offset from top */
  height: fit-content;
  align-self: start;
}

.scrolling-content {
  /* Táto strana scrolluje normálne */
}

/* Sticky image gallery */
.sticky-gallery {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
}

.sticky-gallery img {
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.sticky-gallery img.active {
  opacity: 1;
}
```

---

## 5. Bento Grid Layouts

### Apple-Style Bento

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 16px;
}

/* Rôzne veľkosti kariet */
.bento-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-item.wide {
  grid-column: span 2;
}

.bento-item.tall {
  grid-row: span 2;
}

/* Konkrétny layout */
.bento-grid {
  grid-template-areas:
    "a a b c"
    "a a d d"
    "e f d d";
}

.bento-1 { grid-area: a; } /* Large square */
.bento-2 { grid-area: b; }
.bento-3 { grid-area: c; }
.bento-4 { grid-area: d; } /* Large square */
.bento-5 { grid-area: e; }
.bento-6 { grid-area: f; }
```

### Dynamic Bento

```css
/* Auto-fill s rôznymi veľkosťami */
.bento-dynamic {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense; /* Vypĺňa medzery */
  gap: 16px;
}

.bento-dynamic .featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* Responzívne */
@media (max-width: 768px) {
  .bento-dynamic {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bento-dynamic .featured {
    grid-column: span 2;
    grid-row: span 1;
  }
}
```

### Bento Card Styling

```css
.bento-card {
  background: var(--surface-elevated);
  border-radius: 24px;
  padding: 32px;
  overflow: hidden;
  position: relative;
  
  /* Subtle gradient */
  background: linear-gradient(
    135deg,
    var(--surface-elevated) 0%,
    var(--surface-elevated-alt) 100%
  );
}

/* Glassmorphism variant */
.bento-card.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Hover effect */
.bento-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Inner content positioning */
.bento-card .icon {
  position: absolute;
  top: 32px;
  left: 32px;
}

.bento-card .title {
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 32px;
}

/* Large card with image */
.bento-card.with-image {
  padding: 0;
}

.bento-card.with-image img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.bento-card.with-image .content {
  padding: 24px 32px;
}
```

---

## 6. Editorial Layouts

### Magazine-Style

```css
.editorial-page {
  display: grid;
  grid-template-columns: 
    [full-start] 1fr 
    [main-start] minmax(0, 800px) 
    [main-end] 1fr 
    [full-end];
  gap: 48px 24px;
}

/* Štandardný obsah */
.editorial-page > * {
  grid-column: main;
}

/* Full-width elementy */
.editorial-page > .full-width {
  grid-column: full;
}

/* Pull quotes */
.editorial-page > .pull-quote {
  grid-column: full-start / main-start;
  padding-right: 48px;
  font-size: 1.5rem;
  font-style: italic;
  border-right: 4px solid var(--primary);
}

/* Side notes */
.editorial-page > .side-note {
  grid-column: main-end / full-end;
  padding-left: 24px;
  font-size: 0.875rem;
  color: var(--text-secondary);
}
```

### Drop Caps

```css
.article-content > p:first-of-type::first-letter {
  float: left;
  font-size: 4.5rem;
  line-height: 0.8;
  padding-right: 12px;
  padding-top: 8px;
  font-weight: 700;
  color: var(--primary);
}

/* Decorated drop cap */
.drop-cap-decorated::first-letter {
  float: left;
  font-size: 5rem;
  line-height: 0.8;
  padding: 8px 16px;
  margin-right: 12px;
  background: var(--primary);
  color: white;
  border-radius: 8px;
}
```

### Multi-Column Text

```css
.multi-column {
  column-count: 2;
  column-gap: 48px;
  column-rule: 1px solid var(--border);
}

/* Prevent orphans */
.multi-column p {
  break-inside: avoid;
}

/* Spanning element */
.multi-column .spanning-quote {
  column-span: all;
  padding: 48px 0;
  text-align: center;
  font-size: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .multi-column {
    column-count: 1;
  }
}
```

### Image Placement Variations

```css
/* Inline image */
.img-inline {
  max-width: 100%;
  margin: 32px 0;
}

/* Full bleed */
.img-full-bleed {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: 48px;
  margin-bottom: 48px;
}

/* Float left with text wrap */
.img-float-left {
  float: left;
  width: 45%;
  margin-right: 32px;
  margin-bottom: 16px;
  shape-outside: margin-box;
}

/* Float right */
.img-float-right {
  float: right;
  width: 40%;
  margin-left: 32px;
  margin-bottom: 16px;
}

/* Offset left (mimo text flow) */
.img-offset-left {
  width: 50%;
  margin-left: -15%;
  margin-right: 32px;
  float: left;
}
```

---

## 7. Broken Grid / Art Direction

### Intentional Misalignment

```css
.broken-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 60px);
  gap: 16px;
}

/* Elementy umiestnené "náhodne" ale premyslene */
.broken-item-1 {
  grid-column: 1 / 5;
  grid-row: 1 / 4;
}

.broken-item-2 {
  grid-column: 4 / 9;
  grid-row: 2 / 6;
  z-index: 2;
}

.broken-item-3 {
  grid-column: 7 / 13;
  grid-row: 4 / 9;
}

.broken-item-4 {
  grid-column: 2 / 6;
  grid-row: 5 / 8;
  z-index: 3;
}
```

### Rotated Elements

```css
.rotated-section {
  position: relative;
  padding: 120px 0;
}

/* Rotated background */
.rotated-section::before {
  content: '';
  position: absolute;
  top: 60px;
  left: -5%;
  right: -5%;
  bottom: 60px;
  background: var(--surface-alt);
  transform: rotate(-3deg);
  z-index: -1;
}

/* Rotated card */
.rotated-card {
  transform: rotate(2deg);
  transition: transform 0.3s ease;
}

.rotated-card:hover {
  transform: rotate(0deg);
}

/* Random rotations */
.card-stack .card:nth-child(1) { transform: rotate(-2deg); }
.card-stack .card:nth-child(2) { transform: rotate(1deg); }
.card-stack .card:nth-child(3) { transform: rotate(-1deg); }
.card-stack .card:nth-child(4) { transform: rotate(3deg); }
```

### Cutout / Mask Effects

```css
/* Text cutout */
.cutout-text {
  background: url('texture.jpg');
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 8rem;
  font-weight: 900;
}

/* Image mask */
.masked-image {
  -webkit-mask-image: url('mask-shape.svg');
  mask-image: url('mask-shape.svg');
  -webkit-mask-size: contain;
  mask-size: contain;
}

/* Gradient mask for fade */
.fade-mask {
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 70%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 70%,
    transparent 100%
  );
}
```

### Shape-Outside for Text Flow

```css
.organic-layout {
  position: relative;
}

.organic-image {
  float: left;
  width: 400px;
  height: 500px;
  object-fit: cover;
  
  /* Text flows around custom shape */
  shape-outside: polygon(
    0 0,
    100% 0,
    100% 80%,
    60% 100%,
    0 100%
  );
  
  /* Clip image to same shape */
  clip-path: polygon(
    0 0,
    100% 0,
    100% 80%,
    60% 100%,
    0 100%
  );
  
  margin-right: 32px;
  margin-bottom: 16px;
}

/* Circle shape */
.circular-image {
  float: right;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  shape-outside: circle(50%);
  margin-left: 32px;
}
```

---

## 8. Dynamic & Responsive Layouts

### Container Queries Layout

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Card sa mení podľa svojho kontajnera */
@container card (min-width: 400px) {
  .card {
    grid-template-columns: 150px 1fr;
  }
}

@container card (min-width: 600px) {
  .card {
    grid-template-columns: 200px 1fr auto;
  }
}
```

### Fluid Spacing

```css
:root {
  /* Spacing sa mení s viewport */
  --space-xs: clamp(0.5rem, 1vw, 0.75rem);
  --space-sm: clamp(0.75rem, 2vw, 1rem);
  --space-md: clamp(1rem, 3vw, 1.5rem);
  --space-lg: clamp(1.5rem, 5vw, 3rem);
  --space-xl: clamp(2rem, 8vw, 5rem);
  --space-2xl: clamp(3rem, 12vw, 8rem);
}

.section {
  padding-block: var(--space-2xl);
}

.card {
  padding: var(--space-md);
  gap: var(--space-sm);
}
```

### Intrinsic Layout

```css
/* Layout sa prispôsobí obsahu */
.intrinsic-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.intrinsic-item {
  /* Rastie a zmenšuje sa podľa obsahu */
  flex: 1 1 300px;
  max-width: 500px;
}

/* RAM (Repeat, Auto, Minmax) */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 24px;
}
```

### Aspect Ratio Responsive

```css
/* Mení aspect ratio podľa viewport */
.hero-image {
  aspect-ratio: 21/9;
}

@media (max-width: 1024px) {
  .hero-image {
    aspect-ratio: 16/9;
  }
}

@media (max-width: 640px) {
  .hero-image {
    aspect-ratio: 4/3;
  }
}

/* Alebo fluid */
.hero-image {
  aspect-ratio: var(--hero-ratio, 21/9);
}

@media (max-width: 1024px) {
  :root { --hero-ratio: 16/9; }
}

@media (max-width: 640px) {
  :root { --hero-ratio: 4/3; }
}
```

---

## 9. Experimental Techniques

### CSS Grid Animation

```css
/* Animovaný grid */
.animated-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transition: grid-template-columns 0.5s ease;
}

.animated-grid:has(.item:hover) {
  grid-template-columns: 0.5fr 2fr 0.5fr;
}

.animated-grid .item:hover {
  /* Hovered item sa rozšíri */
}

/* Alebo s nth-child */
.animated-grid:has(.item:nth-child(1):hover) {
  grid-template-columns: 2fr 0.5fr 0.5fr;
}

.animated-grid:has(.item:nth-child(2):hover) {
  grid-template-columns: 0.5fr 2fr 0.5fr;
}

.animated-grid:has(.item:nth-child(3):hover) {
  grid-template-columns: 0.5fr 0.5fr 2fr;
}
```

### View Transitions

```css
/* Native page transitions */
@view-transition {
  navigation: auto;
}

/* Custom transition names */
.hero-image {
  view-transition-name: hero;
}

.page-title {
  view-transition-name: title;
}

/* Transition styling */
::view-transition-old(hero),
::view-transition-new(hero) {
  animation-duration: 0.5s;
}

::view-transition-old(hero) {
  animation-name: fade-out;
}

::view-transition-new(hero) {
  animation-name: fade-in;
}
```

### Anchor Positioning (CSS)

```css
/* Element pozicionovaný voči inému elementu */
.tooltip {
  position: absolute;
  anchor-name: --button;
}

.tooltip-content {
  position: fixed;
  position-anchor: --button;
  top: anchor(bottom);
  left: anchor(center);
  transform: translateX(-50%);
}
```

### Scroll-Driven Layout Changes

```css
/* Header sa zmenšuje pri scrolle */
@keyframes shrink-header {
  from {
    padding: 32px;
    font-size: 1.5rem;
  }
  to {
    padding: 16px;
    font-size: 1rem;
  }
}

.header {
  animation: shrink-header linear;
  animation-timeline: scroll();
  animation-range: 0 200px;
}
```

---

# ČASŤ 2: VISUAL MEDIA

## Media Philosophy

### Médiá ako jazyk, nie dekorácia

```
DEKORATÍVNE MÉDIUM:
"Potrebujeme obrázok do hero sekcie, nájdi niečo na Unsplash"
→ Generické, vymeniteľné, nezaujímavé

KOMUNIKATÍVNE MÉDIUM:
"Hero sekcia komunikuje inováciu a ľudskosť - aký vizuál to najlepšie vyjadrí?"
→ Zámerné, podporuje message, nezabudnuteľné
```

### Media Hierarchy

```
1. HERO MEDIA — Definuje náladu celej stránky/sekcie
2. SUPPORTING MEDIA — Ilustruje, vysvetľuje, dokazuje
3. DECORATIVE MEDIA — Vytvára textúru, atmosféru
4. FUNCTIONAL MEDIA — Ikony, diagramy, navigácia
```

### Konzistencia vizuálneho jazyka

```
DEFINUJ PRE PROJEKT:

Photography style:
- Color grading (warm/cool, saturated/muted)
- Composition style (centered, rule of thirds, asymmetric)
- Subject matter (people, products, abstract)
- Lighting (natural, studio, dramatic)

Illustration style:
- Line weight
- Color palette
- Level of detail (minimal, detailed)
- Perspective (flat, isometric, 3D)

Icon style:
- Stroke vs fill
- Corner radius
- Size consistency
- Metaphor style
```

---

## 10. Photography in UI

### Photo Treatment Consistency

```css
/* Konzistentný color grading */
.photo {
  filter: 
    contrast(1.05)
    saturate(0.9)
    brightness(1.02);
}

/* Duotone effect */
.photo-duotone {
  filter: grayscale(100%) contrast(1.2);
  position: relative;
}

.photo-duotone::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--primary);
  mix-blend-mode: multiply;
}

/* Muted/desaturated pre sekundárne fotky */
.photo-secondary {
  filter: saturate(0.7) brightness(1.05);
}

/* Dark overlay pre text readability */
.photo-with-text {
  position: relative;
}

.photo-with-text::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
}
```

### Photo Composition in UI

```css
/* Focus point alignment */
.hero-photo {
  object-fit: cover;
  object-position: center 30%; /* Focus na hornú tretinu */
}

/* Portrait photos - focus on face */
.avatar-photo {
  object-fit: cover;
  object-position: center 20%; /* Tvár je zvyčajne hore */
}

/* Product photos - centered */
.product-photo {
  object-fit: contain;
  object-position: center center;
}
```

### Photo Grid Variations

```css
/* Masonry-style */
.photo-masonry {
  columns: 3;
  column-gap: 16px;
}

.photo-masonry img {
  width: 100%;
  margin-bottom: 16px;
  break-inside: avoid;
}

/* CSS Grid masonry (experimental) */
.photo-grid-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  gap: 16px;
}

/* Varied sizes grid */
.photo-grid-varied {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 150px;
  gap: 16px;
}

.photo-grid-varied img:nth-child(1) {
  grid-column: span 4;
  grid-row: span 2;
}

.photo-grid-varied img:nth-child(2) {
  grid-column: span 2;
  grid-row: span 1;
}
```

### Photo States

```css
/* Hover reveal */
.photo-hover-reveal {
  position: relative;
  overflow: hidden;
}

.photo-hover-reveal img {
  transition: transform 0.5s ease;
}

.photo-hover-reveal:hover img {
  transform: scale(1.05);
}

.photo-hover-reveal .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-hover-reveal:hover .overlay {
  opacity: 1;
}

/* Ken Burns effect */
@keyframes ken-burns {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.1) translate(-2%, -2%);
  }
}

.ken-burns img {
  animation: ken-burns 20s ease-in-out infinite alternate;
}
```

---

## 11. Illustrations

### Illustration Styles

```
FLAT ILLUSTRATION
- Žiadne shadows/gradients
- Bold colors
- Geometric shapes
- Vhodné pre: Tech, modern brands

LINE ILLUSTRATION
- Thin, consistent strokes
- Minimal fills
- Vhodné pre: Elegant, minimal brands

ISOMETRIC ILLUSTRATION
- 3D bez perspektívy
- 30° uhly
- Vhodné pre: Tech, SaaS, komplexné koncepty

HAND-DRAWN
- Organic lines
- Imperfect shapes
- Vhodné pre: Friendly, approachable brands

3D ILLUSTRATION
- Rendered 3D objekty
- Soft shadows, gradients
- Vhodné pre: Premium, modern brands

COLLAGE
- Mix fotografií a ilustrácií
- Layered elements
- Vhodné pre: Creative, editorial
```

### Illustration Integration

```css
/* Ilustrácia ako pozadie sekcie */
.section-with-illustration {
  position: relative;
  overflow: hidden;
}

.section-illustration {
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 50%;
  max-width: 600px;
  opacity: 0.1; /* Subtle v pozadí */
}

/* Ilustrácia vedľa textu */
.content-with-illustration {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 64px;
}

.content-illustration {
  /* Ilustrácia môže presahovať grid */
  margin-right: -20%;
}

/* Inline ilustrácia v texte */
.inline-illustration {
  float: right;
  width: 200px;
  margin-left: 24px;
  margin-bottom: 16px;
}

/* Spot illustration (malé, bodové) */
.spot-illustration {
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
}
```

### Animated Illustrations

```css
/* SVG line draw */
.line-draw path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}

/* Floating elements */
.float-illustration {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Parallax layers v ilustrácii */
.parallax-illustration {
  position: relative;
}

.parallax-layer-1 { transform: translateY(calc(var(--scroll) * 0.1)); }
.parallax-layer-2 { transform: translateY(calc(var(--scroll) * 0.2)); }
.parallax-layer-3 { transform: translateY(calc(var(--scroll) * 0.3)); }
```

---

## 12. Iconography

### Icon System Architecture

```
ICON SIZES:
12px — Micro (indicators, badges)
16px — Small (inline with text)
20px — Default (buttons, lists)
24px — Medium (navigation, cards)
32px — Large (feature icons)
48px — XL (hero, empty states)
64px+ — Decorative

ICON TYPES:
- System icons (UI controls)
- Product icons (features)
- Spot icons (decorative)
- Brand icons (logos, social)
```

### Icon Styling

```css
/* Base icon styles */
.icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}

/* Size variants */
.icon-sm { font-size: 16px; }
.icon-md { font-size: 20px; }
.icon-lg { font-size: 24px; }
.icon-xl { font-size: 32px; }

/* Icon v buttone */
.button .icon {
  margin-right: 8px;
  margin-left: -4px; /* Optické zarovnanie */
}

/* Icon only button */
.icon-button {
  padding: 8px;
  border-radius: 8px;
}

.icon-button .icon {
  margin: 0;
}

/* Colored icons */
.icon-primary { color: var(--primary); }
.icon-success { color: var(--success); }
.icon-error { color: var(--error); }

/* Duotone icons */
.icon-duotone .primary {
  fill: var(--primary);
}

.icon-duotone .secondary {
  fill: var(--primary);
  opacity: 0.3;
}
```

### Icon Animation

```css
/* Spin */
.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Pulse */
.icon-pulse {
  animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Bounce */
.icon-bounce {
  animation: bounce 0.5s ease infinite alternate;
}

@keyframes bounce {
  to { transform: translateY(-3px); }
}

/* Hover rotate */
.icon-hover-rotate {
  transition: transform 0.3s ease;
}

.button:hover .icon-hover-rotate {
  transform: rotate(90deg);
}

/* Hover slide */
.button:hover .icon-hover-slide {
  transform: translateX(4px);
}
```

### Feature Icons

```css
/* Feature icon s pozadím */
.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: var(--primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon .icon {
  font-size: 28px;
  color: var(--primary-600);
}

/* Gradient icon background */
.feature-icon-gradient {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
}

.feature-icon-gradient .icon {
  color: white;
}

/* Outlined feature icon */
.feature-icon-outlined {
  background: transparent;
  border: 2px solid var(--primary-200);
}
```

---

## 13. Video & Motion

### Video Integration

```html
<!-- Background video -->
<div class="video-background">
  <video autoplay muted loop playsinline>
    <source src="background.mp4" type="video/mp4">
  </video>
  <div class="video-overlay"></div>
  <div class="video-content">
    <!-- Content over video -->
  </div>
</div>
```

```css
.video-background {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.video-content {
  position: relative;
  z-index: 2;
}
```

### Video Patterns

```css
/* Video v card */
.video-card {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
}

.video-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Play on hover */
.video-hover video {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-hover:hover video {
  opacity: 1;
}

.video-hover img {
  transition: opacity 0.3s ease;
}

.video-hover:hover img {
  opacity: 0;
}

/* Video s custom controls */
.video-player {
  position: relative;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-player:hover .video-controls {
  opacity: 1;
}
```

### Lottie Animations

```html
<lottie-player
  src="animation.json"
  background="transparent"
  speed="1"
  loop
  autoplay
></lottie-player>
```

```javascript
// Controlled Lottie
import lottie from 'lottie-web';

const animation = lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animation.json'
});

// Play on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animation.play();
    }
  });
});

observer.observe(document.getElementById('lottie'));
```

---

## 14. 3D & Interactive Media

### CSS 3D Transforms

```css
/* 3D card flip */
.card-3d {
  perspective: 1000px;
}

.card-3d-inner {
  position: relative;
  width: 100%;
  height: 300px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-3d:hover .card-3d-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
}

.card-back {
  transform: rotateY(180deg);
}

/* 3D tilt on hover */
.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.tilt-card:hover {
  transform: 
    perspective(1000px)
    rotateX(5deg)
    rotateY(-5deg)
    scale(1.02);
}
```

### Mouse-Follow 3D Effect

```javascript
const card = document.querySelector('.mouse-tilt');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  
  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});
```

### WebGL / Three.js Integration

```javascript
// Basic Three.js setup
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

const renderer = new THREE.WebGLRenderer({ 
  alpha: true,
  antialias: true 
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Add objects, lights, etc.

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```

```css
/* 3D canvas container */
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

/* Content over 3D */
.content-over-3d {
  position: relative;
  z-index: 1;
  pointer-events: auto;
}
```

---

## 15. Data Visualization as Design

### Decorative Data

```css
/* Progress ring ako design element */
.progress-ring {
  width: 120px;
  height: 120px;
}

.progress-ring circle {
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
}

.progress-ring .bg {
  stroke: var(--neutral-200);
}

.progress-ring .progress {
  stroke: var(--primary);
  stroke-dasharray: 339.292; /* 2 * PI * 54 */
  stroke-dashoffset: calc(339.292 * (1 - var(--progress)));
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 1s ease;
}

/* Animated counter */
.stat-number {
  font-size: 4rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
```

```javascript
// Animated counter
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing
    const eased = 1 - Math.pow(1 - progress, 3);
    
    const current = Math.floor(start + (target - start) * eased);
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}
```

### Infographic Elements

```css
/* Timeline */
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--neutral-200);
}

.timeline-item {
  position: relative;
  padding-bottom: 32px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--primary);
}

/* Comparison bars */
.comparison-bar {
  height: 24px;
  border-radius: 12px;
  background: var(--neutral-100);
  overflow: hidden;
}

.comparison-fill {
  height: 100%;
  border-radius: 12px;
  background: var(--primary);
  transition: width 1s ease;
}
```

---

## 16. Texture & Grain

### Film Grain Effect

```css
/* Noise texture overlay */
.grain {
  position: relative;
}

.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.05;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Animated grain */
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-1%, -1%); }
  20% { transform: translate(1%, 1%); }
  30% { transform: translate(-1%, 1%); }
  40% { transform: translate(1%, -1%); }
  50% { transform: translate(-1%, 0); }
  60% { transform: translate(1%, 0); }
  70% { transform: translate(0, 1%); }
  80% { transform: translate(0, -1%); }
  90% { transform: translate(1%, 1%); }
}

.grain-animated::after {
  animation: grain 0.5s steps(10) infinite;
}
```

### Gradient Textures

```css
/* Gradient mesh simulation */
.gradient-mesh {
  background: 
    radial-gradient(at 20% 30%, var(--primary-300) 0%, transparent 50%),
    radial-gradient(at 80% 20%, var(--secondary-300) 0%, transparent 50%),
    radial-gradient(at 60% 80%, var(--accent-300) 0%, transparent 50%),
    var(--surface);
}

/* Noise gradient */
.gradient-noise {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  position: relative;
}

.gradient-noise::after {
  /* Add noise on top of gradient */
  content: '';
  position: absolute;
  inset: 0;
  background: url('noise.png');
  opacity: 0.1;
  mix-blend-mode: overlay;
}

/* Glow effect */
.glow {
  position: relative;
}

.glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle,
    var(--primary-400) 0%,
    transparent 70%
  );
  opacity: 0.3;
  filter: blur(40px);
  z-index: -1;
}
```

### Halftone & Patterns

```css
/* Halftone dots */
.halftone {
  background: 
    radial-gradient(circle, var(--primary) 25%, transparent 25%);
  background-size: 10px 10px;
}

/* Diagonal lines */
.diagonal-lines {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    var(--neutral-200) 5px,
    var(--neutral-200) 6px
  );
}

/* Grid pattern */
.grid-pattern {
  background-image: 
    linear-gradient(var(--neutral-200) 1px, transparent 1px),
    linear-gradient(90deg, var(--neutral-200) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Dot pattern */
.dot-pattern {
  background: radial-gradient(
    circle,
    var(--neutral-300) 1px,
    transparent 1px
  );
  background-size: 16px 16px;
}
```

---

## 17. Mixed Media Compositions

### Photo + Illustration

```css
/* Ilustrácia prekrývajúca foto */
.mixed-composition {
  position: relative;
}

.mixed-photo {
  width: 80%;
}

.mixed-illustration {
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 50%;
  
  /* Môže mať background pre lepšiu čitateľnosť */
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.2));
}

/* Photo s ilustrovanými elementmi */
.photo-with-elements {
  position: relative;
}

.decorative-shape {
  position: absolute;
}

.shape-1 {
  top: -20px;
  left: -20px;
  width: 100px;
  height: 100px;
  background: var(--primary);
  border-radius: 50%;
}

.shape-2 {
  bottom: 10%;
  right: -30px;
  width: 60px;
  height: 60px;
  background: var(--secondary);
  transform: rotate(45deg);
}
```

### Collage Layout

```css
.collage {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 50px);
  gap: 16px;
}

.collage-item-1 {
  grid-column: 1 / 6;
  grid-row: 1 / 5;
  transform: rotate(-2deg);
}

.collage-item-2 {
  grid-column: 4 / 10;
  grid-row: 3 / 8;
  z-index: 2;
  transform: rotate(1deg);
}

.collage-item-3 {
  grid-column: 8 / 13;
  grid-row: 1 / 6;
  transform: rotate(3deg);
}

/* Tape/pin effect */
.collage-item::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(2deg);
  width: 60px;
  height: 20px;
  background: rgba(255, 220, 150, 0.9);
}

/* Shadow pre depth */
.collage-item {
  box-shadow: 
    4px 4px 0 rgba(0,0,0,0.1),
    8px 8px 20px rgba(0,0,0,0.15);
}
```

### Layered Compositions

```css
.layered-hero {
  position: relative;
  min-height: 100vh;
}

/* Background layer */
.layer-bg {
  position: absolute;
  inset: 0;
  background: var(--surface);
}

/* Pattern layer */
.layer-pattern {
  position: absolute;
  inset: 0;
  background: url('pattern.svg');
  opacity: 0.05;
}

/* Shape layer */
.layer-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.shape-primary {
  width: 500px;
  height: 500px;
  background: var(--primary);
  top: -100px;
  right: -100px;
}

.shape-secondary {
  width: 400px;
  height: 400px;
  background: var(--secondary);
  bottom: -50px;
  left: 10%;
}

/* Content layer */
.layer-content {
  position: relative;
  z-index: 10;
}

/* Foreground decoration */
.layer-foreground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: url('wave.svg') bottom/cover no-repeat;
  z-index: 5;
}
```

---

## 18. Media Performance

### Responsive Images

```html
<!-- Art direction s picture -->
<picture>
  <!-- Mobile: square crop -->
  <source 
    media="(max-width: 640px)"
    srcset="hero-mobile.jpg"
  >
  <!-- Tablet: 4:3 -->
  <source 
    media="(max-width: 1024px)"
    srcset="hero-tablet.jpg"
  >
  <!-- Desktop: wide -->
  <img 
    src="hero-desktop.jpg"
    alt="Hero image"
    loading="eager"
  >
</picture>

<!-- Resolution switching -->
<img
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w,
    image-1600.jpg 1600w
  "
  sizes="(max-width: 640px) 100vw, 50vw"
  src="image-800.jpg"
  alt="Responsive image"
  loading="lazy"
  decoding="async"
>
```

### Modern Image Formats

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Fallback">
</picture>
```

### Lazy Loading Strategy

```javascript
// Native lazy loading
<img loading="lazy" />

// Intersection Observer pre custom lazy loading
const lazyImages = document.querySelectorAll('[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
}, {
  rootMargin: '200px 0px' // Load 200px pred visible
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### Blur-Up Placeholder

```css
.blur-up {
  position: relative;
  overflow: hidden;
  background-size: cover;
}

.blur-up img {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blur-up img.loaded {
  opacity: 1;
}

.blur-up::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(20px);
  transform: scale(1.1);
}

.blur-up img.loaded + ::before {
  opacity: 0;
}
```

```javascript
// Blur-up loading
function loadWithBlurUp(container) {
  const img = container.querySelector('img');
  const placeholder = container.dataset.placeholder;
  
  // Set placeholder as background
  container.style.backgroundImage = `url(${placeholder})`;
  
  // Load full image
  img.onload = () => {
    img.classList.add('loaded');
  };
  
  img.src = img.dataset.src;
}
```

### Video Performance

```html
<!-- Optimized video -->
<video
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
  poster="poster.jpg"
>
  <!-- WebM first (smaller) -->
  <source src="video.webm" type="video/webm">
  <!-- MP4 fallback -->
  <source src="video.mp4" type="video/mp4">
</video>
```

```javascript
// Load video only on fast connections
if (navigator.connection) {
  const { effectiveType, saveData } = navigator.connection;
  
  if (effectiveType === '4g' && !saveData) {
    loadVideo();
  } else {
    showStaticImage();
  }
}

// Pause video when not visible
const video = document.querySelector('video');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
});

observer.observe(video);
```

---

## Quick Reference

```
╔═══════════════════════════════════════════════════════════════╗
║            LAYOUT & MEDIA QUICK REFERENCE                      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  LAYOUT TECHNIQUES:                                            ║
║  • Asymmetric splits: 60/40, 70/30, golden ratio              ║
║  • Overlapping: z-index + negative margins                     ║
║  • Broken grid: intentional misalignment                       ║
║  • Scroll-driven: snap, sticky, parallax                       ║
║  • Bento: modular cards, varied sizes                          ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  CSS GRID TRICKS:                                              ║
║  • grid-template-areas pre komplexné layouty                   ║
║  • subgrid pre zarovnanie nested elementov                     ║
║  • grid-auto-flow: dense pre vyplnenie medzier                ║
║  • minmax() + auto-fit pre intrinsic sizing                   ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  PHOTOGRAPHY:                                                  ║
║  • Konzistentný color grading naprieč projektom               ║
║  • object-fit: cover + object-position pre focus              ║
║  • Overlay gradients pre text readability                     ║
║  • Duotone pre brand consistency                               ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  ICONS:                                                        ║
║  • Sizes: 16, 20, 24, 32, 48px                                ║
║  • fill: currentColor pre color inheritance                   ║
║  • Optical adjustments v buttonoch                             ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  PERFORMANCE:                                                  ║
║  • srcset + sizes pre responsive images                       ║
║  • AVIF > WebP > JPEG                                          ║
║  • loading="lazy" pre below-fold                              ║
║  • Blur-up placeholders                                        ║
║  • Pause video when not visible                                ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Changelog

### v1.0 (2025-01)
- Layout techniques (breaking grid, bento, scroll-driven)
- Visual media guide (photography, illustrations, icons)
- Texture & grain effects
- Performance optimization

---

## Súvisiace dokumenty

- `ui-text-framework.md` — Pravidlá pre text v UI
- `ui-ux-best-practices-framework.md` — Základné best practices
- `advanced-ui-ux-framework.md` — Pokročilé praktiky

---

## Licencia

Voľne použiteľné. Zdieľajte ďalej.

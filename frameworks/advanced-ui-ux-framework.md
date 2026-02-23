# Advanced UI/UX Framework

> Pokročilé praktiky pre profesionálny UI/UX dizajn na najvyššej úrovni.
> Pre seniorov, ktorí chcú robiť prácu na úrovni top agentúr.
> Verzia 1.0

---

## Obsah

1. [Filozofia pokročilého dizajnu](#filozofia-pokročilého-dizajnu)
2. [Design Systems Architecture](#1-design-systems-architecture)
3. [Advanced Typography](#2-advanced-typography)
4. [Optical Adjustments](#3-optical-adjustments)
5. [Advanced Color Theory](#4-advanced-color-theory)
6. [Motion Design System](#5-motion-design-system)
7. [Advanced Layout Techniques](#6-advanced-layout-techniques)
8. [Perceived Performance](#7-perceived-performance)
9. [Psychology & Cognitive Load](#8-psychology--cognitive-load)
10. [Data Visualization](#9-data-visualization)
11. [Advanced Forms & Input](#10-advanced-forms--input)
12. [Internationalization (i18n)](#11-internationalization-i18n)
13. [Dark Mode Done Right](#12-dark-mode-done-right)
14. [Advanced Accessibility](#13-advanced-accessibility)
15. [Design QA Process](#14-design-qa-process)
16. [Design-Developer Handoff](#15-design-developer-handoff)
17. [Measuring Design Quality](#16-measuring-design-quality)

---

## Filozofia pokročilého dizajnu

### Rozdiel medzi dobrým a výnimočným

```
DOBRÝ DIZAJN:
- Funguje
- Je konzistentný
- Je použiteľný

VÝNIMOČNÝ DIZAJN:
- Funguje a cíti sa správne
- Je konzistentný na úrovni pixelov
- Je použiteľný a príjemný
- Anticipuje potreby používateľa
- Má "polish" - detaily, ktoré väčšina nevidí vedomne, ale cíti
```

### The "Feel" Factor

Výnimočný dizajn má niečo, čo sa ťažko popisuje - "feel". Je to súčet stoviek mikrorozhodnutí:

- Správne optické zarovnanie (nie matematické)
- Timing animácií, ktorý sa cíti prirodzene
- Priestor, ktorý "dýcha"
- Konzistencia, ktorá vytvára dôveru
- Detaily, ktoré objavíš až pri druhom pohľade

### Princípy seniorného myslenia

1. **Systémové myslenie** — Nenavrhuj screen, navrhuj systém
2. **Anticipácia** — Rie problémy pred tým ako nastanú
3. **Redukcia** — Čo môžem odstrániť bez straty hodnoty?
4. **Empíria** — Testuj predpoklady, neverí intuícii naslepo
5. **Craft** — Detaily robia rozdiel medzi dobrým a výnimočným

---

## 1. Design Systems Architecture

### Token Architecture (Multi-tier)

```
TIER 1: Primitive Tokens (Raw values)
├── colors.blue.500: #3b82f6
├── spacing.16: 16px
├── font.size.16: 1rem
└── radius.8: 8px

TIER 2: Semantic Tokens (Purpose)
├── color.background.primary: {colors.white}
├── color.text.primary: {colors.neutral.900}
├── color.border.default: {colors.neutral.200}
└── spacing.component.padding: {spacing.16}

TIER 3: Component Tokens (Specific)
├── button.background.default: {color.background.interactive}
├── button.background.hover: {color.background.interactive.hover}
├── card.padding: {spacing.component.padding}
└── card.radius: {radius.8}
```

**Prečo 3 tiery?**
- Tier 1: Nikdy sa nemení v kóde, len v dizajn systéme
- Tier 2: Umožňuje theming (dark mode, white-label)
- Tier 3: Komponent-špecifické overrides

### Component API Design

Dobre navrhnutý komponent má premyslené API:

```typescript
// ❌ ZLE — príliš veľa props, nejasný účel
<Button 
  size="large"
  color="blue"
  rounded={true}
  shadow={true}
  hoverColor="darkblue"
  textColor="white"
  padding="16px 24px"
/>

// ✅ DOBRE — kompozitné, jasné varianty
<Button 
  variant="primary"    // primary | secondary | ghost | danger
  size="lg"            // sm | md | lg
  isLoading={false}
  leftIcon={<Icon />}
>
  Label
</Button>
```

### Composition Patterns

```typescript
// Compound Components
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Actions>...</Card.Actions>
  </Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>

// Slot Pattern
<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header />
    <Dialog.Body />
    <Dialog.Footer />
  </Dialog.Content>
</Dialog>
```

### Variant Matrix

Pre každý komponent definuj všetky kombinácie:

```
BUTTON VARIANT MATRIX:

              | Primary | Secondary | Ghost | Danger |
|-------------|---------|-----------|-------|--------|
| Default     | ✓       | ✓         | ✓     | ✓      |
| Hover       | ✓       | ✓         | ✓     | ✓      |
| Active      | ✓       | ✓         | ✓     | ✓      |
| Focus       | ✓       | ✓         | ✓     | ✓      |
| Disabled    | ✓       | ✓         | ✓     | ✓      |
| Loading     | ✓       | ✓         | ✓     | ✓      |
| With Icon L | ✓       | ✓         | ✓     | ✓      |
| With Icon R | ✓       | ✓         | ✓     | ✓      |
| Icon Only   | ✓       | ✓         | ✓     | ✓      |
| Small       | ✓       | ✓         | ✓     | ✓      |
| Medium      | ✓       | ✓         | ✓     | ✓      |
| Large       | ✓       | ✓         | ✓     | ✓      |
```

---

## 2. Advanced Typography

### Optical Sizing

Malý text potrebuje iné proporcie ako veľký:

```css
/* Variable fonts with optical sizing */
@font-face {
  font-family: 'Inter';
  src: url('Inter.var.woff2') format('woff2');
}

body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto; /* Automatické optical sizing */
}

/* Manuálne pre non-variable fonts */
.text-sm {
  font-size: 14px;
  letter-spacing: 0.01em;  /* Tighter tracking pre veľký */
  font-weight: 450;        /* Slightly bolder pre čitateľnosť */
}

.text-4xl {
  font-size: 48px;
  letter-spacing: -0.02em; /* Tighter tracking pre veľký */
  font-weight: 600;
}
```

### Fluid Typography with Constraints

```css
/* Plynulá typografia s min/max */
:root {
  /* Clamp: min, preferred, max */
  --text-base: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  --text-lg: clamp(1.125rem, 0.75vw + 0.9rem, 1.375rem);
  --text-xl: clamp(1.25rem, 1vw + 1rem, 1.75rem);
  --text-2xl: clamp(1.5rem, 2vw + 1rem, 2.5rem);
  --text-3xl: clamp(1.875rem, 3vw + 1rem, 3.5rem);
  --text-4xl: clamp(2.25rem, 4vw + 1rem, 5rem);
}
```

### Advanced Line Height

Line height nie je len číslo - závisí od:
- Font size
- Line length
- Font family
- x-height fontu

```css
/* Dynamické line-height */
.prose {
  /* Kratšie riadky = menší line-height */
  line-height: calc(1.1em + 0.5rem);
}

/* Alebo podľa šírky */
.prose {
  line-height: 1.5;
}

@container (min-width: 600px) {
  .prose {
    line-height: 1.6; /* Širší text = väčší line-height */
  }
}
```

### Hanging Punctuation

```css
/* Optické zarovnanie úvodzoviek a pomlčiek */
.prose {
  hanging-punctuation: first last;
}

/* Fallback pre nepodporované prehliadače */
.pull-quote::before {
  content: '"';
  margin-left: -0.5em;
}
```

### Ligatures & OpenType Features

```css
.prose {
  /* Štandardné ligatúry (fi, fl) */
  font-variant-ligatures: common-ligatures;
  
  /* Čísla pre tabuľky */
  font-variant-numeric: tabular-nums;
  
  /* Staré číslice pre text */
  font-variant-numeric: oldstyle-nums;
  
  /* Kapitálky */
  font-variant-caps: small-caps;
  
  /* Všetko naraz */
  font-feature-settings: 
    "liga" 1,    /* Ligatúry */
    "kern" 1,    /* Kerning */
    "calt" 1,    /* Kontextové alternativy */
    "ss01" 1;    /* Stylistic set 1 */
}
```

### Widow/Orphan Control (Advanced)

```javascript
// Inteligentný text balancing
function balanceText(element) {
  const text = element.textContent;
  const words = text.split(' ');
  
  if (words.length < 4) return;
  
  // Skús rôzne break pointy
  const container = element.parentElement;
  const originalWidth = container.offsetWidth;
  
  let bestBreak = null;
  let bestBalance = Infinity;
  
  for (let i = Math.floor(words.length / 2) - 2; i <= Math.floor(words.length / 2) + 2; i++) {
    const line1 = words.slice(0, i).join(' ');
    const line2 = words.slice(i).join(' ');
    
    // Meraj šírky
    const width1 = measureTextWidth(line1, element);
    const width2 = measureTextWidth(line2, element);
    
    const balance = Math.abs(width1 - width2);
    
    if (balance < bestBalance) {
      bestBalance = balance;
      bestBreak = i;
    }
  }
  
  // Aplikuj najlepší break
  if (bestBreak) {
    const line1 = words.slice(0, bestBreak).join(' ');
    const line2 = words.slice(bestBreak).join(' ');
    element.innerHTML = `${line1}<br>${line2}`;
  }
}
```

---

## 3. Optical Adjustments

### Optické vs Matematické zarovnanie

Ľudské oko nevníma matematicky presné zarovnanie ako "správne":

```
MATEMATICKÉ ZAROVNANIE:
┌──────────────────┐
│ ▶ Play           │  ← Ikona je geometricky v strede
└──────────────────┘

OPTICKÉ ZAROVNANIE:
┌──────────────────┐
│  ▶ Play          │  ← Ikona je posunutá doprava
└──────────────────┘    (trojuholník má vizuálny ťah vľavo)
```

### Icon Optical Corrections

```css
/* Play button v kruhu */
.play-icon {
  /* Matematický stred */
  /* transform: translate(-50%, -50%); */
  
  /* Optický stred - posunutý doprava */
  transform: translate(calc(-50% + 2px), -50%);
}

/* Trojuholník v kruhu */
.triangle-icon {
  margin-left: 3%; /* Kompenzácia vizuálneho ťahu */
}

/* Checkmark v boxe */
.checkmark {
  transform: translateY(-1px); /* Optické zdvihnutie */
}
```

### Padding Optical Corrections

```css
/* Text v buttone - optické padding */
.button {
  /* Matematické: */ padding: 12px 24px;
  
  /* Optické - viac hore/dole lebo text má ascendery/descendery */
  padding: 14px 24px;
  padding-top: 13px;
  padding-bottom: 15px;
}

/* Ikona + text */
.button-with-icon {
  padding-left: 20px;  /* Menej, lebo ikona má vlastný whitespace */
  padding-right: 24px;
}
```

### Border Radius Scaling

Border radius by mal škálovať s veľkosťou elementu:

```css
/* ❌ ZLE - rovnaký radius všade */
.card-sm { border-radius: 8px; }
.card-md { border-radius: 8px; }
.card-lg { border-radius: 8px; }

/* ✅ DOBRE - škálovaný radius */
.card-sm { border-radius: 6px; }   /* Malé karty */
.card-md { border-radius: 8px; }   /* Štandardné */
.card-lg { border-radius: 12px; }  /* Veľké karty */
.card-xl { border-radius: 16px; }  /* Hero karty */

/* Nested elements - menší radius */
.card { border-radius: 12px; }
.card-image { border-radius: 8px; } /* Vnorený = menší */
.card-badge { border-radius: 4px; } /* Ešte menší */
```

### Shadow Optical Adjustments

```css
/* Shadows by mali mať color tint */
.card {
  /* ❌ Čistá čierna */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* ✅ Tinted shadow (matches background) */
  box-shadow: 0 4px 12px rgba(0, 20, 40, 0.12);
}

/* Farebné karty - shadow z farby karty */
.card-blue {
  background: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* Layered shadows pre realistickejší efekt */
.elevated {
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.06);
}
```

### Font Weight Optical Compensation

```css
/* Svetlý text na tmavom pozadí vyzerá ťažší */
.dark-bg {
  color: white;
  font-weight: 300; /* Zníž weight */
}

/* Tmavý text na svetlom pozadí */
.light-bg {
  color: black;
  font-weight: 400;
}

/* Veľký text vyzerá ťažší */
h1 {
  font-weight: 500; /* Nie 700 */
}

/* Malý text potrebuje viac weight */
.small-text {
  font-weight: 500; /* Nie 400 */
}
```

---

## 4. Advanced Color Theory

### Perceptual Uniformity

HSL nie je perceptuálne uniformný - dva odtiene s rovnakou "L" hodnotou nevyzerajú rovnako svetlo:

```css
/* ❌ HSL - Yellow vyzerá svetlejšie ako Blue */
--yellow: hsl(60, 100%, 50%);  /* Vyzerá veľmi svetlo */
--blue: hsl(240, 100%, 50%);   /* Vyzerá tmavo */

/* ✅ Použi OKLCH pre perceptuálnu uniformitu */
--yellow: oklch(90% 0.15 90);
--blue: oklch(90% 0.15 260);   /* Rovnako svetlé! */
```

### Color Palette Generation

```javascript
// Generuj palette z jednej farby pomocou OKLCH
function generatePalette(baseHue) {
  return {
    50:  `oklch(98% 0.01 ${baseHue})`,
    100: `oklch(95% 0.03 ${baseHue})`,
    200: `oklch(90% 0.06 ${baseHue})`,
    300: `oklch(82% 0.10 ${baseHue})`,
    400: `oklch(70% 0.14 ${baseHue})`,
    500: `oklch(60% 0.18 ${baseHue})`,  // Base
    600: `oklch(52% 0.16 ${baseHue})`,
    700: `oklch(44% 0.14 ${baseHue})`,
    800: `oklch(36% 0.12 ${baseHue})`,
    900: `oklch(28% 0.10 ${baseHue})`,
    950: `oklch(18% 0.08 ${baseHue})`,
  };
}
```

### Semantic Color Mapping

```css
:root {
  /* Primitive */
  --blue-500: oklch(60% 0.18 250);
  --green-500: oklch(65% 0.18 145);
  --red-500: oklch(60% 0.22 25);
  --yellow-500: oklch(85% 0.18 85);
  
  /* Semantic - Light mode */
  --color-info: var(--blue-500);
  --color-success: var(--green-500);
  --color-error: var(--red-500);
  --color-warning: var(--yellow-500);
  
  /* Semantic backgrounds (tinted) */
  --color-info-bg: oklch(95% 0.02 250);
  --color-success-bg: oklch(95% 0.02 145);
  --color-error-bg: oklch(95% 0.02 25);
  --color-warning-bg: oklch(95% 0.02 85);
}
```

### Accessible Color Combinations

```javascript
// Automatické generovanie accessible kombinácií
function getAccessibleTextColor(backgroundColor) {
  const bgLuminance = getLuminance(backgroundColor);
  
  // WCAG AA: 4.5:1 pre normálny text
  if (bgLuminance > 0.5) {
    return 'oklch(20% 0 0)'; // Tmavý text
  } else {
    return 'oklch(98% 0 0)'; // Svetlý text
  }
}

// Pre farby automaticky generuj accessible páry
const colorPairs = {
  primary: {
    background: 'oklch(55% 0.2 250)',
    text: 'oklch(98% 0 0)',      // Auto-calculated
    textMuted: 'oklch(85% 0.05 250)',
  }
};
```

### Color Harmony Systems

```css
/* Analogous - Susedné farby (30° apart) */
--primary: oklch(60% 0.18 250);       /* Blue */
--secondary: oklch(60% 0.18 220);     /* Cyan-blue */
--tertiary: oklch(60% 0.18 280);      /* Purple-blue */

/* Complementary - Protiľahlé (180° apart) */
--primary: oklch(60% 0.18 250);       /* Blue */
--accent: oklch(60% 0.18 70);         /* Orange */

/* Split-complementary */
--primary: oklch(60% 0.18 250);       /* Blue */
--accent-1: oklch(60% 0.18 40);       /* Orange-red */
--accent-2: oklch(60% 0.18 100);      /* Yellow-green */

/* Triadic (120° apart) */
--primary: oklch(60% 0.18 250);       /* Blue */
--secondary: oklch(60% 0.18 10);      /* Red */
--tertiary: oklch(60% 0.18 130);      /* Green */
```

---

## 5. Motion Design System

### Animation Principles

```
1. MEANINGFUL — Animácia má účel (feedback, continuity, hierarchy)
2. FOCUSED — Jedna vec v čase
3. QUICK — Rýchlejšie je lepšie (150-300ms)
4. NATURAL — Easing kopíruje fyziku reálneho sveta
5. INTERRUPTIBLE — Používateľ môže prerušiť
```

### Easing Library

```css
:root {
  /* Standard easings */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Expressive easings */
  --ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Spring-like */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Smooth deceleration */
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  /* Emphasis */
  --ease-emphasis: cubic-bezier(0.19, 1, 0.22, 1);
}
```

### Duration System

```css
:root {
  /* Micro interactions */
  --duration-instant: 50ms;    /* Ripples, color changes */
  --duration-fast: 100ms;      /* Hovers, toggles */
  --duration-normal: 150ms;    /* Buttons, small movements */
  
  /* UI transitions */
  --duration-moderate: 200ms;  /* Dropdowns, tooltips */
  --duration-slow: 300ms;      /* Modals, panels */
  --duration-slower: 400ms;    /* Page transitions */
  
  /* Complex animations */
  --duration-complex: 500ms;   /* Multi-step animations */
  --duration-elaborate: 700ms; /* Elaborate sequences */
}
```

### Staggered Animations

```css
/* List items vstupujú postupne */
.list-item {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 200ms var(--ease-out) forwards;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
.list-item:nth-child(4) { animation-delay: 150ms; }
/* ... */

/* Alebo dynamicky */
.list-item {
  animation-delay: calc(var(--index) * 50ms);
}
```

```javascript
// Dynamický stagger
items.forEach((item, index) => {
  item.style.setProperty('--index', index);
});
```

### Choreography

```
MODAL OPEN SEQUENCE:
1. Backdrop fade in (0-150ms)
2. Modal scale + fade in (50-250ms, offset start)
3. Content fade in (150-350ms, after container)

MODAL CLOSE SEQUENCE:
1. Content fade out (0-100ms)
2. Modal scale + fade out (50-200ms)
3. Backdrop fade out (100-250ms)
```

```css
/* Modal choreography */
.backdrop {
  animation: fadeIn 150ms var(--ease-out);
}

.modal {
  animation: scaleIn 200ms var(--ease-out) 50ms both;
}

.modal-content {
  animation: fadeIn 200ms var(--ease-out) 150ms both;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Interruptible Animations

```javascript
// CSS transitions sú automaticky interruptible
// Pre JS animácie použi Web Animations API

const animation = element.animate([
  { transform: 'translateX(0)' },
  { transform: 'translateX(100px)' }
], {
  duration: 300,
  easing: 'ease-out',
  fill: 'forwards'
});

// Prerušenie
button.onclick = () => {
  animation.reverse(); // Smooth reverse
  // alebo
  animation.cancel();  // Immediate stop
};
```

### Gesture-driven Animation

```javascript
// Drag to dismiss
let startY = 0;
let currentY = 0;

element.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

element.addEventListener('touchmove', (e) => {
  currentY = e.touches[0].clientY;
  const deltaY = currentY - startY;
  
  // Rubber band effect
  const resistance = 0.5;
  const translateY = deltaY > 0 ? deltaY * resistance : 0;
  
  element.style.transform = `translateY(${translateY}px)`;
  
  // Fade based on distance
  const opacity = 1 - (translateY / 300);
  element.style.opacity = Math.max(0, opacity);
});

element.addEventListener('touchend', () => {
  const deltaY = currentY - startY;
  
  if (deltaY > 150) {
    // Dismiss
    element.animate([
      { transform: `translateY(${deltaY}px)`, opacity: 0.5 },
      { transform: 'translateY(100vh)', opacity: 0 }
    ], { duration: 200, fill: 'forwards' });
  } else {
    // Spring back
    element.animate([
      { transform: `translateY(${deltaY}px)` },
      { transform: 'translateY(0)' }
    ], { duration: 300, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });
  }
});
```

---

## 6. Advanced Layout Techniques

### Subgrid

```css
/* Parent grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Child inherits parent grid lines */
.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3; /* Header, content, footer */
}

/* Výhoda: všetky headers, contents, footers sú zarovnané */
```

### Container Queries

```css
/* Komponent sa prispôsobuje svojmu kontajneru, nie viewportu */
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
}

@container card (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}

@container card (min-width: 600px) {
  .card {
    /* Ešte iný layout */
  }
}
```

### Aspect Ratio Layouts

```css
/* Konzistentné proporcie */
.thumbnail {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.avatar {
  aspect-ratio: 1;
  border-radius: 50%;
}

.card-hero {
  aspect-ratio: 4 / 3;
}

/* Responzívne aspect ratio */
.hero-image {
  aspect-ratio: 21 / 9;
}

@media (max-width: 768px) {
  .hero-image {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 480px) {
  .hero-image {
    aspect-ratio: 4 / 3;
  }
}
```

### Intrinsic Sizing

```css
/* min-content, max-content, fit-content */

.tag {
  width: fit-content; /* Presne taká šírka ako obsah */
  max-width: 100%;    /* Ale nie viac ako parent */
}

.sidebar {
  width: min(300px, 100%); /* 300px alebo 100%, čokoľvek je menšie */
}

.main {
  width: min(65ch, 100%); /* Optimálna šírka textu */
}
```

### Logical Properties

```css
/* Pre správne RTL support */
.element {
  /* ❌ Physical properties */
  margin-left: 16px;
  padding-right: 24px;
  border-top: 1px solid;
  text-align: left;
  
  /* ✅ Logical properties */
  margin-inline-start: 16px;
  padding-inline-end: 24px;
  border-block-start: 1px solid;
  text-align: start;
}

/* Logical shorthands */
.card {
  margin-block: 16px;   /* top + bottom */
  margin-inline: 24px;  /* left + right */
  padding-block: 16px 24px;  /* top bottom */
  inset-inline: 0;      /* left + right = 0 */
}
```

---

## 7. Perceived Performance

### Optimistic UI

```javascript
// Akcia sa vykoná okamžite v UI, server sync je na pozadí
async function toggleLike(postId) {
  // 1. Okamžitá UI zmena
  setLiked(true);
  setLikeCount(prev => prev + 1);
  
  try {
    // 2. Server request
    await api.likePost(postId);
  } catch (error) {
    // 3. Rollback ak zlyhá
    setLiked(false);
    setLikeCount(prev => prev - 1);
    showError('Nepodarilo sa pridať like');
  }
}
```

### Skeleton Screens (Advanced)

```css
/* Presný skeleton matching final layout */
.card-skeleton {
  display: grid;
  grid-template-rows: 200px auto auto;
  gap: 16px;
}

.skeleton-image {
  background: var(--skeleton-base);
  border-radius: 8px;
  aspect-ratio: 16/9;
}

.skeleton-title {
  height: 24px;
  width: 80%;
  background: var(--skeleton-base);
  border-radius: 4px;
}

.skeleton-text {
  height: 16px;
  width: 100%;
  background: var(--skeleton-base);
  border-radius: 4px;
}

/* Shimmer effect */
.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    var(--skeleton-base) 0%,
    var(--skeleton-highlight) 50%,
    var(--skeleton-base) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Progressive Loading

```javascript
// Načítaj kritický obsah najprv
async function loadPage() {
  // 1. Above the fold - okamžite
  await loadHeroSection();
  renderHero();
  
  // 2. Primary content - ihneď po
  await loadMainContent();
  renderMainContent();
  
  // 3. Secondary content - lazy
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadSection(entry.target.dataset.section);
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('[data-lazy-section]').forEach(el => {
    observer.observe(el);
  });
}
```

### Instant Page Transitions

```javascript
// Preload on hover
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('/')) {
      // Preload page
      const preload = document.createElement('link');
      preload.rel = 'prefetch';
      preload.href = href;
      document.head.appendChild(preload);
    }
  });
});

// Alebo použi libraries ako instant.page
```

### Perceived Speed Tricks

```
1. SHOW SOMETHING IMMEDIATELY
   - Skeleton screens
   - Placeholder content
   - Progressive image loading (blur-up)

2. FEEDBACK FOR EVERY ACTION
   - Button press state
   - Loading indicators
   - Progress bars

3. ANIMATE TRANSITIONS
   - Page transitions skryjú loading
   - Staggered content reveal

4. PRIORITIZE VISIBLE CONTENT
   - Above-the-fold first
   - Lazy load below-the-fold

5. OPTIMISTIC UPDATES
   - Show success before server confirms
   - Rollback if needed
```

---

## 8. Psychology & Cognitive Load

### Hick's Law

Čas rozhodovania rastie s počtom možností.

```
❌ ZLE: 20 položiek v menu na rovnakej úrovni
✅ DOBRE: 5-7 hlavných položiek s podkategóriami

❌ ZLE: 10 CTA buttonov na stránke
✅ DOBRE: 1 primárny, 1 sekundárny CTA
```

### Miller's Law

Pracovná pamäť drží 7±2 položiek.

```
❌ ZLE: 12-krokový wizard
✅ DOBRE: 3-4 kroky, alebo chunking do skupín

❌ ZLE: 15 polí vo formulári naraz
✅ DOBRE: Rozdelené do logických sekcií
```

### Fitts's Law

Čas na kliknutie závisí od veľkosti a vzdialenosti.

```css
/* Dôležité akcie = väčšie a bližšie k prirodzenej pozícii kurzora */
.primary-action {
  padding: 16px 32px;  /* Väčšia klikacia plocha */
  font-size: 18px;
}

.secondary-action {
  padding: 12px 24px;  /* Menšia */
}

/* Edge targets sú rýchlejšie (infinite width) */
.sidebar {
  position: fixed;
  left: 0;          /* Pri okraji = jednoduchšie trafiť */
}
```

### Progressive Disclosure

```
LEVEL 1: Základné informácie (vždy viditeľné)
LEVEL 2: Detaily (na požiadanie - expand, tooltip)
LEVEL 3: Pokročilé (skryté v "Advanced" sekcii)

Príklad - User profile:
Level 1: Meno, avatar, email
Level 2: Bio, location, website (expand)
Level 3: API keys, privacy settings (separate page)
```

### Recognition Over Recall

```
❌ ZLE: Prázdny input "Enter command..."
✅ DOBRE: Dropdown s možnosťami + search

❌ ZLE: "Use format: YYYY-MM-DD"
✅ DOBRE: Date picker

❌ ZLE: Keyboard shortcuts only
✅ DOBRE: Visible buttons + keyboard shortcuts ako bonus
```

### Chunking

```html
<!-- ❌ ZLE: Telefónne číslo ako jeden blok -->
<input value="421903456789" />

<!-- ✅ DOBRE: Chunked pre ľahšie čítanie -->
<input value="+421 903 456 789" />

<!-- ❌ ZLE: IBAN ako jeden blok -->
<span>SK8975000000000012345671</span>

<!-- ✅ DOBRE: Chunked -->
<span>SK89 7500 0000 0001 2345 671</span>
```

### Anchoring

Prvá informácia ovplyvňuje vnímanie nasledujúcich.

```
PRICING PAGE:
1. Ukáž najdrahší plán prvý (anchor)
2. Stredný plán vyzerá ako "dobrá hodnota"
3. Označ stredný ako "Most Popular"

DISCOUNTS:
❌ "Cena: €79"
✅ "€129 → €79" (anchor na pôvodnú cenu)
```

---

## 9. Data Visualization

### Chart Selection Guide

```
COMPARISON (medzi kategóriami)
├── Bar chart (vertikálny) — do 10 kategórií
├── Bar chart (horizontálny) — dlhé labels
├── Grouped bar — porovnanie viacerých sérii
└── Dot plot — veľa kategórií

TREND (časom)
├── Line chart — kontinuálne dáta
├── Area chart — objem + trend
├── Sparkline — inline mini trend
└── Step chart — diskrétne zmeny

COMPOSITION (časti celku)
├── Donut chart — single data point (2-5 segmentov)
├── Stacked bar — porovnanie kompozícií
├── Treemap — hierarchické časti
└── Waterfall — zmena od začiatku do konca

DISTRIBUTION
├── Histogram — frekvencia
├── Box plot — štatistické rozdelenie
├── Scatter plot — korelácia dvoch premenných
└── Heatmap — hustota/intenzita

RELATIONSHIP
├── Scatter plot — korelácia
├── Bubble chart — 3 premenné
├── Network graph — prepojenia
└── Sankey — flow medzi skupinami
```

### Chart Design Rules

```css
/* Farby pre charts */
:root {
  /* Sekvenčná paleta (pre ordered data) */
  --chart-seq-1: oklch(90% 0.1 250);
  --chart-seq-2: oklch(75% 0.15 250);
  --chart-seq-3: oklch(60% 0.18 250);
  --chart-seq-4: oklch(45% 0.16 250);
  --chart-seq-5: oklch(30% 0.14 250);
  
  /* Kategorická paleta (pre unordered data) */
  --chart-cat-1: oklch(65% 0.18 250);  /* Blue */
  --chart-cat-2: oklch(70% 0.18 145);  /* Green */
  --chart-cat-3: oklch(75% 0.18 45);   /* Orange */
  --chart-cat-4: oklch(65% 0.18 320);  /* Purple */
  --chart-cat-5: oklch(70% 0.18 180);  /* Cyan */
  
  /* Diverging paleta (pre +/- data) */
  --chart-neg-2: oklch(55% 0.2 25);    /* Dark red */
  --chart-neg-1: oklch(75% 0.15 25);   /* Light red */
  --chart-neutral: oklch(92% 0.02 250);/* Gray */
  --chart-pos-1: oklch(75% 0.15 145);  /* Light green */
  --chart-pos-2: oklch(55% 0.2 145);   /* Dark green */
}
```

### Data-Ink Ratio

Maximalizuj "data-ink" (pixely ktoré zobrazujú dáta) vs "non-data-ink" (dekorácia).

```
❌ REMOVE:
- Grid lines (alebo znížiť opacity)
- Box okolo chartu
- 3D efekty
- Zbytočné legendy (ak je jasné z kontextu)
- Duplicitné labels

✅ KEEP:
- Data points/bars
- Axis labels (minimálne potrebné)
- Direct labels na dátach (namiesto legend)
```

### Accessible Data Viz

```javascript
// 1. Poskytni textovú alternatívu
<figure role="img" aria-label="Sales increased 25% from Q1 to Q4 2024">
  <Chart data={data} />
  <figcaption className="sr-only">
    Detailed breakdown: Q1: $1M, Q2: $1.1M, Q3: $1.15M, Q4: $1.25M
  </figcaption>
</figure>

// 2. Použi patterns okrem farieb
const patterns = [
  { color: 'blue', pattern: 'solid' },
  { color: 'green', pattern: 'diagonal' },
  { color: 'orange', pattern: 'dots' },
];

// 3. Interaktívne hodnoty
<Bar 
  onHover={(d) => showTooltip(d)}
  onFocus={(d) => showTooltip(d)}  /* Keyboard accessible */
  tabIndex={0}
/>
```

---

## 10. Advanced Forms & Input

### Smart Defaults

```javascript
// Predvyplň čo vieš
const defaults = {
  country: detectCountryFromIP(),
  currency: getCurrencyFromCountry(),
  language: navigator.language,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  dateFormat: getLocaleDateFormat(),
};

// Pamätaj si predchádzajúce hodnoty
const savedData = localStorage.getItem('form-draft');
```

### Input Masking & Formatting

```javascript
// Telefónne číslo - auto format
function formatPhone(value) {
  const digits = value.replace(/\D/g, '');
  
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0,3)} ${digits.slice(3)}`;
  return `${digits.slice(0,3)} ${digits.slice(3,6)} ${digits.slice(6,9)}`;
}

// Kreditná karta - auto format + detect type
function formatCard(value) {
  const digits = value.replace(/\D/g, '');
  const type = detectCardType(digits); // Visa, Mastercard, etc.
  
  // Format based on card type
  if (type === 'amex') {
    return digits.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3');
  }
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
}

// IBAN - auto format
function formatIBAN(value) {
  const clean = value.replace(/\s/g, '').toUpperCase();
  return clean.replace(/(.{4})/g, '$1 ').trim();
}
```

### Inline Validation Patterns

```javascript
// Validuj v správnom momente
const validationTiming = {
  // On blur - po opustení poľa
  email: 'blur',
  password: 'blur',
  
  // On input - real-time
  passwordStrength: 'input',
  searchSuggestions: 'input',
  
  // Debounced - async checks
  usernameAvailable: 'input:debounced:500',
  
  // On submit only
  captcha: 'submit',
};

// Password strength meter
function calculateStrength(password) {
  let score = 0;
  
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  
  return {
    score,
    label: ['Weak', 'Fair', 'Good', 'Strong', 'Excellent'][score],
    color: ['red', 'orange', 'yellow', 'lime', 'green'][score],
  };
}
```

### Multi-step Form UX

```
PRAVIDLÁ:
1. Ukáž progress (kroky, progress bar)
2. Umožni navigáciu späť
3. Ukladaj draft automaticky
4. Validuj krok pred pokračovaním
5. Sumarizuj pred odoslaním
```

```javascript
// Auto-save draft
useEffect(() => {
  const timer = setTimeout(() => {
    localStorage.setItem('form-draft', JSON.stringify(formData));
  }, 1000);
  
  return () => clearTimeout(timer);
}, [formData]);

// Restore on mount
useEffect(() => {
  const draft = localStorage.getItem('form-draft');
  if (draft) {
    setFormData(JSON.parse(draft));
    showToast('Draft restored');
  }
}, []);
```

### Error Recovery

```javascript
// Chytré error messages
const errorMessages = {
  email: {
    required: 'Email je povinný',
    invalid: 'Zadajte platný email (napr. meno@domena.sk)',
    taken: 'Tento email je už registrovaný. Prihláste sa alebo použite iný.',
  },
  password: {
    required: 'Heslo je povinné',
    tooShort: 'Heslo musí mať aspoň 8 znakov',
    tooWeak: 'Pridajte veľké písmeno a číslo pre silnejšie heslo',
  },
};

// Suggest corrections
function suggestCorrection(email) {
  const [local, domain] = email.split('@');
  
  const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
  const closest = findClosestMatch(domain, commonDomains);
  
  if (closest && closest !== domain) {
    return `Mysleli ste ${local}@${closest}?`;
  }
  return null;
}
```

---

## 11. Internationalization (i18n)

### Text Expansion

Rôzne jazyky majú rôznu dĺžku:

```
Anglický text: 100%
Nemecký text: ~130%
Fínsky text: ~130-150%
Čínsky text: ~50-80%
Arabčina: ~125%
```

```css
/* Flexibilné layouty pre text expansion */
.button {
  /* ❌ Fixná šírka */
  width: 120px;
  
  /* ✅ Flexibilná */
  min-width: 80px;
  padding: 12px 24px;
  white-space: nowrap;
}

.card-title {
  /* Handling overflow */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

### RTL Support

```css
/* Použi logical properties */
.card {
  /* ❌ Physical */
  margin-left: 16px;
  text-align: left;
  
  /* ✅ Logical */
  margin-inline-start: 16px;
  text-align: start;
}

/* RTL-aware icons */
[dir="rtl"] .icon-arrow {
  transform: scaleX(-1);
}

/* RTL-aware shadows */
.card {
  box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
}

[dir="rtl"] .card {
  box-shadow: -4px 4px 8px rgba(0,0,0,0.1);
}
```

### Number & Date Formatting

```javascript
// Použi Intl API
const formatNumber = (num, locale) => {
  return new Intl.NumberFormat(locale).format(num);
};

formatNumber(1234567.89, 'en-US'); // "1,234,567.89"
formatNumber(1234567.89, 'de-DE'); // "1.234.567,89"
formatNumber(1234567.89, 'sk-SK'); // "1 234 567,89"

const formatDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

formatDate(new Date(), 'en-US'); // "January 15, 2025"
formatDate(new Date(), 'sk-SK'); // "15. januára 2025"

const formatCurrency = (amount, currency, locale) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

formatCurrency(1234.56, 'EUR', 'sk-SK'); // "1 234,56 €"
formatCurrency(1234.56, 'USD', 'en-US'); // "$1,234.56"
```

### Pluralization

```javascript
// Správna pluralizácia
const pluralRules = new Intl.PluralRules('sk-SK');

function pluralize(count, forms) {
  // Slovak má: one, few, many, other
  const rule = pluralRules.select(count);
  return forms[rule] || forms.other;
}

const itemForms = {
  one: 'položka',    // 1 položka
  few: 'položky',    // 2-4 položky
  many: 'položiek',  // 0, 5+ položiek
  other: 'položiek',
};

pluralize(1, itemForms);  // "položka"
pluralize(3, itemForms);  // "položky"
pluralize(5, itemForms);  // "položiek"
pluralize(21, itemForms); // "položiek" (Slovak: 21 uses 'many')
```

---

## 12. Dark Mode Done Right

### Nie len invert

```css
/* ❌ ZLE - jednoduché invertovanie */
@media (prefers-color-scheme: dark) {
  body {
    filter: invert(1);
  }
}

/* ✅ DOBRE - premyslené farby */
:root {
  --bg-primary: oklch(100% 0 0);
  --bg-secondary: oklch(97% 0.01 250);
  --text-primary: oklch(15% 0.02 250);
  --text-secondary: oklch(40% 0.02 250);
}

[data-theme="dark"] {
  --bg-primary: oklch(15% 0.02 250);
  --bg-secondary: oklch(20% 0.02 250);
  --text-primary: oklch(95% 0.01 250);
  --text-secondary: oklch(70% 0.02 250);
}
```

### Elevation in Dark Mode

V dark mode, vyššia elevácia = svetlejšie (nie tmavšie s tieňom):

```css
:root {
  --surface-1: oklch(100% 0 0);
  --surface-2: oklch(100% 0 0);
  --surface-3: oklch(100% 0 0);
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.15);
}

[data-theme="dark"] {
  /* Vyššia elevácia = svetlejší surface */
  --surface-1: oklch(18% 0.02 250);  /* Base */
  --surface-2: oklch(22% 0.02 250);  /* Cards */
  --surface-3: oklch(26% 0.02 250);  /* Modals */
  
  /* Slabšie shadows v dark mode */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.3);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.4);
}
```

### Image Handling

```css
/* Znížiť brightness obrázkov v dark mode */
[data-theme="dark"] img:not([data-no-dim]) {
  filter: brightness(0.9);
}

/* Invertovať diagramy/ilustrácie */
[data-theme="dark"] img[data-invertible] {
  filter: invert(1) hue-rotate(180deg);
}

/* Tmavý overlay pre hero obrázky */
[data-theme="dark"] .hero-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}
```

### Transitions Between Themes

```css
/* Smooth transition */
:root {
  --theme-transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

body, 
.card,
.button {
  transition: var(--theme-transition);
}

/* Disable transitions on initial load */
.no-transitions * {
  transition: none !important;
}
```

```javascript
// Prevent flash on load
document.documentElement.classList.add('no-transitions');

// Apply saved theme
const savedTheme = localStorage.getItem('theme') || 'system';
applyTheme(savedTheme);

// Enable transitions after initial render
requestAnimationFrame(() => {
  document.documentElement.classList.remove('no-transitions');
});
```

---

## 13. Advanced Accessibility

### Focus Management

```javascript
// Focus trap pre modals
function createFocusTrap(container) {
  const focusables = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  
  function handleKeydown(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  
  container.addEventListener('keydown', handleKeydown);
  
  // Focus first element
  first.focus();
  
  return () => {
    container.removeEventListener('keydown', handleKeydown);
  };
}
```

### Roving Tabindex

Pre component groups (tabs, menus, toolbars):

```javascript
// Len jeden element v skupine je tabbable
function rovingTabindex(container, selector) {
  const items = container.querySelectorAll(selector);
  let currentIndex = 0;
  
  // Initial state
  items.forEach((item, i) => {
    item.setAttribute('tabindex', i === 0 ? '0' : '-1');
  });
  
  container.addEventListener('keydown', (e) => {
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = items.length - 1;
        break;
      default:
        return;
    }
    
    e.preventDefault();
    
    items[currentIndex].setAttribute('tabindex', '-1');
    items[newIndex].setAttribute('tabindex', '0');
    items[newIndex].focus();
    
    currentIndex = newIndex;
  });
}
```

### Live Regions

```html
<!-- Polite - počká na pause -->
<div aria-live="polite" aria-atomic="true" id="status">
  <!-- Dynamicky vkladaný status -->
</div>

<!-- Assertive - prerušuje -->
<div aria-live="assertive" aria-atomic="true" id="alert">
  <!-- Urgentné notifikácie -->
</div>

<!-- Usage -->
<script>
function showStatus(message) {
  document.getElementById('status').textContent = message;
}

function showAlert(message) {
  document.getElementById('alert').textContent = message;
}
</script>
```

### Skip Links

```html
<body>
  <a href="#main-content" class="skip-link">
    Preskočiť na hlavný obsah
  </a>
  
  <nav>...</nav>
  
  <main id="main-content" tabindex="-1">
    ...
  </main>
</body>

<style>
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 16px;
  background: var(--primary);
  color: white;
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}
</style>
```

### Screen Reader Only Content

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focusable sr-only (skip links) */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## 14. Design QA Process

### Visual QA Checklist

```
SPACING
□ Všetky hodnoty sú z design tokens
□ Konzistentné padding/margin
□ Správna vertical rhythm
□ Medzery medzi sekciami

TYPOGRAPHY
□ Správna font family
□ Správne font sizes (z scale)
□ Správne line heights
□ Správne font weights
□ Text alignment
□ Max-width na odstavcoch

COLORS
□ Správne brand colors
□ Správne semantic colors
□ Dostatočný contrast
□ Konzistentné state colors

COMPONENTS
□ Všetky states (hover, focus, active, disabled)
□ Správne rozmery
□ Správne border radius
□ Správne shadows

LAYOUT
□ Grid alignment
□ Responzívne breakpointy
□ Žiadny horizontal scroll
□ Správne stacking (z-index)
```

### Pixel-Perfect Verification

```javascript
// Overlay Figma design na live site
// Bookmarklet alebo browser extension

javascript:(function(){
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('FIGMA_EXPORT_URL');
    background-size: 100% auto;
    opacity: 0.5;
    pointer-events: none;
    z-index: 99999;
  `;
  document.body.appendChild(overlay);
  
  // Toggle s klávesou
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd') {
      overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }
  });
})();
```

### Cross-Browser Testing Matrix

```
BROWSERS:
□ Chrome (latest)
□ Firefox (latest)
□ Safari (latest)
□ Edge (latest)
□ Safari iOS (latest)
□ Chrome Android (latest)

VIEWPORTS:
□ 375px (iPhone SE)
□ 390px (iPhone 14)
□ 768px (iPad)
□ 1024px (iPad landscape)
□ 1280px (Laptop)
□ 1440px (Desktop)
□ 1920px (Large desktop)

FEATURES:
□ Touch interactions
□ Keyboard navigation
□ Screen reader
□ Reduced motion
□ Dark mode
□ High contrast mode
```

### Automated Visual Testing

```javascript
// Playwright + Percy/Chromatic
test('homepage visual', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
    animations: 'disabled',
  });
});

// Component visual tests
test('button variants', async ({ page }) => {
  await page.goto('/storybook/button');
  
  // Test všetkých variants
  for (const variant of ['primary', 'secondary', 'ghost', 'danger']) {
    await page.click(`[data-variant="${variant}"]`);
    await expect(page.locator('.button')).toHaveScreenshot(`button-${variant}.png`);
  }
});
```

---

## 15. Design-Developer Handoff

### Design Specs

```
PRE KAŽDÝ KOMPONENT:
1. Rozmery (width, height, padding, margin)
2. Farby (presné hodnoty alebo token names)
3. Typography (font, size, weight, line-height)
4. Border (width, color, radius)
5. Shadow
6. States (default, hover, focus, active, disabled)
7. Responsive správanie
8. Animation specs (duration, easing)
9. Accessibility notes
```

### Token-Based Specs

```
NAMIESTO:
"padding: 16px"
"color: #3b82f6"
"font-size: 14px"

POUŽI:
"padding: spacing.4"
"color: primary.500"
"font-size: text.sm"

Developer môže priamo použiť token names v kóde.
```

### Interactive Prototypes

```
USE CASES:
1. Komplexné interakcie — Figma prototype / Framer
2. Micro-interactions — After Effects / Lottie
3. Form flows — Funkčný prototype (HTML/React)
4. Edge cases — Dokumentácia + examples

PROTOTYPE BY MAL UKÁZAŤ:
- Štandardný flow
- Error states
- Empty states
- Loading states
- Edge cases (dlhé texty, chýbajúce dáta)
```

### Component Documentation

```markdown
## Button

### Variants
- `primary` - Hlavná akcia
- `secondary` - Sekundárna akcia
- `ghost` - Terciárna akcia
- `danger` - Deštruktívna akcia

### Sizes
- `sm` - 32px height
- `md` - 40px height (default)
- `lg` - 48px height

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style |
| size | string | 'md' | Button size |
| isLoading | boolean | false | Show loading spinner |
| isDisabled | boolean | false | Disable interactions |
| leftIcon | ReactNode | - | Icon before label |
| rightIcon | ReactNode | - | Icon after label |

### Usage
\`\`\`jsx
<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="secondary" leftIcon={<Icon />}>
  With icon
</Button>

<Button variant="danger" isLoading>
  Deleting...
</Button>
\`\`\`

### Accessibility
- Uses native `<button>` element
- Supports keyboard activation (Enter, Space)
- Has visible focus state
- Loading state announced to screen readers
```

---

## 16. Measuring Design Quality

### Quantitative Metrics

```
USABILITY METRICS:
- Task completion rate
- Time on task
- Error rate
- Number of clicks/taps
- Form abandonment rate

ENGAGEMENT:
- Scroll depth
- Time on page
- Interaction rate
- Return visits

PERFORMANCE:
- Core Web Vitals (LCP, FID, CLS)
- Time to Interactive
- First Contentful Paint

ACCESSIBILITY:
- Lighthouse accessibility score
- WCAG compliance level
- Screen reader testing results
```

### Qualitative Assessment

```
HEURISTIC EVALUATION (Nielsen's 10):
1. Visibility of system status
2. Match between system and real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition over recall
7. Flexibility and efficiency
8. Aesthetic and minimalist design
9. Help users recognize and recover from errors
10. Help and documentation

SCORE: 1-5 pre každú heuristiku
```

### Design Review Rubric

```
VISUAL DESIGN (25 points)
□ Konzistentný visual language (5)
□ Správna typografická hierarchia (5)
□ Efektívne využitie priestoru (5)
□ Color harmony a contrast (5)
□ Attention to detail / polish (5)

INTERACTION DESIGN (25 points)
□ Jasné affordances (5)
□ Okamžitý feedback (5)
□ Logical flow (5)
□ Error prevention & recovery (5)
□ Micro-interactions (5)

USABILITY (25 points)
□ Jednoduchosť použitia (5)
□ Efektivita (task completion) (5)
□ Learnability (5)
□ Accessibility (5)
□ Responsiveness (5)

SYSTEM THINKING (25 points)
□ Konzistencia (5)
□ Scalability (5)
□ Dokumentácia (5)
□ Maintainability (5)
□ Performance (5)

TOTAL: /100
```

### A/B Testing Design Decisions

```javascript
// Test design variants
const experiment = {
  name: 'cta-button-style',
  variants: {
    control: {
      buttonColor: 'primary',
      buttonSize: 'md',
      buttonText: 'Get Started',
    },
    variant_a: {
      buttonColor: 'success',
      buttonSize: 'lg',
      buttonText: 'Start Free Trial',
    },
    variant_b: {
      buttonColor: 'primary',
      buttonSize: 'lg',
      buttonText: 'Try It Free',
    },
  },
  metrics: ['click_rate', 'conversion_rate', 'time_to_click'],
  sampleSize: 10000,
  duration: '14 days',
};
```

---

## Quick Reference

```
╔═══════════════════════════════════════════════════════════════╗
║              ADVANCED UI/UX QUICK REFERENCE                    ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  TOKENS: Primitive → Semantic → Component                      ║
║  SPACING: 4, 8, 12, 16, 24, 32, 48, 64px                      ║
║  TYPE SCALE: 12, 14, 16, 18, 20, 24, 30, 36, 48px            ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  OPTICAL ADJUSTMENTS:                                          ║
║  • Icons: shift toward visual center                          ║
║  • Text in buttons: more padding top/bottom                   ║
║  • Border radius: scale with element size                     ║
║  • Shadows: tint with brand color                             ║
║  • Light text on dark: reduce font weight                     ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  MOTION:                                                       ║
║  • Durations: 100-150ms (micro), 200-300ms (UI)              ║
║  • Easing: ease-out (enter), ease-in (exit)                  ║
║  • Animate: transform, opacity ONLY                           ║
║  • Stagger: 50ms between items                                ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  COLORS:                                                       ║
║  • Use OKLCH for perceptual uniformity                        ║
║  • Contrast: 4.5:1 text, 3:1 UI                              ║
║  • Dark mode: elevation = lighter (not shadows)               ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  PSYCHOLOGY:                                                   ║
║  • Hick's Law: fewer options = faster decisions              ║
║  • Miller's Law: 7±2 items in working memory                 ║
║  • Fitts's Law: bigger + closer = easier to click            ║
║                                                                ║
║  ─────────────────────────────────────────────────────────    ║
║                                                                ║
║  PERCEIVED PERFORMANCE:                                        ║
║  • Optimistic UI                                               ║
║  • Skeleton screens                                            ║
║  • Progressive loading                                         ║
║  • Instant feedback                                            ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Changelog

### v1.0 (2025-01)
- Prvá verzia advanced frameworku
- Design systems architecture
- Optical adjustments
- Motion design system
- Psychology & cognitive load
- Design QA process

---

## Súvisiace dokumenty

- `ui-text-framework.md` — Pravidlá pre písanie textov
- `ui-ux-best-practices-framework.md` — Základné best practices

---

## Licencia

Voľne použiteľné. Zdieľajte ďalej.

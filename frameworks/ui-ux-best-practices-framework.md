# UI/UX Best Practices Framework

> Kompletný framework pre konzistentný, profesionálny a funkčný UI/UX dizajn.
> Pre developerov a dizajnérov, ktorí chcú robiť veci správne.
> Verzia 1.0

---

## Obsah

1. [Filozofia](#filozofia)
2. [Layout a Spacing](#1-layout-a-spacing)
3. [Typografia](#2-typografia)
4. [Farby a Kontrast](#3-farby-a-kontrast)
5. [Interakcie a Hover States](#4-interakcie-a-hover-states)
6. [Animácie a Transitions](#5-animácie-a-transitions)
7. [Loading a Empty States](#6-loading-a-empty-states)
8. [Error Handling](#7-error-handling)
9. [Formuláre](#8-formuláre)
10. [Responzivita](#9-responzivita)
11. [Accessibility](#10-accessibility)
12. [Performance](#11-performance)
13. [Konzistencia](#12-konzistencia)
14. [Micro-interactions](#13-micro-interactions)
15. [Navigation a Information Architecture](#14-navigation-a-information-architecture)
16. [Checklist pred deployom](#checklist-pred-deployom)
17. [AI Prompt](#ai-prompt)

---

## Filozofia

### Základné princípy

1. **Funkcia pred formou** — Každý element musí mať účel
2. **Konzistencia nad kreativitou** — Rovnaké akcie = rovnaký vzhľad
3. **Používateľ nie je hlúpy, ale zaneprázdnený** — Nerob mu prekážky
4. **Menej je viac** — Každý element navyše je kognitívna záťaž
5. **Testuj na reálnych dátach** — "Lorem ipsum" klame

### Pred každým rozhodnutím sa spýtaj

- Rieši toto reálny problém používateľa?
- Je toto najjednoduchší spôsob ako to dosiahnuť?
- Bude toto fungovať na všetkých zariadeniach?
- Pochopí to používateľ bez vysvetlenia?

---

## 1. Layout a Spacing

### Spacing System

Použi **konzistentný spacing scale** založený na base unit (typicky 4px alebo 8px).

```
Base: 4px

4px   (0.25rem) — micro spacing
8px   (0.5rem)  — tight
12px  (0.75rem) — compact  
16px  (1rem)    — default
24px  (1.5rem)  — relaxed
32px  (2rem)    — loose
48px  (3rem)    — section gap
64px  (4rem)    — large section gap
96px  (6rem)    — page section gap
```

**Pravidlo:** Nikdy nepoužívaj random hodnoty ako 13px, 17px, 23px.

```css
/* ❌ ZLE */
.card { padding: 17px 23px; margin-bottom: 13px; }

/* ✅ DOBRE */
.card { padding: 16px 24px; margin-bottom: 16px; }
```

### Grid System

```
❌ ZLE:
- Náhodné šírky elementov
- Rôzne gutters medzi stĺpcami
- Elementy mimo mriežky

✅ DOBRE:
- 12-column grid (alebo 8, 16)
- Konzistentný gutter (16px, 24px, 32px)
- Všetko zarovnané na mriežku
```

### Containers

```css
/* Štandardné container šírky */
--container-sm: 640px;   /* Text-heavy content */
--container-md: 768px;   /* Default content */
--container-lg: 1024px;  /* Wide content */
--container-xl: 1280px;  /* Full layouts */
--container-2xl: 1536px; /* Extra wide */
```

### Vertical Rhythm

Všetky vertikálne medzery by mali byť násobkom line-height.

```css
body { line-height: 1.5; } /* 24px pri 16px font */

/* Všetky margins sú násobky 24px */
h1 { margin-bottom: 24px; }
p { margin-bottom: 24px; }
section { margin-bottom: 48px; } /* 2x */
```

---

## 2. Typografia

### Font Scale

Použi **modular scale** (ratio 1.25 alebo 1.333).

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Line Height

| Použitie | Line Height |
|----------|-------------|
| Headlines | 1.1 - 1.2 |
| Body text | 1.5 - 1.6 |
| Small text | 1.4 - 1.5 |
| UI elements | 1.25 |

### Text Width

```css
/* Optimálna čitateľnosť: 45-75 znakov */
p { max-width: 65ch; }

/* Headlines môžu byť širšie */
h1 { max-width: 20ch; }
```

### Font Weight Usage

```
300 Light    — Veľké headlines (72px+)
400 Regular  — Body text
500 Medium   — Subheadlines, emphasis
600 Semibold — Headlines, buttons
700 Bold     — Strong emphasis only
```

**Pravidlo:** Nepoužívaj viac ako 3 font weights na stránke.

### Text Hierarchy

Každá stránka musí mať jasný vizuálny hierarchiu:

```
1. Primary headline (H1) — Jeden na stránku
2. Section headlines (H2) — Hlavné sekcie
3. Subsection headlines (H3) — Podsekcie
4. Body text — Hlavný obsah
5. Secondary text — Captions, meta info
6. Tertiary text — Timestamps, labels
```

### UI Text Framework Integration

Pozri samostatný dokument `ui-text-framework.md` pre pravidlá písania textov.

---

## 3. Farby a Kontrast

### Color System Structure

```css
/* Primary — Brand color */
--primary-50: #eff6ff;   /* Lightest */
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;  /* Base */
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-800: #1e40af;
--primary-900: #1e3a8a;  /* Darkest */

/* Neutral — Text, backgrounds */
--neutral-50 to --neutral-900;

/* Semantic — Feedback */
--success: #22c55e;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Contrast Requirements (WCAG)

| Typ | Minimum | Odporúčané |
|-----|---------|------------|
| Body text | 4.5:1 | 7:1 |
| Large text (18px+) | 3:1 | 4.5:1 |
| UI elements | 3:1 | 4.5:1 |
| Decorative | — | — |

**Tools:** Použij contrast checker pred deployom.

### Common Contrast Mistakes

```css
/* ❌ ZLE — nedostatočný kontrast */
color: #999;           /* Gray on white = 2.8:1 */
color: #6b7280;        /* Gray-500 on white = 4.6:1 ✓ */

/* ❌ ZLE — placeholder text */
::placeholder { color: #d1d5db; }  /* Too light */
::placeholder { color: #9ca3af; }  /* ✅ Readable */
```

### Color Usage Rules

1. **Max 3 hlavné farby** — Primary, secondary, accent
2. **Semantic colors len na semantic účely** — Červená = error, zelená = success
3. **Nepoužívaj farbu ako jediný indikátor** — Vždy pridaj ikonu alebo text
4. **Dark mode ready** — Použi CSS variables

---

## 4. Interakcie a Hover States

### The Scale/Transform Problem

```css
/* ❌ ZLE — Scale on hover */
.card:hover {
  transform: scale(1.05);
}
/* Problém: 
   - Mení layout, susedné elementy "skáču"
   - Prekrýva susedné karty
   - Nekonzistentné medzery
   - Performance issues
*/

/* ❌ ZLE — Move on hover */
.card:hover {
  transform: translateY(-10px);
}
/* Problém:
   - Vzniká medzera pod kartou
   - Nekonzistentný layout
   - "Floating" efekt bez kontextu
*/
```

### Správne Hover States

```css
/* ✅ DOBRE — Subtle visual changes */
.card {
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--primary-500);
}

/* ✅ DOBRE — Background change */
.card:hover {
  background-color: var(--neutral-50);
}

/* ✅ DOBRE — Opacity change pre obrázky */
.card-image {
  transition: opacity 0.2s ease;
}
.card:hover .card-image {
  opacity: 0.9;
}
```

### Hover State Hierarchy

| Element | Hover Effect |
|---------|--------------|
| Buttons | Background color shift, subtle shadow |
| Links | Color change, underline |
| Cards | Border/shadow, background tint |
| Icons | Color change, opacity |
| Images | Overlay, slight opacity |
| Table rows | Background tint |

### Interactive States (Kompletné)

Každý interaktívny element potrebuje:

```css
.button {
  /* Default */
  background: var(--primary-500);
  
  /* Hover — mouse over */
  &:hover {
    background: var(--primary-600);
  }
  
  /* Focus — keyboard navigation */
  &:focus-visible {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
  }
  
  /* Active — being clicked */
  &:active {
    background: var(--primary-700);
  }
  
  /* Disabled */
  &:disabled {
    background: var(--neutral-300);
    cursor: not-allowed;
    opacity: 0.6;
  }
}
```

### Cursor States

```css
cursor: pointer;    /* Clickable elements */
cursor: text;       /* Text input */
cursor: not-allowed;/* Disabled */
cursor: grab;       /* Draggable */
cursor: grabbing;   /* Being dragged */
cursor: zoom-in;    /* Expandable image */
cursor: wait;       /* Loading */
```

---

## 5. Animácie a Transitions

### Performance Rules

**Animuj LEN:**
- `transform` (translate, scale, rotate)
- `opacity`

**NIKDY neanimuj:**
- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom`
- `border-width`
- `font-size`

```css
/* ❌ ZLE — causes layout recalculation */
.element {
  transition: width 0.3s, height 0.3s;
}

/* ✅ DOBRE — GPU accelerated */
.element {
  transition: transform 0.3s, opacity 0.3s;
}
```

### Timing Functions

```css
/* Štandardné easing */
--ease-in: cubic-bezier(0.4, 0, 1, 1);      /* Accelerate */
--ease-out: cubic-bezier(0, 0, 0.2, 1);     /* Decelerate */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);/* Both */

/* Použitie */
.enter { transition: transform 0.2s var(--ease-out); }  /* Entering */
.leave { transition: transform 0.15s var(--ease-in); }  /* Leaving */
.move { transition: transform 0.3s var(--ease-in-out); }/* Moving */
```

### Duration Guidelines

| Typ | Duration | Príklad |
|-----|----------|---------|
| Micro | 100-150ms | Button hover, toggles |
| Small | 150-200ms | Dropdowns, tooltips |
| Medium | 200-300ms | Modals, sidebars |
| Large | 300-500ms | Page transitions |

**Pravidlo:** Rýchlejšie je takmer vždy lepšie. Používatelia nechcú čakať na animácie.

### Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Loading a Empty States

### Loading States

**Pravidlo:** Vždy indikuj že sa niečo deje.

```
❌ ZLE:
- Prázdna stránka počas načítavania
- Len spinner bez kontextu
- "Loading..." text

✅ DOBRE:
- Skeleton screens kopírujúce layout
- Progress bar pre dlhšie operácie
- Inline loading pre čiastkové načítavanie
```

### Skeleton Screens

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Loading Placement

| Kontext | Loading Type |
|---------|--------------|
| Initial page load | Full skeleton |
| Section refresh | Section skeleton |
| Button action | Button spinner/state |
| Form submit | Button loading state |
| Infinite scroll | Bottom spinner |
| Background save | Toast notification |

### Empty States

Každý zoznam/tabuľka potrebuje empty state:

```
✅ Štruktúra empty state:
1. Ilustrácia/ikona (optional ale odporúčané)
2. Headline — čo je prázdne
3. Description — prečo a čo robiť
4. CTA — ako pridať prvý item
```

```html
<div class="empty-state">
  <img src="empty-illustration.svg" alt="" />
  <h3>Zatiaľ žiadne projekty</h3>
  <p>Vytvorte svoj prvý projekt a začnite organizovať prácu.</p>
  <button>Vytvoriť projekt</button>
</div>
```

### Empty State Variants

| Kontext | Message Style |
|---------|---------------|
| Prvé použitie | Pozitívne, návod |
| Vyhľadávanie bez výsledkov | Návrhy na úpravu |
| Filtre bez výsledkov | Reset filtre button |
| Error state | Čo sa stalo + retry |
| Prázdny inbox | Pozitívne "všetko hotové" |

---

## 7. Error Handling

### Error Message Rules

```
❌ ZLE:
- "Error 500"
- "Something went wrong"
- "Invalid input"
- Technický žargón

✅ DOBRE:
- Čo sa stalo (zrozumiteľne)
- Prečo sa to stalo (ak relevantné)
- Čo má používateľ robiť
- Akcia na vyriešenie
```

### Error Message Template

```
[Čo sa stalo]. [Čo robiť].

Príklady:
"Nepodarilo sa uložiť zmeny. Skúste to znova."
"Email je už registrovaný. Prihláste sa alebo použite iný email."
"Súbor je príliš veľký. Maximum je 10 MB."
```

### Error Types

| Typ | Zobrazenie | Príklad |
|-----|------------|---------|
| Field error | Inline pod inputom | "Email nie je platný" |
| Form error | Banner nad formulárom | "Opravte chyby nižšie" |
| Action error | Toast/modal | "Nepodarilo sa odoslať" |
| Page error | Celá stránka | 404, 500 pages |
| Network error | Banner/toast | "Ste offline" |

### Error Prevention

```
Lepšie ako error handling je error prevention:

1. Inline validácia pred odoslaním
2. Confirm dialogy pre deštruktívne akcie
3. Undo namiesto "Are you sure?"
4. Auto-save
5. Jasné constraints (max length, file size)
```

---

## 8. Formuláre

### Input Design

```css
/* Minimálna výška pre touch */
.input {
  min-height: 44px;
  padding: 12px 16px;
  font-size: 16px; /* Prevents zoom on iOS */
}

/* Jasné states */
.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input.error {
  border-color: var(--error);
}
```

### Label Best Practices

```html
<!-- ✅ DOBRE — Label nad inputom -->
<div class="field">
  <label for="email">Email</label>
  <input type="email" id="email" />
</div>

<!-- ❌ ZLE — Placeholder ako label -->
<input placeholder="Enter your email" />
```

### Form Layout

```
✅ PRAVIDLÁ:
- One column layout (nie viac-stĺpcové formuláre)
- Label nad inputom (nie vedľa)
- Logické zoskupenie polí
- Primárna akcia vpravo/dole
- Sekundárna akcia vľavo (Cancel, Back)
```

### Input Types

Vždy použi správny type:

```html
<input type="email" />      <!-- Email keyboard -->
<input type="tel" />        <!-- Phone keyboard -->
<input type="number" />     <!-- Number keyboard -->
<input type="url" />        <!-- URL keyboard -->
<input type="search" />     <!-- Search with clear -->
<input type="date" />       <!-- Native date picker -->
<input type="password" />   <!-- Hidden + password managers -->
```

### Validation

```
Kedy validovať:
- Email format — on blur
- Required fields — on blur alebo submit
- Password strength — on input (real-time)
- Async validation (username taken) — on blur s debounce
```

```css
/* Error state */
.field.error .input {
  border-color: var(--error);
}

.field.error .message {
  color: var(--error);
  font-size: 14px;
  margin-top: 4px;
}

/* Success state (optional) */
.field.valid .input {
  border-color: var(--success);
}
```

---

## 9. Responzivita

### Breakpoints

```css
/* Mobile-first breakpoints */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Mobile-First Approach

```css
/* ✅ DOBRE — Mobile-first */
.element {
  padding: 16px;          /* Mobile default */
}
@media (min-width: 768px) {
  .element {
    padding: 24px;        /* Tablet+ */
  }
}

/* ❌ ZLE — Desktop-first */
.element {
  padding: 24px;
}
@media (max-width: 767px) {
  .element {
    padding: 16px;
  }
}
```

### Touch Targets

```css
/* Minimum 44x44px pre touch */
.button, .link, .icon-button {
  min-width: 44px;
  min-height: 44px;
}

/* Spacing medzi touch targets */
.nav-item + .nav-item {
  margin-left: 8px; /* Minimum */
}
```

### Responsive Typography

```css
/* Fluid typography */
html {
  font-size: clamp(14px, 0.5vw + 12px, 18px);
}

h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
```

### Content Reflow

```
✅ PRAVIDLÁ:
- Horizontal scroll je zakázaný (okrem tabuliek, code)
- Grid items sa preusporiadajú (nie zmenšujú donekonečna)
- Navigácia sa zbalí do hamburger menu
- Sidebars sa stanú bottom sheets alebo modals
- Tabuľky sa stanú cards alebo horizontal scroll
```

---

## 10. Accessibility

### Keyboard Navigation

```
Tab — Move forward
Shift+Tab — Move backward
Enter/Space — Activate
Escape — Close/Cancel
Arrow keys — Navigate within component
```

```css
/* Viditeľný focus */
:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

/* Nerušiť mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Focus Management

```javascript
// Po otvorení modalu
modal.querySelector('[autofocus]')?.focus();

// Po zatvorení modalu
triggerElement.focus();

// Focus trap v modali
// Použij hotový package ako focus-trap
```

### ARIA Basics

```html
<!-- Buttons bez textu -->
<button aria-label="Zavrieť">
  <svg>...</svg>
</button>

<!-- Stavy -->
<button aria-pressed="true">Toggle</button>
<div aria-expanded="false">Accordion</div>
<div aria-busy="true">Loading...</div>

<!-- Live regions -->
<div aria-live="polite">Status updates</div>
<div aria-live="assertive">Errors</div>

<!-- Hidden decorative elements -->
<svg aria-hidden="true">...</svg>
```

### Color Blind Friendly

```
❌ ZLE:
- Červená/zelená ako jediný indikátor
- Farba bez dodatočného indikátora

✅ DOBRE:
- Ikony + farby
- Text + farby
- Patterns + farby
```

### Screen Reader Testing

Testuj s:
- VoiceOver (Mac/iOS)
- NVDA (Windows, free)
- JAWS (Windows)

---

## 11. Performance

### Image Optimization

```html
<!-- Responsive images -->
<img 
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  src="image-800.jpg"
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
/>
```

### Layout Shift Prevention

```html
<!-- Vždy definuj rozmery -->
<img width="800" height="600" />
<video width="1920" height="1080"></video>
<iframe width="560" height="315"></iframe>

<!-- Alebo aspect-ratio -->
<style>
  .image-container {
    aspect-ratio: 16/9;
  }
</style>
```

### Font Loading

```css
/* Font display swap */
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

### CSS Performance

```css
/* ❌ ZLE — expensive selectors */
.nav ul li a span { }
*:nth-child(odd) { }

/* ✅ DOBRE — flat selectors */
.nav-link-text { }
.list-item--odd { }
```

### Lazy Loading

```javascript
// Native lazy loading
<img loading="lazy" />

// Intersection Observer pre komponenty
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadComponent(entry.target);
    }
  });
});
```

---

## 12. Konzistencia

### Design Tokens

```css
:root {
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.15);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

### Component Consistency

```
Každý komponent rovnakého typu musí mať:
- Rovnaký padding/spacing
- Rovnaký border-radius
- Rovnaké shadows
- Rovnaké hover states
- Rovnaké transitions
```

### Z-Index Scale

```css
:root {
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-toast: 700;
  --z-tooltip: 800;
}
```

### Naming Conventions

```css
/* BEM alebo podobný systém */
.card { }
.card__header { }
.card__body { }
.card__footer { }
.card--featured { }
.card--compact { }

/* Utility classes */
.text-center { }
.mt-4 { }
.hidden { }
```

---

## 13. Micro-interactions

### Feedback Principles

```
Každá akcia potrebuje feedback:
1. Hover — "toto je klikateľné"
2. Click — "akcia prebieha"
3. Success — "hotovo"
4. Error — "niečo sa pokazilo"
```

### Button States

```css
.button {
  transition: all var(--transition-fast);
}

/* Hover feedback */
.button:hover {
  background: var(--primary-600);
}

/* Click feedback */
.button:active {
  transform: scale(0.98);
}

/* Loading state */
.button.loading {
  pointer-events: none;
  opacity: 0.7;
}

.button.loading::after {
  content: '';
  /* spinner styles */
}
```

### Form Feedback

```css
/* Input focus */
.input:focus {
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Valid input */
.input.valid {
  border-color: var(--success);
}
.input.valid + .icon-valid {
  opacity: 1;
}

/* Invalid input */
.input.error {
  border-color: var(--error);
}
```

### Toggle/Switch

```css
.toggle {
  transition: background var(--transition-fast);
}

.toggle-handle {
  transition: transform var(--transition-fast);
}

.toggle.active .toggle-handle {
  transform: translateX(20px);
}
```

### Skeleton to Content

```css
.skeleton {
  animation: pulse 1.5s ease-in-out infinite;
}

.content {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 14. Navigation a Information Architecture

### Primary Navigation

```
✅ PRAVIDLÁ:
- Max 7 položiek (5 je ideál)
- Najdôležitejšie položky vľavo/hore
- Aktívna položka jasne označená
- Konzistentná pozícia na všetkých stránkach
```

### Mobile Navigation

```
Patterns:
1. Hamburger menu — Univerzálne, ale menej discoverable
2. Tab bar (bottom) — Dobré pre 3-5 hlavných sekcií
3. Bottom sheet — Dobré pre sekundárne akcie
```

### Breadcrumbs

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Domov</a></li>
    <li><a href="/products">Produkty</a></li>
    <li aria-current="page">Detail produktu</li>
  </ol>
</nav>
```

### Link vs Button

```
LINK (<a>) — Navigácia na inú stránku/sekciu
BUTTON (<button>) — Akcia na aktuálnej stránke

❌ ZLE:
<a href="#" onclick="doAction()">Kliknite</a>

✅ DOBRE:
<button onclick="doAction()">Kliknite</button>
<a href="/products">Produkty</a>
```

### Page Structure

```
Každá stránka by mala mať:
1. Jasný title (H1)
2. Breadcrumb (ak je hlbšie v hierarchii)
3. Hlavný obsah
4. Jasné CTA
5. Sekundárnu navigáciu (ak potrebné)
```

---

## Checklist pred deployom

### Layout & Spacing
- [ ] Všetky spacing hodnoty sú z definovaného scale
- [ ] Konzistentné gutters a margins
- [ ] Správna vertical rhythm

### Typography
- [ ] Jasná vizuálna hierarchia
- [ ] Čitateľná veľkosť textu (min 16px body)
- [ ] Správne line-heights
- [ ] Max-width na textových blokoch

### Colors & Contrast
- [ ] Contrast ratio minimálne 4.5:1 pre text
- [ ] Contrast ratio minimálne 3:1 pre UI elementy
- [ ] Farby nie sú jediný indikátor

### Interactions
- [ ] Všetky interaktívne elementy majú hover state
- [ ] Všetky elementy majú focus state
- [ ] Žiadne scale/transform, ktoré menia layout
- [ ] Správne cursor states

### Animations
- [ ] Animácie len na transform a opacity
- [ ] Rýchle transitions (150-300ms)
- [ ] prefers-reduced-motion support

### States
- [ ] Loading states pre všetky async operácie
- [ ] Empty states pre prázdne zoznamy
- [ ] Error states s jasným messaging
- [ ] Disabled states pre neaktívne elementy

### Forms
- [ ] Správne input types
- [ ] Labels na všetkých inputoch
- [ ] Inline validácia
- [ ] Jasné error messages
- [ ] Min 44px touch targets

### Responsivity
- [ ] Funguje na mobile (375px)
- [ ] Funguje na tablet (768px)
- [ ] Funguje na desktop (1280px+)
- [ ] Žiadny horizontal scroll

### Accessibility
- [ ] Keyboard navigácia funguje
- [ ] Focus je viditeľný
- [ ] Screen reader friendly
- [ ] ARIA labels kde potrebné

### Performance
- [ ] Obrázky majú width/height
- [ ] Lazy loading pre below-fold content
- [ ] Fonts sú optimalizované
- [ ] Žiadny CLS

### Consistency
- [ ] Všetky komponenty rovnakého typu vyzerajú rovnako
- [ ] Design tokens sú použité všade
- [ ] Z-index je podľa scale

---

## AI Prompt

```
ÚLOHA: Skontroluj a oprav UI/UX podľa best practices frameworku.

KONTROLUJ:

1. LAYOUT & SPACING
- Sú spacing hodnoty konzistentné (4/8px scale)?
- Je grid system dodržaný?

2. TYPOGRAPHY
- Je hierarchia jasná?
- Sú line-heights správne?
- Má text max-width?

3. INTERAKCIE
- Menia hover states layout? (scale/translate = ZLE)
- Majú všetky elementy hover + focus states?
- Sú transitions rýchle (150-300ms)?

4. ANIMÁCIE
- Animujú sa len transform/opacity?
- Je reduced-motion support?

5. STATES
- Sú loading states všade kde treba?
- Sú empty states pre prázdne zoznamy?
- Sú error messages zrozumiteľné?

6. FORMS
- Sú input types správne?
- Je validácia inline?
- Sú touch targets min 44px?

7. RESPONSIVITY
- Funguje na všetkých breakpoints?
- Nie je horizontal scroll?

8. ACCESSIBILITY
- Funguje keyboard?
- Je focus viditeľný?
- Sú ARIA labels?

9. KONZISTENCIA
- Sú rovnaké komponenty identické?
- Je z-index podľa scale?

VÝSTUP PRE KAŽDÝ PROBLÉM:
- Súbor: [názov]
- Riadok: [číslo]
- Problém: [popis]
- Riešenie: [konkrétny fix]
- Priorita: [critical/high/medium/low]

Zoraď problémy podľa priority.
```

---

## Quick Reference Card

```
╔══════════════════════════════════════════════════════════════╗
║                 UI/UX BEST PRACTICES QUICK REFERENCE          ║
╠══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SPACING           4, 8, 12, 16, 24, 32, 48, 64px            ║
║  FONT SIZES        12, 14, 16, 18, 20, 24, 30, 36, 48px      ║
║  LINE HEIGHTS      Headlines: 1.1-1.2 | Body: 1.5-1.6        ║
║  TEXT WIDTH        Max 65ch                                   ║
║  TOUCH TARGET      Min 44×44px                                ║
║  CONTRAST          Text: 4.5:1 | UI: 3:1                     ║
║                                                               ║
║  ───────────────────────────────────────────────────────     ║
║                                                               ║
║  HOVER STATES                                                 ║
║  ✅ Shadow, border, background color                          ║
║  ❌ Scale, translateY (breaks layout)                         ║
║                                                               ║
║  ───────────────────────────────────────────────────────     ║
║                                                               ║
║  ANIMATIONS                                                   ║
║  ✅ transform, opacity                                        ║
║  ❌ width, height, margin, padding, top, left                 ║
║  ⏱️  Micro: 100-150ms | Small: 150-200ms | Medium: 200-300ms  ║
║                                                               ║
║  ───────────────────────────────────────────────────────     ║
║                                                               ║
║  Z-INDEX SCALE                                                ║
║  Base: 1 | Dropdown: 100 | Sticky: 200 | Fixed: 300          ║
║  Modal backdrop: 400 | Modal: 500 | Toast: 700 | Tooltip: 800 ║
║                                                               ║
║  ───────────────────────────────────────────────────────     ║
║                                                               ║
║  EVERY INTERACTIVE ELEMENT NEEDS:                             ║
║  Default → Hover → Focus → Active → Disabled                  ║
║                                                               ║
║  EVERY LIST/TABLE NEEDS:                                      ║
║  Loading state → Empty state → Error state → Content          ║
║                                                               ║
║  EVERY ERROR MESSAGE:                                         ║
║  [Čo sa stalo]. [Čo robiť].                                  ║
║                                                               ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Changelog

### v1.0 (2025-01)
- Prvá verzia frameworku
- Kompletné pravidlá pre všetky oblasti UI/UX
- Checklist a AI prompt

---

## Súvisiace dokumenty

- `ui-text-framework.md` — Pravidlá pre písanie textov v UI

---

## Licencia

Voľne použiteľné. Zdieľajte ďalej.

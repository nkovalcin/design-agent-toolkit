# UI Text Framework

> Pravidlá pre vizuálne čistý a profesionálny text v UI/UX dizajne.
> Verzia 1.0

---

## Obsah

1. [Základný problém](#základný-problém)
2. [Princípy](#princípy)
3. [Pravidlá podľa typu elementu](#pravidlá-podľa-typu-elementu)
4. [Vzorce pre písanie](#vzorce-pre-písanie)
5. [Checklist pred deployom](#checklist-pred-deployom)
6. [AI Prompt](#ai-prompt-pre-automatickú-opravu)
7. [CSS podporné pravidlá](#css-podporné-pravidlá)

---

## Základný problém

Každý text na webe existuje v **bounding boxe** (kontajner, karta, hero sekcia, modal). Text sa píše zľava doprava a automaticky zalamuje podľa šírky kontajnera.

**Bez premysleného písania vznikajú:**

- Nerovnomerné riadky (jeden má 10 slov, druhý 2)
- **Siroty** — osamotené slová na poslednom riadku
- **Vdovy** — prvý riadok odseku osamotený na konci stránky
- Predložky/spojky na konci riadku ("a", "v", "na", "the", "and")
- Vizuálne nevyvážený, neprofesionálny vzhľad

**Realita:** Text nie je len obsah. Text je vizuálny element s tvarom.

---

## Princípy

### Princíp #1: Text má tvar

Každý textový blok treba vnímať ako vizuálny element — rovnako ako logo, obrázok alebo ikonu. Tvar textu ovplyvňuje ako profesionálne pôsobí celý dizajn.

### Princíp #2: Každý riadok = kompletná myšlienka

Zalomenie riadku nie je náhodné. Ideálne každý riadok končí na logickom mieste — koniec vety, koniec frázy, pred spojkou.

### Princíp #3: Píš pre kontajner

Vždy maj na pamäti šírku priestoru kde text bude. 300px karta vyžaduje iný prístup ako full-width hero.

### Princíp #4: Kontroluj všetky breakpointy

Text ktorý vyzerá dobre na desktope môže byť katastrofa na mobile. Testuj na všetkých veľkostiach.

---

## Pravidlá podľa typu elementu

### Headlines (H1, H2, H3)

**Pravidlo:** Max 4-6 slov na riadok, ideálne 2 riadky podobnej dĺžky.

```
❌ ZLE:
"Podporujeme ľudí v núdzi a pomáhame im nájsť cestu späť"
→ Jeden dlhý riadok alebo náhodne zalomený

✅ DOBRE:
"Podporujeme ľudí v núdzi.
Pomáhame im nájsť cestu späť."
→ Dva vyvážené riadky, každý má jasný statement
```

**Techniky:**
- Rozdeľ na 2 kratšie vety (bodka)
- Použi čiarku + nový riadok
- Použi `<br>` na vynútenie zlomu
- Preformuluj na kratšie znenie

---

### Subheadlines / Popisy pod headline

**Pravidlo:** 1-2 riadky, každý riadok = kompletná myšlienka.

```
❌ ZLE:
"Či už potrebujete pomoc, chcete sa zapojiť ako dobrovoľník, 
alebo hľadáte spôsob ako podporiť dobrú vec"
→ Príliš dlhé, náhodné zalomenie, končí zle

✅ DOBRE:
"Potrebujete pomoc alebo chcete pomôcť?
Sme tu pre vás."
```

**Pravidlo pre zarovnanie:**

| Zarovnanie | Požiadavka |
|------------|------------|
| `text-align: left` | Riadky môžu byť rôzne dlhé, ale musia končiť prirodzene |
| `text-align: center` | Riadky MUSIA byť podobne dlhé |
| `text-align: right` | Rovnaké ako center — vyžaduje symetriu |

---

### CTA sekcie

**Pravidlo:** Krátke, akčné, max 2 riadky.

```
❌ ZLE:
"Pridajte sa k nám a spoločne môžeme dosiahnuť skutočnú 
zmenu v životoch ľudí ktorí to potrebujú"

✅ DOBRE:
"Pridajte sa k nám.
Spoločne dokážeme viac."
```

**CTA text musí byť:**
- Akčný (sloveso na začiatku)
- Konkrétny (čo sa stane)
- Krátky (max 8-10 slov celkom)

---

### Karty / Boxy

**Pravidlo:** Počítaj s fixnou šírkou, píš pre ňu.

Pre kartu `max-width: 300px`:
- Headline: max 3-4 slová
- Popis: max 2 krátke vety alebo 1 rozdelená

```
❌ ZLE (v karte 300px):
Headline: "Komplexná podpora pre jednotlivcov a rodiny"
Popis: "Poskytujeme široké spektrum služieb od sociálneho 
poradenstva až po materiálnu pomoc"

✅ DOBRE:
Headline: "Podpora pre rodiny"
Popis: "Sociálne poradenstvo.
Materiálna pomoc."
```

---

### Odseky (body text)

**Pravidlo:** Max-width 65ch (45-75 znakov je ideál pre čitateľnosť).

```css
p {
  max-width: 65ch;
}
```

Aj pri správnej šírke kontroluj:
- Posledný riadok — nie je tam sirota?
- Začiatok riadkov — nekončí predchádzajúci na predložke?

---

### Buttony

**Pravidlo:** 1-3 slová, jasná akcia.

```
❌ ZLE:
"Kliknite sem pre viac informácií"
"Zobraziť všetky naše služby"

✅ DOBRE:
"Zistiť viac"
"Naše služby"
"Kontaktovať"
```

---

### Navigácia

**Pravidlo:** Konzistentná dĺžka položiek.

```
❌ ZLE:
"Domov" | "O našej spoločnosti" | "Služby" | "Kontaktujte nás prosím"

✅ DOBRE:
"Domov" | "O nás" | "Služby" | "Kontakt"
```

---

### Formulárové labely

**Pravidlo:** Krátke, jasné, bez zbytočných slov.

```
❌ ZLE:
"Prosím zadajte vašu emailovú adresu"
"Vaše celé meno a priezvisko"

✅ DOBRE:
"Email"
"Meno a priezvisko"
```

---

## Vzorce pre písanie

### Vzorec A: Dve vety

```
[Statement 1].
[Statement 2].

Príklad:
"Pomáhame ľuďom v núdzi.
Budujeme lepšiu komunitu."
```

**Použitie:** Headlines, CTA, hero sekcie

---

### Vzorec B: Čiarka + pokračovanie

```
[Časť 1],
[časť 2].

Príklad:
"Pre tých, čo potrebujú pomoc,
sme tu každý deň."
```

**Použitie:** Subheadlines, poetickejší tón

---

### Vzorec C: Otázka + odpoveď

```
[Otázka]?
[Odpoveď].

Príklad:
"Chcete pomôcť?
Ukážeme vám ako."
```

**Použitie:** CTA sekcie, engagement

---

### Vzorec D: Kontrast

```
[Koncept A]. [Koncept B].

Príklad:
"Malé gesto. Veľký dopad."
"Jednoduchý nápad. Skutočná zmena."
```

**Použitie:** Headlines, slogany, impakt

---

### Vzorec E: Číslo + statement

```
[Číslo] [merná jednotka].
[Čo to znamená].

Príklad:
"500+ rodín.
Ktorým sme pomohli začať odznova."
```

**Použitie:** Štatistiky, social proof

---

### Vzorec F: Časový kontrast

```
[Pred/Problém].
[Po/Riešenie].

Príklad:
"Včera problém.
Dnes riešenie."
```

**Použitie:** Before/after sekcie, transformácie

---

## Checklist pred deployom

Pre **KAŽDÚ** sekciu s textom prejdi tento checklist:

### Vizuálna kontrola

- [ ] Text vyzerá ako vyvážený tvar (nie ako náhodná kopa slov)
- [ ] Posledný riadok má aspoň 2-3 slová
- [ ] Žiadny riadok nekončí na: a, i, v, k, s, z, o, u, na, do, od, pre, pri, po, za, so, the, a, an, of, to, in, on, at, by, or, and
- [ ] Pri center-aligned texte sú riadky podobne dlhé

### Responzívna kontrola

- [ ] Desktop (1920px) — vyzerá dobre?
- [ ] Laptop (1366px) — vyzerá dobre?
- [ ] Tablet (768px) — vyzerá dobre?
- [ ] Mobile (375px) — vyzerá dobre?

### Obsahová kontrola

- [ ] Každý riadok je kompletná myšlienka
- [ ] Text je zrozumiteľný aj bez kontextu
- [ ] CTA je jasné a akčné
- [ ] Žiadne zbytočné slová

---

## AI Prompt pre automatickú opravu

Skopíruj tento prompt keď chceš aby AI prepísala texty v projekte:

```
ÚLOHA: Analyzuj a prepíš všetky texty v projekte podľa UI Text Frameworku.

KONTEXT:
- Každý text je v kontajneri s obmedzenou šírkou
- Text sa nesmie náhodne zalamovať
- Každý riadok musí byť premyslený vizuálny element

ZAKÁZANÉ:
- Siroty (osamotené slová na konci)
- Predložky/spojky na konci riadku (a, i, v, k, s, z, na, do, od, pre, the, and, or, at, by)
- Nerovnomerné riadky pri center-aligned texte
- Príliš dlhé headlines (max 2 riadky)

PRAVIDLÁ PODĽA TYPU:
1. Headlines: Max 2 riadky podobnej dĺžky, každý = kompletná myšlienka
2. Subheadlines: Max 2 riadky, použi bodku/čiarku na prirodzené rozdelenie  
3. CTA texty: Krátke, akčné, max 2 riadky, max 10 slov
4. Karty (~300px): Headline max 4 slová, popis max 2 krátke vety
5. Buttony: 1-3 slová

TECHNIKY:
- Rozdeľ dlhé vety na 2 kratšie (bodka)
- Použi čiarku + zalomenie pre poetický efekt
- Preformuluj aby každý riadok bol ucelená myšlienka
- Skráť kde sa dá bez straty významu

VZORCE:
A) Dve vety: "[Statement 1]. [Statement 2]."
B) Čiarka: "[Časť 1], [časť 2]."
C) Otázka: "[Otázka]? [Odpoveď]."
D) Kontrast: "[Krátke]. [Krátke]."

VÝSTUP PRE KAŽDÚ ZMENU:
- Súbor: [názov]
- Sekcia: [kde v súbore]
- Pred: [pôvodný text]
- Po: [upravený text]  
- Dôvod: [stručné vysvetlenie]

PROCES:
1. Prejdi každý súbor systematicky
2. Identifikuj všetky textové elementy
3. Analyzuj aktuálny stav vs. pravidlá
4. Navrhni konkrétne úpravy
5. Vysvetli prečo
```

---

## CSS podporné pravidlá

### Základné typografické CSS

```css
/* Optimálna dĺžka riadku */
p, li, blockquote {
  max-width: 65ch;
}

/* Vyvážené headlines (moderné prehliadače) */
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/* Prevencia sirôt v odstavoch (Chromium 117+) */
p {
  text-wrap: pretty;
}

/* Kontrola vdov a sirôt pri tlači/PDF */
p {
  widows: 2;
  orphans: 2;
}

/* Automatické delenie slov ako fallback */
p {
  hyphens: auto;
  -webkit-hyphens: auto;
}
```

### Non-breaking spaces v HTML

Pre manuálnu kontrolu predložiek:

```html
<!-- Namiesto -->
<p>Toto je text a tu je problém</p>

<!-- Použi -->
<p>Toto je text a&nbsp;tu je problém</p>
```

### JavaScript helper funkcia

```javascript
/**
 * Pridá non-breaking space za krátke slová
 * Použitie: preventOrphans("Text a nejaké slová")
 */
const preventOrphans = (text) => {
  const shortWords = [
    // Slovenčina/Čeština
    'a', 'i', 'o', 'u', 'v', 'k', 's', 'z', 
    'na', 'do', 'od', 'pre', 'pri', 'po', 'so', 'za', 'nad', 'pod',
    // Angličtina
    'the', 'a', 'an', 'of', 'to', 'in', 'on', 'at', 'by', 'or', 'and'
  ];
  
  let result = text;
  shortWords.forEach(word => {
    const regex = new RegExp(`\\b(${word})\\s`, 'gi');
    result = result.replace(regex, `$1\u00A0`); // \u00A0 = &nbsp;
  });
  
  return result;
};
```

### React/Next.js komponent

```tsx
interface TextProps {
  children: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3';
  preventOrphans?: boolean;
}

export function Text({ 
  children, 
  as: Tag = 'p', 
  preventOrphans = true 
}: TextProps) {
  const processedText = preventOrphans 
    ? preventOrphansUtil(children) 
    : children;
    
  return <Tag dangerouslySetInnerHTML={{ __html: processedText }} />;
}
```

---

## Príklady podľa typu stránky

### Landing Page / Homepage

| Sekcia | Max riadky | Max slov/riadok | Poznámka |
|--------|-----------|-----------------|----------|
| Hero headline | 2 | 4-6 | Impaktné, krátke |
| Hero subheadline | 2 | 6-8 | Vysvetľuje headline |
| Feature headlines | 1 | 3-5 | Scannable |
| Feature popisy | 2-3 | 8-10 | Konkrétne benefity |
| CTA headline | 1-2 | 4-6 | Akčné |
| CTA popis | 1-2 | 6-8 | Urgencia/hodnota |

### About Page

| Sekcia | Max riadky | Max slov/riadok | Poznámka |
|--------|-----------|-----------------|----------|
| Page headline | 2 | 4-6 | Misia/hodnota |
| Intro paragraph | 3-4 | 10-12 | Príbeh, ale stručný |
| Team member name | 1 | 2-3 | Meno + priezvisko |
| Team member role | 1 | 2-4 | Pozícia |
| Team member bio | 2-3 | 10-12 | Relevantné info |

### Contact Page

| Sekcia | Max riadky | Max slov/riadok | Poznámka |
|--------|-----------|-----------------|----------|
| Page headline | 1-2 | 3-5 | Priateľské |
| Contact info | 1 per item | - | Jasné, scannable |
| Form labels | 1 | 1-3 | Minimalistické |
| Submit button | 1 | 1-3 | Akčné |

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════╗
║                    UI TEXT QUICK RULES                      ║
╠═══════════════════════════════════════════════════════════╣
║                                                             ║
║  HEADLINES      2 riadky max, 4-6 slov/riadok              ║
║  SUBHEADLINES   2 riadky max, kompletné myšlienky          ║
║  CTA            10 slov max, akčné                          ║
║  KARTY          Headline 4 slová, popis 2 vety             ║
║  BUTTONY        1-3 slová                                   ║
║  ODSEKY         max-width: 65ch                            ║
║                                                             ║
║  ─────────────────────────────────────────────────────     ║
║                                                             ║
║  ZAKÁZANÉ NA KONCI RIADKU:                                 ║
║  SK: a, i, v, k, s, z, na, do, od, pre, pri, po, za       ║
║  EN: the, a, an, of, to, in, on, at, by, or, and          ║
║                                                             ║
║  ─────────────────────────────────────────────────────     ║
║                                                             ║
║  VZORCE:                                                    ║
║  A) [Veta]. [Veta].           "Pomáhame. Meníme."         ║
║  B) [Časť], [časť].           "Pre vás, každý deň."       ║
║  C) [Otázka]? [Odpoveď].      "Chcete vedieť? Ukážeme."   ║
║  D) [Krátke]. [Krátke].       "Malý krok. Veľká zmena."   ║
║                                                             ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Changelog

### v1.0 (2025-01)
- Prvá verzia frameworku
- Základné pravidlá pre všetky typy elementov
- AI prompt pre automatickú opravu
- CSS a JavaScript helpers

---

## Autor

UI Text Framework vytvorený ako praktický nástroj pre developerov a dizajnérov, ktorí chcú že ich texty vyzerali profesionálne a premyslene.

**Licencia:** Voľne použiteľné, zdieľajte ďalej.

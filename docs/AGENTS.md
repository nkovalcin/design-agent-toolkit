# Design Agents Documentation

This document provides detailed information about each specialized agent in the Design Agent Toolkit.

## Agent Overview

The toolkit uses a multi-agent architecture where each agent is an expert in a specific design domain. The main orchestrator can delegate tasks to these specialized agents based on the requirements.

---

## 🎨 UI/UX Expert

**ID:** `ui-ux-expert`

**Best for:**
- General UI/UX reviews
- Layout and spacing audits
- Color accessibility checks
- Form design evaluation
- Responsive design analysis

**Key Knowledge Areas:**
- 8px grid system and spacing scales
- WCAG color contrast requirements
- Form best practices (labels, validation, touch targets)
- Mobile-first responsive design
- Visual hierarchy principles

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './landing-page',
  task: 'Review the contact form for usability and accessibility issues',
});
```

---

## 🏗️ Design System Expert

**ID:** `design-system-expert`

**Best for:**
- Design token architecture
- Component library structure
- Micro-interaction design
- Motion and animation guidelines

**Key Knowledge Areas:**
- Token hierarchy (primitive → semantic → component)
- Optical corrections and visual balance
- Motion design principles (timing, easing)
- Psychological principles (Fitts's Law, Hick's Law, Miller's Law)
- Atomic design methodology

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './design-system',
  task: 'Audit our design tokens for consistency and naming conventions',
});
```

---

## 📐 Layout Expert

**ID:** `layout-expert`

**Best for:**
- Creative layout solutions
- Bento grid designs
- Scroll animations
- Image and video handling
- Breaking conventional grid patterns

**Key Knowledge Areas:**
- CSS Grid and advanced layouts
- Asymmetric and editorial designs
- Photography treatment in UI
- Icon systems and sizing
- Performance optimization for media

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './marketing-site',
  task: 'Suggest creative layout alternatives for the features section',
});
```

---

## ✍️ Typography Expert

**ID:** `typography-expert`

**Best for:**
- Font selection and pairing
- Typography scale development
- Readability optimization
- Text styling edge cases

**Key Knowledge Areas:**
- Modular typography scales
- Line height and length optimization
- Orphan/widow prevention
- Font loading strategies
- Variable fonts and OpenType features

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './blog',
  task: 'Review article typography for optimal readability',
});
```

---

## 📈 Marketing Expert

**ID:** `marketing-expert`

**Best for:**
- Landing page optimization
- CTA effectiveness
- Copywriting review
- Conversion analysis

**Key Knowledge Areas:**
- Copywriting frameworks (AIDA, PAS, BAB)
- Headline principles
- Social proof strategies
- Trust elements
- Persuasion psychology

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './landing-page',
  task: 'Optimize the hero section for higher conversion rates',
});
```

---

## 📋 Project Strategist

**ID:** `project-strategist`

**Best for:**
- Project kickoff planning
- Brand strategy alignment
- Deliverables scoping
- Stakeholder communication

**Key Knowledge Areas:**
- Discovery phase processes
- Brand voice and tone
- Design decision frameworks
- Timeline management

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './client-project',
  task: 'Create a design kickoff checklist for this project',
});
```

---

## 🔍 Design Code Reviewer

**ID:** `design-code-reviewer`

**Best for:**
- Pull request reviews
- Code quality for design
- Accessibility compliance in code
- Performance optimization

**Key Knowledge Areas:**
- CSS best practices
- Semantic HTML
- ARIA usage
- Animation performance
- Common anti-patterns

**Example Task:**
```typescript
await runDesignAgent({
  projectPath: './src/components/Button',
  task: 'Review this Button component for design system compliance',
});
```

---

## Combining Agents

The main orchestrator automatically delegates to the appropriate agent based on the task. You can also request specific expertise:

```typescript
await runDesignAgent({
  projectPath: './my-app',
  task: `
    Using the typography-expert and marketing-expert:
    Review the blog post template for readability and engagement.
  `,
});
```

## Framework Reference

Each agent can access the bundled framework documents for detailed guidance:

| Framework | Contents |
|-----------|----------|
| `ui-ux-best-practices.md` | Core UI/UX principles |
| `advanced-ui-ux.md` | Design systems, tokens, psychology |
| `advanced-layout-media.md` | Creative layouts, media handling |
| `ui-text.md` | Typography deep dive |
| `marketing-conversion.md` | Conversion optimization |
| `project-kickoff.md` | Project planning |

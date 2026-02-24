# Design Agent Toolkit

[![npm version](https://img.shields.io/npm/v/design-agent-toolkit.svg)](https://www.npmjs.com/package/design-agent-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Claude SDK](https://img.shields.io/badge/Claude%20Agent%20SDK-0.1.76-purple.svg)](https://github.com/anthropics/claude-agent-sdk)

> AI-powered design assistant using Claude's multi-agent architecture. Get expert UI/UX reviews, accessibility audits, and design system guidance.

## Table of Contents

- [Features](#features)
- [Available Agents](#available-agents)
- [Included Frameworks](#included-frameworks)
- [Quick Start](#quick-start)
- [Examples](#examples)
- [Configuration](#configuration)
- [Advanced Usage](#advanced-usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **7 Specialized AI Agents** — each expert in a specific design domain
- **Comprehensive Frameworks** — 200KB+ of battle-tested UI/UX best practices
- **Built on Claude Agent SDK** — leverages Anthropic's official agent framework
- **CLI & Programmatic API** — use from terminal or integrate into your workflow
- **TypeScript First** — full type safety and great DX

## Available Agents

| Agent | Expertise |
|-------|-----------|
| `ui-ux-expert` | Layout, spacing, colors, forms, accessibility, responsive design |
| `design-system-expert` | Design tokens, components, micro-interactions, motion |
| `layout-expert` | Bento grids, scroll animations, photography, iconography |
| `typography-expert` | Font pairing, readability, text hierarchy |
| `marketing-expert` | Copywriting, CTAs, conversion optimization |
| `design-code-reviewer` | Code review for design compliance |
| `project-strategist` | Project planning, brand strategy |

## Included Frameworks

The toolkit includes comprehensive design frameworks covering:

- **UI/UX Best Practices** — core principles, 8px grid, WCAG accessibility
- **Advanced UI/UX** — design tokens, optical corrections, Fitts's Law, Hick's Law
- **Layout & Media** — CSS Grid, Bento layouts, responsive images, video
- **Typography** — modular scale, fluid typography, font loading
- **Marketing & Conversion** — AIDA, PAS, social proof, persuasion psychology
- **Project Kickoff** — discovery, stakeholder alignment, deliverables

## Quick Start

### Installation

```bash
npm install design-agent-toolkit
# or
pnpm add design-agent-toolkit
# or
yarn add design-agent-toolkit
```

### CLI Usage

```bash
# Set your API key
export ANTHROPIC_API_KEY=your_key_here

# Run a design review
npx design-agent-toolkit ./my-project "Review the landing page for UI/UX issues"

# Check accessibility
npx design-agent-toolkit ./src/components "Audit form components for accessibility"

# Get help
npx design-agent-toolkit --help
```

### Programmatic Usage

```typescript
import { runDesignAgent } from 'design-agent-toolkit';

const result = await runDesignAgent({
  projectPath: './my-project',
  task: 'Review the hero section for conversion optimization',
  verbose: true,
});

console.log(result.response);
console.log(`Cost: $${result.totalCostUsd}`);
```

### Streaming

```typescript
import { streamDesignAgent } from 'design-agent-toolkit';

for await (const chunk of streamDesignAgent({
  projectPath: './my-project',
  task: 'Analyze the component library structure',
})) {
  process.stdout.write(chunk);
}
```

## Examples

### Landing Page Review

```typescript
import { runDesignAgent } from 'design-agent-toolkit';

await runDesignAgent({
  projectPath: './landing-page',
  task: `
    Review the landing page with focus on:
    1. Visual hierarchy and CTA placement
    2. Mobile responsiveness
    3. Loading performance
    4. Accessibility compliance
  `,
});
```

### Component Audit

```typescript
await runDesignAgent({
  projectPath: './src/components',
  task: 'Audit all form components for WCAG 2.1 AA compliance',
  model: 'claude-opus-4-5-20251101', // Use Opus for deep analysis
});
```

### Design System Check

```typescript
await runDesignAgent({
  projectPath: './design-system',
  task: `
    Review the design tokens and component library:
    - Are tokens following naming conventions?
    - Is the spacing scale consistent?
    - Are color contrast ratios WCAG compliant?
  `,
});
```

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `projectPath` | `string` | required | Path to the project to analyze |
| `task` | `string` | required | The design task or question |
| `model` | `string` | `claude-sonnet-4-5-20250929` | Claude model to use |
| `frameworksPath` | `string` | bundled | Custom frameworks directory |
| `maxTurns` | `number` | `50` | Maximum agent turns |
| `maxBudgetUsd` | `number` | `10.0` | Maximum cost in USD |
| `verbose` | `boolean` | `false` | Enable detailed logging |
| `additionalDirectories` | `string[]` | `[]` | Extra directories to access |

### Environment Variables

```bash
ANTHROPIC_API_KEY=sk-ant-...  # Required: Your Anthropic API key
```

## Advanced Usage

### Using Specific Agents

```typescript
import { getAgent, DESIGN_AGENTS } from 'design-agent-toolkit';

// Get a specific agent's config
const uiExpert = getAgent('ui-ux-expert');
console.log(uiExpert.prompt);

// List all agents
import { listAgents } from 'design-agent-toolkit';
console.log(listAgents());
// ['ui-ux-expert', 'design-system-expert', ...]
```

### Custom Frameworks

```typescript
await runDesignAgent({
  projectPath: './my-project',
  task: 'Review using our custom guidelines',
  frameworksPath: './our-design-system/docs',
});
```

## Project Structure

```
design-agent-toolkit/
├── src/
│   ├── agents/           # Specialized design agents
│   │   ├── ui-ux-expert.ts
│   │   ├── design-system-expert.ts
│   │   ├── layout-expert.ts
│   │   ├── typography-expert.ts
│   │   ├── marketing-expert.ts
│   │   ├── project-strategist.ts
│   │   └── design-code-reviewer.ts
│   ├── types.ts          # TypeScript definitions
│   ├── index.ts          # Main exports
│   └── cli.ts            # CLI entry point
├── frameworks/           # UI/UX best practice documents
│   ├── ui-ux-best-practices.md
│   ├── advanced-ui-ux.md
│   ├── advanced-layout-media.md
│   ├── ui-text.md
│   ├── marketing-conversion.md
│   └── project-kickoff.md
└── examples/             # Usage examples
```

## Contributing

Contributions are welcome! Please read our contributing guidelines first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

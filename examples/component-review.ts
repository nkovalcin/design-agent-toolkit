/**
 * Example: Component Library Review
 *
 * This example shows how to review a component library
 * for design system compliance and consistency.
 *
 * Run with: npx ts-node examples/component-review.ts ./src/components
 */

import { runDesignAgent } from '../src/index.js';

async function main() {
  const targetPath = process.argv[2] || './src/components';

  console.log('🧩 Starting Component Library Review...\n');

  const result = await runDesignAgent({
    projectPath: targetPath,
    task: `
      Review this component library for design system best practices.

      ## Design Tokens
      - Are colors defined as tokens, not raw hex values?
      - Is spacing using a consistent scale (4px/8px base)?
      - Are typography styles defined and reused?
      - Are there semantic tokens (e.g., color-text-primary)?

      ## Component Architecture
      - Do components follow atomic design principles?
      - Are props well-typed with TypeScript?
      - Do components handle all states (loading, error, empty)?
      - Is there prop drilling that should be context?

      ## CSS/Styling
      - Is there consistent use of CSS methodology?
      - Are responsive breakpoints standardized?
      - Is there unnecessary CSS specificity?
      - Are animations using performant properties?

      ## Consistency Check
      - Do similar components have similar APIs?
      - Are naming conventions consistent?
      - Is documentation adequate?
      - Are there duplicate or near-duplicate components?

      Provide a summary table at the end with:
      | Area | Status | Priority Items |
    `,
    verbose: true,
  });

  console.log('\n📋 Review Summary Generated');
}

main().catch(console.error);

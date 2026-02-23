/**
 * Example: Accessibility Audit
 *
 * This example demonstrates how to run an accessibility audit
 * on React/HTML components using the design agent toolkit.
 *
 * Run with: npx ts-node examples/accessibility-audit.ts ./src/components
 */

import { runDesignAgent } from '../src/index.js';

async function main() {
  const targetPath = process.argv[2] || './src/components';

  console.log('♿ Starting Accessibility Audit...\n');
  console.log(`📁 Target: ${targetPath}\n`);

  const result = await runDesignAgent({
    projectPath: targetPath,
    task: `
      Perform a comprehensive WCAG 2.1 AA accessibility audit.

      Check for:

      ## Perceivable
      - [ ] All images have meaningful alt text (or alt="" for decorative)
      - [ ] Color is not the only way to convey information
      - [ ] Text has minimum 4.5:1 contrast ratio (3:1 for large text)
      - [ ] UI components have 3:1 contrast against background
      - [ ] Text can be resized up to 200% without loss of content

      ## Operable
      - [ ] All interactive elements are keyboard accessible
      - [ ] Focus is visible and follows logical order
      - [ ] No keyboard traps exist
      - [ ] Skip links available for repeated content
      - [ ] Touch targets are at least 44x44 CSS pixels

      ## Understandable
      - [ ] Labels are associated with form inputs
      - [ ] Error messages are clear and specific
      - [ ] Instructions don't rely solely on sensory characteristics
      - [ ] Language is specified on the page

      ## Robust
      - [ ] HTML is valid and semantic
      - [ ] ARIA is used correctly (only when necessary)
      - [ ] Custom components have appropriate roles
      - [ ] Status messages use aria-live regions

      For each issue found:
      1. Describe the problem
      2. Explain the impact on users
      3. Provide the fix with code example
      4. Rate severity: Critical / Major / Minor
    `,
    verbose: true,
    model: 'claude-sonnet-4-5-20250929',
  });

  console.log('\n' + '═'.repeat(60));
  console.log('\n✅ Audit Complete!\n');
}

main().catch(console.error);

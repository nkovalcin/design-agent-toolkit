/**
 * Example: Landing Page Review
 *
 * This example shows how to use the design agent toolkit
 * to review a landing page for UI/UX best practices.
 *
 * Run with: npx ts-node examples/landing-page-review.ts
 */

import { runDesignAgent } from '../src/index.js';

async function main() {
  console.log('🎨 Starting Landing Page Review...\n');

  const result = await runDesignAgent({
    projectPath: process.argv[2] || '.',
    task: `
      Please review this landing page with focus on:

      1. **Visual Hierarchy**
         - Is there a clear focal point?
         - Does the eye flow naturally through the content?
         - Are CTAs prominently placed?

      2. **Conversion Optimization**
         - Is the value proposition clear above the fold?
         - Are there trust signals (testimonials, logos)?
         - Is the primary CTA compelling and visible?

      3. **Mobile Experience**
         - How does it adapt to mobile viewports?
         - Are touch targets at least 44x44px?
         - Is text readable without zooming?

      4. **Accessibility**
         - Do all images have alt text?
         - Is color contrast sufficient (WCAG AA)?
         - Can the page be navigated by keyboard?

      5. **Performance Considerations**
         - Are images optimized?
         - Is there lazy loading where appropriate?
         - Any render-blocking resources?

      Provide specific, actionable recommendations with code examples where helpful.
    `,
    verbose: true,
  });

  console.log('\n' + '═'.repeat(60));
  console.log('\n📊 Review Complete!\n');
  console.log(`💰 Total cost: $${result.totalCostUsd?.toFixed(4)}`);
  console.log(`⏱️  Duration: ${result.durationMs ? (result.durationMs / 1000).toFixed(1) + 's' : 'N/A'}`);
  console.log(`🔧 Tools used: ${result.toolsUsed.join(', ')}`);
}

main().catch(console.error);

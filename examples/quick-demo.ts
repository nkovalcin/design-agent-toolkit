/**
 * Quick Demo - Design Agent Toolkit
 *
 * Run: ANTHROPIC_API_KEY=sk-ant-... npx ts-node examples/quick-demo.ts
 */

import { runDesignAgent, listAgents, FRAMEWORKS } from '../src/index.js';

async function demo() {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║        🎨 Design Agent Toolkit - Quick Demo                   ║
╚═══════════════════════════════════════════════════════════════╝
`);

  // Show available agents
  console.log('🤖 Available Agents:');
  listAgents().forEach(agent => console.log(`   • ${agent}`));

  console.log('\n📚 Available Frameworks:');
  FRAMEWORKS.forEach(f => console.log(`   • ${f.name}`));

  console.log('\n' + '─'.repeat(60) + '\n');
  console.log('🔍 Starting analysis...\n');

  try {
    const result = await runDesignAgent({
      projectPath: process.argv[2] || '.',
      task: `
        Analyze this project and provide:
        1. A brief summary of the structure
        2. Top 3 UI/UX improvement suggestions
        3. Any accessibility concerns

        Be concise but specific.
      `,
      verbose: true,
      maxTurns: 20,
      maxBudgetUsd: 2.0,
    });

    console.log('\n' + '═'.repeat(60));
    console.log('\n📊 Analysis Complete!\n');
    console.log(`   💰 Cost: $${result.totalCostUsd?.toFixed(4) || 'N/A'}`);
    console.log(`   ⏱️  Time: ${result.durationMs ? (result.durationMs / 1000).toFixed(1) + 's' : 'N/A'}`);
    console.log(`   🔧 Tools: ${result.toolsUsed.join(', ') || 'None'}`);

  } catch (error: any) {
    console.error('❌ Error:', error.message);

    if (error.message.includes('API key')) {
      console.log('\n💡 Set your API key:');
      console.log('   export ANTHROPIC_API_KEY=sk-ant-your-key-here');
    }
  }
}

demo();

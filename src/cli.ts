#!/usr/bin/env node
/**
 * Design Agent Toolkit - CLI
 *
 * Usage:
 *   npx design-agent-toolkit ./my-project "Review UI for accessibility"
 *   npx design-agent-toolkit --help
 */

import { runDesignAgent, listAgents, FRAMEWORKS } from './index.js';

const args = process.argv.slice(2);

// Help message
if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║           🎨 Design Agent Toolkit                             ║
║     AI-powered design reviews using Claude                    ║
╚═══════════════════════════════════════════════════════════════╝

Usage:
  npx design-agent-toolkit <project-path> "<task>"

Examples:
  npx design-agent-toolkit ./my-app "Review the landing page UI"
  npx design-agent-toolkit . "Check accessibility of forms"
  npx design-agent-toolkit ./src "Analyze the component library"

Options:
  --help, -h      Show this help message
  --list-agents   List all available specialized agents
  --list-frameworks  List all available framework documents
  --verbose, -v   Show detailed output

Available Agents:
${listAgents().map((a) => `  • ${a}`).join('\n')}

Available Frameworks:
${FRAMEWORKS.map((f) => `  • ${f.name}`).join('\n')}

Environment:
  ANTHROPIC_API_KEY    Your Anthropic API key (required)

Documentation:
  https://github.com/nkovalcin/design-agent-toolkit
`);
  process.exit(0);
}

// List agents
if (args.includes('--list-agents')) {
  console.log('\n🤖 Available Design Agents:\n');
  for (const agent of listAgents()) {
    console.log(`  • ${agent}`);
  }
  console.log();
  process.exit(0);
}

// List frameworks
if (args.includes('--list-frameworks')) {
  console.log('\n📚 Available Frameworks:\n');
  for (const framework of FRAMEWORKS) {
    console.log(`  • ${framework.name}`);
    console.log(`    ${framework.description}\n`);
  }
  process.exit(0);
}

// Parse arguments
const verbose = args.includes('--verbose') || args.includes('-v');
const filteredArgs = args.filter((a) => !a.startsWith('-'));

if (filteredArgs.length < 2) {
  console.error('Error: Please provide both project path and task');
  console.error('Usage: npx design-agent-toolkit <project-path> "<task>"');
  process.exit(1);
}

const [projectPath, ...taskParts] = filteredArgs;
const task = taskParts.join(' ');

// Check for API key
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY environment variable is required');
  console.error('Get your key at: https://console.anthropic.com/');
  process.exit(1);
}

// Run the agent
console.log(`
╔═══════════════════════════════════════════════════════════════╗
║           🎨 Design Agent Toolkit                             ║
╚═══════════════════════════════════════════════════════════════╝

📁 Project: ${projectPath}
📝 Task: ${task}

Starting analysis...
`);

runDesignAgent({
  projectPath,
  task,
  verbose,
})
  .then((result) => {
    console.log('\n' + '═'.repeat(60));
    console.log('\n📊 Summary:\n');
    console.log(`  💰 Cost: $${result.totalCostUsd?.toFixed(4) || 'N/A'}`);
    console.log(`  ⏱️  Duration: ${result.durationMs ? `${(result.durationMs / 1000).toFixed(1)}s` : 'N/A'}`);
    console.log(`  🔧 Tools used: ${result.toolsUsed.join(', ') || 'None'}`);
    console.log();
  })
  .catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
  });

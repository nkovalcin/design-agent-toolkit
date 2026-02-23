/**
 * Design Agent Toolkit
 *
 * AI-powered design assistant using Claude's multi-agent architecture.
 * Built on Anthropic's Claude Agent SDK.
 *
 * @packageDocumentation
 */

import { query, type Options } from '@anthropic-ai/claude-agent-sdk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { DESIGN_AGENTS, listAgents, getAgent } from './agents/index.js';
import { FRAMEWORKS, type DesignAgentOptions, type DesignAgentResult } from './types.js';

// Get the directory of this module for framework resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DEFAULT_FRAMEWORKS_PATH = join(__dirname, '..', 'frameworks');

/**
 * Create options for the Claude Agent SDK
 */
function createAgentOptions(options: DesignAgentOptions): Options {
  const frameworksPath = options.frameworksPath || DEFAULT_FRAMEWORKS_PATH;

  // Build framework references for the system prompt
  const frameworkRefs = FRAMEWORKS.map(
    (f) => `- ${f.name}: ${join(frameworksPath, f.path)}`
  ).join('\n');

  // Convert our agent configs to SDK format
  const agents: Record<string, { description: string; prompt: string; tools: string[] }> = {};
  for (const [name, config] of Object.entries(DESIGN_AGENTS)) {
    agents[name] = {
      description: config.description,
      prompt: config.prompt,
      tools: config.tools,
    };
  }

  return {
    model: options.model || 'claude-sonnet-4-5-20250929',
    cwd: options.projectPath,
    additionalDirectories: [
      frameworksPath,
      options.projectPath,
      ...(options.additionalDirectories || []),
    ],
    tools: ['Read', 'Glob', 'Grep', 'Edit', 'Write', 'Bash'],
    allowedTools: options.allowedTools || ['Read', 'Glob', 'Grep'],
    agents,
    systemPrompt: {
      type: 'preset',
      preset: 'claude_code',
      append: `
You are a Design & Development Agent with deep expertise in UI/UX, design systems, and frontend development.

YOUR KNOWLEDGE BASE:
You have access to specialized subagents, each an expert in different areas:
- ui-ux-expert: Layout, spacing, colors, forms, accessibility
- design-system-expert: Design tokens, components, micro-interactions
- layout-expert: Advanced layouts, photography, iconography, video
- typography-expert: Text styling, readability, font systems
- marketing-expert: Copywriting, CTAs, conversion optimization
- project-strategist: Project planning, brand strategy
- design-code-reviewer: Code review for design compliance

FRAMEWORK DOCUMENTS:
Reference these when needed:
${frameworkRefs}

WORKFLOW:
1. When analyzing a project, first understand its structure
2. Use appropriate subagents for specialized tasks
3. Reference framework documents for specific guidance
4. Provide actionable, specific recommendations
5. Include code examples when suggesting changes

PRINCIPLES:
- User experience comes first
- Consistency is key
- Accessibility is not optional
- Performance matters
- Document decisions

When redesigning or reviewing code:
1. Audit current implementation against frameworks
2. Identify gaps and improvements
3. Prioritize changes by impact
4. Implement changes systematically
5. Verify against best practices
`,
    },
    maxTurns: options.maxTurns || 50,
    maxBudgetUsd: options.maxBudgetUsd || 10.0,
  };
}

/**
 * Run the design agent with a task
 *
 * @example
 * ```typescript
 * import { runDesignAgent } from 'design-agent-toolkit';
 *
 * const result = await runDesignAgent({
 *   projectPath: './my-project',
 *   task: 'Review the landing page for UI/UX best practices',
 * });
 *
 * console.log(result.response);
 * ```
 */
export async function runDesignAgent(
  options: DesignAgentOptions & { task: string }
): Promise<DesignAgentResult> {
  const agentOptions = createAgentOptions(options);
  const toolsUsed: string[] = [];
  const agentsUsed: string[] = [];
  let response = '';

  const result = query({
    prompt: options.task,
    options: agentOptions,
  });

  for await (const message of result) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if (block.type === 'text') {
          response += block.text;
          if (options.verbose) {
            console.log(block.text);
          }
        } else if (block.type === 'tool_use') {
          toolsUsed.push(block.name);
          if (options.verbose) {
            console.log(`\n[Using tool: ${block.name}]`);
          }
        }
      }
    } else if (message.type === 'result') {
      return {
        response,
        totalCostUsd: message.total_cost_usd,
        durationMs: message.duration_ms,
        toolsUsed: [...new Set(toolsUsed)],
        agentsUsed: [...new Set(agentsUsed)],
      };
    }
  }

  return {
    response,
    toolsUsed: [...new Set(toolsUsed)],
    agentsUsed: [...new Set(agentsUsed)],
  };
}

/**
 * Stream design agent responses
 *
 * @example
 * ```typescript
 * import { streamDesignAgent } from 'design-agent-toolkit';
 *
 * for await (const chunk of streamDesignAgent({
 *   projectPath: './my-project',
 *   task: 'Analyze the component library',
 * })) {
 *   process.stdout.write(chunk);
 * }
 * ```
 */
export async function* streamDesignAgent(
  options: DesignAgentOptions & { task: string }
): AsyncGenerator<string> {
  const agentOptions = createAgentOptions(options);

  const result = query({
    prompt: options.task,
    options: agentOptions,
  });

  for await (const message of result) {
    if (message.type === 'assistant') {
      for (const block of message.message.content) {
        if (block.type === 'text') {
          yield block.text;
        } else if (block.type === 'tool_use') {
          yield `\n[Using: ${block.name}]\n`;
        }
      }
    }
  }
}

// Export everything
export { DESIGN_AGENTS, listAgents, getAgent } from './agents/index.js';
export { FRAMEWORKS } from './types.js';
export type { AgentConfig, DesignAgentOptions, DesignAgentResult, Framework } from './types.js';

// Default export
export default {
  runDesignAgent,
  streamDesignAgent,
  DESIGN_AGENTS,
  FRAMEWORKS,
  listAgents,
  getAgent,
};

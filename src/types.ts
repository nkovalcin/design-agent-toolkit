/**
 * Design Agent Toolkit - Type Definitions
 */

/**
 * Configuration for a specialized design agent
 */
export interface AgentConfig {
  /** Unique identifier for the agent */
  name: string;
  /** Human-readable description of the agent's capabilities */
  description: string;
  /** Tools the agent can use */
  tools: string[];
  /** System prompt with domain expertise */
  prompt: string;
}

/**
 * Options for creating a design agent session
 */
export interface DesignAgentOptions {
  /** Claude model to use */
  model?: 'claude-sonnet-4-5-20250929' | 'claude-opus-4-5-20251101' | 'claude-haiku-3-5-20241022';
  /** Working directory for the project */
  projectPath: string;
  /** Additional directories to allow access to */
  additionalDirectories?: string[];
  /** Path to frameworks directory (optional, uses bundled if not provided) */
  frameworksPath?: string;
  /** Maximum turns before stopping */
  maxTurns?: number;
  /** Maximum budget in USD */
  maxBudgetUsd?: number;
  /** Tools to allow without confirmation */
  allowedTools?: string[];
  /** Enable verbose logging */
  verbose?: boolean;
}

/**
 * Result from a design agent query
 */
export interface DesignAgentResult {
  /** The response text */
  response: string;
  /** Total cost in USD */
  totalCostUsd?: number;
  /** Duration in milliseconds */
  durationMs?: number;
  /** Tools that were used */
  toolsUsed: string[];
  /** Agents that were invoked */
  agentsUsed: string[];
}

/**
 * Framework document reference
 */
export interface Framework {
  /** Framework identifier */
  id: string;
  /** Display name */
  name: string;
  /** File path relative to frameworks directory */
  path: string;
  /** Brief description */
  description: string;
}

/**
 * Available frameworks
 */
export const FRAMEWORKS: Framework[] = [
  {
    id: 'ui-ux-best-practices',
    name: 'UI/UX Best Practices',
    path: 'ui-ux-best-practices.md',
    description: 'Core UI/UX principles, layout, spacing, colors, forms, accessibility',
  },
  {
    id: 'advanced-ui-ux',
    name: 'Advanced UI/UX',
    path: 'advanced-ui-ux.md',
    description: 'Design tokens, optical corrections, micro-interactions, motion design',
  },
  {
    id: 'advanced-layout-media',
    name: 'Advanced Layout & Media',
    path: 'advanced-layout-media.md',
    description: 'Bento grids, scroll animations, photography, iconography, video',
  },
  {
    id: 'ui-text',
    name: 'UI Text & Typography',
    path: 'ui-text.md',
    description: 'Typography scale, line height, font pairing, readability',
  },
  {
    id: 'marketing-conversion',
    name: 'Marketing & Conversion',
    path: 'marketing-conversion.md',
    description: 'Copywriting frameworks, CTAs, social proof, persuasion',
  },
  {
    id: 'project-kickoff',
    name: 'Project Kickoff',
    path: 'project-kickoff.md',
    description: 'Project planning, brand strategy, stakeholder alignment',
  },
];

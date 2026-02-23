/**
 * Design Agent Toolkit - Agent Exports
 *
 * All specialized design agents in one place
 */

export { uiUxExpert } from './ui-ux-expert.js';
export { designSystemExpert } from './design-system-expert.js';
export { layoutExpert } from './layout-expert.js';
export { typographyExpert } from './typography-expert.js';
export { marketingExpert } from './marketing-expert.js';
export { projectStrategist } from './project-strategist.js';
export { designCodeReviewer } from './design-code-reviewer.js';

import { uiUxExpert } from './ui-ux-expert.js';
import { designSystemExpert } from './design-system-expert.js';
import { layoutExpert } from './layout-expert.js';
import { typographyExpert } from './typography-expert.js';
import { marketingExpert } from './marketing-expert.js';
import { projectStrategist } from './project-strategist.js';
import { designCodeReviewer } from './design-code-reviewer.js';

import type { AgentConfig } from '../types.js';

/**
 * All available design agents
 */
export const DESIGN_AGENTS: Record<string, AgentConfig> = {
  'ui-ux-expert': uiUxExpert,
  'design-system-expert': designSystemExpert,
  'layout-expert': layoutExpert,
  'typography-expert': typographyExpert,
  'marketing-expert': marketingExpert,
  'project-strategist': projectStrategist,
  'design-code-reviewer': designCodeReviewer,
};

/**
 * Get agent by name
 */
export function getAgent(name: string): AgentConfig | undefined {
  return DESIGN_AGENTS[name];
}

/**
 * List all available agents
 */
export function listAgents(): string[] {
  return Object.keys(DESIGN_AGENTS);
}

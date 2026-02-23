# Expected Output Example

When you run the toolkit on a project, here's what you'll see:

## CLI Output

```
╔═══════════════════════════════════════════════════════════════╗
║           🎨 Design Agent Toolkit                             ║
╚═══════════════════════════════════════════════════════════════╝

📁 Project: ./my-landing-page
📝 Task: Review the hero section for UI/UX best practices

Starting analysis...

[Using tool: Glob]
[Using tool: Read]

I've analyzed your hero section. Here are my findings:

## 📊 Analysis Summary

### ✅ What's Working Well
- Clear value proposition placement
- Good use of whitespace
- Responsive breakpoints defined

### ⚠️ Improvement Opportunities

**1. CTA Button Contrast (Priority: High)**
Your primary CTA has a contrast ratio of 3.2:1, which fails WCAG AA.

Current:
\`\`\`css
.cta-button {
  background: #7C3AED;
  color: #E0E0E0;
}
\`\`\`

Recommended fix:
\`\`\`css
.cta-button {
  background: #7C3AED;
  color: #FFFFFF;  /* Contrast: 7.1:1 ✅ */
}
\`\`\`

**2. Touch Target Size (Priority: Medium)**
The mobile navigation icons are 32x32px. WCAG recommends minimum 44x44px.

\`\`\`css
.nav-icon {
  width: 44px;
  height: 44px;
  padding: 6px;  /* Visual size stays same, tap area increases */
}
\`\`\`

**3. Typography Hierarchy (Priority: Low)**
Consider using your design system's type scale:
- H1: 48px (currently 52px - off scale)
- Body: 16px ✅

## 🎯 Quick Wins
1. Fix CTA contrast - 5 min fix, big accessibility win
2. Add `text-wrap: balance` to headlines
3. Consider adding social proof near CTA

══════════════════════════════════════════════════════════════

📊 Summary:

  💰 Cost: $0.0847
  ⏱️  Duration: 12.3s
  🔧 Tools used: Glob, Read, Grep
```

## Programmatic Output

```typescript
const result = await runDesignAgent({
  projectPath: './my-app',
  task: 'Review the button component',
});

console.log(result);
// {
//   response: "I've analyzed your Button component...",
//   totalCostUsd: 0.0523,
//   durationMs: 8420,
//   toolsUsed: ['Read', 'Glob'],
//   agentsUsed: ['ui-ux-expert', 'design-code-reviewer']
// }
```

## What the Agent Can Do

1. **Read your code** - Understands React, Vue, HTML, CSS, Tailwind
2. **Apply frameworks** - Uses 200KB+ of UI/UX best practices
3. **Give specific fixes** - Not just "improve contrast" but actual code
4. **Prioritize** - Tells you what to fix first
5. **Explain why** - References WCAG, Fitts's Law, etc.

## Try It Yourself

```bash
cd design-agent-toolkit
export ANTHROPIC_API_KEY=sk-ant-your-key

# Quick test
./test-local.sh

# Or specific analysis
node dist/cli.js ~/Desktop/projects/git_nk "Review the landing page hero section"
```

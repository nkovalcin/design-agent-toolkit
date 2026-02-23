#!/bin/bash
# Test Design Agent Toolkit locally
#
# Usage: ./test-local.sh
#
# Make sure you have ANTHROPIC_API_KEY set:
#   export ANTHROPIC_API_KEY=sk-ant-...

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║        🎨 Design Agent Toolkit - Local Test                   ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Check for API key
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "❌ Error: ANTHROPIC_API_KEY not set"
    echo ""
    echo "Set it with:"
    echo "  export ANTHROPIC_API_KEY=sk-ant-your-key-here"
    echo ""
    echo "Get your key at: https://console.anthropic.com/"
    exit 1
fi

echo "✅ API key found"
echo ""

# Build if needed
if [ ! -d "dist" ]; then
    echo "📦 Building..."
    npm run build
fi

# Run a quick test
echo "🚀 Running design analysis on current directory..."
echo ""

node dist/cli.js . "Give me a quick summary of this project structure and 2 suggestions for the README" --verbose

#!/bin/bash
# Sherlock Runner Script
# Usage: ./run-sherlock.sh <username> [options]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Activate virtual environment
source "$SCRIPT_DIR/venv/bin/activate"

# Run sherlock with all passed arguments
sherlock "$@"

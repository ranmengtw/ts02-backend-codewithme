#!/usr/bin/env bash

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

ENVIRONMENT="${1:-dev}"

helm upgrade shopping-api "${SCRIPT_DIR}/shopping-api" \
    -f "${SCRIPT_DIR}/shopping-api/values-${ENVIRONMENT}.yaml" \
    --debug \
    -i \
    --atomic \
    --wait \
    -n "${ENVIRONMENT}"

echo ""
echo "Running tests..."
echo ""
helm test shopping-api

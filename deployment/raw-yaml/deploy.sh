#!/usr/bin/env bash

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

ENVIRONMENT="${1:-dev}"

kubectl -n "${ENVIRONMENT}" apply -f "${SCRIPT_DIR}/config.${ENVIRONMENT}.yaml"
kubectl -n "${ENVIRONMENT}" apply -f "${SCRIPT_DIR}/shopping-api.yaml"

echo ""
echo "Waiting for deployment to complete..."
kubectl wait --for=condition=Available deploy/shopping-api

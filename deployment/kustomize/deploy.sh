#!/usr/bin/env bash

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

ENVIRONMENT="${1:-dev}"

kustomize build "${SCRIPT_DIR}/overlays/${ENVIRONMENT}" | kubectl -n "${ENVIRONMENT}" apply -f -

echo ""
echo "Waiting for deployment to complete..."
kubectl wait --for=condition=Available deploy/shopping-api

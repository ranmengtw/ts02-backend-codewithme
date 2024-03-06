#!/usr/bin/env bash

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

ENVIRONMENT="${1:-dev}"

kubectl -n "${ENVIRONMENT}" delete -f "${SCRIPT_DIR}/shopping-api.yaml"
kubectl -n "${ENVIRONMENT}" delete -f "${SCRIPT_DIR}/config.${ENVIRONMENT}.yaml"

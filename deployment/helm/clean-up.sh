#!/usr/bin/env bash

set -euo pipefail

ENVIRONMENT="${1:-dev}"

helm uninstall shopping-api \
    -n "${ENVIRONMENT}" \
    --wait

kubectl delete pod/shopping-api-test-connection

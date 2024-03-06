## Prerequisites

Please ensure the following are installed:

- `docker`
- `colima`
- `minikube`
- `helm`
- `kustomize`

## How to run it in minikube

```shell
minikube start
eval $(minikube docker-env)

DOCKER_BUILDKIT=1 docker build . -t shopping-api:latest --progress plain

# Before deploy the app, you need to do the following

# Make sure 2 namespaces - dev, prod - exist
kubectl create ns dev
kubectl create ns prod
# Create the DB password as a secret
kubectl create secret generic shopping-api --from-literal=DB_PASS='<dev mongodb password>' -n dev
kubectl create secret generic shopping-api --from-literal=DB_PASS='<prod mongodb password>' -n prod

# Choose one of command below to deploy
./deployment/raw-yaml/deploy.sh
./deployment/helm/deploy.sh
./deployment/kustomize/deploy.sh
```


## How to change MongoDB URL

If you'd like to use your own MongoDB (e.g. [Atlas]), you need to change the DB url and credentials.

The following are where you can change them:
- If you deploy with raw yaml:
  - [config.dev.yaml]
  - [config.prod.yaml]
- If you deploy with Helm:
  - [values-dev.yaml]
  - [values-prod.yaml]
- If you deploy with raw yaml:
  - [overlays/dev/kustomization.yaml]
  - [overlays/prod/kustomization.yaml]

[Atlas]: https://cloud.mongodb.com/
[config.dev.yaml]: deployment/raw-yaml/config.dev.yaml
[config.prod.yaml]: deployment/raw-yaml/config.prod.yaml
[values-dev.yaml]: deployment/helm/shopping-api/values-dev.yaml
[values-prod.yaml]: deployment/helm/shopping-api/values-prod.yaml
[overlays/dev/kustomization.yaml]: deployment/kustomize/overlays/dev/kustomization.yaml
[overlays/prod/kustomization.yaml]: deployment/kustomize/overlays/prod/kustomization.yaml

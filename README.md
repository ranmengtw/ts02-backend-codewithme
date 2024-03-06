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

# Choose one of command below to deploy
./deployment/raw-yaml/deploy.sh
./deployment/helm/deploy.sh
./deployment/kustomize/deploy.sh
```

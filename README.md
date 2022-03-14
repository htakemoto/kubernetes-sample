# Kubernetes Sample

Kubernetes sample project

## Prerequisites

- Rancher Desktop (https://rancherdesktop.io/)
- Tilt (https://tilt.dev/)

## Plain Kubernetes Demo

```bash
cd k8s-simple-demo
# Start Kubernetes cluster
tilt up
# Delete resources
tilt down
```

note: `k8s-simple-demo/kubernetes.yaml` is applied

## Helm Chart Demo

```bash
helm repo list
helm repo add bitnami https://charts.bitnami.com/bitnami
helm dep update ./chart
tilt up
tilt down
```

note: `helm template -f ./chart-vars/values-dev.yaml ./chart` is applied

## Useful Commands

```bash
# get kubectl context
kubectl config get-contexts
# view kubectl configuration
kubectl config view
# get pods
kubectl get pods
# get pods in detail
kubectl get pods -n kube-system -o wide
# check events
kubectl get events
# check log
kubectl logs -n <Namespace> <Pod Name>
```

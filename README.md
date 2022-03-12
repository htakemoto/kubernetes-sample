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

## Helm Chart Demo

```bash
tilt up
tilt down
```

## Useful Commands

```bash
# get kubectl context
kubectl config get-contexts
# view kubectl configuration
kubectl config view
# get pods
kubectl get pods
# check events
kubectl get events
```

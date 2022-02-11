# Kubernetes Sample

Kubernetes sample project

## Prerequisites

```bash
brew install hyperkit
brew install docker
brew install kubectl
brew install minikube
```

## Setup

```bash
# setup minikube
minikube config set driver hyperkit
minikube config set cpus 2
minikube config set memory 8g
# start minikube on VM
minikube start 
# set up docker path
eval $(minikube docker-env)
# start (wait for a while...)
make start
# stop
make stop
```

## Useful Commands

```bash
# check minikube status
minikube status
# access minikube dashboard
minikube dashboard
# stop minikube
minikube stop
# delete minikube
minikube delete
# check minikube logs
minikube logs --problems
# get pods
kubectl get pods
# check events
kubectl get events
# view kubectl configuration
kubectl config view
```

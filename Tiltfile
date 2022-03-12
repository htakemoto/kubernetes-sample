# -*- mode: Python -*-

k8s_yaml(helm('chart', name='app-deployment', values='values-dev.yaml'))

# The helm() call above is functionally equivalent to the following:
#
# k8s_yaml(local('helm template -f ./values-dev.yaml ./chart'))
# watch_file('./chart')
# watch_file('./values-dev.yaml')

docker_build('app-local', '.',
  dockerfile='app/Dockerfile.dev'
)

# 'app-deployment' is the name of the Kubernetes resource we're deploying.
k8s_resource('app-deployment', port_forwards='3000:3000')
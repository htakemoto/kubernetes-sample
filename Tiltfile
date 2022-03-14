# -*- mode: Python -*-

# Tilt Test

include('Tiltfile.tests')

# Kubernetes

k8s_yaml(helm('chart', name='app', values='chart-vars/values.dev.yaml'))

# The helm() call above is functionally equivalent to the following:
#
# k8s_yaml(local('helm template -f ./chart-vars/values-dev.yaml ./chart'))
# watch_file('./chart')
# watch_file('./chart-vars/values-dev.yaml')

# 'app-deployment' is the name of the Kubernetes resource we're deploying.
k8s_resource('app', port_forwards=['3000:3000','5000:5000'])

# Docker

docker_build('htakemoto/kubernetes-sample-frontend:latest', '.',
  dockerfile='apps/frontend/Dockerfile',
  target='builder',
  build_args={'node_env': 'development'},
  entrypoint='npm run start',
  live_update=[
    sync('./apps/frontend/src', '/app/src'),
    run('cd /app && npm install', trigger=['./apps/frontend/package.json', './apps/frontend/package-lock.json'])
  ]
)

docker_build('htakemoto/kubernetes-sample-backend:latest', '.',
  dockerfile='apps/backend/Dockerfile'
)
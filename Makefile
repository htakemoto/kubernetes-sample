start:
	# kubernetes setup
	kubectl apply -f nginx.yaml
	kubectl apply -f service.yaml
	# generate IP
	minikube service nginx-service --url
stop:
	kubectl delete -f service.yaml
	kubectl delete -f nginx.yaml
up:
	docker-compose -f docker-compose.yml up -d
stop:
	docker-compose -f docker-compose.yml stop
down:
	docker-compose -f docker-compose.yml down
start:
	docker-compose -f docker-compose.yml start
restart:
	docker-compose -f docker-compose.yml restart
logs:
	docker-compose -f docker-compose.yml logs --tail=100 -f
logs-server:
	docker-compose -f docker-compose.yml logs --tail=100 -f server
logs-client:
	docker-compose -f docker-compose.yml logs --tail=100 -f client
logs-db:
	docker-compose -f docker-compose.yml logs --tail=100 -f db
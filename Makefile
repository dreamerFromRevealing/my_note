up-dev:
	docker-compose -f docker-compose-dev.yml up -d
stop-dev:
	docker-compose -f docker-compose-dev.yml stop
down-dev:
	docker-compose -f docker-compose-dev.yml down
start-dev:
	docker-compose -f docker-compose-dev.yml start
restart-dev:
	docker-compose -f docker-compose-dev.yml restart
logs-dev:
	docker-compose -f docker-compose-dev.yml logs --tail=100 -f
logs-server-dev:
	docker-compose -f docker-compose-dev.yml logs --tail=100 -f server
logs-client-dev:
	docker-compose -f docker-compose-dev.yml logs --tail=100 -f client
logs-db-dev:
	docker-compose -f docker-compose-dev.yml logs --tail=100 -f db
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
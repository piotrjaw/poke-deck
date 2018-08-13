.PHONY: start
start:
	ng serve --ssl --open

.PHONY: build
build:
	ng build --prod

.PHONY: test
test:
	ng test

.PHONY: lint
lint:
	ng lint

.PHONY: install
install:
	yarn install --no-lockfile

.PHONY: reinstall
reinstall:
	rm -rf node_modules/
	make install

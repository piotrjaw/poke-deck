.PHONY: start
start:
	ng serve --open

.PHONY: build
build:
	ng build

.PHONY: test
test:
	ng test

.PHONY: lint
lint:
	ng lint

.PHONY: e2e
e2e:
	ng e2e

.PHONY: install
install:
	yarn install --no-lockfile

.PHONY: reinstall
reinstall:
	rm -rf node_modules/
	make install

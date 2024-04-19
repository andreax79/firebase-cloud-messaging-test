SHELL=/bin/bash -e

help:
	@echo - make install -------- Install dependencies
	@echo - make run-emulator --- Run Firebase emulator
	@echo - make build ---------- Build project
	@echo - make deploy --------- Deploy project

.PHONY: install
install:
	@npm install
	@npm install -g firebase-tools
	@firebase login

.PHONY: run-emulator
run-emulator:
	@firebase emulators:start

.PHONY: build
build:
	@npm run build

.PHONY: deploy
deploy:
	@firebase deploy

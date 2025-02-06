.PHONY: install start build clean help

help:
	@echo "Available commands:"
	@echo "  make install  - Install project dependencies"
	@echo "  make start    - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make clean    - Remove build artifacts and dependencies"

install:
	npm install

start:
	npm start

build:
	npm run build

clean:
	rm -rf node_modules
	rm -rf dist
	rm -f package-lock.json

# Check if .env exists, if not create it from example
env:
	@if [ ! -f .env ]; then \
		echo "Creating .env file..."; \
		echo "VITE_OPENAI_API_KEY=your-api-key-here" > .env; \
	fi

# Full setup: install dependencies and create .env
setup: env install
	@echo "Setup complete! Don't forget to add your OpenAI API key to .env" 
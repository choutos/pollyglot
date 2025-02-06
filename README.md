# Polyglot Translator

A simple web application that demonstrates AI integration with JavaScript using OpenAI's GPT-3.5 API for text translation. This project serves as a practical example of integrating AI capabilities into web applications.

## 🌟 Features
- Real-time translation using OpenAI's GPT-3.5 model
- Support for multiple languages:
  - French
  - Japanese
  - Spanish
- Clean and intuitive user interface
- Visual feedback with country flags
- World map background design

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- OpenAI API key
- npm or make

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd pollyglot
```

2. Set up environment variables:
```bash
make env  # Creates .env file
```
Then edit `.env` and add your OpenAI API key:
```
VITE_OPENAI_API_KEY=your-api-key-here
```

3. Install dependencies and start:
```bash
make setup  # Installs dependencies
make start  # Starts development server
```

Or using npm directly:
```bash
npm install
npm start
```

## 🏗️ Project Structure
```
pollyglot/
├── assets/         # Images and icons
│   ├── logo.png
│   ├── worldmap.png
│   └── flags/
├── index.html      # Main HTML file
├── index.js        # Application logic
├── index.css       # Styles
├── .env           # Environment variables (not in repo)
└── package.json   # Dependencies and scripts
```

## 🛠️ Development
This project is built with:
- Vite - For development and building
- OpenAI API - For AI-powered translations
- Vanilla JavaScript - For frontend logic
- CSS3 - For styling and animations

### Available Commands
```bash
make install  # Install dependencies
make start    # Start development server
make build    # Build for production
make clean    # Clean up build artifacts
```

## 🤝 Contributing
Contributions are welcome! Feel free to:
- Submit issues
- Create pull requests
- Suggest new features
- Improve documentation

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
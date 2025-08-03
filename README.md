# BSides312 Website

BSides312 is Chicago's Biggest Little Non-Profit Hacking & Information Security Conference.

## 🚀 Built with SvelteKit

This website has been rebuilt using modern web technologies:

- **SvelteKit** - Modern web framework
- **TypeScript** - Type safety and better developer experience
- **Static Site Generation** - Optimized for GitHub Pages
- **Responsive Design** - Mobile-first approach with Bootstrap

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/bsides312/bsides312.github.io.git
cd bsides312.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Legacy Static Development

For the static HTML version, you can serve locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using npm script
npm run serve
```

### Building for Production

```bash
npm run build
```

This will generate a static site in the `build/` directory.

## 📦 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### GitHub Pages Configuration

- **Custom Domain**: `bsides312.org` (configured via CNAME file)
- **Source**: GitHub Actions workflow
- **Build**: Static site deployment
- **SSL**: Enabled via GitHub Pages

### Manual Deployment

You can also deploy manually by running:
```bash
npm run build
# Then upload the contents of the build/ directory to your web server
```

## 📁 Project Structure

```
├── src/                    # SvelteKit source files
├── static/                 # Static assets (CSS, JS, images)
├── .github/workflows/      # GitHub Actions workflows
├── CNAME                   # Custom domain configuration
├── .nojekyll              # Disable Jekyll processing
├── package.json           # Node.js dependencies and scripts
├── svelte.config.js       # SvelteKit configuration
└── vite.config.js         # Vite configuration
```

## 🎯 Features

- **Homepage**: Hero section, about info, sponsor showcase, FAQ
- **Board Members**: Detailed profiles with photos and social links
- **Support**: Corporate sponsorship tiers with donation links
- **Previous Speakers**: Historical speaker data from past years
- **Code of Conduct & Privacy Policy**: Legal compliance pages
- **Responsive Design**: Works perfectly on all devices

## 📅 BSides312 2026

**Date**: May 15th, 2026
**Location**: Chicago, IL

Stay tuned for speaker announcements and ticket sales!

## 🤝 Contributing

We welcome contributions! Please feel free to:
- Report bugs via GitHub Issues
- Submit feature requests
- Create pull requests for improvements

## 📞 Contact

- **Email**: questions [@] bsides312.org
- **Website**: https://bsides312.org
- **YouTube**: [BSides312 Channel](https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g)

## 🌐 Live Site

Visit the live site at: [https://bsides312.org](https://bsides312.org)

## 📄 License

Copyright 2025 Hak4Kidz NFP. All Rights Reserved.

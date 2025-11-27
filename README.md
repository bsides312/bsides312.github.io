# BSides312 Website

BSides312 is Chicago's Biggest Little Non-Profit Hacking & Information Security Conference.

## Built with SvelteKit

This website has been rebuilt using modern web technologies:

- **SvelteKit** - Modern web framework
- **TypeScript** - Type safety and better developer experience
- **Static Site Generation** - Optimized for GitHub Pages
- **Responsive Design** - Mobile-first approach with Bootstrap

## Development

### Prerequisites

- **Node.js 20+** - Required for SvelteKit and build tools
- **npm** - Package manager (comes with Node.js)
- **Git** - Version control

### Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/bsides312/bsides312.github.io.git
cd bsides312.github.io
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser and visit:** `http://localhost:5173`

The development server supports:
- Hot Module Replacement (HMR)
- TypeScript compilation
- Automatic browser refresh on file changes

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run TypeScript and Svelte checks |
| `npm run check:watch` | Run checks in watch mode |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Check code formatting and run ESLint |
| `npm run serve` | Serve static files with Python |
| `npm run serve-alt` | Serve static files with Node.js |

### Code Quality

This project uses several tools to maintain code quality:

- **TypeScript** - Type safety and better IntelliSense
- **ESLint** - Code linting with Svelte-specific rules
- **Prettier** - Code formatting with Svelte plugin
- **Svelte Check** - Svelte-specific type checking

Before committing, run:
```bash
npm run lint    # Check formatting and linting
npm run check   # Run type checking
```

### Development Workflow

1. **Create a feature branch:**
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes and test locally:**
```bash
npm run dev
```

3. **Run quality checks:**
```bash
npm run lint
npm run check
```

4. **Build and test production version:**
```bash
npm run build
npm run preview
```

5. **Commit and push your changes:**
```bash
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature-name
```

### Building for Production

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and optimize all assets
- Generate a static site in the `build/` directory
- Optimize images and CSS
- Create service worker for caching (if configured)

## Deployment

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

## Project Structure

```
├── src/                           # SvelteKit application source
│   ├── app.html                   # HTML template
│   ├── app.css                    # Global styles
│   ├── app.d.ts                   # TypeScript declarations
│   ├── lib/                       # Shared components and utilities
│   │   ├── stores/                # Svelte stores for state management
│   │   │   ├── boardMembers.ts    # Board member data
│   │   │   ├── faq.ts             # FAQ data
│   │   │   └── sponsors.ts        # Sponsor data
│   │   └── index.ts               # Library exports
│   └── routes/                    # SvelteKit routes (file-based routing)
│       ├── +layout.svelte         # Root layout component
│       ├── +layout.ts             # Layout load function
│       ├── +page.svelte           # Homepage
│       ├── board/                 # Board members page
│       ├── code-of-conduct/       # Code of conduct page
│       ├── previous-speakers/     # Previous speakers page
│       ├── privacy/               # Privacy policy page
│       ├── schedule/              # Schedule page
│       ├── speakers/              # Current speakers page
│       └── support/               # Support/sponsorship page
├── static/                        # Static assets (served as-is)
│   ├── favicon.svg                # Site favicon
│   └── assets/                    # Images, CSS, JS, documents
│       ├── css/style.css          # Main stylesheet
│       ├── js/main.js             # Main JavaScript
│       ├── img/                   # Images and graphics
│       └── docs/                  # PDF documents
├── .github/workflows/             # GitHub Actions CI/CD
├── build/                         # Production build output (generated)
├── node_modules/                  # Dependencies (generated)
├── .eslintignore                  # ESLint ignore patterns
├── .gitignore                     # Git ignore patterns
├── .nojekyll                      # Disable Jekyll processing on GitHub Pages
├── .npmrc                         # npm configuration
├── .prettierignore                # Prettier ignore patterns
├── .prettierrc                    # Prettier configuration
├── CNAME                          # Custom domain for GitHub Pages
├── eslint.config.js               # ESLint configuration
├── package.json                   # Dependencies and scripts
├── README.md                      # This file
├── robots.txt                     # Search engine directives
├── svelte.config.js               # SvelteKit configuration
├── tsconfig.json                  # TypeScript configuration
├── vite.config.js                 # Vite bundler configuration
└── vite.config.ts                 # TypeScript Vite config
```

### Key Directories

- **`src/routes/`** - Each directory becomes a route. `+page.svelte` files are page components
- **`src/lib/`** - Reusable components, utilities, and stores
- **`src/lib/stores/`** - Svelte stores for managing application state
- **`static/`** - Files served directly without processing
- **`static/assets/`** - Organized static assets (CSS, JS, images, documents)

## Features

- **Homepage**: Hero section, about info, sponsor showcase, FAQ
- **Board Members**: Detailed profiles with photos and social links
- **Support**: Corporate sponsorship tiers with donation links
- **Previous Speakers**: Historical speaker data from past years
- **Code of Conduct & Privacy Policy**: Legal compliance pages
- **Responsive Design**: Works perfectly on all devices

## BSides312 2026

**Date**: May 16th, 2026
**Location**: Chicago, IL

Stay tuned for speaker announcements and ticket sales!

## Contributing

We welcome contributions! Please feel free to:

- Report bugs via GitHub Issues
- Submit feature requests
- Create pull requests for improvements

## Contact

- **Email**: questions [@] bsides312.org
- **Website**: https://bsides312.org
- **YouTube**: [BSides312 Channel](https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g)

## Live Site

Visit the live site at: [https://bsides312.org](https://bsides312.org)

## License

Copyright 2025 Hak4Kidz NFP. All Rights Reserved.

# BSides312 Website

BSides312 is Chicago's Biggest Little Non-Profit Hacking & Information Security Conference.

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is triggered on every push to the `main` or `master` branch.

### GitHub Pages Configuration

- **Custom Domain**: `bsides312.org` (configured via CNAME file)
- **Source**: GitHub Actions workflow
- **Build**: Static site deployment
- **SSL**: Enabled via GitHub Pages

### Manual Deployment

If you need to deploy manually:

1. Ensure your repository settings have GitHub Pages enabled
2. Set the source to "GitHub Actions"
3. Push changes to the main branch
4. The workflow will automatically build and deploy

## 🛠️ Development

### Current Setup (Static HTML)

The site is currently built with static HTML, CSS, and JavaScript. To serve locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using npm script
npm run serve
```

### Future Svelte Migration

The project is prepared for future migration to SvelteKit:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── assets/                 # Static assets (CSS, JS, images)
├── .github/workflows/      # GitHub Actions workflows
├── *.html                  # HTML pages
├── CNAME                   # Custom domain configuration
├── .nojekyll              # Disable Jekyll processing
├── package.json           # Node.js dependencies and scripts
├── svelte.config.js       # SvelteKit configuration (for future use)
└── vite.config.js         # Vite configuration (for future use)
```

## 🔧 Configuration Files

- **`.github/workflows/static.yml`**: GitHub Actions workflow for deployment
- **`CNAME`**: Custom domain configuration for GitHub Pages
- **`.nojekyll`**: Prevents GitHub from processing the site with Jekyll
- **`package.json`**: Prepared for future Svelte development
- **`svelte.config.js`**: SvelteKit configuration for static site generation
- **`vite.config.js`**: Vite build configuration

## 🌐 Live Site

Visit the live site at: [https://bsides312.org](https://bsides312.org)

## 📝 License

Copyright 2025 Hak4Kidz NFP. All Rights Reserved.
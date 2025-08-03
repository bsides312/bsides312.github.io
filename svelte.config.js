import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    
    // GitHub Pages configuration
    paths: {
      base: process.env.NODE_ENV === 'production' ? '' : '',
    },
    
    // Prerender all pages for static hosting
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      entries: ['*']
    }
  }
};

export default config;
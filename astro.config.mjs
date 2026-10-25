import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://omaryesid.dev',
  trailingSlash: 'never',
  build: {
    // /proyectos/acuda -> proyectos/acuda.html, served without a trailing slash.
    format: 'file',
  },
});

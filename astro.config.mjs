import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hyperzx2o.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});

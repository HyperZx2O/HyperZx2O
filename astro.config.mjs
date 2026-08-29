import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hyperzx2o.github.io',
  base: '/HyperZx2O',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});

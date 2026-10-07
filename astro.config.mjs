import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hyperzx2o.github.io',
  base: '/HyperZx2O',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

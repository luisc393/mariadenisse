// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mariadenissefanianosdecapriles.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});

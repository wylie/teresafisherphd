// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://teresafisherphd.com',
  integrations: [partytown(), sitemap()],
  trailingSlash: 'always'
});
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.personal.effects.xyz',
  integrations: [mdx(), sitemap(), react()],
  output: 'server',
  adapter: node(),
});
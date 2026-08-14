import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Pedro130505.github.io',
  base: '/site_radec/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

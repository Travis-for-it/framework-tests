// @ts-check
import { defineConfig } from 'astro/config';
import {allLocales} from './src/utils/allLocales'

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  i18n: { 
      defaultLocale: 'en_us', 
      locales: allLocales,
      routing: {
        prefixDefaultLocale: false,
      }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue()]
});
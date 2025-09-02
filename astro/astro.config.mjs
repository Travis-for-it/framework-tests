// @ts-check
import { defineConfig } from 'astro/config';
import {allLocales} from './src/utils/allLocales'

// https://astro.build/config
export default defineConfig({
    i18n: { 
        defaultLocale: 'en_us', 
        locales: allLocales,
    }
});

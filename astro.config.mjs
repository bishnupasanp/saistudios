import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://saistudiosnepal.com',
  output: 'static',
  build: { inlineStylesheets: 'never' },
  vite: { plugins: [tailwindcss()] },
});

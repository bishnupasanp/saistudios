import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({site:'https://saistudiosnepal.com',output:'static',vite:{plugins:[tailwindcss()]}});

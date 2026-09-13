import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://novomivax-web.vercel.app',
  base: '/',
  output: 'static',
  scopedStyleStrategy: 'where',
});

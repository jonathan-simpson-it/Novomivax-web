import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://novomivax.com',
  base: '/',
  output: 'static',
  scopedStyleStrategy: 'where',
});

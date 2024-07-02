// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/app/', // Ensure this matches your deployment path
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        frame: resolve(__dirname, 'frame/index.html'),
      },
    },
  },
});

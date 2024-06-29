import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust as necessary for your deployment environment
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});

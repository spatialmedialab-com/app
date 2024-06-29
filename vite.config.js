import { defineConfig } from 'vite';

export default defineConfig({
  base: '/app/', // Adjust this to your GitHub Pages repository name if needed
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: '', // Directory for static assets relative to outDir
    sourcemap: true, // Generate source maps
    minify: true, // Minify production build
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.* statements in production
      },
    },
  },
});

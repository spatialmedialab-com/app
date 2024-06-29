// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/app/', // Replace 'repo' with your actual repository name
    build: {
        outDir: 'dist'
    }
});

import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 4002,
  },
});

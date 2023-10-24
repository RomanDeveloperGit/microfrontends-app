import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 4001,
  },
});

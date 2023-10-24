import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      pages: [
        {
          filename: 'index.html',
          template: './index.html',
        },
      ],
    }),
    {
      name: 'custom-html',
      transformIndexHtml(html, { bundle, chunk }) {
        const scripts = Object.keys(bundle as Record<string, unknown>).reduce(
          (acc, chunkName) => {
            if (chunk?.fileName === chunkName) return acc;

            return acc + `<script type="module" src="${chunkName}"></script>`;
          },
          '',
        );

        return html.replace('</body>', `${scripts}</body>`);
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        host: './src/index.ts',
        'react-part': '../react-part/dist/index.js',
        'solid-part': '../solid-part/dist/index.js',
      },
      output: {
        entryFileNames: '[name].chunk.[hash].js',
      },
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4000,
  },
});

import path, { resolve } from 'path';
import { defineConfig } from 'vite';

import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';

import manifest from './src/manifest';

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [react(), crx({ manifest })],
  build: {
    rollupOptions: {
      input: {
        panel: resolve(__dirname, "src/devtools/panel.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  optimizeDeps: {
    entries: ["src/devtools/*.html"],
  },
  server: {
    port: 8888,
    strictPort: true,
    hmr: {
      port: 8888,
    },
  },
});

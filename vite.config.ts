import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({ targets: [{ src: 'src/assets', dest: '.' }] })
  ],
  server: {
    proxy: {
      '/api': {
        // target: 'https://test.repetitmeweb.ru',
        target: 'https://d3462337-77f3-4977-bb62-55e280a4892a.mock.pstmn.io',
        changeOrigin: true
      }
    }
  }
});

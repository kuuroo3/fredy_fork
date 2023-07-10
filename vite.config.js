import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    chunkSizeWarningLimit: 9999999,
    outDir: './ui/public',
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: {
          host: 'https://tessaberg.de/fredy',
          port: 9998,
          changeOrigin: true,
          secure: false
        },
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { URL } from './src/utils/Auth';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: URL,
        secure: false,
      },
    },
  },
  plugins: [react()],
});

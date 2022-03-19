import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  bae: 'https://cesarionivar.github.io/gha-react-vite/',
  plugins: [react()],
});

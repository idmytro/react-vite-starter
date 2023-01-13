import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-unresolved
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    react(),
    Unocss(),
  ],
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    tailwindcss(),
  ],
});
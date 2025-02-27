import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',  // VITE_BASE_URLが無ければデフォルト'/'
  plugins: [react(),tailwindcss()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.xml'],
  plugins: [react()],
  optimizeDeps: {
    include: ['particles.js'],
  },
  server: {
    allowedHosts: true
  }
})

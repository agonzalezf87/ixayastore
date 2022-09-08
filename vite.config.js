import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicssl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  server: {
    port: 3001,
    host: true,
    https: true,
    open: true
  },
  preview: {
    port: 3002,
    host: true,
    https: true,
    open: true
  },
  plugins: [react(), basicssl()]
})
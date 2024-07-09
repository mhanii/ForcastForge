
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  build : {
    outDir: '../backend/dist',
  },
  server: {
      host: '127.0.0.1',
      port: 3000,

    proxy: {
      '/api': {
           target: 'http://127.0.0.1:8000',
           changeOrigin: true,
           secure: false,      
           rewrite: (path) => path.replace(/^\/api/, ''),
       }
  }
  },
  plugins: [react()],

})

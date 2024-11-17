import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // Permite que otros dispositivos en la red accedan
    port: 5173,        // Asegúrate de que el puerto sea el correcto
  },
})

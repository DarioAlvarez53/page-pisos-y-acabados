import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Pisos y Acabados',
        short_name: 'Pisos',
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/public/vite.svg', // Ajusta la ruta según la estructura de tu proyecto
            sizes: '192x192',
            type: 'image/svg+xml', // Corrección en el tipo de archivo SVG
          },
          {
            src: '/public/vite.svg', // Ajusta la ruta según la estructura de tu proyecto
            sizes: '512x512',
            type: 'image/svg+xml', // Corrección en el tipo de archivo SVG
          },
        ],
        // Añade más propiedades del manifest según sea necesario
      },
    }),
  ],
})

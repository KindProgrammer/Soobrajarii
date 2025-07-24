import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { compression } from 'vite-plugin-compression2';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              regenerator: true,
              corejs: false
            }
          ]
        ]
      }
    }),
    svgr(),
    compression({
      algorithms: ['gzip'],
      threshold: 1024,
      deleteOriginalAssets: false 
    })
  ],
  css: {
    postcss: {
      plugins: [
          autoprefixer
      ],
    }
  },
  build: {
    target: 'esnext', // Для современных браузеров
    chunkSizeWarningLimit: 1000, // Лимит предупреждений о размере чанков
    rollupOptions: {
      output: {
        manualChunks: { // Ручное разделение чанков
          react: ['react', 'react-dom'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@babel/runtime'] // Явное указание зависимостей для оптимизации
  }
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';



export default defineConfig({
  plugins: [
    react(),


  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@dashboard': resolve(__dirname, 'src/components/private/Dashboard'),
      '@admin': resolve(__dirname, 'src/components/private/Admin'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@public': resolve(__dirname, 'src/components/public'),
      '@button': resolve(__dirname,'src/components/Button')  ,
      '@src': resolve(__dirname,'src'),
          // Autres alias...
    },
  },
});

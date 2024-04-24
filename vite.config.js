import { defineConfig } from 'vite';

export default defineConfig({
  // other Vite config options

  build: {
    assetsDir: 'assets', // Directory where assets will be emitted
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]' // Keep original file names for assets
      }
    }
  }
});


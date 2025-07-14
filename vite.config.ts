import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from "path";
// import tsconfigPaths from 'vite-tsconfig-paths';
// пришлось убрать vite-tsconfig-paths, так как он конфликтует с vite-plugin-alias, который используется в Chakra UI

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@store': path.resolve(__dirname, './src/store'),
      '@features': path.resolve(__dirname, './src/features'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setupTests.ts',
  },
});


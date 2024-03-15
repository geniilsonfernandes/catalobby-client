import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: [
        'src/components/**/*.ts',
        'src/components/**/*.tsx',
        'src/pages/**/*.ts',
        'src/pages/**/*.tsx'
      ],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/build/**',
        '**/*.stories.ts',
        '**/*.stories.tsx'
      ]
    },
    globals: true,

    environment: 'jsdom',
    setupFiles: ['./test/setup.ts']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

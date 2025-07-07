// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',         // ESSENCIAL
    globals: true,                 // Para usar describe/it/expect sem imports
    setupFiles: './src/tests/setup.ts', // Arquivo de setup
  },
});

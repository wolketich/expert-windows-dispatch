import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export const baseConfig = tseslint.config(
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', '*.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier
);

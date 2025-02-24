import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import tsEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsEslint,
      prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Требует, чтобы React был в области видимости при использовании JSX.
      'react-hooks/rules-of-hooks': 'error', // Устанавливает значение ошибки для правил хуков, требуя их использования строго в функциональных компонентах или кастомных хуках.
      'react-hooks/exhaustive-deps': 'warn', // Подсказывает, что нужно включать зависимости в хуки, чтобы избежать ошибок.
      '@typescript-eslint/no-unused-vars': [
        // Предупреждает о неиспользуемых переменных.
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      'react-refresh/only-export-components': [
        // Подсказывает о необходимости экспортировать только компоненты React.
        'warn',
        { allowConstantExport: true }
      ],
      'prettier/prettier': 'error'
    },
    settings: {
      react: {
        version: 'detect' // Позволяет ESLint автоматически определять установленную версию React в проекте.
      }
    }
  }
];

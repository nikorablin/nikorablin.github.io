import nextVitals from 'eslint-config-next/core-web-vitals'
import unusedImports from 'eslint-plugin-unused-imports'

const eslintConfig = [
  {
    ignores: ['node_modules', 'generators', 'out', '/*.js', '*.hbs'],
  },
  ...nextVitals,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', 'test/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        afterEach: 'readonly',
        beforeEach: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
        vi: 'readonly',
      },
    },
  },
]

export default eslintConfig

import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import pluginRouter from '@tanstack/eslint-plugin-router'

// Important: in the flat config format the later entries may override earlier ones.
// We load the plugin's recommended config first, then provide a project-specific
// override so rules like `react/react-in-jsx-scope` stay disabled for modern JSX.
export default defineConfig([
  // react plugin recommended baseline
  pluginReact.configs.flat.recommended,
  ...pluginRouter.configs['flat/recommended'],
  // project-specific overrides (files pattern + rule tweaks)
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
])

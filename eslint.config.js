import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.url // For the @lnu config package
})

export default [
  // Inherit the @lnu base config
  ...compat.extends('@lnu'),

  // Additional custom rules can be added here as an array of objects
  {
    ignores: ['node_modules'], // Ignore node_modules
    rules: {
      // Custom rule overrides go here
    }
  }
]

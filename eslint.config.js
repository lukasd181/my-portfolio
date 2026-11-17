import nextPlugin from 'eslint-config-next'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['.next', 'node_modules']),
  ...nextPlugin,
])

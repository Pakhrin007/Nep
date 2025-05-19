import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Note: Fixed the tailwindcss import path - the standard plugin is imported differently
import tailwindcss from 'tailwindcss'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
}) 
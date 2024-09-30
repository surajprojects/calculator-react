import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/calculator-react/',  // This should match your GitHub repo name
  plugins: [react()],
})

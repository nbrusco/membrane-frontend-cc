/// <reference types="Vite/client"/>

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import autoAlias from 'vite-plugin-auto-alias'
import dynamicImport from 'vite-plugin-dynamic-import'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  server: {
    port: 5174
  },
  plugins: [
    react(),
    autoAlias({
      mode: 'sync'
    }),

    ViteMinifyPlugin({}),
    dynamicImport()
  ]
})

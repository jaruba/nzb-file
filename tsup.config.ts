import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['index.js'],
    format: ['esm', 'cjs'],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true,
})
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import terser from '@rollup/plugin-terser'
import cleaner from 'rollup-plugin-cleaner'

export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === 'production'

  return {
    input: 'src/main.js',
    output: {
      file: 'dist/csdn.cjs.js',
      format: 'cjs',
      plugins: [isProd && terser()],
    },
    plugins: [
      cleaner({
        targets: ['./dist/'],
      }),
      copy({
        targets: [{ src: 'manifest.json', dest: 'dist' }],
      }),
    ],
  }
})

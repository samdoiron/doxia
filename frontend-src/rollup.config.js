import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

export default {
  input: process.env.input,
  output: {
    dir: process.env.outdir,
    format: 'iife'
  },
  plugins: [
    typescript(),
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: 'frontend-src/node_modules'
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonjs({
      include: /node_modules/,
    }),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom', replacement: 'preact/compat' }
      ]
    })
  ]
}
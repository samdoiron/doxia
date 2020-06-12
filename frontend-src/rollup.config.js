import resolve from '@rollup/plugin-node-resolve';

export default {
  input: process.env.input,
  output: {
    dir: process.env.outdir,
    format: 'iife'
  },
  plugins: [resolve({
    customResolveOptions: {
      moduleDirectory: 'frontend-src/node_modules'
    }
  })]
}
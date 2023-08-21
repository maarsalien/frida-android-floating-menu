import { Options } from 'tsup';

export const tsup: Options = {
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  bundle: true,
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  target: 'esnext',
  tsconfig: 'tsconfig.json',
  outDir: 'dist',
  legacyOutput: false,
};

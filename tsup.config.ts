import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['./src/index.ts'],
	outDir: 'dist',
	format: ['cjs', 'esm'],
	minify: true,
	bundle: true,
	dts: true,
	clean: true,
	sourcemap: true,
	platform: 'node',
	shims: true,
});

import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/**/*.ts', '!src/**/*.test.ts', '!src/**/*.d.ts', '!src/__tests__/**/*'],
	format: ['cjs', 'esm'],
	clean: true,
	dts: true,
	sourcemap: true,
	hash: false,
	// Suppress import.meta warning for CJS output - the code has fallback to window.BASE_PATH
	// import.meta.env is replaced with {} automatically; this just silences the warning
	inputOptions: {
		checks: {
			emptyImportMeta: false,
		},
	},
});

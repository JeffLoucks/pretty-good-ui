import { resolve } from 'path';
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
	build: {
	lib: {
		entry: {
			badge: resolve(__dirname, 'src/badge.ts')
		},
		formats: ["es", "cjs"],
	},
	rollupOptions: {
		external: mode === "production" ? "" : /^lit-element/,
	},
	},
	plugins: [dts()]
};
});

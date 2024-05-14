import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';
// https://github.com/remcovaes/web-test-runner-vite-plugin
// https://vitest.dev/guide/comparisons.html#web-test-runner
export default {
	files: 'tests/**/*.spec.ts',
	plugins: [
		vitePlugin(),
	],
};

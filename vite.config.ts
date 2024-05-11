import { resolve } from 'path';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'Pretty Good UI',
        fileName: 'pretty-good-ui',
        formats: ["es"],
      },
      rollupOptions: {
        external: mode === "production" ? "" : /^lit-element/,
      },
    },
  };
});
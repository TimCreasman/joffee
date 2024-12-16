import { resolve } from 'path';
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid()],
  test: {
    environment: 'jsdom',
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    // threads: false,
    // isolate: false,
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    globals: true
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});

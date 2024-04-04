import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    isolate: false,
    // you can also disable isolation only for specific pools
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    environment: "jsdom",
  },
});

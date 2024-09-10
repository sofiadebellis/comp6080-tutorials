import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {}
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  }
});
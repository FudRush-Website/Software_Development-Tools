import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global variables like `describe`, `it`, etc.
    environment: "jsdom", // Use jsdom for DOM testing
    setupFiles: "./src/tests/setup.js", // Optional: Add a setup file
  },
});

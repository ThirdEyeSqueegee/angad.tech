import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react", devTarget: "esnext" })],
  css: {
    preprocessorMaxWorkers: true,
    transformer: "lightningcss",
  },
  build: {
    cssMinify: "lightningcss",
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});

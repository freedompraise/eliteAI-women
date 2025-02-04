import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["vfile"],
    },
  },
});

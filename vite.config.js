import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api/visitors": {
        target: "https://abacus.jasoncameron.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/visitors/, "/hit/tinhinane-karabadji-portfolio/visits"),
      },
    },
  },
});

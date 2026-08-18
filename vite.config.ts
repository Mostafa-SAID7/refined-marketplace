import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tsConfigPaths(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});

import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    compatibilityDate: "2025-03-08",
  },
  vite: {
    plugins: [tailwindcss(), Icons({ compiler: "solid" })],
    build: {
      rollupOptions: {
        external: ["jsdom"],
      },
    },
  },
});

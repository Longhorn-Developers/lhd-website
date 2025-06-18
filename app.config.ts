import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  server: {
    preset: "cloudflare_module",
    compatibilityDate: "2025-06-17",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  vite: {
    plugins: [tailwindcss(), Icons({ compiler: "solid" })],
  },
});

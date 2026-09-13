import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/python-descriptor/",
  plugins: [
    tanstackStart({ spa: { enabled: true } }),
    viteReact(),
    tailwindcss(),
  ],
});

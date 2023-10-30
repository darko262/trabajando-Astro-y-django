import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(
    
  )],
  output: "hybrid",
  outDir: "../Astro-django/templates/astro/",
  publicDir: "../Astro-django/media/",
  trailingSlash: "always",
  compressHTML: process.env.NODE_ENV === "production",
  build: {
    format: "file",
    inlineStylesheets: "auto",
    assets: "static"
  }
});
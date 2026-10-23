// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical production origin for reproducible static metadata and locale output.
const site = "https://conmarket.org";

export default defineConfig({
  site,
  integrations: site ? [sitemap({ namespaces: { news: false, xhtml: false, image: false, video: false } })] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

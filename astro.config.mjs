// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Single source of truth for the production domain. Set PUBLIC_SITE_URL when a domain is available.
const site = process.env.PUBLIC_SITE_URL ? process.env.PUBLIC_SITE_URL.replace(/\/$/, "") : undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap({ namespaces: { news: false, xhtml: false, image: false, video: false } })] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

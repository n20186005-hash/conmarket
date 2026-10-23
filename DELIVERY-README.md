# Con Market guide

Static Astro visitor guide with Vietnamese root URLs and English `/en/`, Chinese `/zh/` and Korean `/ko/` equivalents for all existing topics and legal pages. `pnpm run build` builds the original Astro pages and creates the language outputs with `scripts/localize.mjs`. `pnpm check` checks source; `node --test tests/*.test.mjs` checks the existing Worker/controller and actual output. Deploy with the project’s verified Cloudflare command after reviewing the final build.

`worker.js` serves the static ASSETS binding and existing Open-Meteo weather endpoint. `public/analytics.js` retains the existing optional Google Analytics setting. The three market SVGs are original conceptual illustrations, not documentary photographs or site plans. They replace earlier images whose exact rights could not be established. No original photograph is redistributed.

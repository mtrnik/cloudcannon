import { defineConfig } from "astro/config";
import bookshop from "@bookshop/astro-bookshop";

// https://astro.build/config
export default defineConfig({
  site: "https://tiny-jackal.cloudvent.net/", // Replace this with your site's own custom url
  integrations: [bookshop()],
});

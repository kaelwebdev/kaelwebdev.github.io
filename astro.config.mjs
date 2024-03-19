import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"
const SERVER_PORT_DEFAULT = 4321;

const LOCALHOST_URL = `http://localhost:${SERVER_PORT_DEFAULT}`
const LIVE_URL = "https://kaelwebdev.github.io"
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt()
  ],
  //site: 'https://kaelwebdev.github.io'
})

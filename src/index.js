// This worker serves static assets from the public/ directory.
// The [assets] configuration in wrangler.toml handles static file serving.
// This file exists as a fallback entry point.

export default {
  async fetch(request, env) {
    // Static assets are served automatically by the [assets] binding.
    // This fetch handler is only reached for requests not matching a static asset.
    return new Response("Not Found", { status: 404 });
  },
};

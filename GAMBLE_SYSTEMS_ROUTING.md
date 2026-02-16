# gamble.systems Routing Notes

This repo now includes a Gamble Systems prototype page at:

- `https://dustingamble.com/gamble-systems/`

The goal is to serve that page from `https://gamble.systems/` while leaving `https://dustingamble.com/` unchanged.

## Option A (Simplest): Redirect (Domain Changes)

This is easiest, but visitors will end up on `dustingamble.com` in the address bar.

In Cloudflare (for the `gamble.systems` zone):

1. Create a Redirect Rule for `gamble.systems/*`.
2. Target: `https://dustingamble.com/gamble-systems/$1`
3. Status: 302 (temporary) while iterating, then 301 (permanent) later.

## Option B (Better): Cloudflare Worker Proxy (Domain Stays gamble.systems)

This keeps `gamble.systems` in the address bar by proxying requests to `dustingamble.com`.

High-level idea:

- Requests to `https://gamble.systems/` fetch `https://dustingamble.com/gamble-systems/`
- Everything else (`/_astro/*`, `/images/*`, `/favicon.svg`, etc.) is fetched from the same path on `https://dustingamble.com`

Example Worker (basic proxy):

```js
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Map the root of gamble.systems to the subpath on dustingamble.com
    const originPath = url.pathname === "/" ? "/gamble-systems/" : url.pathname;
    const originUrl = new URL(originPath + url.search, "https://dustingamble.com");

    // Fetch from origin, but present it on gamble.systems
    return fetch(originUrl, request);
  }
}
```

Notes:

- This is intentionally minimal, it works well when the page uses absolute-root assets like `/_astro/*` and `/images/*`.
- If you later want canonical/OG URLs to show `gamble.systems`, we can add lightweight HTML rewriting in the Worker.

## Logo Placement

The Gamble Systems page will display the logo automatically if it exists at one of:

- `public/images/gamble-systems/logo.webp`
- `public/images/gamble-systems/logo.png`
- `public/images/gamble-systems/logo.jpg`
- `public/images/gamble-systems/logo.jpeg`

If none exist, it falls back to a simple “G” mark.


# Dynamo Bresno — Website

The official website for Dynamo Bresno (a work of fiction). It's a static site, served by a tiny zero-dependency Node server (`server.js`) so it deploys to Railway with no configuration.

## What's in here

- **Pages:** `index.html`, `news.html`, `squad.html`, `club.html`, `kit.html`, `player.html`, the 9 article pages, `dynamo-league.html` (the browser game), and the legal pages (`privacy.html`, `terms.html`, `cookies.html`). Plus a `404.html`.
- **Code:** `site.css`, `app.js`, `players.js`, `dalnic-data.js`, `dalnic-commentary.js`.
- **Assets:** `images/`, `photos/`, `crest.svg`, `crest.png`.
- **SEO:** `sitemap.xml`, `robots.txt`.
- **Server:** `server.js` + `package.json` — the only files needed to serve everything.

## Deploy: GitHub → Railway

1. **Create a new GitHub repository** and upload **the contents of this `website` folder to the repository root.** `index.html`, `server.js` and `package.json` must sit at the **top level** of the repo — not inside a `website/` subfolder.
2. In **Railway**: *New Project → Deploy from GitHub repo* → choose the repo.
3. Railway auto-detects Node, runs `npm start` (which runs `node server.js`), and serves the site on its assigned port. **No build command or extra settings needed.**
4. Add your domain under the service's **Settings → Networking → Custom Domain** (`www.dynamobresno.com`), then create the CNAME record Railway gives you at your DNS provider.
5. At your DNS/registrar, **redirect the apex `dynamobresno.com` to `www.dynamobresno.com`** (or vice-versa) so it matches the site's canonical URLs.

## Run locally

```
npm start
```

Then open http://localhost:3000

## After launch

- Verify the domain in **Google Search Console** and submit `https://www.dynamobresno.com/sitemap.xml`.
- The newsletter sign-up opens **Substack** (`thedynamodispatch.substack.com`) in a new tab — make sure that publication is live.
- To add the animated Dispatch logo, drop your file in as `images/dispatch-logo.gif` (already wired across the site).

## Note on the canonical domain

All canonical tags, Open Graph URLs and the sitemap use `https://www.dynamobresno.com`. If your final domain differs, find-and-replace that string across the `.html` files and `sitemap.xml`.

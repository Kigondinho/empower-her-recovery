# Empower Her Recovery Centre by Nueva Esperanza

*Healing Women. Restoring Hope.*

Website for Empower Her Recovery Centre, Kenya's first women-only rehabilitation centre and a project of Nueva Esperanza.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About Us (story, founder, team, values) | `about.html` |
| Our Programs | `programs.html` |
| Admissions | `admissions.html` |
| Resources & Wellness | `resources.html` |
| Testimonials & Success Stories | `stories.html` |
| Get Involved | `get-involved.html` |
| Contact Us | `contact.html` |

Shared styles are in `assets/css/styles.css` (fonts in `assets/css/fonts.css` + `assets/fonts/`), scripts in `assets/js/main.js`, photos in `assets/img/` (guide: [PHOTOS.md](PHOTOS.md)).

## Run locally

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Before going live

- **Photos:** all photos are placeholder stock images from [Unsplash](https://unsplash.com), and the founder and team spots show initials. **See [PHOTOS.md](PHOTOS.md)** for where every photo appears, the right size and shape, and step-by-step instructions for swapping in real photos.
- **Contact form:** there is no backend yet. Submitting opens the visitor's email app with the message addressed to `info@empowerherrecovery.org`. To receive submissions directly, connect a form service (e.g. Formspree or Netlify Forms).

## Hosting

Works on any static host. For GitHub Pages: repo **Settings → Pages → Deploy from branch → `main` / root**.

## Security & privacy

This is a static site: no server code, database, logins or stored visitor data, so the attack surface is small. Hardening in place:

- **Content Security Policy** (`<meta>` in every page): only the site's own scripts, styles, fonts and images can load; the only third party allowed is the Google Maps frame. No inline scripts or inline styles.
- **No third-party tracking by default:** fonts are self-hosted (no requests to Google Fonts) and the Google map only loads after the visitor clicks "Show map". There is no analytics.
- **Referrer policy** `strict-origin-when-cross-origin`; external links use `rel="noopener noreferrer"`.
- **Contact form** sends nothing over the network: it opens the visitor's own email app. Without JavaScript it falls back to a `mailto:` action, so details never end up in a URL.
- **`_headers`** adds HTTP security headers (clickjacking protection, HSTS, nosniff, Permissions-Policy) on Netlify or Cloudflare Pages. GitHub Pages can't set custom headers, so on GitHub Pages the meta-tag protections apply but clickjacking protection (`frame-ancestors`) does not.

If you later add a form backend, analytics or a booking tool, add its domain to the CSP in every page and in `_headers`, and mention it in a privacy notice.

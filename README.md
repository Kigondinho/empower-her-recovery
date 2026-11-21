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

Shared styles are in `assets/css/styles.css`, scripts in `assets/js/main.js`, photos in `assets/img/`.

## Run locally

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Before going live

- **Phone / WhatsApp number:** the site uses the placeholder `+254 7XX XXX XXX`. Replace it in every `.html` file:
  - display text `+254 7XX XXX XXX`
  - phone links `tel:+2547XXXXXXXX`
  - WhatsApp links `https://wa.me/2547XXXXXXXX` (country code + number, no `+` or spaces)
- **Photos:** placeholder stock photos from [Unsplash](https://unsplash.com) (free to use under the Unsplash License). Swap in real photos of the centre and team by replacing files in `assets/img/` with the same names.
- **Founder photo:** `about.html` shows a "WM" placeholder for Wangui Mucara's portrait.
- **Contact form:** there is no backend yet. Submitting opens the visitor's email app with the message addressed to `info@empowerherrecovery.org`. To receive submissions directly, connect a form service (e.g. Formspree or Netlify Forms).

## Hosting

Works on any static host. For GitHub Pages: repo **Settings → Pages → Deploy from branch → `main` / root**.

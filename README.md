# Stanislava (Stasha) Gardasevic — Résumé / Academic CV Website

A lightweight, modern, single-page résumé site. No build step, no framework —
just static HTML, one CSS file, and vanilla JavaScript. All content lives in one
data file, so updating the site never means touching the layout code.

Design system shared with [psyunix.com](https://psyunix.com/) (light/dark theme,
same typography and color tokens).

## Files

```
index.html            # Page shell (sections + <head> metadata)
stasha.jpg            # Profile photo (square)
assets/css/index.css  # All styling + light/dark themes + print (PDF) styles
assets/js/main.js     # Renders the data into the page; theme, search, copy, print
data/profile.js       # ← YOUR CONTENT. Edit this to update the site.
```

## How to edit

Open **`data/profile.js`** and edit the values. Everything on the page comes from
there:

- **Header** — `name`, `sub_title`, `status`, `location`, `tagline`, `logoURL`
- **Contact** — `about.contact.email` (phone is intentionally omitted; add a
  `phone:` line to show it)
- **Links** — `links[]` (ORCID, Google Scholar, LinkedIn)
- **Sections** — `metrics`, `skills`, `experiences`, `projects`, `publications`,
  `presentations`, `awards`, `service`, `education`

To swap the photo, replace `stasha.jpg` with a square image of the same name.

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. (Opening `index.html` directly as
a file also works, but a local server is closer to how it will be hosted.)

## Export to PDF

Click **Export PDF** in the top bar (or print the page). A dedicated print
stylesheet reformats it into a clean, multi-column CV.

## Deploy

Any static host works. Two common options (same as the reference site):

- **GitHub Pages** — push this repo to GitHub, then enable Pages in
  *Settings → Pages* (branch `main`, folder `/root`).
- **Vercel** — import the repo at vercel.com; no build settings needed (it's a
  static site).

---

Built to match a shared family template. Update `data/profile.js` any time your
CV changes.

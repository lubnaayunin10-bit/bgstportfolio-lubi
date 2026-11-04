# Lubna's Portfolio: Jurassic Library (EN, academic)

## Run locally (Node.js 18+, no packages to install)
```bash
npm run dev     # http://localhost:3000, auto-reloads when you save a file
npm start       # same server without live reload
PORT=8080 npm start   # custom port
```
You can still just double-click `index.html` (internet is needed for Google Fonts). **All text, links, and photos are edited in one file: `js/content.js`** (the engine `js/script.js` never needs editing). About / Achievements / Contact text is in `index.html`.
Put your PDFs/images in an `assets/` folder next to `index.html` (folder `assets/` already exists); the server serves them automatically.

## 1. Attach your original files to each work (the overlay)
Every card opens an overlay. In `js/content.js`, find `FILES` and fill the work you want:

```js
electrical: { embed:"assets/electrical-engineering.pdf", images:[], links:[] },
senada:     { embed:"", images:[], links:[{label:"Demo", url:"https://..."},{label:"GitHub", url:"https://..."}] },
trk:        { embed:"", images:["assets/trk/1.jpg","assets/trk/2.jpg","assets/trk/3.jpg","assets/trk/4.jpg"], links:[] }
```

- `images`: photos for the small swipeable frame on each card and the big frame in the overlay.
  Photo 1 goes with slide `01`, photo 2 with slide `02`, and so on. The numbered caption
  (`01 / 04`, title, bullets) sits below the frame and changes as you swipe.
  Slides without a photo show an icon placeholder. Edit slide text in the `slides` array of `WORKS`.
- `embed`: optional full file (Google Slides "Publish to web" embed URL, a PDF, or a hosted `.pptx`),
  shown in an extra "Original file" tab. Tip: export PowerPoint to PDF; it is the most reliable.
- `links`: Demo / GitHub / any buttons shown in the overlay.

## 2. Other settings
- `LINKS.cv`: paste your CV link and the "View my CV" button appears.
- `PROFILE_PHOTO`: e.g. `"assets/foto.jpg"` to replace the "LA" initials.
- To edit text of any work, change its entry in the `WORKS` list of `js/content.js` (title, summary, highlights, skills, slides).

## 3. Items to double-check
- The "Electrical Engineering Presentation" card has only generic text: replace it with the real description.
- "Python for Data and Physics Computation" is a placeholder: replace with your best data project.
- Dates that differ between your printed portfolio and earlier website draft (Kawan Bestari role/period, Kasih Balik start date) follow the printed portfolio.

Free hosting: GitHub Pages, Netlify, or Vercel (upload this folder).

# Routines

A single-page app for building routines out of custom actions — like a skincare routine, a morning warm-up, or a wind-down ritual — and stepping through them, with built-in timers for timed steps. Installable as a PWA and works offline once loaded.

## Features

- **Actions** — define your own building blocks (e.g. "Splash face with water", "Clean for 2 minutes"), each either a quick "mark done" step or a timer with a set duration.
- **Routines** — combine actions into an ordered routine, reorder, remove, or edit steps, and give it a name and icon.
- **Triggers** — start a routine by tapping ▶, tapping 🎤 and saying "start" (uses the browser's built-in speech recognition — Chrome/Edge; not supported in Firefox and only partial in Safari), or set a scheduled time and days so the routine gets a "Due now" badge once that time passes on a matching day (while the app is open — there's no background alarm). Routines can also be deep-linked with `?run=<routineId>`, letting a Siri Shortcut or Google Assistant Routine start one by voice from outside the app.
- **Run mode** — a full-screen, step-by-step view that walks through a routine: a countdown ring for timed steps, a "mark done" button for the rest, and previous/skip controls throughout.
- **Settings** — toggle the completion sound, or erase all data.

## Running locally

The app is static HTML/CSS/JS with no build step. Serve the folder with any static file server, for example:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1
```

Then open `http://localhost:8936/` in your browser.

## Project structure

- `index.html` — the entire app (markup, styles, and logic).
- `manifest.json` — PWA manifest.
- `sw.js` — service worker providing offline caching of the app shell (HTML is served network-first so new deploys always show up).
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — app icons.

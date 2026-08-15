# Routines

A single-page app for building routines out of custom actions — like a skincare routine, a morning warm-up, or a wind-down ritual — and stepping through them, with built-in timers for timed steps. Installable as a PWA and works offline once loaded.

## Features

- **Actions** — define your own building blocks (e.g. "Splash face with water", "Clean for 2 minutes"), each either a quick "mark done" step or a timer with a set duration.
- **Routines** — combine actions into an ordered routine, reorder, remove, or edit steps, and give it a name and icon.
- **Triggers** — start a routine by tapping ▶, or pick one automatic trigger per routine: **Day of week** or **Day of month** at a set time, a **regular interval** (every N hours/days since it was last completed), **sunrise/sunset** (with an optional offset, computed locally from a saved location — no network needed), or **weather** (above/below a target temperature, fetched from the keyless Open-Meteo API for a saved location). Any of these give the routine a "Due now" badge once triggered, but only while the app is open — there's no background alarm.
- **Run mode** — a full-screen, step-by-step view that walks through a routine: a countdown ring for timed steps, a "mark done" button for the rest, and previous/skip controls throughout.
- **Settings** — toggle the completion sound, sign in with Google to sync across devices, or erase all data.
- **Linked products** — attach a product page link, product name, brand, and directions of use to any action; they show up during Run mode for that step.

## Cross-device sync

Data lives in `localStorage` by default (on-device only). Signing in with Google in Settings syncs actions, routines, and settings to your account via Firebase, so the same data shows up on your phone, tablet, and desktop. Sync is opt-in and stays hidden until it's configured — see [firebase-config.js](firebase-config.js) for setup steps (create a Firebase project, enable Google sign-in, create a Firestore database with the rules in [firestore.rules](firestore.rules), and fill in the config values).

Sync uses last-write-wins on the whole dataset: whichever device saved most recently wins. If a device has unsynced local data when you first sign in there and the account already has different synced data, you'll be asked which one to keep.

## Running locally

The app is static HTML/CSS/JS with no build step. Serve the folder with any static file server, for example:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1
```

Then open `http://localhost:8937/` in your browser.

## Project structure

- `index.html` — the entire app (markup, styles, and logic).
- `manifest.json` — PWA manifest.
- `sw.js` — service worker providing offline caching of the app shell (HTML is served network-first so new deploys always show up).
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — app icons.
- `firebase-config.js` — Firebase project config for account sign-in and sync; safe to commit, see the setup steps inside.
- `firestore.rules` — Firestore security rules restricting each account to its own data (paste into the Firebase console).

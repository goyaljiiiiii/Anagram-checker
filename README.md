# Anagram Atlas

A rebuilt version of the original project. The app now lives at the repository root, uses a cleaner layout, and checks whole phrases instead of only raw strings.

## What changed

- Flattened the project so the app opens from the repo root with [index.html](index.html).
- Replaced the old playful-but-cluttered UI with a focused, responsive interface.
- Upgraded the checker to normalize case, spaces, punctuation, and accents before comparing.
- Removed inline event handling in favor of a small, testable script.

## File layout

- [index.html](index.html)
- [assets/css/style.css](assets/css/style.css)
- [assets/js/app.js](assets/js/app.js)

## Directory structure

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── app.js
└── README.md
```

## How to run

Open [index.html](index.html) directly in a browser, or use your editor's live preview if available.

## Example pairs

- Listen / Silent
- Debit card / Bad credit
- Astronomer / Moon starer
- School master / The classroom

## Notes

The old nested implementation is no longer the entry point. The root-level files are now the canonical version of the project.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**`yct_app_v8.html`** — a French-interface Chinese vocabulary learning app targeting the YCT (Youth Chinese Test) standard levels. Single self-contained HTML file; open directly in a browser.

One external dependency: [HanziWriter](https://hanziwriter.org/) loaded from CDN (`hanzi-writer@3.5`) for stroke-order animation and handwriting practice. Everything else works offline except TTS.

## Architecture

All code (~1560 lines) lives in one file, organized by comment blocks (`// ════...`):

| Section | What it does |
|---|---|
| **TOKENS / BASE** | CSS custom properties for light/dark themes; `body.dark` / `body.light` override auto |
| **HOME** | Level selection cards, dark-mode toggle |
| **TOPBAR** | Sticky nav bar shared by Vocab, Flash, Quiz views |
| **VOCAB** | Browse/search with category pills and pinyin/size toggles |
| **FLASH CARDS** | Flip cards with pass/fail self-assessment and dot progress |
| **QUIZ** | Multiple-choice (hanzi→FR `normal`, FR→hanzi `reverse`), streak, star-rating results |
| **MODAL** | "Quit?" confirmation sheet (used when leaving Flash/Quiz mid-session) |
| **WORD ACTION SHEET** | Bottom sheet on vocab-card tap: listen or open Write |
| **WRITE VIEW** | Full-screen HanziWriter canvas; stroke-by-stroke quiz with hints and multi-char nav |
| **NAVIGATION / INIT** | `show(id)`, `goHome()`, `buildHome()`, data normalization on load |

### Data format

Words are declared as compact arrays in the `data` object and normalized at startup:

```js
// Source (in HTML)
["你好","nǐ hǎo","Bonjour","Salutations"]

// After normalization (line ~812)
{ h: "你好", p: "nǐ hǎo", fr: "Bonjour", c: "Salutations" }
```

`data` is keyed by level id (`yct1`…`yct5`). Each level has `label`, `lc` (CSS level-color class `l1`–`l5`), `icon`, `desc`, and `words[]`.

### Level color system

Level colors are applied via `--lc` / `--lc-bg` CSS variables. Adding class `l1`–`l5` to a container sets those variables for all descendants. The five accent colors (`--c1`–`--c5`) are defined in TOKENS and differ between light and dark themes.

### Key global state

```js
current         // active level id for Vocab view
filtered[]      // current Vocab search/filter results
quizLevel, quizQs[], quizIdx, quizScore, quizMode  // 'normal' | 'reverse'
flashLevel, flashQs[], flashIdx, flashResults[]
_writeChars[], _writeCharIdx, _hanziWriter          // Write view
darkManual      // null=auto | 'dark' | 'light'
```

### TTS

Primary: Google Translate TTS endpoint (requires internet). Fallback: `SpeechSynthesis` API with zh-CN voice selection.

## Working with this file

- **Add vocabulary**: extend the array in the relevant `yct*` key; format is `["hanzi","pinyin","French","Category"]`.
- **Add a level**: add a new key to `data` with `label`, `lc` (`l1`–`l5`), `icon`, `desc`, `words[]`; the home screen builds itself from `Object.keys(data)`.
- **Theme changes**: edit custom properties in the TOKENS section; both light and dark variants must be updated.
- **Write view**: depends on HanziWriter CDN — characters not in its dataset will trigger `onLoadCharDataError`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**YCT Vocab** — a French-interface Chinese vocabulary learning PWA targeting the YCT (Youth Chinese Test) levels 1–5. Runs offline (service worker); one external dependency, [HanziWriter](https://hanziwriter.org/) 3.5 from CDN, for stroke-order animation. TTS needs internet (SpeechSynthesis primary, Google TTS fallback).

## Files

| File | Role |
|---|---|
| `index.html` | Redirects to `yct_app.html` |
| `yct_app.html` | The whole app (~3200 lines): CSS + HTML + JS |
| `data.js` | Single data source: `data` (vocabulary, 5 levels) + `sentences` |
| `config.js` | `APP_VERSION` + `EXAMPLES` (one example sentence per word) |
| `tests.html` | Self-running test suite (85 tests) — open in browser |
| `sw.js` | Service worker; bump `CACHE` name (`yct-vocab-vNN`) on every release |
| `manifest.json` | PWA manifest, `start_url: './yct_app.html'` |
| `serve.ps1` | Local HTTP server on port 7788 with `Cache-Control: no-cache` |
| `wiki/` | Technical documentation (architecture, modes, storage, deployment…) |
| `backup/` | Archived pre-merge Android/iOS variants — do not edit |

`.claude/launch.json` defines the `yct-tests` server (serve.ps1, port 7788) for browser preview.

## Running & testing

- Serve locally: launch config `yct-tests` (or `powershell -File serve.ps1`), then open `http://localhost:7788/yct_app.html`.
- **Tests are mandatory after any data or logic change**: open `http://localhost:7788/tests.html` and check "85 passés / 0 échoué" (count grows as suites are added). Suites cover data structure, cross-level duplicates, EXAMPLES coverage (must be 100 % per level), pinyin tone colorization, shuffle, SRS logic, streak, filters, XP/badges, sentences.
- `data.js` is loaded with a cache-buster (`data.js?v=Date.now()`) in both `yct_app.html` and `tests.html`; `config.js` is loaded normally in the app.

## Architecture (yct_app.html)

Organized by `// ════` comment blocks. CSS sections: TOKENS (light/dark custom properties), HOME, TOPBAR, VOCAB, FLASH CARDS, QUIZ, SENTENCES, DICTÉE, ASSOCIATION, RESULTS, STATS, MODAL, LEVEL COLORS, WORD ACTION SHEET, WRITE VIEW, GAMIFICATION. JS sections: STATE, THEME, AUDIO, NAVIGATION, STATS, LOCAL STORAGE, STREAK, FAVORIS, SRS, GAMIFICATION (XP & badges), OBJECTIF QUOTIDIEN, SESSIONS SPÉCIALES (Révision Express, Mots Difficiles), SETTINGS, HOME, RECHERCHE GLOBALE, VOCAB VIEW, FLASH CARDS, QUIZ, DICTÉE, ASSOCIATION, SENTENCE COMPLETION, WORD ACTION SHEET, WRITE VIEW (HanziWriter), IOS AUDIO UNLOCK, INIT.

### 6 training modes

Flash cards, Quiz (normal hanzi→FR / reverse FR→hanzi, optional chrono), Dictée (audio→hanzi), Association (pair matching), Sentences (fill-in-the-blank from `sentences`), Écriture (HanziWriter stroke quiz).

### Data format

```js
// data.js source
["你好","nǐ hǎo","Bonjour","Salutations"]
// normalized at load (end of data.js)
{ h:"你好", p:"nǐ hǎo", fr:"Bonjour", c:"Salutations" }
```

`data` is keyed `yct1`…`yct5`; each level has `label`, `lc` (`l1`–`l5` CSS class), `icon`, `desc`, `words[]`. `sentences` is keyed the same way: `["phrase with ___","answer word","French translation"]`.

`EXAMPLES` (config.js) is keyed by hanzi: `{zh, py, fr}`. **Every word in data.js must have an EXAMPLES entry** (tested per level), and hanzi must be unique within a level AND across levels (tested).

### localStorage keys

`yct-theme`, `yct-bg`, `yct-surf` (appearance) · `yct-progress` (quiz/flash stats) · `yct-streak` · `yct-favs` (Mots Difficiles) · `yct-srs` (spaced repetition: interval/reps/due per hanzi) · `yct-badges` (XP + badges) · `yct-goal` (daily goal) · `yct-chrono`.

### SRS logic

`_srsUpdate`: good answer → interval grows (capped at 30 days), bad answer → interval back to 1, reps to 0. `_srsLevel`: 0=new, 1=interval 1, 2=2–5, 3=6–14, 4=15+ (mastered). `_markToday(dateOverride)` accepts a simulated date for streak testing.

## Release checklist

1. Update `APP_VERSION` in `config.js` **and** the version line in `README.md` (keep them identical).
2. Bump `CACHE` in `sw.js` (`yct-vocab-vNN` → vNN+1) so clients pick up new assets.
3. Run `tests.html` — everything must pass.

## Adding vocabulary

1. Append `["hanzi","pīn yīn","French","Category"]` to the level's `words[]` in `data.js` (pinyin with tone marks, space-separated syllables; reuse existing category names).
2. Add the matching `EXAMPLES["hanzi"] = {zh, py, fr}` entry in `config.js` (py capitalized sentence-style).
3. Watch for cross-level duplicates — the test suite fails on any hanzi present in two levels.
4. If relevant, add fill-in-the-blank items to `sentences`.

Vocabulary status vs. official YCT syllabus: YCT1 150/~150 ✅, YCT2 150/~150 ✅, YCT3 312/~300 ✅, YCT4 600/~600 ✅, YCT5 900/~900 ✅ (as of v1.2.0, 2112 words total). All five levels now meet their syllabus targets.

## Conventions

- Windows 11 / PowerShell 5.1 environment — no Bash, no `&&` chaining.
- French UI and French-first communication with the user; keep replies concise.
- Propose a short plan and wait for user validation ("vas y") before large tasks.

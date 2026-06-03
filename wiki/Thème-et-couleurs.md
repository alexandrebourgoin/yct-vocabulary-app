# Thème et couleurs

## Système de thème

L'application supporte trois modes d'affichage :

| Mode | Classe sur `<body>` | Comportement |
|---|---|---|
| `auto` | _(aucune)_ | Suit la préférence système (OS) via `prefers-color-scheme` |
| `light` | `body.light` | Forcer thème clair |
| `dark` | `body.dark` | Forcer thème sombre |

### Application du thème
```js
function _applyTheme(mode) {
  document.body.classList.remove('dark', 'light');
  if (mode === 'dark')  document.body.classList.add('dark');
  if (mode === 'light') document.body.classList.add('light');
  try { localStorage.setItem('yct-theme', mode); } catch(e) {}
}

// Appliqué au chargement avant le premier rendu (évite le flash)
(function() {
  _applyTheme(localStorage.getItem('yct-theme') || 'auto');
})();
```

### Sélecteur dans les paramètres
Trois boutons radio dans le menu ⚙️ :
```
☀️ Clair   |   🔄 Auto   |   🌙 Sombre
```

## Variables CSS (TOKENS)

Toutes les couleurs passent par des variables CSS définies dans la section TOKENS :

```css
/* Thème clair (défaut) */
:root {
  --c-bg: #F7F6F2;
  --c-card: #FFFFFF;
  --c-text: #1A1A1A;
  --c-sub: #666666;
  --c-border: #E0DDD6;
  --c-shadow: rgba(0,0,0,0.08);

  /* Couleurs d'accent par niveau */
  --c1: #2D8A4E;  /* YCT 1 — vert */
  --c2: #1A6FAF;  /* YCT 2 — bleu */
  --c3: #D4700A;  /* YCT 3 — orange */
  --c4: #7B3FA0;  /* YCT 4 — violet */
  --c5: #CC0000;  /* YCT 5 — rouge */
}

/* Thème sombre */
body.dark {
  --c-bg: #1A1A1A;
  --c-card: #2A2A2A;
  --c-text: #F0EDE6;
  --c-sub: #999999;
  --c-border: #3A3A3A;
  --c-shadow: rgba(0,0,0,0.3);

  --c1: #4AB870;
  --c2: #4A9FD4;
  --c3: #F0902A;
  --c4: #A86BC8;
  --c5: #FF4444;
}

/* Mode auto = CSS media query */
@media (prefers-color-scheme: dark) {
  body:not(.light) {
    /* mêmes overrides que body.dark */
  }
}
```

## Couleurs par niveau (`--lc` / `--lc-bg`)

Chaque niveau a une classe `l1` à `l5` qui injecte `--lc` (couleur principale) et `--lc-bg` (couleur de fond légère) :

```css
.l1 { --lc: var(--c1); --lc-bg: color-mix(in srgb, var(--c1) 10%, transparent); }
.l2 { --lc: var(--c2); --lc-bg: color-mix(in srgb, var(--c2) 10%, transparent); }
/* ... */
```

Ces variables sont utilisées dans les descendants :
```css
.level-card { border-color: var(--lc); }
.progress-dot.done { background: var(--lc); }
.btn-primary { background: var(--lc); }
```

## Barre de statut (PWA)

La couleur de la barre de statut système (Android / iOS) est contrôlée par :

```html
<!-- Dans <head> -->
<meta name="theme-color" content="#CC0000">
```

```json
// Dans manifest.json
"theme_color": "#CC0000"
```

> Après modification de `theme_color`, la PWA doit être **désinstallée et réinstallée** pour que la nouvelle couleur soit prise en compte.

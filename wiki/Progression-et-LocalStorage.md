# Progression et LocalStorage

## Ce qui est sauvegardé

L'application utilise le **LocalStorage** du navigateur pour persister deux types de données :

| Clé | Contenu |
|---|---|
| `yct-progress` | Scores par niveau et par mode |
| `yct-theme` | Préférence de thème (`'auto'`, `'dark'`, `'light'`) |

> Les données restent sur l'appareil. Elles ne sont **pas synchronisées** entre appareils ou navigateurs.

## Format du stockage des scores

```json
{
  "yct1": {
    "normal": 85,
    "reverse": 60,
    "flash": 100
  },
  "yct2": {
    "normal": 40
  }
}
```

Seul le **meilleur score** est retenu pour chaque mode.

## API interne

```js
// Lire tous les scores
_getProg()
// → { yct1: { normal: 85, ... }, ... }

// Sauvegarder un score (seulement si meilleur)
_saveProg(levelId, mode, pourcentage)
// ex : _saveProg('yct1', 'normal', 85)

// Effacer toute la progression
_clearProg()
```

### Implémentation
```js
var STORE_KEY = 'yct-progress';

function _getProg() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); }
  catch(e) { return {}; }
}

function _saveProg(level, mode, pct) {
  var p = _getProg();
  if (!p[level]) p[level] = {};
  if ((p[level][mode] || 0) < pct) p[level][mode] = pct;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch(e) {}
}

function _clearProg() {
  try { localStorage.removeItem(STORE_KEY); } catch(e) {}
}
```

## Affichage sur l'écran d'accueil

Chaque carte de niveau affiche 6 icônes (une par mode) :
- **Grisée** (opacité 0.2) = activité non encore tentée
- **En couleur** = activité réalisée au moins une fois
- **Score %** affiché sous l'icône (meilleur score)

```js
var _PROG_MODES  = ['normal','reverse','dictee','assoc','flash','sent'];
var _PROG_LABELS = ['🀄','🔄','🎵','🔗','🃏','📝'];
```

La fonction `buildHome()` lit `_getProg()` à chaque appel pour afficher les scores à jour. Elle est appelée automatiquement lors du retour à l'accueil (`goHome()`).

## Effacer les données

Via le bouton ⚙️ → section **DONNÉES** → **"Effacer la progression"** :

```js
function clearData() {
  if (confirm('Effacer toute la progression ?')) {
    _clearProg();
    buildHome();   // rafraîchit l'affichage
    closeSettings();
  }
}
```

## Gestion du thème

```js
var THEME_KEY = 'yct-theme';

function _applyTheme(mode) {
  document.body.classList.remove('dark', 'light');
  if (mode === 'dark')  document.body.classList.add('dark');
  if (mode === 'light') document.body.classList.add('light');
  // 'auto' = ni dark ni light = système OS
  try { localStorage.setItem(THEME_KEY, mode); } catch(e) {}
}

// Appliqué immédiatement au chargement (avant le premier rendu)
(function() {
  _applyTheme(localStorage.getItem(THEME_KEY) || 'auto');
})();
```

## Limites du LocalStorage

- Quota : généralement **5 Mo** par origine (largement suffisant ici)
- Synchrone : les lectures/écritures bloquent brièvement le thread (négligeable pour de petits objets)
- Accessible depuis le même domaine uniquement
- Effacé si l'utilisateur vide le cache du navigateur

# Architecture

## Vue d'ensemble

L'application est un **fichier HTML auto-contenu** (~1600 lignes) sans framework, sans bundler, sans dépendances npm. On ouvre le fichier directement dans un navigateur.

```
yct_app.html
├── <head>          meta, manifest, thème initial
├── <style>         tout le CSS (variables, composants, animations)
├── <body>          toutes les vues HTML (home, vocab, quiz, flash, write...)
└── <script>        toutes les données et la logique JS
```

## Sections du code

Le fichier est organisé par blocs commentés `// ════════...` :

| Section | Rôle |
|---|---|
| **TOKENS / BASE** | Variables CSS (couleurs, espacements) pour thème clair et sombre |
| **HOME** | Cartes de niveau, bouton ⚙️ paramètres |
| **TOPBAR** | Barre de navigation partagée entre Vocab / Flash / Quiz |
| **VOCAB** | Vue liste avec filtres catégorie, toggle pinyin, recherche |
| **FLASH CARDS** | Cartes à retourner, auto-évaluation pass/fail |
| **QUIZ** | QCM (hanzi→FR et FR→hanzi), streak, notation étoiles |
| **DICT** | Dictée — écouter et retrouver le mot |
| **ASSOC** | Association — relier les paires hanzi ↔ français |
| **SENT** | Phrases — vocabulaire en contexte |
| **MODAL** | Feuille "Quitter ?" (mid-session) |
| **WORD ACTION SHEET** | Bottom sheet sur tap d'un mot (écouter, écrire) |
| **WRITE VIEW** | Plein écran HanziWriter, quiz stroke-by-stroke |
| **SETTINGS** | Overlay paramètres (thème, stats, effacer données) |
| **STATS** | Overlay statistiques complètes |
| **NAVIGATION / INIT** | `show()`, `goHome()`, `buildHome()`, normalisation données, back button |

## État global (variables JS clés)

```js
// Navigation
current          // id du niveau actif en Vocab
filtered[]       // résultats filtrés en Vocab

// Quiz
quizLevel        // niveau actif
quizQs[]         // questions mélangées
quizIdx          // index courant
quizScore        // score actuel
quizMode         // 'normal' | 'reverse'

// Flash
flashLevel
flashQs[]
flashIdx
flashResults[]

// Dictée
dictLevel, dictQs[], dictIdx

// Association
assocLevel, assocPairs[]

// Phrases
sentLevel, sentQs[], sentIdx

// Write (HanziWriter)
_writeChars[]    // caractères du mot courant
_writeCharIdx    // index du caractère en cours
_hanziWriter     // instance HanziWriter

// UI
activeCat        // filtre catégorie actif ('all' ou nom)
darkManual       // null=auto | 'dark' | 'light'
```

## Deux versions du fichier

| Fichier | Plateforme | Différences |
|---|---|---|
| `yct_app.html` | Toutes plateformes | Détection iOS pour audio unlock |
| `yct_app.html` | iPhone, iPad | Pas de TTS auto (restriction Safari), meta tags iOS spécifiques |

Les différences iOS :
```html
<!-- Meta tags supplémentaires -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="apple-touch-icon" href="icon.svg">
<meta name="viewport" content="..., viewport-fit=cover">
```

```css
/* Safe area pour l'encoche iOS */
padding-bottom: env(safe-area-inset-bottom);
```

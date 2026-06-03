# Données et niveaux

## Format des données

Les mots sont déclarés sous forme de tableaux compacts dans l'objet `data`, puis normalisés au démarrage.

### Format source (dans le HTML)
```js
const data = {
  yct1: {
    label: "YCT 1",
    lc: "l1",
    icon: "⭐",
    desc: "Débutant — 80 mots",
    words: [
      ["你好", "nǐ hǎo", "Bonjour", "Salutations"],
      ["谢谢", "xiè xie", "Merci",   "Salutations"],
      // ...
    ]
  },
  yct2: { ... },
  // ...
}
```

### Après normalisation (au chargement)
```js
// Chaque tableau devient un objet :
{ h: "你好", p: "nǐ hǎo", fr: "Bonjour", c: "Salutations" }
// h = hanzi, p = pinyin, fr = français, c = catégorie
```

La normalisation se fait dans la section INIT :
```js
Object.keys(data).forEach(lid => {
  data[lid].words = data[lid].words.map(w =>
    Array.isArray(w) ? { h: w[0], p: w[1], fr: w[2], c: w[3] } : w
  );
});
```

## Ajouter un mot

Dans la section `words` du niveau concerné, ajouter une ligne :
```js
["汉字", "hàn zì", "Caractère chinois", "Langue"],
```

Format : `["hanzi", "pinyin", "traduction française", "catégorie"]`

> ⚠️ Le pinyin doit utiliser les tons avec diacritiques (ā á ǎ à, ē é ě è, etc.)

## Ajouter une catégorie

Les catégories sont extraites automatiquement depuis le champ `c` des mots. Il suffit d'utiliser un nouveau nom de catégorie — il apparaîtra automatiquement dans les filtres de la vue Vocabulaire.

## Ajouter un niveau

1. Ajouter une clé dans `data` :
```js
yct6: {
  label: "YCT 6",
  lc: "l5",          // classe CSS de couleur : l1 à l5
  icon: "🏆",
  desc: "Expert — X mots",
  words: [
    // ...
  ]
}
```

2. L'écran d'accueil se construit automatiquement depuis `Object.keys(data)`.

## Système de couleurs par niveau

Chaque niveau a une classe CSS (`l1` à `l5`) qui définit `--lc` et `--lc-bg` pour tous ses descendants :

| Classe | Niveau | Couleur (clair) |
|---|---|---|
| `l1` | YCT 1 | Vert |
| `l2` | YCT 2 | Bleu |
| `l3` | YCT 3 | Orange |
| `l4` | YCT 4 | Violet |
| `l5` | YCT 5 | Rouge |

> Les couleurs exactes (`--c1` à `--c5`) sont définies dans la section TOKENS et diffèrent entre thème clair et sombre.

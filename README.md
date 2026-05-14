# 🀄 YCT Vocab — Apprentissage du Chinois

Application web progressive (PWA) pour l'apprentissage du vocabulaire chinois, basée sur les niveaux du **YCT (Youth Chinese Test)**. Interface entièrement en français.

---

## ✨ Fonctionnalités

- 📚 **5 niveaux YCT** — du débutant (YCT 1) au niveau avancé (YCT 5)
- 🔍 **Vocabulaire** — navigation avec filtres par catégorie, affichage du pinyin, tracé des caractères
- 🎯 **6 modes d'entraînement** par niveau :
  - 🀄 Quiz Hanzi → Français
  - 🔄 Quiz Français → Hanzi
  - 🎵 Dictée (écoute → réponse)
  - 🔗 Association (relier les paires)
  - 🃏 Flash cards (mémorisation rapide)
  - 📝 Phrases (vocabulaire en contexte)
- ✍️ **Écriture** — pratique du tracé stroke-by-stroke avec HanziWriter
- 🔊 **Prononciation** — synthèse vocale en mandarin
- 📊 **Statistiques** — suivi des scores par niveau et par activité
- 🌓 **Thème** clair / sombre / automatique
- 📱 **PWA** — installable sur Android et iOS, fonctionne hors-ligne

---

## 📱 Installation sur mobile

### Android
1. Ouvrir `https://[votre-pseudo].github.io/yct-vocabulary-app/` dans Chrome
2. Appuyer sur le menu ⋮ → **"Ajouter à l'écran d'accueil"**
3. L'app s'installe comme une application native

### iPhone / iPad
1. Ouvrir l'URL dans **Safari** (obligatoire)
2. Appuyer sur le bouton **Partager** ↑ → **"Sur l'écran d'accueil"**
3. Valider l'installation

---

## 🚀 Utilisation

L'accueil présente les 5 niveaux YCT. Pour chaque niveau, deux boutons :
- **Vocabulaire** — parcourir et écouter le vocabulaire
- **S'entraîner** — choisir parmi les 6 modes d'exercice

Le bouton ⚙️ (en haut à droite) donne accès aux **paramètres** :
- Basculer le thème (☀️ / 🔄 / 🌙)
- Consulter les statistiques détaillées 📊
- Effacer la progression sauvegardée

---

## 🗂️ Structure du projet

```
yct-vocabulary-app/
├── index.html              # Redirection automatique iOS ↔ Android
├── yct_app_Android.html    # Version principale (Android & desktop)
├── yct_app_Iphone.html     # Version optimisée iOS (Safari/PWA)
├── manifest.json           # Configuration PWA
├── sw.js                   # Service Worker (cache hors-ligne)
├── icon.svg                # Icône de l'application
└── README.md               # Ce fichier
```

---

## 🛠️ Technologies

| Technologie | Usage |
|---|---|
| HTML / CSS / JavaScript | Application (fichier unique, sans framework) |
| [HanziWriter 3.5](https://hanziwriter.org/) | Animation et pratique des tracés |
| Google Translate TTS | Prononciation mandarin (nécessite Internet) |
| Web Speech API | Fallback TTS hors-ligne |
| Service Worker + Cache API | Mode hors-ligne / PWA |
| LocalStorage | Sauvegarde des scores et préférences |

---

## 📊 Suivi de progression

Les scores sont sauvegardés localement sur l'appareil (LocalStorage). Sur la page d'accueil, chaque niveau affiche les 6 icônes d'activité :
- **Grisée** : activité non encore réalisée
- **En couleur + score %** : meilleur score atteint

---

## ⚠️ Remarques

- La **prononciation** nécessite une connexion Internet (Google TTS)
- Le **tracé des caractères** (HanziWriter) nécessite Internet au premier lancement, puis fonctionne hors-ligne
- La version **iPhone** désactive la lecture audio automatique (restriction Safari)
- Les données de progression sont stockées **sur l'appareil uniquement** — elles ne sont pas synchronisées entre appareils

---

## 📄 Licence

Projet personnel — libre d'utilisation à des fins éducatives.

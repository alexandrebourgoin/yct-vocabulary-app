# 🀄 YCT Vocab — Apprentissage du Chinois

Application web progressive (PWA) pour l'apprentissage du vocabulaire chinois, basée sur les niveaux du **YCT (Youth Chinese Test)**. Interface entièrement en français.

> **Version 1.0.1** · Mai 2026

---

## ✨ Fonctionnalités

### 📚 Contenu
- **5 niveaux YCT** — du débutant (YCT 1) au niveau avancé (YCT 5)
- **Recherche globale** — barre de recherche sur l'accueil, cherche dans les 5 niveaux simultanément
- **Phrases d'exemple** — une phrase contextuelle (chinois + pinyin + français) dans la fiche de chaque mot
- **Radicaux** — affichage du radical et de sa signification pour chaque caractère
- **Couleur des tons** — le pinyin est affiché en couleur selon le ton (1er→bleu, 2e→vert, 3e→orange, 4e→rouge)

### 🎯 Entraînement
- **6 modes d'exercice** par niveau :
  - 🀄 Quiz Hanzi → Français
  - 🔄 Quiz Français → Hanzi
  - 🎵 Dictée (écoute → réponse)
  - 🔗 Association (relier les paires)
  - 🃏 Flash cards (mémorisation rapide)
  - 📝 Phrases (vocabulaire en contexte)
- ⚡ **Révision Express** — révision quotidienne basée sur le SRS (mots arrivant à échéance)
- ⭐ **Mots Difficiles** — session dédiée aux mots marqués en favoris
- ⏱ **Quiz Chrono** — compte à rebours par question (10 / 15 / 20 s, activable dans les paramètres)

### 🧠 Mémorisation (SRS)
- **Algorithme SRS** inspiré de SM-2 — planification automatique des révisions
- **Niveau de maîtrise** 🌱🌿🌲🌳 visible sur chaque mot (Débutant → Maîtrisé)
- **Objectif quotidien** — barre de progression configurable (5 / 10 / 15 / 20 mots / jour)

### 🏅 Gamification
- **Système XP & Niveaux** — de 🎋 Novice à 🀄 Légendaire (11 paliers)
- **10 Trophées** à débloquer : premiers pas, séries, scores parfaits, exploration des 5 niveaux…
- **Série de jours** 🔥 — compteur de jours consécutifs pratiqués

### ✍️ Écriture & Audio
- ✍️ **Tracé stroke-by-stroke** avec HanziWriter (animation + quiz de tracé)
- 🔊 **Prononciation** — Google TTS (en ligne) avec fallback Web Speech API (hors-ligne)

### ⚙️ Personnalisation & Suivi
- 🌓 **Thème** clair / sombre / automatique + 5 palettes de fond et de surface
- 📊 **Statistiques détaillées** — scores par niveau, mots pratiqués, taux de réussite
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

L'accueil présente :
- **⚡ Révision Express** — commence directement les mots SRS du jour
- **⭐ Mots Difficiles** — révise les favoris marqués d'une étoile
- **Barre de recherche** — cherche un mot dans tous les niveaux
- **5 niveaux YCT** — accès au vocabulaire et aux 6 modes d'exercice

Les boutons en haut à droite :
- **🏅 Lv.X** — ouvre la fenêtre Trophées & Progression (XP, niveau, badges)
- **⚙️** — paramètres : thème, fond, objectif quotidien, chrono, statistiques

---

## 🗂️ Structure du projet

```
yct-vocabulary-app/
├── index.html              # Redirection automatique iOS ↔ Android
├── yct_app_Android.html    # Version principale (Android & desktop)
├── yct_app_Iphone.html     # Version optimisée iOS (Safari/PWA)
├── config.js               # Version, radicaux (RADICALS), phrases d'exemple (EXAMPLES)
├── manifest.json           # Configuration PWA
├── sw.js                   # Service Worker (cache hors-ligne)
├── icon.svg                # Icône de l'application
├── wiki/                   # Documentation technique détaillée
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
| LocalStorage | Sauvegarde de la progression, favoris, SRS, préférences |

---

## 💾 Données sauvegardées (LocalStorage)

| Clé | Contenu |
|---|---|
| `yct-progress` | Meilleurs scores par niveau et par mode |
| `yct-srs` | Données SRS par mot (intervalle, date, répétitions) |
| `yct-streak` | Série de jours consécutifs |
| `yct-favs` | Mots marqués en favoris |
| `yct-goal` | Objectif quotidien configuré |
| `yct-chrono` | Paramètre Quiz Chrono (activé / durée) |
| `yct-badges` | Badges débloqués (date d'obtention) |
| `yct-theme` / `yct-bg` / `yct-surf` | Préférences visuelles |

---

## ⚠️ Remarques

- Le **tracé des caractères** (HanziWriter) nécessite Internet au premier lancement, puis fonctionne hors-ligne
- La version **iPhone** désactive la lecture audio automatique (restriction Safari) — le bouton 🔊 reste disponible
- Les données de progression sont stockées **sur l'appareil uniquement** — elles ne sont pas synchronisées entre appareils

### 🔊 Prononciation — installation requise sur Android

Pour que le chinois mandarin soit disponible en mode hors-ligne :

1. Aller dans **Paramètres** → **Accessibilité** → **Synthèse vocale**
2. Vérifier que le moteur **Google** est sélectionné
3. Appuyer sur ⚙️ à côté du moteur → **Installer les données vocales**
4. Chercher **Chinois (Chine)** ou **中文(中国)** et télécharger

> Sans ce pack, la prononciation ne fonctionnera pas hors-ligne.

---

## 📄 Licence

Projet personnel — libre d'utilisation à des fins éducatives.

# Wiki — YCT Vocab

Bienvenue dans la documentation technique de l'application **YCT Vocab**.

## Pages du Wiki

| Page | Description |
|---|---|
| [Architecture](Architecture) | Structure du code, sections, état global |
| [Données et niveaux](Données-et-niveaux) | Format des mots, comment ajouter du vocabulaire |
| [Modes d'entraînement](Modes-dentraînement) | Fonctionnement des 6 modes |
| [Progression et LocalStorage](Progression-et-LocalStorage) | Sauvegarde des scores, thème |
| [PWA et Service Worker](PWA-et-Service-Worker) | Installation, cache, mise à jour |
| [Audio et TTS](Audio-et-TTS) | Synthèse vocale, Google TTS, fallback |
| [Tracé des caractères](Tracé-des-caractères) | HanziWriter, mode écriture |
| [Thème et couleurs](Thème-et-couleurs) | Système de couleurs, dark/light mode |
| [Navigation](Navigation) | Système de vues, bouton retour Android |
| [Déploiement GitHub Pages](Déploiement-GitHub-Pages) | Mise en ligne, mise à jour, PWA |

---

## Résumé rapide

L'application est un **fichier HTML unique** (+ quelques fichiers PWA) sans framework ni bundler. Tout le code CSS, HTML et JavaScript est dans deux fichiers principaux :

- `yct_app.html` — version unifiée Android + iOS
- `yct_app.html` — (supprimé — fusionné dans yct_app.html)

Une seule dépendance externe : **HanziWriter 3.5** (CDN jsDelivr) pour les tracés.

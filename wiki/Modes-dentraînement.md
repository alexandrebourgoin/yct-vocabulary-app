# Modes d'entraînement

L'application propose 6 modes accessibles via le bouton **"S'entraîner"** de chaque niveau.

## Vue d'ensemble

| Icône | Mode | Identifiant | Description |
|---|---|---|---|
| 🀄 | Quiz Hanzi → FR | `normal` | Voir un hanzi, choisir la traduction |
| 🔄 | Quiz FR → Hanzi | `reverse` | Voir le français, choisir le hanzi |
| 🎵 | Dictée | `dictee` | Écouter le mot, retrouver sa traduction |
| 🔗 | Association | `assoc` | Relier les paires hanzi ↔ français |
| 🃏 | Flash Cards | `flash` | Cartes à retourner, auto-évaluation |
| 📝 | Phrases | `sent` | Vocabulaire dans des phrases |

## Quiz (normal et reverse)

- **Questions** : QCM à 4 choix, générées aléatoirement
- **Distracteurs** : choisis parmi les autres mots du même niveau
- **Streak** : compteur de bonnes réponses consécutives
- **Score final** : noté en étoiles (0 à 5) + pourcentage
- **Sauvegarde** : le score est enregistré si supérieur au précédent

```js
// Démarrage
startQuiz(levelId, mode)  // mode = 'normal' | 'reverse'

// Rendu d'une question
renderQ()   // affiche la question + 4 choix

// Réponse
answerQ(choix)  // vérifie, met à jour score, passe à la suivante
```

## Dictée (dictee)

- Un mot est **prononcé** automatiquement (TTS)
- L'utilisateur choisit la bonne traduction parmi 4 propositions
- Peut réécouter en appuyant sur l'icône 🔊
- Même système de score que le quiz

> ⚠️ Sur iPhone, la lecture automatique est désactivée (restriction Safari). L'utilisateur doit appuyer sur 🔊.

## Association (assoc)

- 6 paires hanzi ↔ français affichées en désordre
- L'utilisateur tap un hanzi, puis le français correspondant (ou vice-versa)
- Les paires correctes se grisent
- Score calculé sur le nombre de paires réussies

## Flash Cards (flash)

- Cartes avec le hanzi au recto, la traduction au verso
- Tap sur la carte = retourner
- Boutons **✓ Je savais** / **✗ Je ne savais pas**
- Indicateur de progression en points en haut
- Score = % de cartes "je savais"

```js
// Démarrage
startFlash(levelId)

// Navigation
flipCard()      // retourner la carte
flashPass()     // marquer comme su
flashFail()     // marquer comme non su
```

## Phrases (sent)

- Phrases en contexte contenant le mot du niveau
- Affichage de la phrase complète en chinois + traduction
- Navigation entre les phrases

## Sauvegarde des scores

Chaque mode sauvegarde son meilleur score en LocalStorage :
```js
// Modes enregistrés
_PROG_MODES = ['normal', 'reverse', 'dictee', 'assoc', 'flash', 'sent']
_PROG_LABELS = ['🀄', '🔄', '🎵', '🔗', '🃏', '📝']

// Sauvegarde (ne remplace que si meilleur score)
_saveProg(levelId, mode, pourcentage)
```

## Interruption en cours de session

Si l'utilisateur essaie de quitter pendant une session (bouton retour ou icône maison), une **feuille modale** s'affiche pour confirmer l'abandon. Le score en cours n'est alors **pas sauvegardé**.

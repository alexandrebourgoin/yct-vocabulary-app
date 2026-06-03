# Navigation

## Système de vues

L'application utilise un système de vues à **affichage/masquage** (pas de routing SPA classique). Toutes les vues sont présentes dans le DOM, une seule est visible à la fois.

```js
function show(id) {
  // Masquer toutes les vues
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  // Afficher la vue cible
  document.getElementById(id).classList.add('active');
}
```

### Vues disponibles

| ID | Description |
|---|---|
| `home` | Écran d'accueil — cartes de niveau |
| `vocab-view` | Vocabulaire — liste avec filtres |
| `quiz-view` | Quiz QCM |
| `flash-view` | Flash cards |
| `dict-view` | Dictée |
| `assoc-view` | Association |
| `sent-view` | Phrases |
| `write-view` | Écriture HanziWriter |

### Overlays (par-dessus les vues)

| ID | Description |
|---|---|
| `settings-overlay` | Paramètres (thème, données) |
| `stats-overlay` | Statistiques complètes |
| `modal-overlay` | Confirmation "Quitter ?" |
| `word-sheet-overlay` | Bottom sheet (écouter / écrire) |

## Retour à l'accueil

```js
function goHome() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  show('home');
  current = quizLevel = flashLevel = sentLevel = dictLevel = assocLevel = null;
  activeCat = 'all';
  buildHome();  // ← important : rafraîchit les scores
}
```

> `buildHome()` est appelé à chaque retour pour mettre à jour les scores sur les cartes.

## Bouton retour Android

Le bouton retour natif Android est intercepté via l'API History :

### Principe
1. Au chargement, on pousse un état factice dans l'historique : `history.pushState({inApp:true}, '')`
2. Quand l'utilisateur appuie sur retour, le navigateur pop cet état → événement `popstate`
3. On intercepte `popstate` et on appelle `handleAndroidBack()`
4. On re-pousse un état pour continuer à intercepter les prochains appuis

```js
function handleAndroidBack() {
  // Fermer les overlays ouverts en priorité
  if (statsOverlay.open)    { closeStats();       return; }
  if (settingsOverlay.open) { closeSettings();    return; }
  if (wordSheetOverlay.open){ closeWordSheet();   return; }
  if (modalOverlay.open)    { closeModal();       return; }

  // Fermer les vues actives
  if (writeView.active)     { closeWrite();       return; }
  if (quizView.active)  {
    if (inQuizMid()) openModal(goHome); else goHome(); return;
  }
  if (flashView.active) {
    if (inFlashMid()) openModal(goHome); else goHome(); return;
  }
  if (sentView.active) {
    if (inSentMid()) openModal(goHome); else goHome(); return;
  }

  // Si on est déjà à l'accueil → quitter l'app (laisser le navigateur gérer)
  goHome();
}

// Setup
history.pushState({ inApp: true }, '');
window.addEventListener('popstate', function() {
  if (!homeView.classList.contains('active')) {
    handleAndroidBack();
    history.pushState({ inApp: true }, ''); // re-push pour continuer à intercepter
  }
});
```

### Comportement selon le contexte

| Contexte | Résultat du bouton retour |
|---|---|
| Overlay ouvert | Ferme l'overlay |
| Vue Écriture | Ferme l'écriture → retour à Vocab |
| Quiz/Flash/Dict en cours | Ouvre la modale "Quitter ?" |
| Quiz/Flash/Dict terminé | Retour à l'accueil direct |
| Accueil | Quitte l'application |

## Modale de confirmation

Affichée quand l'utilisateur veut quitter en cours de session :

```js
function openModal(callback) {
  modalOverlay.classList.add('open');
  // Si confirme → appeler callback (ex: goHome)
  // Si annule → fermer la modale
}
```

Cette protection évite la perte d'une session en cours si le retour est accidentel.

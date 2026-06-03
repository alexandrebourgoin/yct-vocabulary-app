# Tracé des caractères (HanziWriter)

## Présentation

La vue **Écriture** permet de pratiquer le tracé des caractères chinois stroke-by-stroke. Elle utilise la bibliothèque open-source [HanziWriter](https://hanziwriter.org/).

## Dépendance

```html
<script src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js"></script>
```

- Chargé depuis le CDN jsDelivr
- Mis en cache par le Service Worker après le premier chargement
- Fonctionne ensuite hors-ligne

## Accès à la vue Écriture

Depuis la vue Vocabulaire : taper sur un mot → **bottom sheet** → bouton ✍️ **Écrire**

## Fonctionnement

### Initialisation
```js
function openWrite(word) {
  _writeChars = word.h.split('');   // séparer les caractères du mot
  _writeCharIdx = 0;
  show('write-view');
  _initWriteChar();
}
```

### Création de l'instance HanziWriter
```js
function _initWriteChar() {
  var char = _writeChars[_writeCharIdx];
  _hanziWriter = HanziWriter.create('hanzi-canvas', char, {
    width: 280,
    height: 280,
    padding: 20,
    showOutline: true,
    strokeAnimationSpeed: 1,
    delayBetweenStrokes: 50,
    onLoadCharDataError: function() {
      // Caractère non trouvé dans la base HanziWriter
      alert('Caractère non disponible : ' + char);
    }
  });
}
```

### Mode quiz (tracé guidé)
```js
_hanziWriter.quiz({
  onMistake: function(strokeData) { /* mauvais trait */ },
  onCorrectStroke: function(strokeData) { /* trait correct */ },
  onComplete: function(summaryData) {
    // Tous les traits réussis → passer au caractère suivant
    _nextWriteChar();
  }
});
```

### Navigation multi-caractères
Pour les mots composés (ex: 你好 = 2 caractères), des points de navigation s'affichent en haut. L'utilisateur peut avancer/reculer entre les caractères.

```js
function _nextWriteChar() {
  _writeCharIdx++;
  if (_writeCharIdx >= _writeChars.length) {
    // Mot terminé
    return;
  }
  _initWriteChar();
}
```

## Hints (indices)

Un bouton **Aide** affiche le prochain trait attendu :
```js
function writeHint() {
  if (_hanziWriter) _hanziWriter.animateCurrentStroke();
}
```

## Limites

- Tous les caractères chinois ne sont pas dans la base de données HanziWriter
- Les caractères rares (hors HSK/YCT courant) peuvent déclencher `onLoadCharDataError`
- La bibliothèque gère uniquement les **caractères simplifiés** (简体字)

## Caractères non supportés

Si un caractère n'est pas trouvé, un message d'erreur s'affiche et le mode écriture n'est pas disponible pour ce caractère. Le vocabulaire YCT utilise principalement des caractères courants, donc ce cas est rare.

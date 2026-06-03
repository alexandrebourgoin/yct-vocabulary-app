# Audio et TTS

## Architecture audio

L'application utilise deux systèmes de synthèse vocale en cascade :

```
speak(text)
  ├── 1. Google Translate TTS  ← préféré (voix naturelle)
  │       ↓ si erreur / pas de réseau
  └── 2. Web Speech API        ← fallback (voix système)
```

## 1. Google Translate TTS

Endpoint utilisé :
```
https://translate.google.com/translate_tts
  ?ie=UTF-8
  &q=TEXT
  &tl=zh-CN
  &client=gtx
```

```js
function speak(text) {
  var url = 'https://translate.google.com/translate_tts'
    + '?ie=UTF-8&q=' + encodeURIComponent(text)
    + '&tl=zh-CN&client=gtx';
  var audio = new Audio(url);
  audio.play().catch(function() {
    speakFallback(text);  // si échec → fallback
  });
}
```

> ⚠️ **Problème connu** : Depuis le déploiement sur GitHub Pages (`https://[user].github.io/`), Google TTS peut bloquer les requêtes (politique CORS). L'audio ne fonctionne alors pas sur GitHub Pages alors qu'il fonctionnait en local (`file://`).

## 2. Web Speech API (fallback)

```js
function speakFallback(text) {
  if (!window.speechSynthesis) return;
  var utt = new SpeechSynthesisUtterance(text);
  // Chercher une voix zh-CN
  var voices = speechSynthesis.getVoices();
  var zhVoice = voices.find(v => v.lang.startsWith('zh'));
  if (zhVoice) utt.voice = zhVoice;
  utt.lang = 'zh-CN';
  utt.rate = 0.9;
  speechSynthesis.speak(utt);
}
```

> Sur Android, les voix zh-CN ne sont pas toujours disponibles nativement. Sur iOS, le fallback fonctionne généralement bien.

## Différence iOS / Android

| Comportement | Android | iPhone |
|---|---|---|
| TTS automatique dans quiz | ✅ Oui | ❌ Non (restriction Safari) |
| TTS automatique en dictée | ✅ Oui | ❌ Non |
| TTS manuel (bouton 🔊) | ✅ Oui | ✅ Oui (après interaction utilisateur) |

Safari interdit la lecture audio automatique sans interaction utilisateur préalable. La version iPhone retire donc tous les `speak()` automatiques.

## Service Worker et TTS

Le Service Worker exclut explicitement les requêtes Google TTS du cache :

```js
self.addEventListener('fetch', e => {
  if (e.request.url.includes('translate.google')) return; // → réseau direct
  // ... reste en cache
});
```

Cela évite de mettre en cache des URLs TTS (qui varient selon le texte) et assure que l'audio passe toujours par le réseau.

## Installation du pack vocal chinois sur Android

La prononciation utilise le moteur de synthèse vocale Android. Le pack chinois doit être installé manuellement :

1. **Paramètres** → **Accessibilité** → **Synthèse vocale**
2. Vérifier que le moteur **Google** est sélectionné
3. Appuyer sur ⚙️ → **Installer les données vocales**
4. Chercher **Chinois (Chine)** / **中文(中国)** et télécharger

> Sans ce pack, aucun son ne sera produit même si l'app fonctionne correctement.

## Diagnostic si le son ne fonctionne pas

1. **Vérifier la connexion** : Google TTS nécessite internet
2. **Ouvrir la console navigateur** (F12 → Console) : chercher des erreurs CORS ou réseau
3. **Tester en local** : ouvrir le fichier HTML directement (`file://`) — si ça fonctionne en local mais pas sur GitHub Pages → problème CORS
4. **Sur Android PWA** : vérifier que l'app a accès internet (pas en mode avion)

## Erreur CORS sur GitHub Pages

Si la console affiche :
```
Access to audio from 'https://translate.google.com/...' has been blocked by CORS policy
```

**Cause** : Google TTS refuse les requêtes venant de `*.github.io`.  
**Solution possible** : utiliser uniquement Web Speech API, ou passer par un proxy.

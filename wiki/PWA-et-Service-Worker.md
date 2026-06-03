# PWA et Service Worker

## Qu'est-ce qu'une PWA ?

Une **Progressive Web App** est une application web qui peut être installée sur l'écran d'accueil du téléphone et fonctionner hors-ligne, comme une app native. Elle ne passe pas par l'App Store.

## Fichiers PWA

| Fichier | Rôle |
|---|---|
| `manifest.json` | Nom, icône, couleurs, orientation de l'app |
| `sw.js` | Service Worker : gère le cache hors-ligne |
| `icon.svg` | Icône de l'application (rouge #CC0000, caractère 汉) |

### manifest.json
```json
{
  "name": "YCT Vocab — Chinois",
  "short_name": "YCT Vocab",
  "start_url": "./yct_app.html",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#F7F6F2",
  "theme_color": "#CC0000",
  "icons": [{ "src": "icon.svg", "sizes": "any", "type": "image/svg+xml" }]
}
```

### Enregistrement du Service Worker (dans le HTML)
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
```

## Comment fonctionne le Service Worker

### 1. Installation (`install`)
Lors du premier chargement, le SW met en cache tous les assets listés dans `ASSETS` :
```js
const CACHE = 'yct-vocab-v4';
const ASSETS = [
  './yct_app.html',
  './yct_app.html',
  './icon.svg',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js'
];
```

### 2. Activation (`activate`)
L'ancien cache (version précédente) est supprimé pour libérer de l'espace.

### 3. Interception des requêtes (`fetch`)
- **Google Translate TTS** → laissé passer directement au réseau (nécessite internet)
- **Tout le reste** → cache d'abord, réseau si absent

```js
self.addEventListener('fetch', e => {
  if (e.request.url.includes('translate.google')) return; // TTS pass-through
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(res => {
        // Mettre en cache la nouvelle ressource
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
    )
  );
});
```

## Mettre à jour l'application

Quand on modifie les fichiers HTML ou le SW, il faut forcer le rechargement du cache.

### Procédure de mise à jour
1. **Incrémenter la version du cache** dans `sw.js` :
   ```js
   const CACHE = 'yct-vocab-v5';  // v4 → v5
   ```
2. Committer et pousser sur GitHub
3. Sur le téléphone : **fermer complètement l'app** puis la rouvrir
4. Le nouveau Service Worker s'installe automatiquement

> Si l'app est installée en PWA et que les changements ne s'affichent pas, il peut être nécessaire de désinstaller et réinstaller l'app depuis l'écran d'accueil.

## Mode hors-ligne

Après le premier chargement avec internet :
- ✅ Toutes les vues de l'app fonctionnent hors-ligne
- ✅ HanziWriter (tracé) fonctionne hors-ligne
- ❌ La prononciation TTS nécessite internet
- ❌ Les nouvelles ressources non encore visitées ne seront pas disponibles

## Problèmes courants

### Icône non mise à jour
**Cause** : le SW sert l'ancienne icône depuis le cache.  
**Solution** : incrémenter `CACHE` dans `sw.js` → réinstaller la PWA.

### Application coincée sur l'ancienne version
**Cause** : le SW actif est l'ancien.  
**Solution** : incrémenter `CACHE` + fermer/rouvrir l'app (ou vider le cache navigateur).

### App qui ne fonctionne pas hors-ligne
**Cause** : le SW ne s'est pas encore installé (premier chargement sans internet).  
**Solution** : charger l'app une première fois avec une connexion internet active.

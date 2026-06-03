# Déploiement GitHub Pages

## Configuration

L'application est hébergée sur **GitHub Pages** à partir de la branche `main`.

URL : `https://[votre-pseudo].github.io/yct-vocabulary-app/`

### Activer GitHub Pages
1. GitHub → dépôt → **Settings** → **Pages**
2. Source : `Deploy from a branch`
3. Branch : `main` / `/ (root)`
4. Sauvegarder → URL générée automatiquement

## Structure des fichiers déployés

```
/
├── index.html              ← redirige vers yct_app.html (fichier unique)
├── yct_app.html
├── yct_app.html
├── manifest.json
├── sw.js
├── icon.svg
└── README.md
```

## Redirection automatique (index.html)

```html
<script>
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  window.location.replace(isIOS ? './yct_app.html' : './yct_app.html');
</script>
```

L'URL de base redirige automatiquement vers la bonne version selon le device.

## Mettre à jour l'application

### Mise à jour du contenu (HTML, données)

```bash
git add yct_app.html yct_app.html
git commit -m "Ajout vocabulaire YCT 3"
git push origin main
```

GitHub Pages déploie automatiquement en ~1 minute. Le Service Worker livrera la nouvelle version aux utilisateurs au prochain lancement de l'app (après fermeture complète).

### Mise à jour avec changement de cache SW

Si les fichiers HTML sont modifiés, incrémenter la version dans `sw.js` :

```js
const CACHE = 'yct-vocab-v5';  // ← incrémenter
```

```bash
git add sw.js yct_app.html yct_app.html
git commit -m "v5 : correction audio + nouveau vocabulaire"
git push origin main
```

### Tableau de bord des déploiements

GitHub → dépôt → onglet **Actions** → workflows `pages-build-deployment`

## Installation PWA après déploiement

### Android (Chrome)
1. Ouvrir l'URL dans Chrome
2. Bannière "Installer l'app" ou menu ⋮ → "Ajouter à l'écran d'accueil"
3. ✅ Installé — icône rouge 汉 sur l'écran d'accueil

### iPhone (Safari uniquement)
1. Ouvrir l'URL dans **Safari** (Chrome iOS ne supporte pas l'installation PWA)
2. Bouton Partager ↑ → "Sur l'écran d'accueil"
3. ✅ Installé

> ⚠️ Si l'icône ou la couleur de la barre ne se mettent pas à jour : désinstaller la PWA de l'écran d'accueil, vider le cache Safari/Chrome, puis réinstaller.

## Problèmes courants

### 404 sur l'URL de base
**Cause** : pas de fichier `index.html` à la racine.  
**Solution** : s'assurer que `index.html` est bien commité et poussé.

### Ancienne version affichée
**Cause** : Service Worker sert le cache.  
**Solutions** :
- Incrémenter `CACHE` dans `sw.js`
- Ou : Chrome DevTools → Application → Service Workers → "Update" + "Skip waiting"
- Ou : vider le cache navigateur

### Icône non mise à jour après modification
**Cause** : ancien cache SW.  
**Solution** : incrémenter `CACHE` + désinstaller/réinstaller la PWA.

### Audio ne fonctionne pas sur GitHub Pages
**Cause probable** : Google TTS bloque les requêtes cross-origin depuis `*.github.io`.  
**Voir** : [Audio et TTS](Audio-et-TTS) pour le diagnostic complet.

## Workflow recommandé

```
Modifier le code en local
        ↓
Tester en ouvrant le .html directement dans le navigateur
        ↓
Si modification CSS/JS/HTML → incrémenter CACHE dans sw.js
        ↓
git add + git commit + git push
        ↓
Attendre ~1 min → tester sur l'URL GitHub Pages
        ↓
Si PWA installée : fermer/rouvrir l'app pour déclencher la mise à jour SW
```

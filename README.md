# Mali — Terre d'Histoire 🇲🇱

## Lancer le projet
```bash
npm install
npm run dev
```

---

## Où mettre tes photos

Toutes tes photos doivent être dans :
```
mali-app/
└── public/
    └── images/
        ├── art.jpeg
        ├── badiangara.jpeg
        ├── beignet.jpeg
        └── ... (toutes tes photos ici)
```

---

## Comment modifier les photos dans le code

Chaque fichier de page contient des **ZONES À MODIFIER** clairement indiquées.
Cherche le commentaire `// ZONE À MODIFIER` dans chaque fichier.

### Accueil.jsx
- `PHOTO_HERO` → photo de fond plein écran
- `cartesAccueil` → les 4 cartes de la page d'accueil

### Histoire.jsx
- `PHOTO_HERO_HISTOIRE` → photo de fond du hero
- `evenements` → photos dans la frise chronologique
- `figures` → photos des personnalités historiques

### Culture.jsx
- `PHOTO_HERO_CULTURE` → photo de fond du hero
- `elements` → toutes les cartes culturelles (avec filtre par catégorie)

### Geographie.jsx
- `PHOTO_HERO_GEO` → photo de fond du hero
- `statsGeo` → les 4 cartes de statistiques
- `zones` → les 3 zones climatiques avec photo

### MaliAujourdhui.jsx
- `PHOTO_HERO` → photo de fond du hero
- `PHOTO_PORTRAIT` → photo de la section intro
- `photosModernes` → grille de photos du Mali moderne

### Galerie.jsx
- `photos` → toutes les photos de la galerie
- Pour ajouter une photo : copie le bloc commenté en bas du tableau et remplis-le

---

## Ajouter une nouvelle photo dans la galerie

Dans `Galerie.jsx`, trouve le commentaire `AJOUTE TES NOUVELLES PHOTOS ICI` et copie ce modèle :

```js
{
  id: 22,                         // ← numéro unique (incrémente de 1)
  theme: 'Nature',                // ← Nature / Villes / Gastronomie / Traditions / Architecture
  titre: 'Titre de ta photo',
  lieu: 'Lieu de la photo',
  description: 'Description.',
  photo: '/images/ta-photo.jpeg', // ← nom exact de ton fichier dans public/images/
},
```

---

## Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx + .module.css
│   ├── Footer.jsx + .module.css
│   ├── TitreSection.jsx + .module.css
│   └── CartePhoto.jsx + .module.css   ← composant réutilisable pour toutes les cartes photo
├── pages/
│   ├── Accueil.jsx + .module.css
│   ├── Histoire.jsx + .module.css
│   ├── Culture.jsx + .module.css
│   ├── Geographie.jsx + .module.css
│   ├── MaliAujourdhui.jsx + .module.css
│   ├── Galerie.jsx + .module.css
│   └── NotFound.jsx + .module.css
├── App.jsx
├── main.jsx
└── index.css
```

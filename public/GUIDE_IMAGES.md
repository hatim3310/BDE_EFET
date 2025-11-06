# 📸 Guide des Images - BDE EFET 2025

## 📐 Dimensions et Spécifications

### 1. Logo BDE EFET

**Emplacement** : `public/logo.svg` ou `public/logo.png`

#### Dimensions Recommandées :
- **Format carré** : 512x512 pixels (minimum)
- **Format optimal** : 1024x1024 pixels
- **Ratio** : 1:1 (carré)
- **Format** : SVG (recommandé) ou PNG avec fond transparent

#### Spécifications :
- ✅ **Fond transparent** (pour s'adapter à tous les fonds)
- ✅ **Haute résolution** pour affichage sur écrans Retina
- ✅ **Couleurs** : Bleu EFET (#0A6CF0) et blanc/noir
- ✅ **Style** : Minimaliste et professionnel
- ✅ **Poids** : < 100 KB

#### Utilisation :
Le logo apparaît dans la **navbar** en haut à gauche :
- Taille affichée : 48x48 pixels
- Avec bordure arrondie subtile
- Cliquable pour retourner en haut de page

---

### 2. Image Hero (Page d'accueil)

**Emplacement** : `public/images/hero-image.jpg`

#### Dimensions Recommandées :
- **Largeur** : 800 pixels minimum
- **Hauteur** : 1000 pixels minimum
- **Format optimal** : 1200x1500 pixels
- **Ratio** : 4:5 (portrait)

#### Spécifications :
- ✅ **Orientation** : Portrait (vertical)
- ✅ **Format** : JPG ou PNG
- ✅ **Qualité** : Haute résolution
- ✅ **Poids** : < 500 KB (optimisée pour le web)
- ✅ **Style** : Photo de groupe, événement BDE, campus

#### Suggestions de contenu :
- Photo de toute l'équipe BDE ensemble
- Moment fort d'un événement passé
- Photo professionnelle sur le campus
- Ambiance conviviale et dynamique

#### Effet appliqué :
- Overlay bleu subtil
- Coins arrondis
- Badges flottants "10 Membres" et "6 Événements"

---

### 3. Photos de l'Équipe

**Emplacement** : `public/images/team/`

#### Dimensions Recommandées :
- **Largeur** : 600 pixels minimum
- **Hauteur** : 800 pixels minimum
- **Format optimal** : 900x1200 pixels
- **Ratio** : 3:4 (portrait)

#### Spécifications par photo :
- ✅ **Orientation** : Portrait
- ✅ **Format** : PNG (obligatoire)
- ✅ **Qualité** : Haute résolution
- ✅ **Poids** : < 500 KB par photo

#### Liste des fichiers requis :
```
public/images/team/
├── douaa.png
├── hatim.png
├── marwa.png
├── abdessamia.png
├── fatim.png
├── imane.png
├── yassine.png
├── ikram.png
├── mohammed.png
└── amira.png
```

#### Style recommandé :
- Photos professionnelles
- Fond uni ou neutre
- Bonne luminosité
- Expression souriante
- **Effet appliqué** : Noir & blanc avec couleur au survol

---

### 4. QR Code

**Emplacement** : `public/qr.png`

#### Dimensions Recommandées :
- **Format carré** : 500x500 pixels minimum
- **Format optimal** : 1000x1000 pixels
- **Ratio** : 1:1 (carré)

#### Spécifications :
- ✅ **Format** : PNG avec fond blanc
- ✅ **Qualité** : Haute résolution pour scan facile
- ✅ **Marge** : Espace blanc autour du QR code
- ✅ **Poids** : < 200 KB

#### Contenu suggéré :
- URL du site web BDE
- Page Instagram @efet_bde
- Lien Google Form pour inscriptions

---

## 🎨 Conseils de Design

### Pour toutes les images :

#### ✅ À faire :
- Utiliser des photos de haute qualité
- Optimiser le poids pour le web (TinyPNG, ImageOptim)
- Garder une cohérence visuelle
- Photos bien éclairées
- Formats adaptés (JPG pour photos, PNG pour logos, SVG pour icônes)

#### ❌ À éviter :
- Photos floues ou pixelisées
- Images trop lourdes (> 1 MB)
- Mauvais éclairage
- Arrière-plans trop chargés
- Formats inadaptés

---

## 🔧 Outils Recommandés

### Création/Édition :
- **Adobe Photoshop** - Édition professionnelle
- **Figma** - Design de logo et assets
- **Canva** - Création simple et rapide
- **GIMP** - Alternative gratuite à Photoshop

### Optimisation :
- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** (Mac) - Optimisation batch

### QR Code :
- **QR Code Generator** - https://www.qr-code-generator.com/
- **QRCode Monkey** - https://www.qrcode-monkey.com/

---

## 📋 Checklist Avant Upload

- [ ] Logo en format carré (512x512 min)
- [ ] Image Hero en portrait (800x1000 min)
- [ ] 10 photos de l'équipe en portrait (600x800 min)
- [ ] QR Code en carré (500x500 min)
- [ ] Toutes les images optimisées (< 500 KB)
- [ ] Noms de fichiers corrects (minuscules, sans espaces)
- [ ] Formats corrects (SVG/PNG pour logo, JPG pour photos)

---

## 📂 Structure Finale

```
public/
├── logo.svg (ou logo.png)        # 512x512px - Transparent
├── qr.png                         # 500x500px - Fond blanc
└── images/
    ├── hero-image.jpg             # 800x1000px - Portrait
    └── team/
        ├── douaa.png              # 600x800px - Portrait
        ├── hatim.png              # 600x800px - Portrait
        ├── marwa.png              # 600x800px - Portrait
        ├── abdessamia.png         # 600x800px - Portrait
        ├── fatim.png              # 600x800px - Portrait
        ├── imane.png              # 600x800px - Portrait
        ├── yassine.png            # 600x800px - Portrait
        ├── ikram.png              # 600x800px - Portrait
        ├── mohammed.png           # 600x800px - Portrait
        └── amira.png              # 600x800px - Portrait
```

---

## 🚀 Résultat Attendu

Une fois toutes les images ajoutées :
- ✅ Logo visible dans la navbar
- ✅ Image Hero affichée avec badges flottants
- ✅ Photos de l'équipe en noir & blanc (couleur au survol)
- ✅ QR Code scannable dans la section contact

---

**Besoin d'aide ?**
Contacte Hatim L. (Vice-Président & Développeur Web) 💻

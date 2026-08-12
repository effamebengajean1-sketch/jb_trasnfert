# Description frontend pour maquettes Stitch — JB Transfert

## 1. Identité visuelle

**Palette** (bleu/blanc dominant, à utiliser tel quel dans Stitch) :
- `#0B4F9E` — Bleu principal (boutons d'action, liens, éléments actifs)
- `#2D7DD2` — Bleu secondaire (survols, accents, icônes)
- `#EAF3FC` — Bleu très clair (fonds de section, cartes au repos)
- `#FFFFFF` — Blanc (fond principal, cartes)
- `#0F1B2D` — Bleu marine foncé (texte principal, quasi-noir teinté bleu plutôt qu'un noir pur)
- `#6B7A8F` — Gris-bleu (texte secondaire, légendes, placeholders)

Principe : fond très majoritairement blanc, le bleu est réservé aux actions et
aux repères visuels (pas de grands aplats bleu foncé qui alourdiraient — le
produit doit rester "propre", lisible, orienté confiance/fiabilité pour un
usage de transfert de fichiers).

**Typographie** :
- Titres : une sans-serif géométrique moderne (ex. Inter ou Sora), graisses
  600-700, un peu resserrée
- Corps de texte : la même famille en 400-500 pour la cohérence, ou une
  sans-serif neutre complémentaire (ex. Inter pour tout)
- Chiffres/métadonnées (taille fichier, dates) : variante tabulaire si
  disponible, pour l'alignement dans les listes

**Ton** : sobre, orienté confiance et simplicité — c'est un outil de dépôt et
partage de fichiers, pas un réseau social. Peu de décoration, priorité à la
clarté (statuts d'upload visibles, messages d'erreur explicites).

## 2. Écrans à générer

### 2.1 Landing page (`/`)
- Header : logo (texte "JB Transfert" en bleu principal) + boutons
  "Se connecter" / "Créer un compte" (bouton plein bleu)
- Hero : titre court orienté bénéfice ("Partagez vos images en qualité
  originale"), sous-titre une phrase, un visuel illustrant une grille de
  photos ou un aperçu de galerie
- Section courte expliquant le principe en 3 étapes (déposer → organiser →
  partager par lien) — uniquement si le contenu s'y prête réellement, pas de
  numérotation artificielle sinon
- Fond blanc, section hero avec un léger dégradé ou aplat `#EAF3FC` pour
  distinguer du reste

### 2.2 Connexion / Inscription (`/login`, `/register`)
- Formulaire centré, carte blanche avec ombre légère sur fond `#EAF3FC`
- Champs : email, mot de passe (+ nom sur inscription)
- Bouton principal plein bleu (`#0B4F9E`), lien secondaire discret vers
  l'autre formulaire ("Pas encore de compte ? Créer un compte")
- États d'erreur : message clair sous le champ concerné, couleur rouge sobre
  (pas dans la palette bleu/blanc — seule exception, réservée aux erreurs)

### 2.3 Liste des galeries (`/galleries`) — espace authentifié
- Header applicatif : logo à gauche, nom/avatar utilisateur à droite
- Bouton d'action principal "Nouvelle galerie" (plein bleu, en haut à droite)
- Grille de cartes galeries : vignette (première photo ou état vide), titre,
  nombre de photos, date de création
- État vide (aucune galerie) : illustration simple + message d'invitation à
  créer la première galerie, pas un simple tableau vide

### 2.4 Détail d'une galerie (`/galleries/:id`) — espace authentifié
- Titre de la galerie éditable, bouton "Copier le lien de partage" (icône +
  texte, bleu secondaire)
- Zone de dépôt (dropzone) : bordure en pointillés bleu clair, icône
  d'upload, texte "Glissez vos images ici ou cliquez pour parcourir"
- Pendant l'upload : liste des fichiers avec barre de progression bleue et
  statut (en cours / terminé / erreur)
- Grille des photos déjà présentes, en dessous de la dropzone
- Action secondaire "Supprimer la galerie" discrète (texte gris, pas de
  bouton plein — pour éviter une suppression accidentelle)

### 2.5 Page publique de consultation (`/g/:slug`) — visiteur sans compte
- Layout épuré : pas de header applicatif, juste le titre de la galerie et
  un mini-logo discret en pied de page ("Partagé via JB Transfert")
- Grille de photos en plein largeur, fond blanc
- Clic sur une photo → visionneuse plein écran (fond bleu marine foncé
  `#0F1B2D` pour ce mode focus, contraste avec le reste du site en blanc),
  navigation précédent/suivant, bouton télécharger visible
- Pas de formulaire, pas d'appel à l'action de création de compte intrusif —
  au maximum un lien discret en pied de page ("Vous aussi, partagez vos
  photos → Créer un compte")

## 3. Composants transverses à garder cohérents entre écrans

- Bouton principal : fond `#0B4F9E`, texte blanc, coins légèrement arrondis
- Bouton secondaire : contour bleu, fond transparent/blanc, texte bleu
- Carte : fond blanc, ombre légère, coins arrondis, jamais de bordure bleue
  épaisse (réserver le bleu plein aux actions, pas aux contenants)
- Champs de formulaire : fond blanc, bordure gris-bleu clair, bordure bleue
  pleine au focus

## 4. Note pour la génération sur Stitch

Prompt de palette à réutiliser tel quel dans Stitch : *"Palette dominante
bleu et blanc — bleu principal #0B4F9E, bleu clair #2D7DD2, fond blanc
#FFFFFF avec sections en bleu très clair #EAF3FC, texte en bleu marine foncé
#0F1B2D. Style sobre, orienté confiance, minimal, sans décoration inutile."*

Générer les écrans dans cet ordre suggéré pour garder la cohérence visuelle
d'un écran à l'autre : Landing → Connexion/Inscription → Liste des galeries
→ Détail galerie (avec dropzone) → Page publique de consultation.

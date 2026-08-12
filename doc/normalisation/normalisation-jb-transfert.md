# Normalisation des données — JB Transfert

## 1. Contexte

Avant de produire le MCD, on part d'une table "à plat" telle qu'on pourrait
naïvement la concevoir, puis on la normalise jusqu'à la 3ème Forme Normale
(3FN) pour éliminer les redondances et anomalies de mise à jour.

## 2. Table non normalisée (0FN)

Si toutes les informations étaient stockées dans une seule table `depot` :

| id_photo | nom_fichier | taille | format | date_upload | id_galerie | titre_galerie | slug_galerie | date_creation_galerie | id_utilisateur | email_utilisateur | nom_utilisateur |
|---|---|---|---|---|---|---|---|---|---|---|---|

**Problèmes identifiés :**
- Redondance : `titre_galerie`, `slug_galerie` répétés pour chaque photo de la galerie
- Redondance : `email_utilisateur`, `nom_utilisateur` répétés pour chaque galerie de l'utilisateur
- Anomalie de mise à jour : changer l'email d'un utilisateur impose de modifier toutes ses lignes
- Anomalie de suppression : supprimer la dernière photo d'une galerie ferait perdre les infos de la galerie elle-même

## 3. Première Forme Normale (1FN)

**Règle** : chaque attribut doit être atomique (pas de valeurs multiples ou
répétées dans une même colonne), et chaque ligne doit être identifiable de
façon unique.

Dans notre cas, aucun attribut n'est multivalué (pas de liste de tags ou de
photos concaténées dans une cellule), donc la table `depot` respecte déjà la
1FN structurellement — le problème est ailleurs (dépendances fonctionnelles),
traité en 2FN/3FN.

## 4. Dépendances fonctionnelles identifiées

- `id_photo` → `nom_fichier`, `taille`, `format`, `date_upload`, `id_galerie`
- `id_galerie` → `titre_galerie`, `slug_galerie`, `date_creation_galerie`, `id_utilisateur`
- `id_utilisateur` → `email_utilisateur`, `nom_utilisateur`

On observe des **dépendances transitives** : `id_photo` → `id_galerie` →
`titre_galerie` (le titre de la galerie ne dépend pas directement de la
photo, mais de la galerie à laquelle elle appartient).

## 5. Deuxième Forme Normale (2FN)

**Règle** : être en 1FN, et tout attribut non-clé doit dépendre de la clé
primaire **entière** (pertinent surtout pour les clés composées — ici les
clés sont simples, donc la 2FN est automatiquement satisfaite dès qu'on est
en 1FN). Le vrai travail se fait en éliminant les **dépendances
transitives**, ce qui nous mène directement à la 3FN.

## 6. Troisième Forme Normale (3FN)

**Règle** : être en 2FN, et aucun attribut non-clé ne doit dépendre
transitivement de la clé primaire (c'est-à-dire dépendre d'un autre attribut
non-clé plutôt que de la clé elle-même).

On décompose la table `depot` en trois tables, une par entité identifiée :

### `utilisateur`
| Attribut | Dépendance |
|---|---|
| **id_utilisateur** (PK) | — |
| email | id_utilisateur → email |
| mot_de_passe_hash | id_utilisateur → mot_de_passe_hash |
| nom | id_utilisateur → nom |
| date_creation | id_utilisateur → date_creation |

### `galerie`
| Attribut | Dépendance |
|---|---|
| **id_galerie** (PK) | — |
| titre | id_galerie → titre |
| slug | id_galerie → slug |
| date_creation | id_galerie → date_creation |
| id_utilisateur (FK) | id_galerie → id_utilisateur |

### `photo`
| Attribut | Dépendance |
|---|---|
| **id_photo** (PK) | — |
| nom_fichier | id_photo → nom_fichier |
| chemin_fichier | id_photo → chemin_fichier |
| taille_octets | id_photo → taille_octets |
| format_mime | id_photo → format_mime |
| date_upload | id_photo → date_upload |
| id_galerie (FK) | id_photo → id_galerie |

**Vérification 3FN** : dans chaque table, tous les attributs non-clés
dépendent directement de la clé primaire et uniquement d'elle — plus aucune
dépendance transitive (`titre` dépend de `id_galerie`, pas de `id_photo` via
`id_galerie`).

## 7. Résultat

Ce schéma en 3FN est directement celui utilisé pour le MCD (section
associée) et pour le `schema.prisma` du backend. Il élimine les redondances
identifiées en 0FN tout en restant simple, cohérent avec l'esprit Phase 1 du
projet.

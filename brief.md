# Brief de conception · Vitrine CKY

## 1. Contexte & problématique

En Suisse romande, les petits clubs sportifs (basket, volley, foot amateur) doivent publier des visuels chaque semaine : affiches de match, posts, logos de tournoi. Leurs responsables communication sont souvent bénévoles et cherchent un graphiste depuis leur téléphone, entre deux entraînements. Les portfolios habituels (Instagram, Behance) mélangent tout et ne disent pas comment demander un prix : Vitrine CKY montre mes projets par sport et par format, et permet de demander un devis en un geste.

## 2. Profil de l’utilisateur cible (persona)

* **Prénom & âge :** Marc, 42 ans, responsable communication bénévole du club « Riviera Hoops » à Vevey
* **Contexte d’utilisation :** le soir dans les gradins ou le matin dans le train, smartphone 390 px tenu à une main, 10 minutes maximum
* **Besoins clés :** voir vite un exemple du bon sport et du bon format, textes lisibles même au soleil, zéro inscription, un bouton clair pour demander un prix

Persona complet : [design/persona.md](design/persona.md) · User flow : [design/user-flow.md](design/user-flow.md)

## 3. Fonctionnalités essentielles (périmètre MVP)

1. Affichage de la liste des projets sous forme de cartes (image, titre, club, sport, année).
2. Filtrage instantané par type de visuel (puces) et recherche dynamique par mot-clé (sport, club).
3. Consultation d’une fiche détaillée complète (grande image, format, année, délai, description).
4. Bouton « Demander un devis pour ce style » qui ouvre un petit formulaire prérempli avec le nom du projet, puis une confirmation visuelle.

## 4. Écrans

* **Écran 1 · Accueil & exploration :** titre de l’app, phrase d’accroche, barre de recherche, puces de filtre, liste de cartes en une colonne.
* **Écran 2 · Vue filtrée :** même structure, une puce active, la recherche remplie, un compteur « 3 projets » et un message clair si rien n’est trouvé.
* **Écran 3 · Fiche détaillée :** bouton retour, image en grand, informations du projet, bouton principal fixé en bas.

### Contenu de chaque écran

**Écran 1 · Accueil**
* On y voit : le nom « Vitrine CKY », la phrase « Visuels pour le sport en Suisse romande », la recherche, les puces (Tout, Affiches de match, Logos, Réseaux sociaux) et les cartes.
* On peut y faire : chercher, filtrer, ouvrir une carte.
* Bouton principal : chaque carte entière est cliquable.

**Écran 2 · Vue filtrée**
* On y voit : la puce active en couleur pleine, le mot tapé avec une croix pour l’effacer, le nombre de résultats.
* On peut y faire : changer de filtre, effacer la recherche, ouvrir une carte.
* Bouton principal : « Voir tous les projets » quand la liste est vide.

**Écran 3 · Fiche détail**
* On y voit : l’image en grand, le titre, le club, le sport, le format, l’année, le délai et 2 lignes de description.
* On peut y faire : revenir à la liste, demander un devis.
* Bouton principal : « Demander un devis pour ce style », 56 px de haut, en bas de l’écran.

## 5. Charte éditoriale & ambiance visuelle

* **Ton :** direct, court, en « vous ». Pas de jargon de graphiste : on dit « affiche de match », pas « key visual ».
* **3 adjectifs :** énergique, net, sportif.
* **Analogie :** comme le panneau d’affichage d’une salle de sport le soir de match.

### Palette

* Fond : blanc cassé `#F7F7F5`
* Texte : quasi noir `#0E0F12` (contraste 17,9:1)
* Texte secondaire : gris `#5B5F66` (contraste 6:1)
* Accent : orange vif `#FF5A1F`, avec texte quasi noir dessus (contraste 6,2:1)
* Attention / erreur : rouge `#B91C1C` (contraste 6:1)

## 6. Contraintes techniques & ergonomiques

* **Approche :** mobile first (largeur de référence 390 px), cibles tactiles de 48 px minimum.
* **Technologie :** HTML5 sémantique vanilla, CSS moderne avec variables, JavaScript natif sans bibliothèque. Les projets sont dans un fichier `projets.json`.
* **Accessibilité :** ratios de contraste WCAG AA (≥ 4,5:1), navigation complète au clavier (Tab / Entrée), textes alternatifs sur toutes les images, information jamais donnée par la couleur seule.

## 7. Interdits

* pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter
* pas de carrousel automatique qui fait défiler les projets tout seul
* pas de texte gris clair sous 4,5:1, ni de texte en dessous de 14 px

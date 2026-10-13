# Brief de conception · TeamSplit

## 1. Contexte & problématique

En Suisse romande, beaucoup de jeunes jouent entre amis le soir ou le week-end (foot à Vidy, basket au skatepark, volley sur la plage de Vevey), sans club ni entraîneur. À chaque fois, il faut former les équipes à la main : ça prend du temps, ça finit souvent en dispute, et ce sont toujours les mêmes qui se retrouvent ensemble. TeamSplit permet de cocher les joueurs présents et de générer deux équipes équilibrées selon leur niveau, en un geste.

## 2. Profil de l’utilisateur cible (persona)

* **Prénom & âge :** Yanis, 19 ans, apprenti à Lausanne, organisateur du foot du jeudi soir
* **Contexte d’utilisation :** debout au bord du terrain, le soir sous les projecteurs, smartphone 390 px tenu à une main, 2 minutes avant le match
* **Besoins clés :** rapidité, grandes zones tactiles, contrastes nets, preuve visible que les équipes sont équilibrées, zéro inscription

Persona complet : [design/persona.md](design/persona.md) · User flow : [design/user-flow.md](design/user-flow.md)

## 3. Fonctionnalités essentielles (périmètre MVP)

1. Affichage de la liste des joueurs sous forme de cartes (prénom, poste, niveau de 1 à 5).
2. Filtrage instantané par sport (puces) et recherche dynamique par prénom.
3. Sélection des joueurs présents en touchant leur carte, avec un compteur.
4. Génération de deux équipes équilibrées, avec le niveau total de chaque équipe, un bouton « Remélanger » et un bouton « Partager ».

## 4. Écrans

* **Écran 1 · Accueil & liste des joueurs :** titre de l’app, phrase d’accroche, barre de recherche, puces de sport, liste des joueurs en une colonne.
* **Écran 2 · Vue filtrée & sélection :** une puce de sport active, les joueurs présents cochés, le compteur « 10 présents » et le bouton « Faire les équipes » fixé en bas.
* **Écran 3 · Équipes générées :** deux colonnes (Équipe A / Équipe B), le niveau total de chaque équipe, les boutons « Remélanger » et « Partager ».

### Contenu de chaque écran

**Écran 1 · Accueil**
* On y voit : le nom « TeamSplit », la phrase « Des équipes justes, en un geste », la recherche, les puces (Tous, Foot, Basket, Volley) et les cartes joueurs.
* On peut y faire : chercher un prénom, filtrer par sport, toucher une carte pour marquer un joueur présent.
* Bouton principal : « Faire les équipes » (grisé tant que moins de 4 joueurs sont cochés).

**Écran 2 · Vue filtrée & sélection**
* On y voit : la puce Foot active, les cartes cochées en couleur avec une coche, le compteur de présents.
* On peut y faire : cocher ou décocher un joueur, changer de sport, effacer la recherche.
* Bouton principal : « Faire les équipes (10) », 56 px de haut, en bas de l’écran.

**Écran 3 · Équipes**
* On y voit : Équipe A et Équipe B avec les prénoms, les postes et le niveau total (ex. 17 contre 16), plus l’écart affiché en texte (« Écart : 1 point »).
* On peut y faire : remélanger, partager, revenir à la sélection.
* Bouton principal : « Partager », qui copie les équipes pour WhatsApp et affiche « Équipes copiées ! ».

## 5. Charte éditoriale & ambiance visuelle

* **Ton :** direct, copain, en « tu ». Phrases courtes. On dit « Faire les équipes », pas « Lancer l’algorithme de répartition ».
* **3 adjectifs :** énergique, clair, fair-play.
* **Analogie :** comme le tableau des scores d’un terrain de quartier sous les projecteurs.

### Palette

* Fond : blanc cassé `#F7F7F5`
* Texte : quasi noir `#0E0F12` (contraste 17,9:1)
* Texte secondaire : gris `#5B5F66` (contraste 6:1)
* Accent : vert terrain vif `#2BD97C`, avec texte quasi noir dessus
* Équipe A : bleu `#1D4ED8` · Équipe B : orange `#FF5A1F` (toujours accompagnés des lettres A et B, jamais la couleur seule)
* Attention / erreur : rouge `#B91C1C` (contraste 6:1)

## 6. Contraintes techniques & ergonomiques

* **Approche :** mobile first (largeur de référence 390 px), cibles tactiles de 48 px minimum.
* **Technologie :** HTML5 sémantique vanilla, CSS moderne avec variables, JavaScript natif sans bibliothèque. Les joueurs sont dans un fichier `joueurs.json`.
* **Accessibilité :** ratios de contraste WCAG AA (≥ 4,5:1), navigation complète au clavier (Tab / Entrée / Espace), état coché annoncé (`aria-pressed`), information jamais donnée par la couleur seule.

## 7. Interdits

* pas de Bootstrap, pas de React, pas de compte obligatoire pour faire des équipes
* pas de pub ni de pop-up au lancement
* pas de texte gris clair sous 4,5:1, ni de texte en dessous de 14 px

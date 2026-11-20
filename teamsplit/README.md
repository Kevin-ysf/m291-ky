# TeamSplit

Des équipes justes, en un geste. On coche les joueurs présents, TeamSplit génère deux équipes équilibrées selon leur niveau.

Conception : [brief](../brief.md) · [persona](../design/persona.md) · [user flow](../design/user-flow.md) · [critique des 3 pistes](../design/critique.md) (Piste C retenue).

## Lancer le site
Le site charge `data.json` (à la racine du dépôt) avec `fetch`. Il faut donc l’ouvrir avec un serveur : **Live Server** dans VS Code, ou directement sur GitHub Pages. Un double clic sur `index.html` bloque le chargement.

## Structure
```
index.html        les 3 écrans (liste, sélection, équipes)
css/style.css     variables dans :root, mobile first, media query bureau (768 px)
js/app.js         chargement, filtre, recherche, sélection, répartition, partage
../data.json      32 joueurs (base JSON de l’exercice s10)
```

## Les données (data.json)
Chaque joueur a 8 champs typés : `id` (nombre), `prenom`, `sport`, `poste`, `commune` (textes), `niveau` (nombre de 1 à 5), `estRegulier` (booléen) et `tags` (tableau de textes). Les communes sont en Suisse romande. L’app utilise `prenom`, `sport`, `poste` et `niveau` ; `commune`, `estRegulier` et `tags` sont prêts pour un futur filtre.

## Ajouter un joueur (formulaire)
Le bouton « Ajouter un joueur » ouvre un formulaire : prénom, sport, poste et niveau de 1 à 5.
* **Validation** au moment d’envoyer, puis en direct pendant la correction. Erreurs écrites sous chaque champ (jamais d’`alert`), bordure rouge **et** texte avec ⚠, focus placé sur le premier champ à corriger.
* **Règles** : prénom de 2 lettres minimum, sans chiffres, pas de doublon dans le même sport ; poste obligatoire ; sport et niveau à choisir.
* **Sauvegarde** : une page web ne peut pas réécrire `data.json` sur GitHub. Les joueurs ajoutés sont donc gardés dans le `localStorage` du téléphone et ajoutés à la liste au chargement. Si le stockage est bloqué (navigation privée), le joueur est ajouté pour la soirée seulement et un message le dit.
* Le nouveau joueur est coché automatiquement et sa carte clignote en vert.

## Recherche avec anti-rebond (S12-AV1)
Le filtre attend 300 ms après la dernière touche avant de recalculer la liste (`debounce` avec `clearTimeout` / `setTimeout`). La croix d’effacement, elle, réagit tout de suite. Version commentée : [exercices/s12/debounce.js](../exercices/s12/debounce.js).

## Écarts avec la maquette (Piste C) et pourquoi
* **Avatars allégés** (gris clair au lieu de noir) : la critique notait qu’ils écrasaient les prénoms.
* **Marge basse de la liste** : la dernière carte n’est plus cachée par le bouton fixe.
* **Vraie barre de recherche** et **vrai bouton désactivable**, avec le message « Coche au moins 4 joueurs (2 sélectionnés) » : les deux correctifs des tests utilisateurs.
* **Écran des équipes sobre** (inspiré de la Piste A) avec un tableau des scores A : B.

## La répartition des équipes
Le pitch prévoyait un tri par niveau puis une répartition en alternance. Problème : avec les mêmes joueurs, on obtient toujours les mêmes équipes, et « Remélanger » ne sert à rien.

Le code fait donc autrement :
1. il mélange les joueurs au hasard et les coupe en deux équipes de même taille (à un joueur près) ;
2. il recommence 3000 fois et garde les répartitions avec le plus petit écart de niveau ;
3. il en choisit une au hasard. « Remélanger » en prend une autre, avec le même écart minimal.

Résultat : les équipes sont toujours les plus justes possible, mais ce ne sont pas toujours les mêmes ensemble.

## Accessibilité
* Contrastes WCAG AA : texte 17,9:1, texte secondaire 6:1, bouton vert 10,3:1, pastille B texte quasi noir sur orange 6,2:1 (texte blanc à 3:1 refusé)
* Cartes, puces et boutons sont de vrais `<button>` : Tab, Entrée et Espace fonctionnent
* État coché annoncé avec `aria-pressed` et visible sans la couleur (bande, fond et coche)
* Compteur et messages annoncés avec `aria-live`
* Cibles de 48 px minimum, aucun texte sous 14 px, lien d’évitement

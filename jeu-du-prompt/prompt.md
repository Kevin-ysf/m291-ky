# Jeu du prompt · e1-5

## Le prompt que j’ai donné à l’IA

> Voici mon fichier index.html (je colle). Le bouton a l’id "magic".
> Je veux qu’au **clic**, il change de couleur (fond bleu pétrole #0f4c5c, texte blanc), et qu’un deuxième clic le remette gris.
> N’ajoute aucune librairie. Ne touche pas au reste de la page.
> Explique en deux phrases ce que tu as ajouté.

## Ce que l’IA a ajouté

* Une règle CSS `#magic.actif` qui donne la nouvelle couleur.
* Un petit script : quand on clique sur le bouton (événement `click`), il ajoute ou retire la classe `actif` avec `classList.toggle`.

## Pourquoi ça marche

Le CSS prépare la couleur à l’avance. Le JavaScript se contente d’allumer ou d’éteindre la classe à chaque clic.

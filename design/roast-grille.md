# Grille de roast · e2-1

**Nom :** Kevin Youssef
**Date :** s4

Barème : 1 = cassé · 3 = moyen · 5 = ça va. Les 4 pages sont dans `design/roast/`.

| Capture | Lisibilité | Navigation | Feedback | Cohérence | Accessibilité |
| --- | :---: | :---: | :---: | :---: | :---: |
| 01 mur de texte | 1 | 2 | 2 | 2 | 1 |
| 02 labyrinthe | 3 | 1 | 2 | 2 | 2 |
| 03 silence | 3 | 3 | 1 | 3 | 1 |
| 04 carnaval | 2 | 2 | 2 | 1 | 1 |

## Phrases précises

### 01 · Mur de texte
* Le titre `h1`, le sous-titre `h2` et le paragraphe ont tous la même taille (11 px) et le même poids : on ne voit pas où commence l’article.
* Le texte gris `#888` sur fond blanc donne un contraste de 3,5:1, sous le minimum WCAG AA de 4,5:1.

**Correction mesurable :** texte en `#222` (contraste 15,9:1), corps à 16 px, `h1` à 28 px en gras, et un espace de 24 px entre les blocs.

### 02 · Labyrinthe
* Le chemin vers l’action principale tient en cinq niveaux (« Menu > Espace > Plus > Options > Avancé > Liste ») et aucun bouton principal n’est visible.
* Le lien « Aide? » est collé en haut à 70 % de la largeur, séparé du reste : on ne sait pas qu’il fait partie de la navigation.

**Correction mesurable :** un seul bouton principal visible sans scroller, à 2 clics maximum de la liste, et un menu groupé en haut à gauche.

### 03 · Silence
* Le bouton « ok » a un texte `#ddd` sur fond `#ddd` (contraste 1:1) : il est invisible et ne dit pas ce qu’il fait.
* Au clic, rien ne se passe : aucun message, aucun changement d’état, on ne sait pas si le compte est créé.

**Correction mesurable :** bouton « Créer mon compte » en blanc sur `#1d4ed8` (contraste 6,7:1), qui affiche « Compte créé » pendant 2 secondes après le clic, et les champs reliés à leur `<label>`.

### 04 · Carnaval
* Quatre polices différentes (Comic Sans, Impact, Georgia, Courier) sur une seule page : aucune cohérence visuelle.
* Le texte vert `#0f0` sur fond jaune `#ff0` donne un contraste de 1,3:1, et la différence promo / normal n’est donnée **que** par la couleur (rouge / vert), illisible pour un daltonien.

**Correction mesurable :** une seule famille de police, texte `#1a1a1a` sur fond `#ffffff`, et une étiquette « Promo » en texte à côté du prix en plus de la couleur.

## La pire, pour la présentation

Capture n° **03 · Silence**, parce que c’est la seule qui empêche vraiment de finir la tâche : le bouton est invisible (contraste 1:1) **et** il ne répond pas au clic. Les autres sont laides, mais on peut encore lire ou chercher. Ici, l’utilisateur ne sait même pas qu’il doit cliquer, ni si ça a marché.

# Critique comparative & arbitrage · Vitrine CKY

Les 3 propositions sont dans `design/propositions/` (captures PNG + fichier HTML de chaque piste). Elles montrent toutes le même écran 1 (accueil) avec le même contenu.

Barème : 1 = cassé · 3 = moyen · 5 = très bien.

## Matrice d’évaluation

| Critère | Piste A · Éditoriale | Piste B · Chaleureuse | Piste C · Moderne |
| --- | :---: | :---: | :---: |
| Lisibilité | 4 | 4 | 5 |
| Navigation | 3 | 3 | 4 |
| Feedback | 3 | 2 | 5 |
| Cohérence | 5 | 4 | 4 |
| Accessibilité | 5 | 3 | 5 |
| **Total / 25** | **20** | **16** | **23** |

## Fiche · Piste A (Éditoriale & sobre)

**2 forces**
1. Critère : cohérence. Preuve : une seule police à empattements (Lora), une seule couleur d’accent (bleu nuit `#1F3A5F`), des filets fins répétés partout.
2. Critère : accessibilité. Preuve : la puce active a un texte blanc sur bleu nuit à 11,5:1, et le texte secondaire `#5C6470` reste à 5,6:1 sur le fond.

**2 faiblesses**
1. Critère : navigation. Preuve : les puces carrées à filet fin ressemblent à des étiquettes, pas à des boutons. On ne devine pas qu’on peut les toucher.
2. Critère : feedback / ton. Preuve : l’ambiance « journal » est calme, mais elle ne parle pas de sport. Marc ne reconnaît pas tout de suite un graphiste pour clubs.

**Verdict :** j’**élimine** ce design comme base, mais je garde sa hiérarchie typographique calme pour les longues descriptions de la fiche détail.

## Fiche · Piste B (Chaleureuse & terroir)

**2 forces**
1. Critère : lisibilité. Preuve : la police ronde (Poppins) et les grandes marges rendent les cartes agréables à parcourir.
2. Critère : cohérence. Preuve : les coins arrondis (22 px) sont les mêmes sur la recherche, les puces et les cartes.

**2 faiblesses**
1. Critère : accessibilité. Preuve : la puce active « Tout » a un texte blanc sur vert sauge `#6E8063` à 4,26:1, sous le minimum WCAG AA de 4,5:1.
2. Critère : feedback. Preuve : la différence entre puce active (sauge) et inactive (beige) est faible, et il n’y a aucun bouton d’action visible sur l’accueil.

**Verdict :** j’**élimine** ce design parce que l’ambiance « terroir » ne colle pas au sport, et que Marc doit pouvoir lire la puce active au soleil dans les gradins.

## Fiche · Piste C (Moderne & pragmatique)

**2 forces**
1. Critère : feedback. Preuve : la puce active passe en orange plein `#FF5A1F` avec texte quasi noir (6,2:1), impossible à confondre avec les puces inactives à contour noir.
2. Critère : navigation. Preuve : le bouton « Demander un devis » est fixé en bas de l’écran, dans la zone du pouce, avec 56 px de haut.

**2 faiblesses**
1. Critère : cohérence. Preuve : le bandeau d’en-tête noir et les visuels noirs ou orange sont très forts : à côté, les titres des cartes peuvent paraître secondaires.
2. Critère : lisibilité. Preuve : le bouton fixé en bas cache le bas de la carte en cours de lecture. Il faut garder une marge basse d’au moins 96 px dans la liste.

**Verdict :** je **garde** ce design parce qu’il correspond à l’énergie d’un club de sport, qu’il a les meilleurs contrastes, et que le bouton de devis est toujours sous le pouce de Marc.

## Arbitrage motivé

Nous retenons la **Piste C** pour son énergie sportive et ses contrastes nets (texte 17,9:1, accent 6,2:1), qui correspondent à Marc : il consulte l’app au soleil, d’une main, avec 10 minutes devant lui. Nous lui intégrons la **hiérarchie typographique plus calme de la Piste A** (interligne plus grand, texte secondaire en gris lisible) pour les descriptions de la fiche détail. Nous écartons la Piste B, dont la puce active ne passe pas le seuil WCAG AA (4,26:1).

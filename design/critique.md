# Critique comparative & arbitrage · TeamSplit

Les 3 propositions sont dans `design/propositions/` (captures PNG + fichier HTML de chaque piste). Elles montrent toutes le même écran 2 (filtre Foot actif, 6 joueurs cochés) avec le même contenu.

Barème : 1 = cassé · 3 = moyen · 5 = très bien.

## Matrice d’évaluation

| Critère | Piste A · Éditoriale | Piste B · Chaleureuse | Piste C · Moderne |
| --- | :---: | :---: | :---: |
| Lisibilité | 4 | 4 | 5 |
| Navigation | 3 | 4 | 4 |
| Feedback | 3 | 3 | 5 |
| Cohérence | 5 | 4 | 4 |
| Accessibilité | 5 | 3 | 5 |
| **Total / 25** | **20** | **18** | **23** |

## Fiche · Piste A (Éditoriale & sobre)

**2 forces**
1. Critère : cohérence. Preuve : une seule police à empattements (Lora), un seul bleu nuit `#1F3A5F` pour la puce active, les cases cochées et le bouton.
2. Critère : accessibilité. Preuve : le bouton « Faire les équipes » a un texte blanc sur bleu nuit à 11,5:1.

**2 faiblesses**
1. Critère : feedback. Preuve : une carte cochée n’a qu’un fond bleu très pâle `#E9EEF4`. Au soleil ou sous les projecteurs, on distingue mal un joueur coché d’un joueur non coché.
2. Critère : ton. Preuve : l’italique et les empattements font « journal » ou « restaurant ». Rien n’évoque un terrain ou un match entre potes.

**Verdict :** j’**élimine** ce design comme base, mais je garde sa sobriété (un seul accent, pas de décoration) pour l’écran des équipes.

## Fiche · Piste B (Chaleureuse & terroir)

**2 forces**
1. Critère : navigation. Preuve : les cartes arrondies et aérées sont faciles à toucher avec le pouce, et le bouton pilule est large.
2. Critère : ton. Preuve : « Salut Yanis 👋 » et la police ronde (Poppins) donnent un ton copain, adapté à un groupe d’amis.

**2 faiblesses**
1. Critère : accessibilité. Preuve : la puce active « Foot » a un texte blanc sur vert sauge `#6E8063` à 4,26:1, sous le minimum WCAG AA de 4,5:1.
2. Critère : feedback. Preuve : la carte cochée (vert très pâle) et la carte non cochée (crème) se ressemblent beaucoup. Seul le petit rond coché fait la différence.

**Verdict :** j’**élimine** ce design parce que l’ambiance « terroir » ne colle pas au sport, et que Yanis doit lire la puce active dehors, le soir.

## Fiche · Piste C (Moderne & pragmatique)

**2 forces**
1. Critère : feedback. Preuve : un joueur coché reçoit trois signaux à la fois : une bande verte à gauche, un fond vert pâle et une case noire avec une coche. On le voit même sans distinguer les couleurs.
2. Critère : lisibilité. Preuve : le texte principal est à 17,9:1, et le bouton « Faire les équipes » à 10,3:1 (quasi noir sur vert `#2BD97C`), en gros et en capitales.

**2 faiblesses**
1. Critère : cohérence. Preuve : l’en-tête noir et les avatars noirs sont très lourds. À côté, les prénoms ont moins de poids que la décoration.
2. Critère : navigation. Preuve : le bouton fixé en bas cache à moitié la dernière carte (Maé). Il faut garder une marge basse d’au moins 100 px dans la liste.

**Verdict :** je **garde** ce design parce qu’il évoque un tableau des scores sous les projecteurs, qu’il a les meilleurs contrastes, et que l’état coché est impossible à rater d’une main, au bord du terrain.

## Arbitrage motivé

Nous retenons la **Piste C** pour son énergie sportive et son feedback de sélection très net (bande, fond et coche), qui correspondent à Yanis : il coche ses joueurs debout, d’une main, sous les projecteurs, en 2 minutes. Nous lui intégrons **le ton copain de la Piste B** dans les textes (« Salut Yanis », tutoiement) et **la sobriété de la Piste A** pour l’écran des équipes, où les deux colonnes doivent rester faciles à comparer. Nous écartons la Piste B comme base, car sa puce active ne passe pas le seuil WCAG AA (4,26:1).

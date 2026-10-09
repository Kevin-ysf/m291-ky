# Prédictions · e1-6 Prédis avant de cliquer

Fichier : `six-extraits.html`. Pour chaque extrait : je lis, j’écris, puis je lance.

| N° | Extrait | Je pense que l’écran va montrer | Résultat après Lancer | Juste ? |
| --- | --- | --- | --- | --- |
| 1 | Afficher | `Bonjour la classe` | `Bonjour la classe` | oui |
| 2 | Calculer | `7` (4 + 3, deux nombres) | `7` | oui |
| 3 | Compter | `3` (trois fruits dans la liste) | `3` | oui |
| 4 | Condition | `suffisant` (5 est plus grand ou égal à 4) | `suffisant` | oui |
| 5 | Boucle simple | `1 2 3 ` (la boucle tourne 3 fois et ajoute le chiffre + un espace) | `1 2 3 ` | oui |
| 6 | Clic | le nombre monte de 1 à chaque clic : 1, 2, 3… | 1, puis 2, puis 3… | oui |

## Ce que je retiens

* **Extrait 2** : `a` et `b` sont des nombres (sans guillemets), donc `+` additionne. Avec `"4"` et `"3"` entre guillemets, on aurait eu `43`.
* **Extrait 5** : la boîte `message` grossit à chaque tour. Elle n’est affichée qu’une seule fois, à la fin.
* **Extrait 6** : la boîte `n` est créée **en dehors** de la fonction. Elle garde sa valeur entre deux clics, et l’écran est mis à jour à chaque clic.

## 7e extrait (pour les rapides)

```js
let prix = 10;
let quantite = 3;
let texte = "Total : " + prix * quantite + " CHF";
console.log(texte);
```

Ma prédiction : la console affiche `Total : 30 CHF` (la multiplication passe avant la concaténation).

Prédiction du camarade : *à compléter en classe*.

# Prédictions · e1-8 La caisse du kiosque

Fichier : `caisse.html`. Je recharge la page (F5) entre chaque scénario.

| N° | Je fais | Je pense que l’écran va montrer | Ce qui s’affiche | Juste ? |
| --- | --- | --- | --- | --- |
| 1 | Frites | `06 CHF` : `"6"` est entre guillemets, c’est du texte. `0 + "6"` colle les deux au lieu d’additionner. | `06 CHF` | oui |
| 2 | Frites puis Boisson | `064 CHF` : on recolle `"4"` au bout de `"06"`. | `064 CHF` | oui |
| 3 | Frites, je tape `PALEO`, Appliquer | Le total **ne revient pas** à 0 : le script compare avec `"paleo"` en minuscules, et `"PALEO"` n’est pas le même texte. | reste à `06 CHF` | oui |
| 4 | Frites, Vider, Frites | `066 CHF` : Vider efface l’écran mais **pas** la boîte `total`, qui vaut encore `"06"`. Le clic suivant recolle `"6"`. | `066 CHF` | oui |

## Les trois pièges, avec mes mots

1. **Texte entre guillemets** : `"6"` est un texte, pas un nombre. Le `+` entre un nombre et un texte colle au lieu d’additionner.
2. **Majuscules** : `===` compare le texte exactement. `PALEO` (sur l’affiche) n’est pas égal à `paleo` (dans le script).
3. **Boîte et vitrine** : le bouton Vider change la vitrine (l’affichage) mais oublie la boîte (`total`).

## Réparation (pour les rapides)

* `total = total + 6;` et `total = total + 4;` : des nombres, sans guillemets.
* `code.trim().toUpperCase() === "PALEO"` : le code marche en majuscules ou en minuscules, même avec un espace en trop.
* Vider remet `total = 0;` puis appelle `montrer();` : la boîte et l’écran repassent à zéro ensemble.

Les quatre scénarios vérifiés après réparation : `6 CHF`, `10 CHF`, `0 CHF`, `6 CHF`.

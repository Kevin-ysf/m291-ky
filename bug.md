# Bug du compteur

**Ce que je vois :** je clique sur +1 plusieurs fois, le chiffre à l’écran reste à 0. Dans la console (F12), on lit pourtant « n vaut maintenant 1 », puis 2, puis 3.

**Ce que j’attendais :** le chiffre à l’écran suit les clics (1, 2, 3…).

**La boîte qui change :** la variable `n`, en mémoire. Elle augmente bien de 1 à chaque clic.

**Ce qui ne se met pas à jour :** le paragraphe `<p id="affiche">` (la vitrine). Personne ne recopie la valeur de `n` dedans.

## La correction

J’ai ajouté **une ligne** dans la fonction du clic, juste après `n = n + 1;` :

```js
document.getElementById("affiche").textContent = n;
```

## Expliqué à un camarade

Le code changeait la boîte `n`, mais ne touchait jamais à l’écran. C’est comme changer le prix dans la caisse sans changer l’ardoise du magasin. La ligne ajoutée recopie la boîte vers la vitrine à chaque clic.

## Bonus : bouton Reset

Le bouton **Reset** remet **les deux** à zéro : la boîte (`n = 0`) **et** l’écran (`textContent = n`). Si on ne remet que la boîte, l’écran resterait sur l’ancien chiffre.

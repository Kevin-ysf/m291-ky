# Tests utilisateurs & audit d’accessibilité · e2-7

**App testée :** TeamSplit, maquette retenue (Piste C, `design/propositions/piste-c-moderne.html`)
**Modalité :** test en binôme croisé, maquette sur téléphone ou en largeur 390 px, chronomètre 5 minutes

> ⚠️ **À compléter pendant le test en classe.** Les parties « Observations » ci-dessous se remplissent **pendant** la passation avec un vrai camarade. Je ne les invente pas : ce sont ses réactions qui comptent. L’audit d’accessibilité, lui, est déjà mesuré.

## 1. Scénario de test (1 phrase)

« Ce soir, tu organises le foot entre potes : coche les joueurs présents sauf Noah, puis lance la création des équipes. »

## 2. Règles de l’observateur

* Silence absolu : je ne guide pas, je ne justifie pas, je ne reproche rien.
* Je note ce que je vois et ce que le testeur dit à voix haute (Think Aloud).
* C’est l’interface qui est testée, jamais la personne.

## 3. Observations (à remplir pendant le test)

**Testeur :**
**Observateur :** Kevin Youssef
**Temps pour accomplir la tâche :** ___ min ___ s · tâche réussie : oui / non

**Test 5 secondes** · « C’est une appli pour… » (phrase du testeur) :

**Hésitations observées** (regard perdu, clics infructueux) :
*
*

**Remarques spontanées à voix haute :**
*
*

## 4. Audit d’accessibilité (mesuré)

### Contrastes (norme WCAG AA ≥ 4,5:1)

| Élément | Couleurs | Ratio mesuré | AA |
| --- | --- | :---: | :---: |
| **Bouton principal** « Faire les équipes » | texte `#0E0F12` sur `#2BD97C` | **10,33:1** | ✅ |
| Puce active | texte `#0E0F12` sur `#2BD97C` | 10,33:1 | ✅ |
| Texte principal | `#0E0F12` sur `#F7F7F5` | 17,87:1 | ✅ |
| Prénom sur carte cochée | `#0E0F12` sur `#EAFBF1` | 17,86:1 | ✅ |
| Poste et niveau sur carte cochée | `#5B5F66` sur `#EAFBF1` | 5,98:1 | ✅ |
| Accroche dans l’en-tête | `#C9CBD0` sur `#0E0F12` | 11,81:1 | ✅ |

Ratios calculés avec la formule WCAG de luminance relative (même calcul que le Contrast Checker de WebAIM).

### Navigation au clavier (Tab / Entrée / Espace, sans souris)

Ordre de focus mesuré sur la maquette : Tous → Foot → Basket → Volley → Yanis → Luca → Inès → Noah → Sami → Léo → Maé → Faire les équipes → retour au début.

* ✅ Les puces et **chaque carte joueur** sont de vrais boutons : Tab les atteint, Espace ou Entrée coche ou décoche, et l’état est annoncé avec `aria-pressed`.
* ✅ L’état coché ne dépend pas que de la couleur : il y a aussi une coche ✓ dans la case.
* ❌ **La barre de recherche n’est pas atteignable** : le champ est caché, seul son libellé est affiché.
* ❌ **Le bouton « Faire les équipes » est un lien** (`<a href="#">`) et pas un bouton : un lecteur d’écran annonce « lien », et il ne peut pas être désactivé quand moins de 4 joueurs sont cochés.

## 5. Deux correctifs prioritaires

1. **Vraie barre de recherche**
   * Avant : un libellé qui ressemble à un champ, mais qu’on ne peut ni toucher ni atteindre au clavier.
   * Après (prévu) : un vrai `<input type="search">` visible, de 48 px de haut, relié à son `<label>`, avec un contour de focus vert de 3 px.
2. **Vrai bouton d’action**
   * Avant : `<a href="#">Faire les équipes</a>`, toujours actif, même avec 0 joueur coché.
   * Après (prévu) : `<button type="button" disabled>` tant que moins de 4 joueurs sont cochés, avec le message « Coche au moins 4 joueurs (2 sélectionnés) » juste au-dessus.

*Un 3e correctif sera ajouté ici selon les hésitations observées pendant le test en classe.*

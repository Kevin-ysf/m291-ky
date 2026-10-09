# Tests utilisateurs & audit d’accessibilité · e2-7

**App testée :** Vitrine CKY, maquette retenue (Piste C, `design/propositions/piste-c-moderne.html`)
**Modalité :** test en binôme croisé, maquette sur téléphone ou en largeur 390 px, chronomètre 5 minutes

> ⚠️ **À compléter pendant le test en classe.** Les parties « Observations » ci-dessous se remplissent **pendant** la passation avec un vrai camarade. Je ne les invente pas : ce sont ses réactions qui comptent. L’audit d’accessibilité, lui, est déjà mesuré.

## 1. Scénario de test (1 phrase)

« Vous êtes responsable communication d’un club de basket. Trouvez un exemple d’affiche de match de basket et demandez un devis pour le même style. »

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
| **Bouton principal** « Demander un devis » | texte `#0E0F12` sur `#FF5A1F` | **6,15:1** | ✅ |
| Puce active | texte `#0E0F12` sur `#FF5A1F` | 6,15:1 | ✅ |
| Texte principal | `#0E0F12` sur `#F7F7F5` | 17,87:1 | ✅ |
| Texte secondaire (club, année) | `#5B5F66` sur `#F7F7F5` | 5,98:1 | ✅ |
| Accroche dans l’en-tête | `#C9CBD0` sur `#0E0F12` | 11,81:1 | ✅ |

Ratios calculés avec la formule WCAG de luminance relative (même calcul que le Contrast Checker de WebAIM).

### Navigation au clavier (Tab / Entrée, sans souris)

Ordre de focus mesuré sur la maquette : Tout → Affiches de match → Logos → Réseaux sociaux → Demander un devis → retour au début.

* ✅ Les 4 puces de filtre et le bouton de devis reçoivent le focus, avec un contour visible.
* ❌ **La barre de recherche n’est pas atteignable** : le champ est caché, seul son libellé est affiché.
* ❌ **Les cartes de projets ne sont pas atteignables** : ce sont des `<article>` sans lien. Au clavier, impossible d’ouvrir une fiche détail.

## 5. Deux correctifs prioritaires

1. **Cartes cliquables au clavier**
   * Avant : chaque carte est un `<article>` sans lien, ignoré par la touche Tab.
   * Après (prévu) : le titre de chaque carte devient un lien `<a href="…">` vers la fiche détail, qui couvre toute la carte. Tab passe d’une carte à l’autre, Entrée ouvre la fiche.
2. **Vraie barre de recherche**
   * Avant : un libellé qui ressemble à un champ, mais qu’on ne peut ni toucher ni atteindre au clavier.
   * Après (prévu) : un vrai `<input type="search">` visible, de 48 px de haut, relié à son `<label>`, avec un contour de focus orange de 3 px.

*Un 3e correctif sera ajouté ici selon les hésitations observées pendant le test en classe.*

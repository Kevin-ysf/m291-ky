'use strict';

/*
  S12-AV1 · Anti-rebond (debounce) sur le champ de recherche

  Problème : l'événement "input" part à chaque touche. Si on tape 10 lettres,
  le filtre et l'affichage des cartes sont recalculés 10 fois de suite.

  Solution : on attend que la personne arrête de taper pendant 300 ms,
  puis on lance le filtre une seule fois.

  Comment ça marche :
  1. À chaque frappe, clearTimeout annule le minuteur précédent.
  2. setTimeout relance un nouveau minuteur de 300 ms.
  3. Si une autre touche arrive avant la fin, on recommence à l'étape 1.
  4. Seule la dernière frappe va au bout : l'action part une fois.
*/

function debounce(action, attenteMs) {
  let minuteur;
  return (...args) => {
    clearTimeout(minuteur);
    minuteur = setTimeout(() => action(...args), attenteMs);
  };
}

/*
  Application dans TeamSplit (teamsplit/js/app.js) :

  const filtrerAvecPause = debounce(() => {
    etat.recherche = el.recherche.value;
    afficherListe();
  }, 300);

  el.recherche.addEventListener('input', () => {
    el.effacer.hidden = el.recherche.value === '';   // la croix réagit tout de suite
    filtrerAvecPause();                               // le filtre attend 300 ms
  });
*/

// Petite démonstration dans la console : 10 frappes rapides, 1 seul filtre
let nombreDeFiltres = 0;
const filtrerDemo = debounce((texte) => {
  nombreDeFiltres++;
  console.log('Filtre lancé avec « ' + texte + ' » (' + nombreDeFiltres + ' fois au total)');
}, 300);

'Mattéo Bon'.split('').reduce((texte, lettre) => {
  const suite = texte + lettre;
  filtrerDemo(suite);
  return suite;
}, '');

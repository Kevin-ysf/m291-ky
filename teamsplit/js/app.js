'use strict';

/* TeamSplit · JavaScript natif, sans bibliothèque */

const MIN_JOUEURS = 4;
const ESSAIS_REPARTITION = 3000;
const ATTENTE_RECHERCHE = 300;
const CLE_STOCKAGE = 'teamsplit-joueurs-ajoutes';

const etat = {
  joueurs: [],
  sport: 'tous',
  recherche: '',
  presents: new Set(),
  equipes: null
};

const $ = (selecteur) => document.querySelector(selecteur);

const el = {
  vueSelection: $('#vue-selection'),
  vueEquipes: $('#vue-equipes'),
  titreApp: $('#titre-app'),
  titreEquipes: $('#titre-equipes'),
  formRecherche: $('#form-recherche'),
  recherche: $('#recherche'),
  effacer: $('#effacer'),
  puces: document.querySelectorAll('.puce'),
  liste: $('#liste'),
  messageListe: $('#message-liste'),
  compteur: $('#compteur'),
  toutDecocher: $('#tout-decocher'),
  aide: $('#aide'),
  faire: $('#faire'),
  retour: $('#retour'),
  totalA: $('#total-a'),
  totalB: $('#total-b'),
  ecart: $('#ecart'),
  listeA: $('#liste-a'),
  listeB: $('#liste-b'),
  remelanger: $('#remelanger'),
  partager: $('#partager'),
  toast: $('#toast'),
  vueAjout: $('#vue-ajout'),
  titreAjout: $('#titre-ajout'),
  ouvrirAjout: $('#ouvrir-ajout'),
  annulerAjout: $('#annuler-ajout'),
  formAjout: $('#form-ajout')
};

/* ---------- Chargement des données ---------- */

async function chargerJoueurs() {
  try {
    const reponse = await fetch('../data.json');
    if (!reponse.ok) throw new Error('HTTP ' + reponse.status);
    const joueursJson = await reponse.json();
    etat.joueurs = joueursJson.concat(lireJoueursAjoutes());
    el.liste.setAttribute('aria-busy', 'false');
    afficherListe();
  } catch (erreur) {
    console.error(erreur);
    el.liste.setAttribute('aria-busy', 'false');
    el.messageListe.textContent = 'Impossible de charger les joueurs. Ouvre le site avec un serveur local (par exemple Live Server).';
    el.messageListe.classList.add('erreur');
    el.messageListe.hidden = false;
  }
}

/* ---------- Joueurs ajoutés (gardés sur le téléphone) ---------- */

function lireJoueursAjoutes() {
  try {
    const texte = localStorage.getItem(CLE_STOCKAGE);
    const liste = texte ? JSON.parse(texte) : [];
    return Array.isArray(liste) ? liste : [];
  } catch (e) {
    return [];
  }
}

function sauverJoueursAjoutes() {
  const ajoutes = etat.joueurs.filter((j) => j.ajoute);
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(ajoutes));
    return true;
  } catch (e) {
    return false;
  }
}

/* ---------- Outils ---------- */

function normaliser(texte) {
  return texte.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function echapper(texte) {
  const div = document.createElement('div');
  div.textContent = texte;
  return div.innerHTML;
}

function pluriel(n, mot) {
  return n + ' ' + mot + (n > 1 ? 's' : '');
}

// Anti-rebond : l'action ne part que quand on arrête de taper pendant attenteMs
function debounce(action, attenteMs) {
  let minuteur;
  return (...args) => {
    clearTimeout(minuteur);
    minuteur = setTimeout(() => action(...args), attenteMs);
  };
}

function joueursFiltres() {
  const recherche = normaliser(etat.recherche);
  return etat.joueurs.filter((j) =>
    (etat.sport === 'tous' || j.sport === etat.sport) &&
    normaliser(j.prenom).includes(recherche)
  );
}

/* ---------- Écrans 1 et 2 : liste ---------- */

function carteHTML(joueur) {
  const coche = etat.presents.has(joueur.id);
  const etoiles = '★'.repeat(joueur.niveau) + '☆'.repeat(5 - joueur.niveau);
  return `
    <li>
      <button type="button" class="carte" data-id="${joueur.id}" aria-pressed="${coche}">
        <span class="avatar" aria-hidden="true">${echapper(joueur.prenom.charAt(0))}</span>
        <span class="qui">
          <span class="carte-nom">${echapper(joueur.prenom)}</span>
          <span class="carte-infos">${echapper(joueur.poste)} · niveau ${joueur.niveau}/5 <span class="etoiles" aria-hidden="true">${etoiles}</span></span>
        </span>
        <span class="case" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </button>
    </li>`;
}

function afficherListe() {
  const filtres = joueursFiltres();
  el.liste.innerHTML = filtres.map(carteHTML).join('');

  if (etat.joueurs.length && filtres.length === 0) {
    el.messageListe.textContent = 'Aucun joueur ne correspond. Essaie un autre prénom.';
    el.messageListe.classList.remove('erreur');
    el.messageListe.hidden = false;
  } else if (etat.joueurs.length) {
    el.messageListe.hidden = true;
  }
  majCompteur();
}

const NOMS_SPORTS = { tous: 'Tous les sports', foot: 'Foot', basket: 'Basket', volley: 'Volley' };

function majCompteur() {
  const n = etat.presents.size;
  const visibles = joueursFiltres().length;
  el.compteur.innerHTML = NOMS_SPORTS[etat.sport] + ' · ' + pluriel(visibles, 'joueur') +
    ' · <strong>' + n + ' ' + (n > 1 ? 'présents' : 'présent') + '</strong>';
  el.toutDecocher.hidden = n === 0;

  const pret = n >= MIN_JOUEURS;
  el.faire.disabled = !pret;
  el.faire.textContent = n > 0 ? 'Faire les équipes (' + n + ')' : 'Faire les équipes';

  // Correctif n°2 des tests utilisateurs : on dit pourquoi le bouton est grisé
  el.aide.textContent = pret
    ? 'Prêt ? Un geste et c\'est fait.'
    : 'Coche au moins 4 joueurs (' + n + ' ' + (n > 1 ? 'sélectionnés' : 'sélectionné') + ').';
}

function afficherSurtitre() {
  const jour = new Date().toLocaleDateString('fr-CH', { weekday: 'long' });
  document.querySelector('#surtitre').textContent = jour + ' soir';
}

function basculerJoueur(bouton) {
  const id = Number(bouton.dataset.id);
  if (etat.presents.has(id)) {
    etat.presents.delete(id);
  } else {
    etat.presents.add(id);
  }
  bouton.setAttribute('aria-pressed', String(etat.presents.has(id)));
  majCompteur();
}

function choisirSport(sport) {
  etat.sport = sport;
  el.puces.forEach((puce) => {
    puce.setAttribute('aria-pressed', String(puce.dataset.sport === sport));
  });
  afficherListe();
}

/* ---------- Écran 3 : répartition équilibrée ---------- */

function melanger(tableau) {
  const copie = tableau.slice();
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function somme(equipe) {
  return equipe.reduce((total, j) => total + j.niveau, 0);
}

function signature(equipeA) {
  return equipeA.map((j) => j.id).sort((a, b) => a - b).join('-');
}

/*
  On tire de nombreuses répartitions au hasard (tailles égales, à 1 près),
  on garde celles qui ont le plus petit écart de niveau, puis on en choisit une.
  « Remélanger » évite de retomber sur la répartition affichée.
*/
function repartir(joueurs, signatureActuelle) {
  const moitie = Math.ceil(joueurs.length / 2);
  let meilleurEcart = Infinity;
  const candidates = new Map();

  for (let essai = 0; essai < ESSAIS_REPARTITION; essai++) {
    const ordre = melanger(joueurs);
    const a = ordre.slice(0, moitie);
    const b = ordre.slice(moitie);
    const ecart = Math.abs(somme(a) - somme(b));

    if (ecart < meilleurEcart) {
      meilleurEcart = ecart;
      candidates.clear();
    }
    if (ecart === meilleurEcart) {
      candidates.set(signature(a), { a, b });
    }
  }

  let options = [...candidates.entries()].filter(([sig]) => sig !== signatureActuelle);
  if (options.length === 0) options = [...candidates.entries()];

  const [sig, choix] = options[Math.floor(Math.random() * options.length)];
  const trier = (equipe) => equipe.slice().sort((x, y) => y.niveau - x.niveau);
  return { a: trier(choix.a), b: trier(choix.b), signature: sig };
}

function ligneEquipeHTML(joueur) {
  return `
    <li>
      <span>
        <span class="nom">${echapper(joueur.prenom)}</span>
        <span class="poste">${echapper(joueur.poste)}</span>
      </span>
      <span class="niv"><span class="sr-only">niveau </span>${joueur.niveau}</span>
    </li>`;
}

function afficherEquipes() {
  const { a, b } = etat.equipes;
  const totalA = somme(a);
  const totalB = somme(b);
  const ecart = Math.abs(totalA - totalB);

  el.totalA.textContent = totalA;
  el.totalB.textContent = totalB;
  el.ecart.innerHTML = '<span>Écart : ' + pluriel(ecart, 'point') + '</span>';
  el.listeA.innerHTML = a.map(ligneEquipeHTML).join('');
  el.listeB.innerHTML = b.map(ligneEquipeHTML).join('');
}

function faireEquipes() {
  const presents = etat.joueurs.filter((j) => etat.presents.has(j.id));
  if (presents.length < MIN_JOUEURS) return;
  etat.equipes = repartir(presents, null);
  afficherEquipes();
  changerVue('equipes');
}

function remelanger() {
  const presents = etat.joueurs.filter((j) => etat.presents.has(j.id));
  etat.equipes = repartir(presents, etat.equipes && etat.equipes.signature);
  afficherEquipes();
}

/* ---------- Partage ---------- */

function texteAPartager() {
  const { a, b } = etat.equipes;
  const noms = (equipe) => equipe.map((j) => j.prenom).join(', ');
  const ecart = Math.abs(somme(a) - somme(b));
  return [
    'TeamSplit',
    '',
    'Équipe A (' + somme(a) + ') : ' + noms(a),
    'Équipe B (' + somme(b) + ') : ' + noms(b),
    '',
    'Écart : ' + pluriel(ecart, 'point')
  ].join('\n');
}

async function copier(texte) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(texte);
      return true;
    } catch (e) { /* on passe à la méthode de secours */ }
  }
  const zone = document.createElement('textarea');
  zone.value = texte;
  zone.setAttribute('readonly', '');
  zone.style.position = 'fixed';
  zone.style.opacity = '0';
  document.body.appendChild(zone);
  zone.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  zone.remove();
  return ok;
}

let minuterieToast;
function afficherToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add('visible');
  clearTimeout(minuterieToast);
  minuterieToast = setTimeout(() => el.toast.classList.remove('visible'), 2500);
}

async function partager() {
  const ok = await copier(texteAPartager());
  afficherToast(ok ? 'Équipes copiées !' : 'Copie impossible, réessaie.');
}

/* ---------- Navigation entre écrans ---------- */

function changerVue(vue) {
  el.vueSelection.hidden = vue !== 'selection';
  el.vueEquipes.hidden = vue !== 'equipes';
  el.vueAjout.hidden = vue !== 'ajout';
  window.scrollTo(0, 0);
  const titres = { selection: el.titreApp, equipes: el.titreEquipes, ajout: el.titreAjout };
  titres[vue].focus();
}

/* ---------- Formulaire : ajouter un joueur ---------- */

const LETTRES = /^[A-Za-zÀ-ÖØ-öø-ÿ' .-]+$/;
let formulaireEnvoye = false;

function lireFormulaire() {
  const f = el.formAjout.elements;
  return {
    prenom: f.prenom.value.trim().replace(/\s+/g, ' '),
    sport: f.sport.value,
    poste: f.poste.value.trim().replace(/\s+/g, ' '),
    niveau: Number(f.niveau.value)
  };
}

function validerJoueur(j) {
  const erreurs = {};

  if (j.prenom === '') {
    erreurs.prenom = 'Écris un prénom.';
  } else if (j.prenom.length < 2) {
    erreurs.prenom = 'Le prénom doit faire au moins 2 lettres.';
  } else if (!LETTRES.test(j.prenom)) {
    erreurs.prenom = 'Lettres seulement (accents, tiret et apostrophe ok).';
  } else if (j.sport && etat.joueurs.some((x) => x.sport === j.sport && normaliser(x.prenom) === normaliser(j.prenom))) {
    erreurs.prenom = j.prenom + ' existe déjà en ' + j.sport + '. Ajoute une initiale, par exemple « ' + j.prenom + ' B. ».';
  }

  if (!j.sport) erreurs.sport = 'Choisis un sport.';

  if (j.poste === '') {
    erreurs.poste = 'Écris un poste, par exemple Milieu.';
  } else if (j.poste.length < 2 || !LETTRES.test(j.poste)) {
    erreurs.poste = 'Le poste doit faire au moins 2 lettres, sans chiffres.';
  }

  if (!(j.niveau >= 1 && j.niveau <= 5)) erreurs.niveau = 'Choisis un niveau de 1 à 5.';

  return erreurs;
}

function afficherErreurs(erreurs) {
  ['prenom', 'sport', 'poste', 'niveau'].forEach((champ) => {
    const message = erreurs[champ];
    const zone = $('#erreur-' + champ);
    const cible = champ === 'prenom' || champ === 'poste'
      ? $('#champ-' + champ)
      : zone.closest('fieldset');
    zone.textContent = message || '';
    zone.hidden = !message;
    cible.setAttribute('aria-invalid', message ? 'true' : 'false');
  });
}

function premierChampEnErreur(erreurs) {
  if (erreurs.prenom) return $('#champ-prenom');
  if (erreurs.sport) return el.formAjout.querySelector('input[name="sport"]');
  if (erreurs.poste) return $('#champ-poste');
  return el.formAjout.querySelector('input[name="niveau"]');
}

function ouvrirFormulaire() {
  el.formAjout.reset();
  formulaireEnvoye = false;
  afficherErreurs({});
  if (etat.sport !== 'tous') {
    el.formAjout.querySelector('input[name="sport"][value="' + etat.sport + '"]').checked = true;
  }
  changerVue('ajout');
}

function ajouterJoueur(e) {
  e.preventDefault();
  formulaireEnvoye = true;
  const joueur = lireFormulaire();
  const erreurs = validerJoueur(joueur);
  afficherErreurs(erreurs);

  if (Object.keys(erreurs).length > 0) {
    premierChampEnErreur(erreurs).focus();
    return;
  }

  const majuscules = (texte) => texte.replace(/(^|[\s'-])(\S)/g, (m, avant, lettre) => avant + lettre.toUpperCase());
  const idMax = etat.joueurs.reduce((max, j) => Math.max(max, j.id), 0);
  const nouveau = {
    id: idMax + 1,
    prenom: majuscules(joueur.prenom),
    sport: joueur.sport,
    poste: joueur.poste.charAt(0).toUpperCase() + joueur.poste.slice(1),
    niveau: joueur.niveau,
    commune: '',
    estRegulier: false,
    tags: [],
    ajoute: true
  };
  etat.joueurs.push(nouveau);
  etat.presents.add(nouveau.id);
  const garde = sauverJoueursAjoutes();

  choisirSport(nouveau.sport);
  changerVue('selection');
  const carte = el.liste.querySelector('.carte[data-id="' + nouveau.id + '"]');
  if (carte) {
    carte.classList.add('nouveau');
    carte.scrollIntoView({ block: 'center' });
  }
  afficherToast(garde
    ? nouveau.prenom + ' ajouté et coché !'
    : nouveau.prenom + ' ajouté pour ce soir (pas gardé sur ce téléphone).');
}

/* ---------- Événements ---------- */

el.liste.addEventListener('click', (e) => {
  const carte = e.target.closest('.carte');
  if (carte) basculerJoueur(carte);
});

el.puces.forEach((puce) => {
  puce.addEventListener('click', () => choisirSport(puce.dataset.sport));
});

const filtrerAvecPause = debounce(() => {
  etat.recherche = el.recherche.value;
  afficherListe();
}, ATTENTE_RECHERCHE);

el.recherche.addEventListener('input', () => {
  el.effacer.hidden = el.recherche.value === '';
  filtrerAvecPause();
});

el.formRecherche.addEventListener('submit', (e) => {
  e.preventDefault();
  el.recherche.blur();
});

el.effacer.addEventListener('click', () => {
  el.recherche.value = '';
  etat.recherche = '';
  el.effacer.hidden = true;
  afficherListe();
  el.recherche.focus();
});

el.toutDecocher.addEventListener('click', () => {
  etat.presents.clear();
  afficherListe();
  el.recherche.focus();
});

el.faire.addEventListener('click', faireEquipes);
el.retour.addEventListener('click', () => changerVue('selection'));
el.remelanger.addEventListener('click', remelanger);
el.partager.addEventListener('click', partager);
el.ouvrirAjout.addEventListener('click', ouvrirFormulaire);
el.annulerAjout.addEventListener('click', () => changerVue('selection'));
el.formAjout.addEventListener('submit', ajouterJoueur);

// Après un premier envoi, les erreurs se corrigent en direct
el.formAjout.addEventListener('input', () => {
  if (formulaireEnvoye) afficherErreurs(validerJoueur(lireFormulaire()));
});

afficherSurtitre();
chargerJoueurs();

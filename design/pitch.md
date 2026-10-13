# Pitch · mon app M291

**Nom de l’app :** TeamSplit

**En une phrase, elle sert à :** former des équipes équilibrées entre amis en quelques secondes, à partir de la liste des joueurs présents et de leur niveau.

**À qui (prénom + âge + situation) :** Yanis, 19 ans, apprenti à Lausanne, qui organise le foot du jeudi soir avec une douzaine de potes et perd 10 minutes à chaque fois à faire les équipes.

**La tâche n°1 (celle du flow) :** cocher les joueurs présents ce soir et générer deux équipes équilibrées, puis les partager dans le groupe WhatsApp.

**Les données (inventées) ressemblent à :** fiches de joueurs (prénom, sport préféré, niveau de 1 à 5, poste, présent ce soir oui / non).

**Pourquoi ce n’est pas trop grand pour 4 semaines de code :** 3 écrans seulement (liste des joueurs, liste filtrée des présents, équipes générées), une quinzaine de joueurs dans un seul fichier JSON, un filtre par sport + une recherche par prénom, et un calcul simple : on trie les joueurs par niveau et on les répartit en alternance. Pas de compte, pas de serveur.

## Les 3 questions

1. **Pour qui ?** Les jeunes de Suisse romande qui jouent entre amis (foot, basket, volley) le soir ou le week-end, sans club ni entraîneur.
2. **Quel besoin non satisfait ?** Faire les équipes « à la main » prend du temps, finit souvent en dispute, et ce sont toujours les deux mêmes capitaines qui choisissent les meilleurs.
3. **Quelle réponse UI ?** Une app mobile ultra simple : on coche qui est là, on touche un gros bouton « Faire les équipes », et on voit deux colonnes avec le niveau total de chaque équipe, prêtes à partager.

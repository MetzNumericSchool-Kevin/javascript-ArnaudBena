# Exercices sur les bases de JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

1. **Ouvre `index.html`** dans ton navigateur
2. **Dans `index.html`**, décommente **UNIQUEMENT** l'exercice sur lequel tu travailles (lignes 11-24)
3. **Ouvre la console** du navigateur avec `F12` ou avec `liveserver` ou avec le `debugger` NodeJS
4. **Édite le fichier JavaScript** correspondant dans `exercices/`
5. **Teste et vérifie** que ton code fonctionne correctement
6. **Fais un commit** avec le titre de l'exercice
7. **Passe au suivant** : commente le script de l'exercice actuel, décommente le script du prochain

💡 **NB** : Si vous avez déjà abordé les notions des méthodes du prototype Array comme `forEach`, `filter`, `map`, `reduce`, etc. Vous pouvez également utiliser ces méthodes pour faire les exercices au lieu des astuces données dans les exercices.

### ⚠️ Règles importantes

- **Un seul script actif à la fois**
- **Consulte le README** pour les consignes détaillées de chaque exercice
- **Les variables pré-remplies** sont des exemples, tu peux les modifier
- **N'oublie pas** : certaines variables seront utiles pour les exercices suivants

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu es le sorcier Archibald 🧙‍♂️ et tu gères une petite boutique dans laquelle tu créé et vend des potions 🧪.
- Tu as des outils magiques 🪄 nommés la `console` et le `prompt` te permettant d'intérargir avec les aventuriers qui viennent à ta boutique.
- La monnaie est le `🪙`. Tu peux stocker ça dans une constante si tu veux :)

Tu peux essayer le code suivant (et le supprimer ensuite)

```js
const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");
```

Dès que tu verras `<ce_genre_de_chose>` c'est qu'il faudra remplacer `<ce_genre_de_chose>` par la bonne variable approprié au contexte.\
Tu comprendras en lisant la suite :)

---

## 📚 Liste des exercices

### Exercice 1 : Définition de variables

**Fichier** : `exercices/01_definition_variables.js`

Déclare les variables pour ta boutique de potions :

- Déclare une constante pour le nom de ta boutique.
- Déclare une variable pour le nombre de potions de soins en stock, la valeur par défaut de ton choix.
- Déclare une variable pour indiquer le prix d'une potion de soin, la valeur par défaut de ton choix.
- Déclare une variable pour indiquer si la boutique est ouverte ou non.

Affiche dans la console les informations de ta boutique avec `console.log`.

### Exercice 2 : Affichage conditionnele

**Fichier** : `exercices/02_affichage_conditionnel.js`

Affiche dans ta `console` => `Bienvenue dans la boutique <nom_boutique> Aventurier ! 🎉` si la boutique est ouverte, sinon affiche `La boutique <nom_boutique> est fermée, revenez plus tard Aventurier ! 😴`

### Exercice 3 : Affichage conditionnel avec switch

**Fichier** : `exercices/03_affichage_conditionnel_switch.js`

- Affiche dans la console `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔`
  - `1. Le nom de la boutique`
  - `2. Le nom du Sorcier`
  - `3. Le prix d'un potion de soin`
  - `4. La quantité d'une potion de soin`
- Fais un `prompt` pour demander à l'aventurier son choix entre 1 et 4
- Avec un `switch ... case` sur le numéro choisi par l'aventurier, affiche l'information demandée
  - Dans le cas où cela ne correspond pas à aucun des choix, affiche `Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`
  - ⚠️ **Attention**, `prompt` retourne une chaîne de caractère, il faudra certainement le convertir en `Number` avec `parseInt`

### Exercice 4 : Calcul du prix total d'une commande de potion 🪙

**Fichier** : `exercices/04_calcul_prix_total.js`

Demande avec `prompt` une quantité de potion de soin, et affiche ensuite dans la `console` => `Prix de <quantite_potion> potions de soins : <prix_total> 🪙 mon cher Aventurier. 💸`.

### Exercice 5 : Bourse de l'Aventurier 💰

**Fichier** : `exercices/05_bourse_aventurier.js`

- Créé une variable pour stocker l'argent de l'aventurier, initialise-la avec une valeur de ton choix.
- Vérifie si l'aventurier a assez d'argent pour acheter la quantité de potion demandée.
- Soustrais la quantité de potion demandée du stock et soustrais le prix total de la bourse de l'aventurier.
  - ⚠️ **Attention**, il faut que l'aventurier ai assez d'argent pour pouvoir acheter les potions !
  - ⚠️ **Attention**, il faut qu'il y ait assez de potion en stock pour pouvoir acheter les potions !

### Exercice 6 : Liste des potions

**Fichier** : `exercices/06_liste_potions.js`

- Créé un tableau qui contient les noms de trois potions que tu vends dans ta boutique.
- Affiche le tableau directement dans la console.

### Exercice 7 : Affichage des potions

**Fichier** : `exercices/07_affichage_potions.js`

- Affiche le nom de la première potion.
- Affiche le nom de la dernière potion **sans utiliser l'indice directement, mais en utilisant la taille du tableau** (en utilisant la propriété length de l'objet Array).
- Affiche le nom de chaque potions avec une boucle `for` et affiche le message `Nous avons de la <nom_potion> !`

### Exercice 8 : Ajout d'une nouvelle potion

**Fichier** : `exercices/08_ajout_nouvelle_potion.js`

- Ajoute une nouvelle potion dans le tableau en utilisant la méthode `push` de l'objet Array.
- Affiche la liste des potions mis à jour
- Finalement, nous ne gardons pas cette nouvelle potion dans la liste. Supprime la en utilisant la méthode `pop`
- Affiche la liste des potions mis à jour

### Exercice 10 : Rangeons les informations de la potion de soin dans un objet 🧹

**Fichier** : `exercices/10_objet_potion_soin.js`

- Créé un objet pour stocker les informations d'une potion de soin, tu auras dans cet objet :
  - le nom de la potion
  - son prix
  - le stock
- Affiche directement l'objet dans la console

### Exercice 11 : Affichons les informations de la potion

**Fichier** : `exercices/11_affichage_infos_potion.js`

- Affiche le nom de la potion en utilisant la notation pointée `.`
- Affiche le prix de la potion en utilisant la notation crochet `[]`

### Exercice 12 : Aventurier, regarde tout ce que je vends !

**Fichier** : `exercices/12_affichage_inventaire.js`

Créer un inventaire avec 3 objets `potions` :

- Potion de soin
- Potion de mana
- Potion d'endurance

Ensuite :

- Affiche ton inventaire à l'aventurier avec une boucle `for`
- Pour chaque itération, affiche :
  - `Nom: <nom_potion>`
  - `Prix: <prix_potion>`
  - `Stock: <stock_potion>`
- Trouve une autre solution pour afficher **dynamiquement** chacune des propriétés de la potion **sans utiliser la notation pointée ou crochet**. Tu as plusieurs possibilités :
  - `for` sur `Object.keys`
  - `for ... in` sur ton objet
  - `for ... of` sur `Object.entries`

### Exercice 13 : Recherche dans l'inventaire

**Fichier** : `exercices/13_grand_marchand.js`

🎯 **Objectif** : Utiliser des boucles et conditions pour rechercher des informations dans un tableau d'objets.

**Consignes** :

- Trouve et affiche la potion **la plus chère** de l'inventaire
- Trouve et affiche la potion avec **le plus de stock**
- Compte et affiche **combien de potions ont un stock supérieur à 0**

💡 **Astuce** : Utilise des variables pour stocker les résultats pendant que tu parcours l'inventaire avec une boucle `for`.

---

### Exercice 14 : Filtrage et sélection

**Fichier** : `exercices/14_filtrage_selection.js`

🎯 **Objectif** : Créer de nouveaux tableaux en filtrant des données selon des critères.

**Consignes** :

- Créé un nouveau tableau `potions_en_stock` contenant **uniquement les potions avec stock > 0**
- Créé un tableau `potions_abordables` avec les potions qui coûtent **moins de 40 🪙**
- Affiche le nombre de potions dans chaque nouveau tableau
- Affiche les tableaux créés dans la console

💡 **Astuce** : Utilise une boucle `for` et la méthode `push()` pour ajouter les potions qui correspondent aux critères.

---

### Exercice 15 : Calculs et statistiques

**Fichier** : `exercices/15_calculs_statistiques.js`

🎯 **Objectif** : Effectuer des calculs sur l'ensemble de l'inventaire.

**Consignes** :

- Calcule la **valeur totale de l'inventaire** (somme de `prix × stock` pour chaque potion)
- Calcule le **prix moyen** des potions
- Calcule le **stock total** de toutes les potions
- Affiche tous ces résultats dans la console

---

### Exercice 16 : Tri simple

**Fichier** : `exercices/16_tri_simple.js`

🎯 **Objectif** : Trier un tableau d'objets par ordre croissant de prix.

**Consignes** :

- Trie les potions par **prix croissant** (du moins cher au plus cher)
- Affiche l'inventaire trié dans la console
- Affiche un message pour chaque potion : `"<nom> : <prix> 🪙"`

💡 **Astuce** : Utilise deux boucles `for` imbriquées pour comparer et échanger les éléments (algorithme de tri à bulles simplifié). Pour échanger deux éléments d'un tableau :

```js
let temp = inventaire[i];
inventaire[i] = inventaire[j];
inventaire[j] = temp;
```

---

### Exercice 17 : Mini-simulation d'achat

**Fichier** : `exercices/17_simulation_achat.js`

🎯 **Objectif** : Créer une simulation interactive d'achat avec `prompt`.

**Consignes** :

- Affiche l'inventaire disponible à l'aventurier
- Demande avec `prompt` quelle potion il veut acheter (utilise un numéro de choix qui servira d'identifiant)
- Demande avec `prompt` combien il en veut
- Vérifie si :
  - La potion existe dans l'inventaire
  - Il y a assez de stock
  - L'aventurier a assez d'argent (bourse = 100 🪙)
- Si tout est OK :
  - Calcule le prix total
  - Déduis le montant de la bourse
  - Déduis le stock
  - Affiche un message de succès avec la bourse restante
- Sinon, affiche un message d'erreur approprié

---

## 🎉 Félicitations !

Tu as terminé les exercices sur les bases de JavaScript ! Tu maîtrises maintenant :

- ✅ **Variables** : `let`, `const` et leurs différences
- ✅ **Types de données** : string, number, boolean, undefined, null
- ✅ **Opérateurs** : arithmétiques, comparaison, logiques
- ✅ **Conditions** : `if/else`, opérateurs de comparaison
- ✅ **Tableaux** : création, accès, modification, méthodes (`push`, `pop`, `length`)
- ✅ **Boucles** : `for`, `while`, itération sur tableaux
- ✅ **Objets** : création, propriétés, accès (`.` et `[]`)
- ✅ **Tableaux d'objets** : structures de données complexes
- ✅ **Interactions** : `prompt()`, `alert()`, `console.log()`
- ✅ **Algorithmes simples** : recherche, tri, calculs

Tu as maintenant les fondations solides pour continuer ton apprentissage de JavaScript ! 🚀

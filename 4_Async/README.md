Clad
claad
Invisible

Nico — 03/02/2026 08:34
Image
nope
Alys

 — 03/02/2026 08:35
Ahah miskine
Nico — 03/02/2026 08:36
ah ouais, appropriation culturelle
La tartine mystère — 03/02/2026 08:36
bientôt les locks !
Dorian — 03/02/2026 08:40
C'est dans le Robert donc pas si sur
Image
Maus3rSR — 03/02/2026 12:00
@Nico tu n'as pas reçu d'email sur un compte email associé à ton compte GitHub ?
Maus3rSR — 03/02/2026 12:02
Ah du coup si, ça n'a pas suffit ?
Nico — 03/02/2026 12:15
Ça a l'air bon 👍
Nico — 04/02/2026 07:46
on est d'accord qu'on est pas censés push nos commit ? (parce que je n'ai pas l'autorisation apparemment)
Dorian — 04/02/2026 07:47
Normalement si quand j'ai push j'ai pas eu de soucis
Jérémy — 04/02/2026 07:47
Perso j'ai push
Nico — 04/02/2026 07:47
ah mince
vous avez pas eu ce message donc :
Image
Benoit — 04/02/2026 07:51
Non pas eu de soucis pour push non plus c'est bizarre ton message t'es bien sur ton répondeur attribué tu devrait avoir le droit de push
Nico — 04/02/2026 07:58
ok problème réglé, merci 👍
Maus3rSR — 06/02/2026 22:36
Url en https et non connecté ? 🙂 
Normalement vous êtes tous admin de vos repo
Benoit — 06/02/2026 22:44
@kevin  get a life
Maus3rSR — 09/02/2026 13:01
Bonjour !
Je vous fournis une proposition de solution aux exercices :

Partie 1 sur les bases
https://github.com/Maus3rSR/School_JavaScript/tree/Basics_Solution
Partie 2 sur les fonctions
https://github.com/Maus3rSR/School_JavaScript/tree/Functions_Solution
Partie 3 sur le DOM
https://github.com/Maus3rSR/School_JavaScript/tree/DOM_Solution

Gardez bien en tête que les solutions proposées sont une solution possible parmi tant d'autre. La solution est toujours contextualisé par rapport à vos connaissances sur le langage, en algorithmie, la complexité du projet, l'équipe, le niveau de maintenance, de lisibilité, et de testabilité demandé (application des principes SOLID, DRY, découplage, tests...) 
Maus3rSR — 09/02/2026 16:37
Et navré pour le report de demain 🙏 profitez du TP pour bosser les exos 😋

À Vendredi !
Nico — 10/02/2026 10:42
@Maus3rSR impossible de push mes modifs sur le repo github pour l'exo du pendu :
stagiaire@por-mns-64 MINGW64 ~/Documents/MNS/CDA/JAVASCRIPT/tp-javascream/pendu-javagreen (main)
$ git push
remote: Permission to MetzNumericSchool-Kevin/pendu-javagreen.git denied to NicoLaunay.
fatal: unable to access 'https://github.com/MetzNumericSchool-Kevin/pendu-javagreen/': The requested URL returned error: 403
Une idée de la cause ?
Maus3rSR — 10/02/2026 10:43
T'as bien rejoins ton équipe ?
Normalement vous êtes chacun admin du repo
Il faut bien que vous soyez collaborateur du dépôt git
Ayez bien cloné en ssh, évitez https 
Nico — 10/02/2026 10:50
effectivement ça marche mieux, merci
Maus3rSR — 12:58
@here J'ai mis à jour les consignes du readme Async
Vous pouvez mettre à jour
# Exercices sur l'Asynchrone en JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

readme.md
16 Ko
ça devrait être un poil plus lisible / compréhensible, je l'espère
﻿
# Exercices sur l'Asynchrone en JavaScript

## 🎮 Workflow de travail

### Étapes pour chaque exercice

1. **Ouvre `index.html`** dans ton navigateur
2. **Ouvre la console** du navigateur avec `F12` ou avec `liveserver`
3. **Édite le fichier `exercices.js`** (tous les exercices sont dans ce fichier)
4. **Trouve la section de l'exercice** grâce aux commentaires visuels (ex: `// EXERCICE 1`)
5. **Écris ton code** dans la zone `// ✍️ TON CODE ICI`
6. **Teste dans la console ET dans la page** (certains exercices modifient le HTML)
7. **Fais un commit** avec le titre de l'exercice
8. **Passe au suivant** : certains exercices réutilisent le code précédent !

### ⚠️ Règles importantes

- **Tous les exercices sont dans le même fichier** `exercices.js`
- **Consulte le README** pour les consignes détaillées de chaque exercice
- **Ne modifie pas le code de base** (partie avant "Votre partie commence ici")
- **Garde ton code** : certains exercices réutilisent les fonctions précédentes
- **Utilise la console** : `console.log()` est essentiel pour comprendre l'asynchrone !

## 📖 Rappels sur l'Asynchrone

### Qu'est-ce que l'asynchrone ?

L'**asynchrone** permet d'exécuter des tâches qui prennent du temps (requêtes réseau, timers, etc.) **sans bloquer** le reste du code. JavaScript continue à s'exécuter pendant que la tâche asynchrone se déroule.

### Concepts clés

**1. Callbacks**

```js
function faireQuelqueChose(callback) {
  setTimeout(() => {
    console.log("Tâche terminée !");
    callback(); // Exécute la fonction de rappel
  }, 1000);
}

faireQuelqueChose(() => {
  console.log("Callback exécuté !");
});
```

**2. Promesses**

```js
const promesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès !"); // ou reject("Erreur !")
  }, 1000);
});

promesse
  .then((resultat) => console.log(resultat))
  .catch((erreur) => console.log(erreur));
```

**3. Async/Await**

```js
async function maFonction() {
  try {
    const resultat = await promesse;
    console.log(resultat);
  } catch (erreur) {
    console.log(erreur);
  }
}
```

**4. Fetch API**

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((erreur) => console.log(erreur));
```

💡 **Astuce** : Utilise toujours la console du navigateur pour observer l'ordre d'exécution du code asynchrone !

## Thème 🕰️🌐🚀

Tu es **Chronos** 🕰️, un voyageur temporel qui explore différentes époques et collecte des artefacts historiques rares via des missions asynchrones. Chaque voyage et collecte prend du temps, d'où l'utilisation de code asynchrone !

---

## 📚 Liste des exercices

### Exercice 1 : Le Téléporteur Temporel ⏰

**Fichier** : `exercices.js` (section EXERCICE 1)

🎯 **Objectif** : Comprendre les **callbacks** et `setTimeout()` pour simuler une tâche asynchrone.

**Contexte** : Tu dois créer une machine à voyager dans le temps. Le voyage prend du temps (1 à 3 secondes), et tu dois afficher un loader pendant le voyage.

**Consignes** :

**Partie 1 : Crée une nouvelle fonction `voyagerTemps(destination, callback)`**

Cette fonction simule un voyage dans le temps qui prend du temps.

- **Paramètres** :
  - `destination` (string) : le nom de l'époque (ex: "medievale", "romaine")
  - `callback` (function) : fonction à exécuter quand le voyage est terminé

- **Dans le corps de la fonction** :
  1. Affiche immédiatement : `console.log("Voyage en cours vers : ", destination)`
  2. Utilise `setTimeout()` pour simuler le délai du voyage :
     - Délai aléatoire : utilise `generationNombreAleatoireEntre(1000, 3000)` (fonction déjà fournie)
     - Dans le `setTimeout`, après le délai :
       - Affiche : `console.log("Arrivée à l'époque : ", destination)`
       - Appelle le `callback()` pour signaler que le voyage est terminé

**Partie 2 : Utilise ta fonction dans `quandEpoqueChoisie(nomEpoque)` (fonction existante à modifier)**

Cette fonction est déjà définie dans le code de base. Tu dois la compléter pour utiliser `voyagerTemps()`.

- **Avant d'appeler `voyagerTemps()`** :
  - Cache l'élément `.localisation_epoque` (utilise `.style.display = "none"`)
  - Affiche l'élément `.voyage_en_cours` (loader) (utilise `.style.display = ""`)

- **Appelle `voyagerTemps(nomEpoque, callback)`** :
  - Le callback doit :
    - Cacher le loader `.voyage_en_cours`
    - Appeler `afficherDestination(nomEpoque)` (fonction déjà fournie)

💡 **Ce que tu vas apprendre** :

- Callbacks : fonctions passées en paramètre et exécutées plus tard
- `setTimeout()` : exécute du code après un délai
- Manipulation du DOM pendant une tâche asynchrone
- Ordre d'exécution du code asynchrone

💡 **Astuce** : Pour cacher un élément, utilise `element.style.display = "none"`. Pour l'afficher, utilise `element.style.display = ""` ou `"block"`.

💡 **Résultat attendu** :

```
Page : Quand tu choisis une époque et cliques sur "Voyager", un loader apparaît puis l'époque s'affiche
Console : "Voyage en cours vers : medievale" puis "Arrivée à l'époque : medievale"
```

---

### Exercice 2 : La Collecte d'Artefact Mystère 🏺

**Fichier** : `exercices.js` (section EXERCICE 2)

🎯 **Objectif** : Créer une fonction asynchrone avec **callback qui reçoit un paramètre** (succès/échec).

**Contexte** : La collecte d'un artefact prend du temps et a 50% de chances de réussir. Tu dois gérer les deux cas.

**Consignes** :

**Partie 1 : Crée une nouvelle fonction `collecterArtefact(nomArtefact, callback)`**

Cette fonction simule la collecte d'un artefact avec 50% de chances de succès.

- **Paramètres** :
  - `nomArtefact` (string) : le nom de l'artefact à collecter
  - `callback` (function) : fonction à exécuter après la collecte, qui reçoit un booléen (true = succès, false = échec)

- **Dans le corps de la fonction** :
  1. Utilise `setTimeout()` avec un délai aléatoire (utilise `generationNombreAleatoireEntre(1000, 3000)`)
  2. Dans le `setTimeout`, après le délai :
     - Génère un nombre aléatoire : `Math.random() * 100`
     - **Si le nombre >= 50** : appelle `callback(true)` (collecte réussie)
     - **Si le nombre < 50** : appelle `callback(false)` (collecte échouée)

**Partie 2 : Utilise ta fonction dans `quandRechercheArtefact(artefact)` (fonction existante à modifier)**

Cette fonction est déjà définie dans le code de base. Tu dois la compléter.

- **Avant d'appeler `collecterArtefact()`** :
  - Affiche l'élément `.recherche_en_cours` (loader)

- **Appelle `collecterArtefact(artefact, callback)`** :
  - Le callback reçoit un paramètre `success` (true ou false)
  - Dans le callback :
    - Cache le loader `.recherche_en_cours`
    - Appelle `afficherRechercheArtefact({ artefact, epoque: nomEpoqueActuelle, success })` (fonction déjà fournie)

💡 **Ce que tu vas apprendre** :

- Callbacks avec paramètres
- Gestion de résultats aléatoires
- Passage de données entre fonction asynchrone et callback

💡 **Astuce** : Le callback peut recevoir des paramètres. Exemple : `callback(true)` ou `callback(false)`.

💡 **Résultat attendu** :

```
Page : Quand tu recherches un artefact, un loader apparaît puis l'artefact s'affiche avec ✅ ou ❌
```

---

### Exercice 3 : La Mission Temporelle Complexe 🔗

**Fichier** : `exercices.js` (section EXERCICE 3)

🎯 **Objectif** : Comprendre le **"callback hell"** avec des tâches asynchrones séquentielles.

**Contexte** : Tu dois exécuter une série de missions dans un ordre précis. Chaque mission dépend de la précédente.

**Consignes** :

**Crée une nouvelle fonction `missionTemporelleComplexe()`**

Cette fonction doit exécuter une série de tâches asynchrones **dans l'ordre strict**.

- **Séquence à exécuter** (chaque tâche doit attendre que la précédente soit terminée) :
  1. Voyager à l'époque "medievale" (utilise `voyagerTemps()`)
  2. Collecter "épée de chevalier" (utilise `collecterArtefact()`)
  3. Voyager à l'époque "romaine" (utilise `voyagerTemps()`)
  4. Collecter "bouclier romain" (utilise `collecterArtefact()`)
  5. Collecter "épée romaine" (utilise `collecterArtefact()`)

- **Comment garantir l'ordre** :
  - Imbrique les callbacks : chaque callback contient l'appel à la fonction suivante

- **Ajoute des `console.log()`** à chaque étape pour observer l'ordre d'exécution

⚠️ **Note** : Le code va devenir très imbriqué ("callback hell"). C'est normal, c'est le problème que tu vas résoudre dans l'exercice suivant !

💡 **Ce que tu vas apprendre** :

- Callbacks imbriqués (callback hell)
- Exécution séquentielle de tâches asynchrones
- Problème de lisibilité du code avec callbacks

💡 **Astuce** : Chaque callback contient l'appel à la fonction suivante. Le code prend une forme pyramidale.

💡 **Résultat attendu** :

```
Console : Les messages s'affichent dans l'ordre des tâches, avec un code très imbriqué
```

---

### Exercice 4 : Je te promets des voyages sans tracas ! 🤝

**Fichier** : `exercices.js` (section EXERCICE 4)

🎯 **Objectif** : Transformer les callbacks en **Promesses** pour améliorer la lisibilité.

**Contexte** : Le callback hell est difficile à lire. Les Promesses permettent de chaîner les tâches de manière plus claire.

**Consignes** :

**Partie 1 : Transforme `voyagerTemps(destination)` en version Promesse**

Réécris la fonction pour qu'elle retourne une Promesse au lieu d'utiliser un callback.

- **Signature** : `function voyagerTemps(destination)` (plus de paramètre callback)
- **Retourne** : `new Promise((resolve, reject) => { ... })`
- **Dans la Promesse** :
  - Garde le même code avec `setTimeout()`
  - Au lieu d'appeler `callback()`, appelle `resolve()` quand le voyage est terminé

**Partie 2 : Transforme `collecterArtefact(nomArtefact)` en version Promesse**

Réécris la fonction pour qu'elle retourne une Promesse.

- **Signature** : `function collecterArtefact(nomArtefact)` (plus de paramètre callback)
- **Retourne** : `new Promise((resolve, reject) => { ... })`
- **Dans la Promesse** :
  - Garde le même code avec `setTimeout()` et le nombre aléatoire
  - **Si succès** (>= 50) : appelle `resolve(true)`
  - **Si échec** (< 50) : appelle `reject("Échec de la collecte")`

**Partie 3 : Réécris `missionTemporelleComplexe()` avec le chaînage de Promesses**

Remplace les callbacks imbriqués par un chaînage `.then()`.

- **Structure** :
  ```js
  voyagerTemps("medievale")
    .then(() => collecterArtefact("épée de chevalier"))
    .then(() => voyagerTemps("romaine"))
    .then(() => collecterArtefact("bouclier romain"))
    .then(() => collecterArtefact("épée romaine"))
    .catch((erreur) => console.error("Erreur :", erreur));
  ```

⚠️ **Important** : N'oublie pas le `.catch()` à la fin pour gérer les erreurs (collectes échouées)

💡 **Ce que tu vas apprendre** :

- Création de Promesses avec `new Promise()`
- Chaînage avec `.then()`
- Gestion d'erreurs avec `.catch()`
- Code plus lisible qu'avec callbacks

💡 **Astuce** : Chaque `.then()` peut retourner une nouvelle Promesse pour continuer le chaînage.

💡 **Résultat attendu** :

```
Console : Même résultat qu'avant, mais le code est linéaire et plus lisible
```

---

### Exercice 5 : La Mission Finale Asynchrone ⚡

**Fichier** : `exercices.js` (section EXERCICE 5)

🎯 **Objectif** : Utiliser la syntaxe moderne **async/await** pour simplifier encore plus le code.

**Contexte** : `async/await` est du sucre syntaxique sur les Promesses. Le code ressemble à du code synchrone.

**Consignes** :

**Transforme `missionTemporelleComplexe()` pour utiliser async/await**

Réécris la fonction en utilisant la syntaxe moderne async/await au lieu du chaînage `.then()`.

**Étape 1 : Rends la fonction asynchrone**

- Ajoute le mot-clé `async` devant la déclaration : `async function missionTemporelleComplexe() { ... }`

**Étape 2 : Remplace les `.then()` par `await`**

- Au lieu de chaîner avec `.then()`, écris le code de manière séquentielle :
  ```js
  await voyagerTemps("medievale");
  await collecterArtefact("épée de chevalier");
  await voyagerTemps("romaine");
  await collecterArtefact("bouclier romain");
  await collecterArtefact("épée romaine");
  ```

**Étape 3 : Gère les erreurs avec `try/catch`**

- Entoure tout le code de la fonction avec :
  ```js
  try {
    // Ton code avec await
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
  ```

💡 **Résultat** : Le code asynchrone ressemble maintenant à du code synchrone, beaucoup plus lisible !

💡 **Ce que tu vas apprendre** :

- Syntaxe `async/await`
- Gestion d'erreurs avec `try/catch`
- Code asynchrone qui ressemble à du code synchrone

💡 **Astuce** : `await` ne fonctionne que dans une fonction `async`. Il "attend" que la Promesse soit résolue avant de continuer.

💡 **Résultat attendu** :

```
Console : Même résultat, mais le code est encore plus simple et lisible
```

---

### Exercice 6 : Chargement Asynchrone des Époques 🌐

**Fichier** : `exercices.js` (section EXERCICE 6)

🎯 **Objectif** : Utiliser **`fetch()`** pour charger des données depuis un fichier JSON.

**Contexte** : Les époques ne sont plus en dur dans le code. Elles sont chargées depuis un fichier JSON.

**Consignes** :

**Modifie la fonction `main()` (fonction existante) pour charger les époques depuis un fichier JSON**

Actuellement, les époques sont définies en dur dans le code. Tu dois les charger depuis `data/epoques.json`.

**Étape 1 : Rends `main()` asynchrone**

- Ajoute `async` devant la fonction : `async function main() { ... }`

**Étape 2 : Charge le fichier JSON avec `fetch()`**

- Remplace la définition en dur des époques par :
  ```js
  const response = await fetch("data/epoques.json");
  const epoques = await response.json();
  ```

**Étape 3 : Utilise les données chargées**

- Appelle `creerLesChoixEpoque(epoques)` avec les données chargées (cette ligne existe déjà)

💡 **Astuce** : `fetch()` retourne une Promesse qui donne une Response. La méthode `.json()` retourne aussi une Promesse qui donne les données parsées. C'est pourquoi tu dois utiliser `await` deux fois.

💡 **Pour vérifier** : Ouvre les DevTools (F12) → onglet Network → recharge la page → tu devrais voir une requête vers `epoques.json`

💡 **Ce que tu vas apprendre** :

- `fetch()` : faire des requêtes HTTP
- `.json()` : parser une réponse JSON
- Chargement de données externes
- Onglet Network des DevTools

💡 **Astuce** : `fetch()` retourne une Promesse. La méthode `.json()` retourne aussi une Promesse, donc tu dois utiliser `await` deux fois.

💡 **Résultat attendu** :

```
Page : Les époques se chargent depuis le fichier JSON
Network (DevTools) : Tu vois la requête HTTP vers data/epoques.json
```

---

## 🎉 Félicitations !

Tu as terminé les exercices sur l'asynchrone ! Tu maîtrises maintenant :

- ✅ **Callbacks** : fonctions de rappel pour gérer l'asynchrone
- ✅ **setTimeout()** : exécuter du code après un délai
- ✅ **Promesses** : gérer l'asynchrone de manière plus lisible
- ✅ **Chaînage** : `.then()` et `.catch()`
- ✅ **Async/Await** : syntaxe moderne et élégante
- ✅ **Fetch API** : charger des données depuis le réseau
- ✅ **Gestion d'erreurs** : `.catch()` et `try/catch`

Tu es prêt(e) à gérer des opérations asynchrones complexes ! 🚀
readme.md
16 Ko
// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

let prixMax = 0
let stockMax = 0
let stockSuperieurA0 = 0
let nomPotion;

for (const potion of inventaire) {
  if (potion.prix > prixMax) {
    nomPotion = potion.nom
    prixMax = potion.prix
  }
  if (potion.stock > stockMax) {
    stockMax = potion.stock
  }
  if (potion.stock > 0) {
    stockSuperieurA0 += 1
  }
}

console.log("Potion la plus chère :",nomPotion + " et coute",prixMax)
console.log("Potion avec le plus de stock :",nomPotion + " avec un stock de",stockMax)
console.log("Nombre de potions avec un stock supérieur à 0 :",stockSuperieurA0)
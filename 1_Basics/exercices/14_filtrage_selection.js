// Filtrage et sélection

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

const potionEnStock = []

for (const potion of inventaire) {
  if(potion.stock > 0) {
    potionEnStock.push(potion)
  }
}

// console.log(potionEnStock)

const potionAbordables = []

for (const potion of inventaire) {
  if(potion.prix < 40)
    potionAbordables.push(potion)
}

// console.log(potionAbordables)

console.log(potionEnStock.length + " et " + potionAbordables.length)
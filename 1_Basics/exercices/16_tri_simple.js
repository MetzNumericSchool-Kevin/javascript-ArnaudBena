// Tri simple

// Inventaire de la boutique (non trié)
const inventaire = [
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 }
];


for (let i = 0 ; i < inventaire.length ; i++){
  for (let j = i ; j < inventaire.length ; j++) {
    if (inventaire[i].prix > inventaire[j].prix) {
      let temp = inventaire[i]
      inventaire[i] = inventaire[j];
      inventaire[j] = temp;
    }
  }
}

console.log(inventaire)

for (const potion of inventaire) {
    console.log(potion.nom,potion.prix)
}
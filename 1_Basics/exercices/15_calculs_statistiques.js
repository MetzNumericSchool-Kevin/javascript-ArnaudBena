// Calculs et statistiques

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];

let valeurInventaire = 0 
let prixMoyen = 0
let stockTotal = 0

for (const potion of inventaire) {
  valeurInventaire += potion.prix * potion.stock
  prixMoyen += potion.prix
  stockTotal += potion.stock
}
prixMoyen /= inventaire.length

console.log("La valeur totale de l'inventaire est de",valeurInventaire + " 🪙")
console.log("La valeur moyenne de l'inventaire est de",prixMoyen + " 🪙")
console.log("Le stock total de potion est de",stockTotal)
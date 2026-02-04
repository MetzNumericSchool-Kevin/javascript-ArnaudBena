// Mini-simulation d'achat

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;

console.log("=== BOUTIQUE DE POTIONS ===");
console.log("Votre bourse : " + bourse_aventurier + " pieces d'or\n");
console.log("Inventaire disponible :");

for (let i = 0; i < inventaire.length; i++) {
  console.log((i + 1) + ". " + inventaire[i].nom + " - " + inventaire[i].prix + " pieces (Stock: " + inventaire[i].stock + ")");
}

const choix = prompt("\nQuelle potion voulez-vous acheter ? (Entrez le numéro)");
const numeroPotion = parseInt(choix);

const quantiteStr = prompt("Combien en voulez-vous ?");
const quantite = parseInt(quantiteStr);

if (numeroPotion < 1 || numeroPotion > inventaire.length || isNaN(numeroPotion)) {
  console.log("Erreur : Cette potion n'existe pas dans notre inventaire.");
} 
else if (isNaN(quantite) || quantite <= 0) {
  console.log("Erreur : Quantité invalide.");
}
else {
  const potionChoisie = inventaire[numeroPotion - 1];
  
  if (quantite > potionChoisie.stock) {
    console.log("Erreur : Stock insuffisant. Il ne reste que " + potionChoisie.stock + " " + potionChoisie.nom + "(s).");
  } 
  else {
    const prixTotal = potionChoisie.prix * quantite;
    
    if (prixTotal > bourse_aventurier) {
      console.log("Erreur : Fonds insuffisants. Il vous faut " + prixTotal + " pieces mais vous n'avez que " + bourse_aventurier + " pieces.");
    } 
    else {
      bourse_aventurier -= prixTotal;
      potionChoisie.stock -= quantite;
      
      console.log("Succès ! Vous avez acheté " + quantite + " " + potionChoisie.nom + "(s) pour " + prixTotal + " pieces.");
      console.log("Bourse restante : " + bourse_aventurier + " pieces");
    }
  }
}
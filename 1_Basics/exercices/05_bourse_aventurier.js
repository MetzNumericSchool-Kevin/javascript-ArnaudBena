// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let prix_potion_soin = 50;
let argentAventurier = 500;
let quantiteAchat = parseInt(prompt("Combien de potion souhaitez vous acheter ?"))

if (argentAventurier > prix_potion_soin && quantiteAchat < stock_potion_soin) {
    argentAventurier -= (prix_potion_soin * quantiteAchat)
    stock_potion_soin -= quantiteAchat
    console.log("Merci pour votre achat il vous reste " + argentAventurier + "🪙" + "\nIl reste " + stock_potion_soin + " potions de soin en stock")
} else {
    console.log("Achat refusé")
}

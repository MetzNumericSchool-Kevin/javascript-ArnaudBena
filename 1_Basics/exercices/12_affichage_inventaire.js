// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [
    potion_soin = {
    nom: "Potion de soin",
    prix: 50,
    stock: 10,
    },
    potion_mana = {
    nom: "Potion de mana",
    prix: 50,
    stock: 10,
    },
    potion_endurance = {
    nom: "Potion d'endurance",
    prix: 80,
    stock: 5,
    }
];

// for (let i = 0 ; i < inventaire.length ; i++) {
//     console.log("Nom : " + inventaire[i]["nom"])
//     console.log("Prix : " + inventaire[i]["Prix"])
//     console.log("Stock : " + inventaire[i]["stock"])
// }

for (const potion of inventaire) {
    console.log("Nom : " + potion.nom)
    console.log("Prix : " + potion.prix)
    console.log("Stock : " +potion.stock)
};



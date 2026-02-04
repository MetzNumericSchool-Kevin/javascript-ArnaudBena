// Affichage des potions

// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions = ["La Ben", "La Doyenne", "La REM"];

console.log(potions[0])
console.log(potions[potions.length - 1])

for (const potion of potions) {
    console.log("Nous avons de la " + potion)
}
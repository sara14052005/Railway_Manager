const prompt = require('prompt-sync')()

do {
    console.log("===============================");
    console.log("\tRAILWAY MANAGER");
    console.log("===============================\n");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket ");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket ");
    console.log("5. Rechercher un ticket ");
    console.log("6. Filtrer les trajets ");
    console.log("7. Trier les trajets ");
    console.log("0. Quitter\n");

    var choix = Number(prompt("Votre choix : "))
} while (choix != 0);
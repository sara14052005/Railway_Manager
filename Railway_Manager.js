const prompt = require('prompt-sync')()
const tickets = []; 
let id_passenger=1;
let nmPlacArray=[];

//2.les trips
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

// Array of number places every trip has 50 place in array and all this arraies in one array nmPlacArray
for(let i=0;i<trips.length;i++){
    nmPlacArray[i]=[];
    for(j=1;j<=50;j++){
        nmPlacArray[i].push(j);
    }
}
//3. Afficher les trips
function Affichertrip(){
   console.log("\n=== TRAJETS DISPONIBLES === ");
   for(let trip of trips){
        console.log(`#${trip.id} ${trip.departure} → ${trip.destination}`);       
        console.log(`Départ : ${trip.departureTime}`);       
        console.log(`Arrivée : ${trip.arrivalTime}`);       
        console.log(`Prix : ${trip.price} DH `);       
        console.log(`Places disponibles : ${trip.availableSeats}\n`); 
        
       
    }
}

//4. Acheter un ticket
function AcheterTicket(){
    let nom = prompt("Nom du passager : ");
    let id_trajet= prompt("Identifiant du trajet : ");
    let existe = false;
    let numero_place;
    let token=false;//for stop loop of giving place number
    for(let i=0;i<trips.length;i++){
        if(trips[i].id == id_trajet){
            if(trips[i].availableSeats != 0){
                let j=0;
                //give the 1st place not token
                while (!token){
                    if(nmPlacArray[i][j] != "token"){
                        numero_place = nmPlacArray[i][j];
                        nmPlacArray[i][j] = "token";
                        token=true;
                    }
                    j++;
                     
                } ;
                existe = true;//if trips existe  
                trips[i].availableSeats-- ;
                //create "ticket" objects
                let ticket={
                    id : id_passenger,
                    passengerName : nom,
                    tripId : id_trajet,
                    seatNumber : numero_place,
                    price : trips[i].price
                }

                console.log("\nTicket acheté avec succès.\n");
                console.log(`Ticket #${ticket.id}`);
                console.log(`Passager : ${ticket.passengerName}`);
                console.log(`Trajet : ${trips[i].departure} → ${trips[i].destination}`);
                console.log(`Place : ${ticket.seatNumber}`);
                console.log(`Prix : ${ticket.price} DH`);
                id_passenger++;
                tickets.push(ticket);
            }else console.log("\nTrain complet.")
        }
    }
    if (!existe) console.log("\nTrajet introuvable. ")
}

//5. Afficher les tickets 
function AfficherTicket(){
    console.log("\n=== TICKETS === ");
    for (let i=0 ; i<tickets.length;i++){
        console.log(`Ticket #${tickets[i].id}`);
        console.log(`Passager : ${tickets[i].passengerName}`);
        console.log(`Trajet : ${trips[tickets[i].tripId-1].departure} → ${trips[tickets[i].tripId-1].destination}`);
        console.log(`Place : ${tickets[i].seatNumber}`);
        console.log(`Prix : ${tickets[i].price} DH\n`);
    }
}

//6. Annuler un ticket
function AnnulerTicket(){
    let id_ticket=Number(prompt("Identifiant du ticket : "));
    let existe = false ;
    for (let i=0 ; i<tickets.length;i++) {
        if(id_ticket == tickets[i].id){
            existe = true;
            //give back number of seat
            
            if(nmPlacArray[tickets[i].tripId-1][tickets[i].seatNumber-1] == "token"){
                nmPlacArray[tickets[i].tripId-1][tickets[i].seatNumber-1] = tickets[i].seatNumber;
            }

            
            if(tickets[i].tripId == trips[tickets[i].tripId-1].id) trips[tickets[i].tripId-1].availableSeats++;
            tickets.splice(i,1);
            console.log("\nTicket annulé avec succès.");
        }
    }
    if(!existe) console.log("\nTicket introuvable.");
}

//7. Rechercher un ticket 
function RechercherTicket(){
    let nom = prompt("Nom du passager : ");
    let existe = false;
    for (let i=0 ; i<tickets.length;i++) {
       if(nom == tickets[i].passengerName){
            existe = true;
            console.log(`\nTicket #${tickets[i].id}`);
            console.log(`Passager : ${tickets[i].passengerName}`);
            console.log(`Trajet : ${trips[tickets[i].tripId-1].departure} → ${trips[tickets[i].tripId-1].destination}`);
            console.log(`Place : ${tickets[i].seatNumber}`);
            console.log(`Prix : ${tickets[i].price} DH\n`);
       }
    }
    if (!existe) console.log("\nTicket introuvable.\n")
}

//8. Filtrer les trajets 
function FiltrerTrips(){
    let ville = prompt("Ville de départ : ");
    for (let i = 0; i < trips.length; i++) {
        if(trips[i].departure == ville){
          console.log(`\n${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH`); 
        } 
        
    }
}

//9. Trier les trajets
function TrierTrajet(){
    let array=trips;
    for (let i=0 ; i<array.length;i++){
        for (let j = 0; j < array.length-1-i; j++) {
            if(array[j].price > array[j+1].price){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            } 
        }
    }
    for (const trip of array) {
        console.log(`\n${trip.departure} → ${trip.destination} : ${trip.price} DH`); 
    }
}
//10. Bonus — Statistiques
function Statistiques(){
    console.log(`\nNombre total de tickets : ${tickets.length}`);

    let chiffre_aff=0;
    let plus=[],id_plus;

    for (let i=0 ; i<trips.length;i++){
        let compteur=0
        for(let j=0 ; j<tickets.length;j++){
            if(tickets[j].tripId == trips[i].id){
                id_plus = trips[i].id
                compteur++;
            } 
        }
        let ticket_vendu ={
            id : id_plus,
            nb_tck : compteur,

        }
        plus.push(ticket_vendu);
    }
    let plus_vendu=plus[0];
    for(let i=0;i<plus.length;i++){
        if(plus[i].nb_tck >plus_vendu.nb_tck) plus_vendu = plus[i];
    }
    for (const ticket of tickets) {
        chiffre_aff+=ticket.price;
    }
    console.log(`\nChiffre d'affaires total : ${chiffre_aff} DH\n`); 
    console.log("Trajet le plus vendu :")
    if (plus_vendu.id != undefined) {
        console.log(`\n${trips[plus_vendu.id-1].departure} → ${trips[plus_vendu.id-1].destination}`);
        console.log(`\n${plus_vendu.nb_tck} tickets vendus`);
    }else console.log("\nAucun ticket n'a été vendu.\n");
    
    
}

//1.Menu principal
do {
    console.log("===============================");
    console.log("\tRAILWAY MANAGER");
    console.log("===============================\n");
    console.log("1. Afficher les trips");
    console.log("2. Acheter un ticket ");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket ");
    console.log("5. Rechercher un ticket ");
    console.log("6. Filtrer les trips ");
    console.log("7. Trier les trips ");
    console.log("8. Statistiques ");
    console.log("0. Quitter\n");

    var choix = Number(prompt("Votre choix : "))
    switch(choix){
        case 0: 
            break;
        case 1: Affichertrip();
            break;
        case 2: AcheterTicket();
            break;
        case 3: AfficherTicket();
            break;
        case 4: AnnulerTicket();
            break;
        case 5: RechercherTicket();
            break;
        case 6: FiltrerTrips();
            break;
        case 7: TrierTrajet();
            break;
        case 8: Statistiques();
            break;
        default : console.log("\nChoix Invalide !!!! ");
            break;
    }
} while (choix != 0);
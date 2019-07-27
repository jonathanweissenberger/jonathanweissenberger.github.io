// Das Interface der Karten
interface karte {
    img : string;
    kartenFarbe : string;
    kartenWertigkeit : number;
}
// Die Arrays für den Spieler, den Computergegner, den Stapel zum Ziehen und den Stapel zum Ablegen
let spielerArray : karte [] = [];
let computerArray : karte [] = [];
let ziehenArray : karte [] = [];
let ablegenArray : karte [] = [];

// Alle Funktionen die beim öffnen der Website ausgeführt werden
window.onload = function () {
    
    neuesDeckGenerieren();
    kartenVerteilen();
    generateHTML();
    document.getElementById("Ziehen",).addEventListener("click", karteZiehen, false);
}

// Das Deck mit den Karten wird generiert und die vorgefertigten Karten bekommen eine Farbe und einen Wert zugewiesen
// Alle roten Karten werden generiert
function neuesDeckGenerieren() {

    let rot1 : karte = {
        kartenWertigkeit : 1,
        kartenFarbe : "rot",
        img : "bilder/rot1.png",
    };
    ziehenArray.push(rot1);

    let rot2 : karte = {
        kartenWertigkeit : 2,
        kartenFarbe : "rot",
        img : "bilder/rot2.png",
    };
    ziehenArray.push(rot2);

    let rot3 : karte = {
        kartenWertigkeit : 3,
        kartenFarbe : "rot",
        img : "bilder/rot3.png",
    };
    ziehenArray.push(rot3);

    let rot4 : karte = {
        kartenWertigkeit : 4,
        kartenFarbe : "rot",
        img : "bilder/rot4.png",
    };
    ziehenArray.push(rot4);

    let rot5 : karte = {
        kartenWertigkeit : 5,
        kartenFarbe : "rot",
        img : "bilder/rot5.png",
    };
    ziehenArray.push(rot5);

    let rot6 : karte = {
        kartenWertigkeit : 6,
        kartenFarbe : "rot",
        img : "bilder/rot6.png",
    };
    ziehenArray.push(rot6);

    let rot7 : karte = {
        kartenWertigkeit : 7,
        kartenFarbe : "rot",
        img : "bilder/rot7.png",
    };
    ziehenArray.push(rot7);

    let rot8 : karte = {
        kartenWertigkeit : 8,
        kartenFarbe : "rot",
        img : "bilder/rot8.png",
    };
    ziehenArray.push(rot8);

    // Alle grünen Karten werden generiert

    let grün1 : karte = {
        kartenWertigkeit : 1,
        kartenFarbe : "grün",
        img : "bilder/grün1.png",
    };
    ziehenArray.push(grün1);

    let grün2 : karte = {
        kartenWertigkeit : 2,
        kartenFarbe : "grün",
        img : "bilder/grün2.png",
    };
    ziehenArray.push(grün2);

    let grün3 : karte = {
        kartenWertigkeit : 3,
        kartenFarbe : "grün",
        img : "bilder/grün3.png",
    };
    ziehenArray.push(grün3);


    let grün4 : karte = {
        kartenWertigkeit : 4,
        kartenFarbe : "grün",
        img : "bilder/grün4.png",
    };
    ziehenArray.push(grün4);

    let grün5 : karte = {
        kartenWertigkeit : 5,
        kartenFarbe : "grün",
        img : "bilder/grün5.png",
    };
    ziehenArray.push(grün5);

    let grün6 : karte = {
        kartenWertigkeit : 6,
        kartenFarbe : "grün",
        img : "bilder/grün6.png",
    };
    ziehenArray.push(grün6);

    let grün7 : karte = {
        kartenWertigkeit : 7,
        kartenFarbe : "grün",
        img : "bilder/grün7.png",
    };
    ziehenArray.push(grün7);

    let grün8 : karte = {
        kartenWertigkeit : 8,
        kartenFarbe : "grün",
        img : "bilder/grün8.png",
    };
    ziehenArray.push(grün8);

    // Alle lila Karten werden generiert

    let lila1 : karte = {
        kartenWertigkeit : 1,
        kartenFarbe : "lila",
        img : "bilder/lila1.png",
    };
    ziehenArray.push(lila1);

    let lila2 : karte = {
        kartenWertigkeit : 2,
        kartenFarbe : "lila",
        img : "bilder/lila2.png",
    };
    ziehenArray.push(lila2);

    let lila3 : karte = {
        kartenWertigkeit : 3,
        kartenFarbe : "lila",
        img : "bilder/lila3.png",
    };
    ziehenArray.push(lila3);

    let lila4 : karte = {
        kartenWertigkeit : 4,
        kartenFarbe : "lila",
        img : "bilder/lila4.png",
    };
    ziehenArray.push(lila4);

    let lila5 : karte = {
        kartenWertigkeit : 5,
        kartenFarbe : "lila",
        img : "bilder/lila5.png",
    };
    ziehenArray.push(lila5);

    let lila6 : karte = {
        kartenWertigkeit : 6,
        kartenFarbe : "lila",
        img : "bilder/lila6.png",
    };
    ziehenArray.push(lila6);

    let lila7 : karte = {
        kartenWertigkeit : 7,
        kartenFarbe : "lila",
        img : "bilder/lila7.png",
    };
    ziehenArray.push(lila7);

    let lila8 : karte = {
        kartenWertigkeit : 8,
        kartenFarbe : "lila",
        img : "bilder/lila8.png",
    };
    ziehenArray.push(lila8);

// Alle blauen Karten werden generiert

    let blau1 : karte = {
        kartenWertigkeit : 1,
        kartenFarbe : "blau",
        img : "bilder/blau1.png",
    };
    ziehenArray.push(blau1);

    let blau2 : karte = {
        kartenWertigkeit : 2,
        kartenFarbe : "blau",
        img : "bilder/blau2.png",
    };
    ziehenArray.push(blau2);

    let blau3 : karte = {
        kartenWertigkeit : 3,
        kartenFarbe : "blau",
        img : "bilder/blau3.png",
    };
    ziehenArray.push(blau3);

    let blau4 : karte = {
        kartenWertigkeit : 4,
        kartenFarbe : "blau",
        img : "bilder/blau4.png",
    };
    ziehenArray.push(blau4);

    let blau5 : karte = {
        kartenWertigkeit : 5,
        kartenFarbe : "blau",
        img : "bilder/blau5.png",
    };
    ziehenArray.push(blau5);

    let blau6 : karte = {
        kartenWertigkeit : 6,
        kartenFarbe : "blau",
        img : "bilder/blau6.png",
    };
    ziehenArray.push(blau6);

    let blau7 : karte = {
        kartenWertigkeit : 7,
        kartenFarbe : "blau",
        img : "bilder/blau7.png",
    };
    ziehenArray.push(blau7);

    let blau8 : karte = {
        kartenWertigkeit : 8,
        kartenFarbe : "blau",
        img : "bilder/blau8.png",
        };
        ziehenArray.push(blau8);

        // Das Deck vor jedem Spiel ein mal gemischt
        ziehenArray.sort(function(a, b){return 0.5 - Math.random()});
}
// Die Karten werden an den Spieler und an den Computergegner verteilt, jeder bekommt 5 Karten. Die verteilten Karten werden aus dem "ziehenArray" gelöscht.
function kartenVerteilen() {
    for (let i = 0; i< 5; i++) {
        spielerArray.push(ziehenArray[0]);
        ziehenArray.splice(0,1);
        computerArray.push(ziehenArray[0]);
        ziehenArray.splice(0,1);
        
    }
    ablegenArray.push(ziehenArray[0]);
    ziehenArray.splice(0,1);
}
// Die Bilder der Karten werden im HTML an der jeweiligen Position generiert
// Die Spielerkarten werden im HTML generiert
function generateHTML() {
    document.getElementById("Eigene").innerHTML = "";
    for (let i : number = 0; i<= spielerArray.length -1; i++) {
        let spielerKarte : HTMLImageElement = document.createElement("img");
        spielerKarte.innerHTML = "";
        spielerKarte.setAttribute("src", spielerArray[i].img);
        spielerKarte.addEventListener("click", function() {karteSpielen(i);}, false);
        document.getElementById("Eigene").appendChild(spielerKarte);
    }

// Die Karte für den Ablagestapel wird im HTML generiert
    document.getElementById("Ablegen").innerHTML = "";
    let ablegenKarte : HTMLImageElement = document.createElement("img");
    ablegenKarte.innerHTML = "";
    ablegenKarte.setAttribute("src", ablegenArray[ablegenArray.length -1].img);
    document.getElementById("Ablegen").appendChild(ablegenKarte);

 // Die Karten für den "Ziehen" Stapel werden im HTML generiert
        document.getElementById("Ziehen").innerHTML = "";
        let ziehenKarte : HTMLImageElement = document.createElement("img");
        ziehenKarte.setAttribute("src", "unokarte.png");
        document.getElementById("Ziehen").appendChild(ziehenKarte);

// Die Karten für den Computergegner werden im HTML generiert
    document.getElementById("Gegner").innerHTML = "";
    for (let i : number = 0; i<= computerArray.length -1; i++) {
        let computerKarte : HTMLImageElement = document.createElement("img");
        computerKarte.innerHTML = "";
        computerKarte.setAttribute("src", "unokarte.png");
        document.getElementById("Gegner").appendChild(computerKarte);
    }



}

// Die Funktion für das Karten ziehen. Falls keine Karten mehr auf dem Stapel vorhanden sind, ist das Spiel unentschieden
function karteZiehen() {
    if (ziehenArray.length <1){
        alert("!!!Unentschieden!!!\n\n Das Deck ist leer\n\n!!!Versuch es noch ein mal!!!")
        location.reload();
    }
    spielerArray.push(ziehenArray[0]);
    ziehenArray.splice(0,1);
    generateHTML();
    gegnerZug();

}

// Der Computer prüft seine Karten im Array der Reihe nach. Stimmt die Wertigkeit oder die Farbe mit der Karte auf dem Ablagestapel überein, wird die erste mögliche Karte gelegt. Falls dies die letzte Karte sein sollte, hat der Computer gewonnen und der Spieler verloren.
// Es wird ebenfalls überprüft, ob sich noch Karten auf dem "Ziehen" Stapel befinden. Falls nicht, ist das Spiel unentschieden.
function gegnerZug() {
    let hund : boolean = false;
    for (let i : number = 0; i< computerArray.length; i++){
        if (computerArray[i].kartenWertigkeit == ablegenArray[ablegenArray.length -1].kartenWertigkeit || computerArray[i].kartenFarbe == ablegenArray[ablegenArray.length -1].kartenFarbe){
            ablegenArray.push(computerArray[i]);
            computerArray.splice(i, 1);
            generateHTML();
            hund = true;
            break;
        }}
        if (computerArray.length <1) {
            alert("!!!Verloren!!!");
            location.reload();
        }
        if (ziehenArray.length <1){
            alert("!!!Unentschieden!!!\n\n Das Deck ist leer\n\n!!!Versuch es noch ein mal!!!")
            location.reload();
            
    }
    if (hund == false){
        computerArray.push(ziehenArray[0]);
        ziehenArray.splice(0,1);
        generateHTML();
    }
    }

// Wenn die Wertigkeit oder die Farbe der geklickten Karte mit der Wertigkeit oder der Farbe der Karte auf dem Ablagestapel übereinstimmt, kann diese gespielt werden. Falls es sich um die letzte Karte handelt, hat der Spieler gewonnen.
function karteSpielen(beiclick : number) {
    if (spielerArray[beiclick].kartenWertigkeit == ablegenArray[ablegenArray.length -1].kartenWertigkeit || spielerArray[beiclick].kartenFarbe == ablegenArray[ablegenArray.length -1].kartenFarbe){
        ablegenArray.push(spielerArray[beiclick]);
        spielerArray.splice(beiclick, 1);
        generateHTML();
        if (spielerArray.length <1){
            alert ("!!!Gewonnen!!!");
            location.reload();

        }
     
       
        gegnerZug();

    }}

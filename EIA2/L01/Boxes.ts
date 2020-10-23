namespace Boxes {                               // Deklaration von Variablen
    let n: number = 5;
    let color: string;
    let x: number = 0;
    let y: number = 0;

    window.addEventListener("load", boxes);

    function boxes(): void {                    // Erstellung einer Funktion, die die Boxen boxen bestimmt
        for (let i: number = 0; i < n; i++) {   // die Variable i wird erstellt und geprüft, ob sie kleiner als n ist
        y += (i == 2) ? 20 : 50;                // += addiert den linken Wert (hier y) mit dem rechten Wert von += und der neue Wert wird das neue y; ? überprüft die Aussage (i == 2) und wenn sie wahr ist, addiert es y mit dem ersten, wenn sie falsch ist mit dem zweiten
            x = (x + 170) % 400;                // % heißt, dass es überprüft, wie oft der rechte Wert in den linken Wert geht und den Rest dann ausgibt
            switch (i) {                        // switch überprüft i und ordnet es dem jeweiligen case und seiner Farbe zu
                case 0:
                    color = "#ff0000";
                    break;                      // macht bei der zweiten Schleife weiter
                case 1:
                case 4:
                    color = "#00ff00";
                    break;                      // macht bei der zweiten Schleife weiter
                case 3:
                    continue;                   // fängt wieder oben bei der Schleife an
                default:
                    color = "#0000ff";          // macht bei der zweiten Schleife weiter
            }
            
            for (let size of ["big", "medium", "small"]) {          // Auwahl der Größe der Box (nach Reihenfolge)
                createBox(color, x, y, size);                       // Übertragung der Farbe, der Position und Größe der Box an die Funktion createBox
                if (i == 4)                                         // wenn i == 4 ist,...
                    break;                                          // ...dann stoppt die Schleife und fängt wieder oben an
            }
        }
    }
    
    
    function createBox(_color: string, _x: number, _y: number, _size: string): void {       // Erstellung der Funktion, die die Boxen schafft
        let div: HTMLDivElement = document.createElement("div");                            // erstellt <div> ohne HTML
        document.body.appendChild(div);                                                     // packt <div> in body von HTML
        div.classList.add(_size);                                                           // gibt <div> die ausgewählte Größe
        div.style.backgroundColor = _color;                                                 // gibt <div> die ausgewählte Farbe
        div.style.left = _x + "px";                                                         // gibt <div> die ausgewählte x-Koordinate
        div.style.top = _y + "px";                                                          // gibt <div> die ausgewählte y-Koordinate
    }
}

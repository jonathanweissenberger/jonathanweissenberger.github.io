let a : string
let b = 20;
let c : string = " Hundekopf";


a = b + c;
console.log(a);
c = b + a;
console.log(c);

let hund = 10 + 10;
console.log(hund);

let d : number = 10;
let e = d++;
    console.log(d);

let f = 25;
f--;
console.log(f);

let teilen = 25.2394234543523459 / 16.22345624644;
console.log(teilen);

let remainder = 234 % 5; //die Zahl 234 wird durch die volle Zahl 5 geteilt. es bleibt die Zahl 4 übrig, da 5 bis 230 in die Zahl hineinpasst, es bleiben 4 übrig
console.log(remainder); //console.log zeigt 4

let q = 10;
let w = 15;
console.log(q); // q = 10
q = q + w;
console.log(q); // q = 25
q = q + q;
console.log(q); // q = 50 

q += w; // ist das selbe wie q = q + 12
console.log(q); // q = 65

q -= w; // das gleiche wie für "+" gilt auch für "-", "*" und "/"
console.log(q); // q = 50

let z = " cent";
let u = q + z;
console.log(u);

var p = 10; // mit var können deklarierte variablen überschirieben werden, bei let geht das nicht
console.log(p);
var p = 100;
console.log(p);


let position1 = "hundekopf, ";
let position2 = "ich heisse ";
let position3 = "du schrumpfnudel!";

let satz = position2 + position1 + position3;
console.log(satz);

//Vorlesung 13
console.log ("die variablen vertauschen --> var1 soll 10 und var2 soll 5: ")
let var1 : number = 5 
let var2 : number = 10
let var3 : number = 11
console.log(var1)
console.log(var2)

/*function switchNumber (hund1 : number, hund2 : number){
    let tempValue : number = hund1;
    hund1 = hund2;
    hund2 = tempValue;

    console.log(hund1);
    console.log(hund2); 
}

switchNumber(var1 ,var2); // wenn hier var2 mit var3 ausgetauscht wird, werden die zahlen von var1 und var3 ausgetauscht
*/

Math.floor(Math.random() * 11)
console.log(Math.floor(Math.random() * 11))


console.log("Buchstaben in einem Wort heraussuchen")
let firstLetterOfFirstName : string = "";
let firstLetterOfLastName : string = "";
let firstName : string = "Jonathan";
let lastName :string = "Weissenberger";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

firstLetterOfLastName = lastName[5];
console.log(firstLetterOfLastName)


let hallo : string = "Begrüßung";
let tschüs : string = "Verabschiedung";

function switchNumber(wort1 : string, wort2 : string){
      let tempValue : string = wort1;
      wort1 = wort2;
      wort2 = tempValue;
      console.log(wort2)
}
switchNumber(hallo ,tschüs);



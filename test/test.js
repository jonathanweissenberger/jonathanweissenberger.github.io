let a;
let b = 20;
let c = " Hundekopf";
a = b + c;
console.log(a);
c = b + a;
console.log(c);
let hund = 10 + 10;
console.log(hund);
let d = 10;
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
let var1 = 5; // die variablen vertauschen --> var1 soll 10 und var2 soll 5
let var2 = 10;
console.log(var1);
console.log(var2);
function switchNumber(var1, var2) {
    let tempValue = var1;
    var1 = var2;
    var2 = tempValue;
}
console.log(var1);
console.log(var2);
Math.floor(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
//# sourceMappingURL=test.js.map
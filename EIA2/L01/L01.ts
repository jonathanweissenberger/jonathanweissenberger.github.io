let v = "1";        //Tooltip für v = string , da in Anführungszeichen
v = v + 1;          //Tooltip für v = number
console.log(v);

let a = true;

let b : number;

let c: number = 1;
c = c + "1";        //geht nicht da "1" ein String ist und man eine number nicht mit einem String addieren kann.
console.log(v);

let d = [7, true, "Hallo"];
console.log(d);
console.log (d[2]);

d[4] = [101, 102]
console.log(d);

let s = {"zahl": 7, "wahr": true, text: "Hallo"}    //Die keywords können in Anführungszeichen stehen wie bei "zahl" oder "wahr" oder auch ohne Anführungszeichen, wie bei text.
console.log (s);
console.log (s["text"]);        //Es wird "Hallo" ausgegeben, da das Schlüsselwort text mit dem Wort Hallo verknüpft ist.
console.log (s.zahl)            //Eine andere Schreibweise, die das Selbe bewirkt. Es wird 7 ausgegeben, da "zahl" mit 7 verknüpft ist.

s[4] = [101, 102]
console.log (s);

interface MapStringToBoolean {  //Im folgenden Beispiel sind die Schlüssel frei wählbar, sind aber auf den Typ string beschränkt, und das Array ist auf Wahrheitswerte homogenisiert.
    [key: string]: boolean;
}
let e: MapStringToBoolean = {"wert1": true, "wert2": false};

interface VectorWithMeaning {   //Im nächsten Beispiel sind die Schlüssel vordefiniert und die zugeordneten Werte müssen von bestimmten Typen sein.
    x: number;
    y: number;
    meaning: string;
}
let vector: VectorWithMeaning = {x: 12.4, y: -7.2, meaning: "Ortsvektor"};

let v1 : number = 2;
let v2 : number;
v2 = v1;
v1 = 3;
console.log(v1, v2);


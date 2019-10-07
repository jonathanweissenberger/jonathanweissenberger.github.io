console.log("Konsolen-Test");
document.getElementById("header");
window.onclick = function () {
    document.getElementById("a").addEventListener("click", hallo)}
    function hallo(){
      //Buttons ändern sich
        document.getElementById("a").innerHTML = "schmeckt gut, aber...";
        document.getElementById("b").innerHTML = "Pasta schmeckt auch gut";
        //Klasse ändert sich
        document.getElementById("gut").className = "schlecht"
        //Variable euen Wert zuweisen
        document.getElementById("header").innerHTML = "Was gibts heute zu essen?";
       
    
}
window.onload = function(){
  alert("Guten Tag");
  stringnumber();
}


function clickImage(){
  alert("Das war nicht der Button!")
}
function stringnumber() {
  let num1 : number = 5;
  let num2 : number = 8;
  let str1 : string = "Guten";
  let str2 : string = " Tag";

  num1 = 10

  let numTotal = num2 * num1;
  let strTotal = str1 + str2;
  let numstr = num1 + str2;
  console.log(numTotal);
  console.log(strTotal);
  console.log(numstr);
}
var x = 5;
var y = 8;
var z = x + y;
console.log(z)
 var a = "Hunde"
 var b = "futter"
 var c = a + b;
 console.log(c)
 var m = x + a;
 console.log(m)

 document.getElementById("z").addEventListener("click", createButton)
 function createButton() {
 let testbutton:HTMLElement = document.createElement("button");
 testbutton.innerHTML = "Neuer Button";
 testbutton.addEventListener("click", createButton);
 document.getElementById("z").appendChild(testbutton);
    }

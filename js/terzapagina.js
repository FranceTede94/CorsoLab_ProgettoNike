document.addEventListener("DOMContentLoaded", function(){

let primascarpa = document.querySelectorAll(".prezzo");
//console.log(primascarpa);

let scarpa1 = primascarpa[0].innerText;
//console.log(scarpa1);

let scarpa2 = primascarpa[1].innerText;
//console.log(scarpa2);


let numero1 = parseFloat(scarpa1);
//console.log(numero1);

let numero2 = parseFloat(scarpa2);
//console.log(numero2);

let somma = numero1 + numero2 ;
//console.log(somma);
document.getElementById("somma").innerHTML = somma + " €";
document.getElementById("somma1").innerHTML = somma + " €";



document.getElementById("cestino1").onclick= function(){

    document.getElementById("Box1").style.display="none";
    somma -= numero1;
    document.getElementById("somma").innerHTML = somma + " €";
    document.getElementById("somma1").innerHTML = sommaTot + " €";
    
    }



document.getElementById("cestino2").onclick= function(){

document.getElementById("Box2").style.display="none";
    
somma -= numero2;
    document.getElementById("somma").innerHTML = somma + " €";
    document.getElementById("somma1").innerHTML = somma + " €";
    
    }
    



})




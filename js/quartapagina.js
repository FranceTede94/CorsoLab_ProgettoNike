document.addEventListener("DOMContentLoaded", function(){


document.getElementById("modulo").onsubmit= function(e){

    e.preventDefault()

    let campo1 = document.getElementById("nome");
   
    if(campo1.value.trim().length == 0){
        document.getElementById("nome").classList.add("errore");
        document.getElementById("nome").nextElementSibling.innerHTML = "Inserisci il tuo nome";
    }
    else{
        document.getElementById("nome").classList.remove("errore");
        document.getElementById("nome").nextElementSibling.innerHTML = "";
    }

    
    let campo2 = document.getElementById("cognome");
  
    if(campo2.value.trim().length == 0){
        document.getElementById("cognome").classList.add("errore");
        document.getElementById("cognome").nextElementSibling.innerHTML = "Inserisci il tuo cognome";
    }
    else{
        document.getElementById("cognome").classList.remove("errore");
         document.getElementById("cognome").nextElementSibling.innerHTML = "";
    }


    let campo3 = document.getElementById("indirizzo");
 
    if(campo3.value.trim().length == 0){
        document.getElementById("indirizzo").classList.add("errore");
        document.getElementById("indirizzo").nextElementSibling.innerHTML = "Inserisci il tuo indirizzo valido";
    }
    else{
        document.getElementById("indirizzo").classList.remove("errore");
         document.getElementById("indirizzo").nextElementSibling.innerHTML = "";
    }

    let campo4 = document.getElementById("email");

    if(campo4.value.trim().length == 0){
        document.getElementById("email").classList.add("errore");
        document.getElementById("email").nextElementSibling.innerHTML = "Inserisci la tua email valida";
    }
    else{
        VerificaEmail()

    }


    let campo5 = document.getElementById("tel");
  
    if(campo5.value.trim().length == 0){
        document.getElementById("tel").classList.add("errore");
        document.getElementById("tel").nextElementSibling.innerHTML = "Inserisci il tuo telefono";
    }
    else{
        VerificaTelefono()
    }


    
    if (!document.querySelectorAll("#modulo .errore").length) {
        document.getElementById("modulo").style.display = "none";
        document.querySelector(".terzobox").style.display="block";
        document.querySelector(".quintobox").style.display="none";
    }
    


}


document.getElementById("input1").style.display="none";
document.getElementById("input2").style.display="none";
document.getElementById("testo2").style.display="none";



let Clicco1 = document.getElementById("clicca");

Clicco1.onclick=function(){
    if(document.getElementById("clicca").checked){
        document.getElementById("input1").style.display="block";
        document.getElementById("input2").style.display="block";
    }
    else{
        document.getElementById("input1").style.display="none";
        document.getElementById("input2").style.display="none"; 
    }
}


let Clicco2 = document.getElementById("cartadicredito");

Clicco2.onclick=function(){
    if(document.getElementById("cartadicredito").checked){
        document.getElementById("testo1").style.display="block";
        document.getElementById("testo2").style.display="none";
    }
    else{
        document.getElementById("testo1").style.display="none";
    }

}

let Clicco3 = document.getElementById("paypal");

Clicco3.onclick=function(){
    if(document.getElementById("paypal").checked){
        document.getElementById("testo2").style.display="block";
        document.getElementById("testo1").style.display="none";
    }
    else{
        document.getElementById("testo2").style.display="none";
    }
    

}

let Clicco4 = document.getElementById("googlepay");

Clicco4.onclick=function(){
    if(document.getElementById("googlepay").checked){
        document.getElementById("testo2").style.display="none";
    }
    
}

let invio = document.getElementById("invia");

invio.onclick=function(){
    document.querySelector(".terzobox").style.display="none";
    document.querySelector(".quartobox").style.display="block";
    document.getElementById("titolo").style.display="none"
}


})



function ControllaEmail(email){
    const regexEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regexEmail.test(email)){
        return true
    }
    else{
        return false
    }

}

function VerificaEmail(){
    const Email = ControllaEmail(document.getElementById("email").value)
    if(Email){
        document.getElementById("email").classList.remove("errore");
        document.getElementById("email").nextElementSibling.innerHTML = "";
        
    }
    else{
        document.getElementById("email").classList.add("errore");
        document.getElementById("email").nextElementSibling.innerHTML = "Hai inserito un'email sbagliata";
    
    }
}



function ControllaTelefono(telefono){
    const regexPhone = /^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/;
    if(regexPhone.test(telefono)){
        return true
     }
     else{
        return false
     }
}



function VerificaTelefono(){
    const Email = ControllaTelefono(document.getElementById("tel").value)
    if(Email){
        document.getElementById("tel").classList.remove("errore");
        document.getElementById("tel").nextElementSibling.innerHTML = "";
        
    }
    else{
        document.getElementById("tel").classList.add("errore");
        document.getElementById("tel").nextElementSibling.innerHTML = "Hai inserito un numero sbagliato";
    
    }
}
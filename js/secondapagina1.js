document.addEventListener("DOMContentLoaded", function(){

    let elencoscarpe = document.querySelectorAll("td");
    console.log(elencoscarpe);
    let contatore = 0;
    console.log(contatore);
   
   document.querySelector(".settimobox").style.display="none";
     
     document.getElementById("primovideo").onclick=function(){
     
         document.querySelector(".quintobox video").style.display="block";
         document.querySelector(".quintobox img").style.display="none"
         document.querySelector(".quintobox video").setAttribute("src", "../Progetto Nike/immagini/video.mp4");
     }
 
 
     document.getElementById("primaimmagine").onclick = function() {
         document.querySelector(".quintobox video").style.display="none";
         document.querySelector(".quintobox img").style.display="block"
         document.querySelector(".quintobox img").setAttribute("src", "../Progetto Nike/immagini/1.jpg");
 
     }
 
     document.getElementById("secondaimmagine").onclick = function() {
       
         document.querySelector(".quintobox img").setAttribute("src", "../Progetto Nike/immagini/2.jpg");
 
     }
 
     document.getElementById("terzaimmagine").onclick = function() {
        
         document.querySelector(".quintobox img").setAttribute("src", "../Progetto Nike/immagini/4.jpg");
 
     }
 
     document.getElementById("quartaimmagine").onclick = function() {
        
         document.querySelector(".quintobox img").setAttribute("src", "../Progetto Nike/immagini/5.jpg");
 
     }
 
     document.getElementById("quintaimmagine").onclick = function() {
 
         document.querySelector(".quintobox img").setAttribute("src", "../Progetto Nike/immagini/6.jpg");
 
     }
 
     document.getElementById("sestaimmagine").onclick = function() {
     
         document.querySelector(".quintobox img").setAttribute("src", "../Progetto Nike/immagini/7.jpg");
 
     }

     for(let i=0; i<elencoscarpe.length;i++){
        
        elencoscarpe[i].onclick=function(){

            document.querySelector("table").classList.remove("errore");
            document.querySelector(".error").style.display="none";

        for(let i=0; i<elencoscarpe.length;i++){

        if(elencoscarpe[i] == this){
            this.classList.add("clicked");

            document.getElementById("bottone").onclick=function(){
                contatore++;
                document.querySelector(".settimobox").style.display="block";
                document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
                document.getElementById("conta").innerHTML = contatore;
                document.getElementById("paragrafo2").innerHTML = "Taglia/Misura" + elencoscarpe[i].innerText;
                document.getElementById("sfondo").style.display="block";
                
                document.getElementById("para").onclick=function(){
                    document.querySelector(".settimobox").style.display="none";
                    document.getElementById("sfondo").style.display="none";
                }   
            } 
        }
        else{
            elencoscarpe[i].classList.remove("clicked");
        }  
        } // fine ciclo for

        } // fine funzione onclick  

     } // fine ciclo


     document.getElementById("bottone").onclick=function(){
       
        document.querySelector("table").classList.add("errore");
        document.querySelector(".error").style.display="block"; 
    } // fine funzione onclick


 })
 

 



 
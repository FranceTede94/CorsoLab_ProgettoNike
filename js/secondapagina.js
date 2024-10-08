document.addEventListener("DOMContentLoaded", function(){

   let contatore = 0;
  
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



    document.getElementById("bottone").onclick=function(){

        document.querySelector("table").classList.add("errore");
        document.querySelector(".error").style.display="block";
        document.querySelector("body").style.opacity="1";
        document.querySelector(".settimobox").style.display="none";
       
    }
    
    document.getElementById("prima").onclick=function(){
 
        let misura = document.getElementById("prima");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 32"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.add("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");
            
  
         bottone.onclick=function(){
                document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 32"
            } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
              }

         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

         
      } 


      document.getElementById("seconda").onclick=function(){
 
        let misura = document.getElementById("seconda");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 33"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.add("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 33";
             }

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
            
            }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


    document.getElementById("terza").onclick=function(){
 
        let misura = document.getElementById("terza");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 33.5"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.add("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 33.5";
             }
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 

      
      document.getElementById("quarta").onclick=function(){
 
        let misura = document.getElementById("quarta");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 34"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.add("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 34";
             }
             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("quinta").onclick=function(){
 
        let misura = document.getElementById("quinta");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 35"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.add("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 35";
             }

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("sesta").onclick=function(){
 
        let misura = document.getElementById("sesta");
      contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 35.5"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.add("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 35.5";
             } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("settima").onclick=function(){
 
        let misura = document.getElementById("settima");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 36"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.add("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 36"; 
             } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("ottava").onclick=function(){
 
        let misura = document.getElementById("ottava");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 36.5"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.add("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
             document.querySelector(".settimobox").style.display="block";
             document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
             document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 36.5";
             }

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("nona").onclick=function(){
 
        let misura = document.getElementById("nona");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 37.5"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.add("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
             document.querySelector(".settimobox").style.display="block";
             document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
             document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 37.5"; 
             } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("decima").onclick=function(){
 
        let misura = document.getElementById("decima");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 38"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.add("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

              bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 38"; 
             } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 


      document.getElementById("undicesima").onclick=function(){
 
        let misura = document.getElementById("undicesima");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 38.5"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.add("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
             document.querySelector(".settimobox").style.display="block";
             document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
             document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 38.5";            } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }

      } 

      document.getElementById("dodicesima").onclick=function(){
 
        let misura = document.getElementById("dodicesima");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 39"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.add("clicked");
             document.getElementById("tredicesima").classList.remove("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 39";
             } 
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }


      }

   
      document.getElementById("tredicesima").onclick=function(){
 
        let misura = document.getElementById("tredicesima");
        contatore++;
        console.log(misura);
     
         if(misura.innerHTML == "EU 40"){
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
             document.getElementById("prima").classList.remove("clicked");
             document.getElementById("seconda").classList.remove("clicked");
             document.getElementById("terza").classList.remove("clicked");
             document.getElementById("quarta").classList.remove("clicked");
             document.getElementById("quinta").classList.remove("clicked");
             document.getElementById("sesta").classList.remove("clicked");
             document.getElementById("settima").classList.remove("clicked");
             document.getElementById("ottava").classList.remove("clicked");
             document.getElementById("nona").classList.remove("clicked");
             document.getElementById("decima").classList.remove("clicked");
             document.getElementById("undicesima").classList.remove("clicked");
             document.getElementById("dodicesima").classList.remove("clicked");
             document.getElementById("tredicesima").classList.add("clicked");

             bottone.onclick=function(){
               document.querySelector(".settimobox").style.display="block";
               document.getElementById("bottone2").innerHTML = "Visualizza carello(" + contatore + ")";
               document.getElementById("paragrafo2").innerHTML = "Taglia/Misura EU 40" 
             } 

             document.getElementById("para").onclick=function(){
                document.querySelector(".settimobox").style.display="none";
                location.reload()
            }
     
         }
         else{
             document.querySelector(" table").classList.remove("errore");
             document.querySelector(".error").style.display="none";
          }



          

      } 
  
})



document.addEventListener("DOMContentLoaded", function(){

        let immagini = document.querySelectorAll(".quintobox");
        console.log(immagini);

        let immagini1 = document.querySelectorAll(".sestobox");
        console.log(immagini1);

        let immagini2 = document.querySelectorAll(".settimobox");
        console.log(immagini2);
  
        let indiceimmaginevisibile = [0, 1, 2];
        console.log(indiceimmaginevisibile);


    document.getElementById("avanti").onclick = function() {
        
        for(let i=0;i<indiceimmaginevisibile.length;i++){
            indiceimmaginevisibile[i]++;
        }

        Slider1();

    }

    document.getElementById("indietro").onclick = function() {


        for(let i=0;i<indiceimmaginevisibile.length;i++){
            indiceimmaginevisibile[i]--;
        }

        Slider1()
    }


    document.getElementById("avanti1").onclick=function(){
        
        for(let i=0;i<indiceimmaginevisibile.length;i++){
            indiceimmaginevisibile[i]++;
        }

        Slider2();


    }

    document.getElementById("indietro1").onclick=function(){
        
        for(let i=0;i<indiceimmaginevisibile.length;i++){
            indiceimmaginevisibile[i]--;
        }

        Slider2();


    }

    document.getElementById("avanti2").onclick=function(){
        
        for(let i=0;i<indiceimmaginevisibile.length;i++){
            indiceimmaginevisibile[i]++;
        }

        Slider3();


    }

    document.getElementById("indietro2").onclick=function(){
        
        for(let i=0;i<indiceimmaginevisibile.length;i++){
            indiceimmaginevisibile[i]--;
        }

        Slider3();


    }

    function Slider1(){

        for(let y=0;y<immagini.length;y++){ 
            
            let validatiimmagini = false;
            let immaginecorrente= immagini[y];


            for(let z=0;z<indiceimmaginevisibile.length;z++){
                if(indiceimmaginevisibile[z] == y){
                    immagini[y].style.display="inline-block";
                    validatiimmagini = true;
                }
                else{
                    if(!validatiimmagini ){
                        immagini[y].style.display="none";
                    }
                   
                    
                }
            }
        }


    }
    
    function Slider2(){

        for(let y=0;y<immagini1.length;y++){ 
            
            let validatiimmagini = false;
            let immaginecorrente= immagini1[y];


            for(let z=0;z<indiceimmaginevisibile.length;z++){
                if(indiceimmaginevisibile[z] == y){
                    immagini1[y].style.display="inline-block";
                    validatiimmagini = true;
                }
                else{
                    if(!validatiimmagini){
                        immagini1[y].style.display="none";
                    }
                   
                    
                }
            }
        }


    }


    function Slider3(){

        for(let y=0;y<immagini2.length;y++){ 
            
            let validatiimmagini = false;
            let immaginecorrente= immagini1[y];


            for(let z=0;z<indiceimmaginevisibile.length;z++){
                if(indiceimmaginevisibile[z] == y){
                    immagini2[y].style.display="inline-block";
                    validatiimmagini = true;
                }
                else{
                    if(!validatiimmagini){
                        immagini2[y].style.display="none";
                    }
                   
                    
                }
            }
        }


    }




})



function contato(){
    var janela=document.getElementById("janelaModal-contato");
    
    janela.style.display="block";
}
function fechaContato(){
    var janela=document.getElementById("janelaModal-contato");
   
   
    janela.style.display="none";
 
}



var time = 3000;
   var i=0;
   var images = [];


   images[0] = "image/foto11.jpeg";
   images[1] = "image/foto3.jpeg";
   images[2] = "image/foto4.jpeg";
   images[3] = "image/foto8.jpeg";



function slide(a){
     document.querySelector("#foto").src= images[a];
        
   }
   
   

function slideAuto(){
    document.querySelector("#foto").src= images[i];
    if (i < images.length -1){
        i++;
    } else {
        i=0;
    }
    
  

setTimeout("slideAuto()", time);
   
}
window.onload = slideAuto();


function clique(img){
    var janela=document.getElementById("janelaModal");
    var Btfecha=document.getElementById("fecha-janelaModal");
    var imagem=document.getElementById("imagem-janelaModal");

    janela.style.display="block";
    imagem.src=img;
    Btfecha.onclick=function(){
        janela.style.display="none";
        imagem.style.maxWidth="300px";
        janela.style.paddingTop="10px";
    }

}
function clique2(img){
    var janela=document.getElementById("janelaModal");
    var Btfecha=document.getElementById("fecha-janelaModal");
    var imagem=document.getElementById("imagem-janelaModal");
    
    janela.style.display="block";
    janela.style.paddingTop="100px";
   
    imagem.src=img;
    imagem.style.maxWidth="800px";
    Btfecha.onclick=function(){
        janela.style.display="none";
        imagem.style.maxWidth="300px";
        janela.style.paddingTop="10px";
    }

}
function clique3(img){
    var janela=document.getElementById("janelaModal");
    var Btfecha=document.getElementById("fecha-janelaModal");
    var imagem=document.getElementById("imagem-janelaModal");
    
    janela.style.display="block";
    janela.style.paddingTop="50px";
    imagem.src=img;
    imagem.style.maxWidth="600px";
    Btfecha.onclick=function(){
        janela.style.display="none";
        imagem.style.maxWidth="300px";
        janela.style.paddingTop="10px";
    }

}
function fecha(){
    var janela=document.getElementById("janelaModal");
    var Btfecha=document.getElementById("fecha-janelaModal");
    var imagem=document.getElementById("imagem-janelaModal");
   
    janela.style.display="none";
    imagem.style.maxWidth="300px";
    janela.style.paddingTop="10px";
}

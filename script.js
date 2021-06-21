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
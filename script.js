function slide(a){
   switch(a){
    case 1:
    
    document.querySelector("#foto").src="image/image1.png";
        break
    case 2:
        document.querySelector(".banner img").style.left="-200px";    
        document.querySelector(".banner img").style.left="-200px";   
        document.querySelector("#foto").src="image/image2.jpg";
        break
        default:
        alert('nao é o 1');
        break    

   }
   
    
}
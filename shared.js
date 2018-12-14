
// slideshow Logic 
   var slideIndex = 1;
   showDivs(slideIndex);
   
   function plusDivs(n) {
     showDivs(slideIndex += n);
   }
   
   function currentDiv(n) {
     showDivs(slideIndex = n);
   }
   
   function showDivs(n) {
    
     var i;
     var x = document.getElementsByClassName("slideshow_img");
     var dots = document.getElementsByClassName("slideshow--controler_nav");
    
     if (n > x.length) {slideIndex = 1}    
     if (n < 1) {slideIndex = x.length}
     for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("setWhiteBackground");
     }
     x[slideIndex-1].style.display = "block";  
     console.log(slideIndex);
     dots[slideIndex-1].classList.add("setWhiteBackground");
   }

   
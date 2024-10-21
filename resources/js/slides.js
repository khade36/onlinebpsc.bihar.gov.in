document.addEventListener("DOMContentLoaded", function () {
    let carousel1 = document.querySelector(".row1");
    let carousel2 = document.querySelector(".row2");
  
    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
  
    let cardWidth = 320; // Width of the card + margin
  
    function slideCarousel1() {
      if (scrollPosition1 < carousel1.scrollWidth - cardWidth * 2) {
        scrollPosition1 += cardWidth;
      } else {
        scrollPosition1 = 0;
      }
      carousel1.style.transform = `translateX(-${scrollPosition1}px)`;
    }
  
    function slideCarousel2() {
      if (scrollPosition2 > 0) {
        scrollPosition2 -= cardWidth;
      } else {
        scrollPosition2 = carousel2.scrollWidth - cardWidth * 2;
      }
      carousel2.style.transform = `translateX(-${scrollPosition2}px)`;
    }
  
    setInterval(slideCarousel1, 2000);
    setInterval(slideCarousel2, 2000);
  });

  
  
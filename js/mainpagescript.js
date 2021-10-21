var slide_index = 1;
slidesDisplay(slide_index);

function nextSlide(n) {
    slidesDisplay(slide_index += n);
}

function currentSlide(n) {
    slidesDisplay(slide_index = n);
}

function slidesDisplay(n) {
    var i;
    var slides = document.getElementsByClassName("showSlider");
    if (n > slides.length) {
        slide_index = 1
    }
    if (n < 1) {
        slide_index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}

// -------------------------------------------------------------
function openSearch() {
    document.getElementById("SearchExpandedWrapper").style.display = "block";
    document.getElementsByClassName("MainDiv")[0].style.filter = "blur(4px)";
    document.getElementById("Footer").style.filter = "blur(4px)";
}

function closeSearchBar() {
    document.getElementById("SearchExpandedWrapper").style.display = "none";
    document.getElementsByClassName("MainDiv")[0].style.filter = "blur(0px)";
}

// -------------------------------------------------------------
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }



 

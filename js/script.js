const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.querySelector("input");
    const searchData = document.querySelector(".search-data");
    searchBtn.onclick = () => {
        searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
        searchInput.focus();
    }
    cancelBtn.onclick = () => {
        searchBox.classList.remove("active");
        searchBtn.classList.remove("active");
        searchInput.classList.remove("active");
        cancelBtn.classList.remove("active");
        searchData.classList.toggle("active");
        searchInput.value = "";
    }


// Button Animation
function changeImage(id) {
  let imagePath = document.getElementById(id).getAttribute('src');
  document.getElementById('MainShoesImage').setAttribute('src', imagePath);
};

function changeGreenColor() {
  let colorPath = document.getElementById('one');
  let colorPath2 = document.getElementById('two');
  let colorPath3 = document.getElementById('three');
  let colorPath4 = document.getElementById('four');
  let colorPath5 = document.getElementById('MainShoesImage');
  colorPath.src = "../pageImg/anglegreen.png";
  colorPath2.src = "../pageImg/angle1.png";
  colorPath3.src = "../pageImg/angle2.png";
  colorPath4.src = "../pageImg/angle3.png";
  colorPath5.src = "../pageImg/anglegreen.png";
}

function changeWhiteColor() {
  let colorPath = document.getElementById('one');
  let colorPath2 = document.getElementById('two');
  let colorPath3 = document.getElementById('three');
  let colorPath4 = document.getElementById('four');
  let colorPath5 = document.getElementById('MainShoesImage');
  colorPath.src = "../pageImg/anglewhite.png";
  colorPath2.src = "../pageImg/whiteangle1.png";
  colorPath3.src = "../pageImg/whiteangle2.png";
  colorPath4.src = "../pageImg/whiteangle3.png";
  colorPath5.src = "../pageImg/anglewhite.png";
}


const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}
// ----------------------------------------

/* Set the width of the side navigation to 250px */
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


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

//getElementById
const listDemo = document.getElementById('listDemo');
const searchBar = document.getElementById('SearchBar');
const header = document.getElementById('header');
var arrDemo = [{
        id: 1,
        name: 'Air Force 1 Crater',
        title: '2 Colors',
        img: './img/AirForce1CraterGreen.png',
        price: '$200',
        class: 'animate__fadeInLeft'
    },
    {
        id: 2,
        name: 'Air Force Black/White',
        title: '2 Colors',
        img: './img/AirForceBlackAndWhite.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 3,
        name: 'Air Max Plus',
        title: '1 Color',
        img: './img/AirMaxPlus.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 4,
        name: 'Air Vapor Max Men',
        title: '3 Colors',
        img: './img/AirVapormaxBlack.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 5,
        name: 'Blazer',
        title: '2 Color',
        img: './img/BlazerBlack.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 6,
        name: 'Freerun',
        title: '1 Color',
        img: './img/FreeRun.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 7,
        name: 'Manoa',
        title: '1 Color',
        img: './img/ManoaBlack.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 8,
        name: 'KD14 Basketball',
        title: '2 Colors',
        img: './img/Kd14BasketballBlack.png',
        price: '$250',
        class: 'animate__fadeInLeft'
    },
    {
        id: 9,
        name: 'Tanjun Men',
        title: '1 Color',
        img: './img/Tanjun.png',
        price: '$250',
        link: 'NikeTanjun.html',
        class: 'animate__fadeInLeft'
    },
];

const displayEle = (arrDemo) => {
    var htmldisplay = arrDemo.map((item) => {
        console.log('item', item.img);
        return `
        <div class='info animate__animated ${item.class}'>
            <img src="${item.img}" alt="">    
            <div class='SmallShoesInfo'>
                <a href="${item.link}">${item.name}</a>
                <p class='ShoesColor'>${item.title}</p>
                <p class='ShoesPrice'>${item.price}</p>
            </div>
        </div>
        `
    })
    listDemo.innerHTML = htmldisplay.join("");
};

displayEle(arrDemo);

searchBar.addEventListener('keyup', (e) => {
    var searchBartext = e.target.value.toLowerCase();
    console.log('e', e);
    console.log('searchBartext', searchBartext);
    const fitertext = arrDemo.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchBartext)
        );
    });
    displayEle(fitertext);
});

var menuArr = ['home', 'contact', 'detail']
const displayHeader = () => {
    var htmldisplayheader = menuArr.map((item) => {
        return `
        <div class="menuitem">${item}</div>
        `
    });
    header.innerHTML = htmldisplayheader;

}
displayHeader();

// ----------------------------------------------------------------------------
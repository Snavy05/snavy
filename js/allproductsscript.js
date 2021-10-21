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


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const listDemo = document.getElementById('listDemo');
const searchBar = document.getElementById('SearchBar');
const header = document.getElementById('header');
var arrDemo = [{
        id: 1,
        name: 'Air Force 1 Crater',
        title: '2 Colors',
        img: './img/AirForce1CraterGreen.png',
        price: '$200',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: 'white;',
        color2: '#CAD51D;',
        page: 'allhtmlpages/AirForce1Crater.html',
    },
    {
        id: 2,
        name: 'Air Force B&W',
        title: '2 Colors',
        img: './img/AirForceBlackAndWhite.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 3,
        name: 'Air Max Plus',
        title: '1 Color',
        img: './img/AirMaxPlus.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 4,
        name: 'Air Vapor Max Men',
        title: '3 Colors',
        img: './img/AirVapormaxBlack.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 5,
        name: 'Blazer',
        title: '2 Color',
        img: './img/BlazerBlack.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 6,
        name: 'Freerun',
        title: '1 Color',
        img: './img/FreeRun.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 7,
        name: 'Manoa',
        title: '1 Color',
        img: './img/ManoaBlack.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 8,
        name: 'KD14 Basketball',
        title: '2 Colors',
        img: './img/Kd14BasketballBlack.png',
        price: '$250',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        color2: '#9bdc28;'
    },
    {
        id: 9,
        name: 'Tanjun Men',
        title: '1 Color',
        img: './img/Tanjun.png',
        price: '$250',
        link: 'NikeTanjun.html',
        class: 'animate__fadeIn',
        color: '#9bdc28;',
        color1: '#9bdc28;',
        page: 'NikeTanjun.html',
        // color2: '#9bdc28;'
    },
];

const displayEle = (arrDemo) => {
    var htmldisplay = arrDemo.map((item) => {
        console.log('item', item.img);
        return `
        <div class="col">
            <div class="container_1">
            <div class="card animate__animated ${item.class}">
                <div class="imgBx">
                    <img src="${item.img}" alt="" id="coverImg">
                </div>
                <div class="contentBx">
                    <h2>${item.name}</h2>
                    <div class="size">
                        <h3>Size: </h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>

                    <div class="color">
                        <h3>Color: </h3>
                        <span style="background-color: ${item.color1};" onclick="changeImgWhite()"></span>
                        <span style="background-color: ${item.color2};" onclick="changeImgGreen()"></span>
                    </div>
                    <a href="${item.page}">Buy Now</a>
                </div>
            </div>
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

function changeImgGreen() {
    let coverPath = document.getElementById('coverImg');
    coverPath.src = "./img/AirForce1CraterGreen.png"
}

function changeImgWhite() {
    let coverPath = document.getElementById('coverImg');
    coverPath.src = "./img/AirForce1CraterWhite.png"
}

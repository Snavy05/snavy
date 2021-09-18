// Button Animation
const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}
// ----------------------------------------

// Like button
$(function () {
  $("IClass").click(function () {
    $("IClass,TextPopup").toggleClass("press", 1000);
  });
});
// ----------------------------------------------------------

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

/* Defining multiple objects */
// const SearchBarList = document.getElementById('SearchBarList');
// const SearchBarInput = document.getElementById('SearchBarInput');
// let ArrSearchBar = [];

// /* Adding an event listener to track keyboard input */
// SearchBarInput.addEventListener('keyup', (e) => {
//   const searchString = e.target.value;

//   const filteredCharacters = ArrSearchBar.filter((shoe) => {
//     return (
//       shoe.name.includes(searchString) ||
//       shoe.price.includes(searchString)
//     );
//   });
//   displayCharacters(filteredCharacters);
// });

// const displayCharacters = (shoes) => {
//   const htmlString = shoes
//     .map((shoe) => {
//       return `
//           <li class="character">
//               <h2>${shoe.name}</h2>
//               <p>House: ${shoe.price}</p>
//               <img src="${shoe.image}"></img>
//           </li>
//       `;
//     })
//     .join('');
//   SearchBarList.innerHTML = htmlString;
// };

// loadCharacters();

//getElementById
const listDemo = document.getElementById('listDemo');
const searchBar = document.getElementById('SearchBar');
const header = document.getElementById('header');
var arrDemo  = [
    {id:1, name :'hieu', 
    title:'thoong tin cura hieu', 
    img:'./images/images (1).',
    class:'animate__fadeInLeft',},
    {id:2, name :'long', 
    title:'thoong tin cura long', 
    img:'./images/images.jfif',
    class:'animate__fadeInUp',},
    {id:3, name :'minh', 
    title:'thoong tin cura minh', 
    img:'./images/running_shoes_PNG5823.png.crdownload',
    class:'animate__fadeInRight',},
];

const displayEle = (arrDemo)=>{
    var htmldisplay = arrDemo.map((item)=>{
        console.log('item', item.img);
        return`
        <div class='info animate__animated ${item.class}'>
            <h2>${item.name}</h2>
            <p>${item.id}</p>
            <p>${item.title}</p>
            <img src="${item.img}" alt="">
        </div>
        `
    })
    listDemo.innerHTML = htmldisplay;
};

displayEle(arrDemo);

searchBar.addEventListener('keyup',(e)=>{
    var searchBartext = e.target.value;
    console.log('e',e);
    console.log('searchBartext', searchBartext);
    const fitertext = arrDemo.filter((item)=>{
        return (
            item.name.includes(searchBartext)
        );
    });
    displayEle(fitertext);
});
var menuArr = ['home', 'contact', 'detail']
const displayHeader=()=>{
    var htmldisplayheader = menuArr.map((item)=>{
        return`
        <div class="menuitem">${item}</div>
        `
    });
    header.innerHTML = htmldisplayheader;

}
displayHeader();
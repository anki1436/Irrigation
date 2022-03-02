let menu = document.getElementById("menu");
let y = document.getElementById("line");
let searchModal = document.getElementById("search-modal");
let searchIcon = document.getElementById("search-icon");

let aboutClose = document.getElementById("about-close");
let aboutModal = document.getElementById("about-video");

function myFunction() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        y.classList.remove("close");
    } else {
        menu.style.display = "flex";
        y.classList.add("close");
    }
    console.log(y);
}


var navHeight = document.getElementById("navbar").clientHeight;
menu.style.top = navHeight + "px";
searchModal.style.top = navHeight + "px";
console.log(navHeight);



var navlink = document.getElementsByClassName('link');
for (var i = 0; i < navlink.length; i++) {
    console.log(navlink[i].classList);
}

function fontIncreement() {
    for (var i = 0; i < navlink.length; i++) {
        navlink[i].classList.add("big-font");
        navlink[i].classList.remove("small-font");
    }


}
function fontDefault() {

    for (var i = 0; i < navlink.length; i++) {
        navlink[i].classList.remove("big-font");
        navlink[i].classList.remove("small-font");
    }


}
// function fontIncreement() {



//     for (var i = 0; i < navlink.length; i++) {
//         navlink[i].classList.add("big-font");
//         navlink[i].classList.remove("small-font");


//         console.log(navlink[i].classList);
//     }


// }
function fontDecreement() {
    var navlink = document.getElementsByClassName('link');

    for (var i = 0; i < navlink.length; i++) {

        navlink[i].classList.add("small-font");
        navlink[i].classList.remove("big-font");
        console.log(navlink[i].classList);
    }
}
// function searchBar(){
//     console.log("clikc")
//     if (searchModal.style.display = "flex") {
//         searchModal.style.display = "none";
//     } else {
//         searchModal.style.display = "flex";
//     }


//     if (searchModal.style.display === "flex") {
//         searchModal.style.display = "";
//         y.classList.remove("close");
//     } else 
//     {
//         searchModal.style.display = "flex";
//         console.log("not clicked");
//         y.classList.add("close");
//     }
//     console.log(y);
// }

function searchBarOpen() {
    searchModal.style.display = "flex"
}

    function searchBarClose() {
        searchModal.style.display = "none"

    }

    function aboutVideoOpen() {
        aboutModal.style.display = "block"
        aboutClose.style.display = "block"
    }
    function aboutModalClose() {

        aboutModal.style.display = "none"
        aboutClose.style.display = "none"

    }


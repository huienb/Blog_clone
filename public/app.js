// Change color of collapse button
function navbarHover (event) {
    const nav = document.querySelector("nav");
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
};

document.querySelector(".navbar-toggler").onclick = navbarHover;

// Change navbar while scroll
window.onscroll = function() {scrollPage()};
function scrollPage() {
    const nav = document.querySelector("nav");
    const nav_home = document.querySelector(".header_item");
    var nav_item = document.getElementsByClassName("navbar_hover");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.backgroundColor = "#fff";
        nav_home.style.color = "#000";
        for (var i = 0; i<nav_item.length; i++){
            nav_item[i].style.color = "#000";
        }
    }
    else {
        nav.style.backgroundColor = "transparent";
        nav_home.style.color = "#777";
        for (var i = 0; i<nav_item.length; i++){
            nav_item[i].style.color = "#777";
        }
    }
}

// Image zoom
function imgZoom(event) {
    document.querySelector("header").style.display = "none";
    document.querySelector("footer").style.display = "none";
    document.getElementById("overlay").style.display = "block";
    var img_after = document.getElementById("img_zoom");
    img_after.src = this.src;
    img_after.alt = this.alt;
    document.getElementById("img_name").innerHTML = this.alt;
}

function imgClose(event){
    document.getElementById("overlay").style.display = "none";
}

var img = document.getElementsByClassName("img_each");
for (var i = 0; i < img.length; i++){
    img[i].onclick = imgZoom;
}

document.getElementById("overlay_close").onclick = imgClose;


const navBar = document.getElementById("nav_bar");

const header = document.getElementById("header");
const searchBox = document.querySelector(".search-box .img_search");

searchBox.addEventListener("click", ()=>{
    header.classList.toggle("showSearch");
    navBar.classList.toggle("showSearch");
})
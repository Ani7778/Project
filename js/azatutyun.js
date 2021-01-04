var navbar_options = document.getElementById("myNavbar");
var hidden = navbar_options.classList.contains("hidden_block");

document.getElementsByClassName("dropbtn")[0].addEventListener("mouseover", showHideNavbaroptions);
document.getElementsByClassName("icon")[0].addEventListener("click", showHideNavbaroptions);

    
function showHideNavbaroptions() {
    
    if (hidden) {
        console.log("Show Navbar");
        navbar_options.className = "navbar_items_hover responsive";
    } else {
        console.log("Hide Navbar");
        navbar_options.className = "navbar_items_hover hidden_block";
    }
}







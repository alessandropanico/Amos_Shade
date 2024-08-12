//250px
function openNav() {
    document.getElementById("mySidenav").style.width = "60.386vw";
    document.getElementById("mySidenav").style.height = "100%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function openNav() {
    document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
}

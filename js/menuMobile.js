
let startX;

function openNav() {
    document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const currentX = event.touches[0].clientX;
    const diffX = currentX - startX;

    if (diffX > 50) {
        openNav();
    } else if (diffX < -50) {
        closeNav();
    }
}

function handleTouchEnd(event) {
    startX = null;
}

document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);
document.addEventListener("touchend", handleTouchEnd);

document.querySelector(".menu-btn").addEventListener("click", openNav);
document.querySelector(".closebtn").addEventListener("click", closeNav);

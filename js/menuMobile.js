let startX;
let startY;
let menuRect;

function openNav() {
    document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    
    // Ottieni le dimensioni e la posizione del menu
    const menu = document.getElementById("mySidenav");
    menuRect = menu.getBoundingClientRect();
}

function handleTouchMove(event) {
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    // Verifica se il tocco è dentro l'area del menu
    if (currentX >= menuRect.left && currentX <= menuRect.right &&
        currentY >= menuRect.top && currentY <= menuRect.bottom) {

        const diffX = currentX - startX;

        if (diffX > 50) {
            openNav();
        } else if (diffX < -50) {
            closeNav();
        }
    }
}

function handleTouchEnd(event) {
    startX = null;
    startY = null;
    menuRect = null;
}

document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);
document.addEventListener("touchend", handleTouchEnd);

document.querySelector(".menu-btn").addEventListener("click", openNav);
document.querySelector(".closebtn").addEventListener("click", closeNav);

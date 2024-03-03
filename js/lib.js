//CARICAMENTO INZIIALE DELLA PAGINA INDEX

document.addEventListener('DOMContentLoaded', function () {
    var fadeInDuration = 1000;
    var fadeOutDuration = 1000;
    var waitDuration = 1000;
    var finalWaitDuration = 1000;

    fadeIn('intro-image', fadeInDuration);

    setTimeout(function () {
        fadeIn('intro-text', fadeInDuration, function () {
            setTimeout(function () {
                fadeOut('intro-image', fadeOutDuration);
                fadeOut('intro-text', fadeOutDuration, function () {
                    setTimeout(function () {
                        document.getElementById('main-content').classList.remove('hidden');
                        fadeIn('main-content', 2000);
                        document.getElementById('navbar').classList.remove('hidden');
                        fadeIn('navbar', 2000);
                    }, finalWaitDuration);
                });
            }, waitDuration);
        });
    }, fadeInDuration + waitDuration);
});

function fadeIn(elementId, duration, callback) {
    var element = document.getElementById(elementId);
    var start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        element.style.opacity = progress / duration;
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            if (callback) callback();
        }
    }

    window.requestAnimationFrame(step);
}

function fadeOut(elementId, duration, callback) {
    var element = document.getElementById(elementId);
    var start = null;
    var initialOpacity = parseFloat(window.getComputedStyle(element).opacity);

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        element.style.opacity = initialOpacity - progress / duration;
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            if (callback) callback();
        }
    }

    window.requestAnimationFrame(step);
}

//------------------------------------------------------------------------


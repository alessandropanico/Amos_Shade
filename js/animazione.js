document.addEventListener('DOMContentLoaded', function () {
    // Disabilita lo scroll e touch all'inizio dell'animazione
    document.body.classList.add('disable-scroll-touch');

    var fadeInDuration = 1000;
    var fadeOutDuration = 1000;
    var waitDuration = 1000;
    var finalWaitDuration = 1000;

    fadeIn('navbar', fadeInDuration);

    setTimeout(function () {
        fadeIn('intro-image', fadeInDuration);
        fadeIn('intro-text', fadeInDuration, function () {
            setTimeout(function () {
                fadeOut('intro-image', fadeOutDuration);
                fadeOut('intro-text', fadeOutDuration, function () {
                    setTimeout(function () {
                        document.getElementById('main-content').classList.remove('hidden');
                        fadeIn('main-content', 2000);
                        // Disabilita completamente la sezione #primo
                        document.getElementById('primo').style.display = 'none';
                        // Riabilita lo scroll e touch dopo l'animazione
                        document.body.classList.remove('disable-scroll-touch');
                    }, finalWaitDuration);
                });
            }, waitDuration);
        });
    }, fadeInDuration + waitDuration);
});

function fadeIn(elementId, duration, callback) {
    var element = document.getElementById(elementId);
    var start = null;
    var initialOpacity = parseFloat(window.getComputedStyle(element).opacity);

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        element.style.opacity = initialOpacity + progress / duration;
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            element.style.opacity = 1; // Assicura che l'opacità sia esattamente 1 alla fine
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
            element.style.opacity = 0; // Assicura che l'opacità sia esattamente 0 alla fine
            if (callback) callback();
        }
    }

    window.requestAnimationFrame(step);
}

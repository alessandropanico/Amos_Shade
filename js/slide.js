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
                      
                      // Inizializza lo slick slider
                      $('.slider').slick({
                          dots: false, // Disabilita i punti di navigazione predefiniti di Slick
                          infinite: true,
                          speed: 500,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          autoplay: true,
                          autoplaySpeed: 2000,
                          prevArrow: '<span class="prev">&#10094;</span>',
                          nextArrow: '<span class="next">&#10095;</span>',
                          lazyLoad: false, // Disabilita l'effetto Lazy Load
                      });

                      // Aggiunge la funzionalità ai punti di navigazione personalizzati
                      $('.custom-dots .dot').on('click', function() {
                          var slideIndex = $(this).index();
                          $('.slider').slick('slickGoTo', slideIndex); // Vai alla diapositiva corrispondente al punto cliccato
                          $('.dot').removeClass('active'); // Rimuovi la classe 'active' da tutti i punti di navigazione
                          $(this).addClass('active'); // Aggiungi la classe 'active' al punto di navigazione cliccato
                      });

                      // Aggiorna lo stato dei punti di navigazione quando lo slick slider cambia diapositiva
                      $('.slider').on('afterChange', function(event, slick, currentSlide) {
                          $('.dot').removeClass('active'); // Rimuovi la classe 'active' da tutti i punti di navigazione
                          $('.dot').eq(currentSlide).addClass('active'); // Aggiungi la classe 'active' al punto di navigazione della diapositiva corrente
                      });
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

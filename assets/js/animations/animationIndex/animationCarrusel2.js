
$(document).ready(function() {
    console.log("Slick is being initialized");
    
    // Esperar un poco para asegurarse de que el contenido esté cargado
    setTimeout(function() {
        $(".logo-slider2").slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 1000, // Cambiado a 2000 ms (2 segundos) para el autoplay
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
        });
    }, 500); // Ajusta el tiempo según sea necesario
});

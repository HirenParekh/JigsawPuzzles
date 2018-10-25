$(document).ready(function () {
    colors = ['#795548', '#f44336', '#03a9f4'];
    new Jigsaw().init({
        container: '#slide0',
        image: 'images/jerry1.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide1',
        image: 'images/micky.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide2',
        image: 'images/superman.png',
        gridSize: 3
    });

    var slider = $(".slider").slick({
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        prevArrow: '<div class="slick-prev" aria-label="Previous" ><div></div></div>',
        nextArrow: '<div class="slick-next" aria-label="Next"><div></div></div>',
    });
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let slide = '#slide' + nextSlide;
        console.log(slide);
        var newWidth = $(slide).width();
        console.log(newWidth);
        $('.wrapper').animate({
            width: newWidth
        }, 400);
        $('body').css({
            'background-color': colors[nextSlide]
        }, 300);
        setTimeout(function () {
            $('.slider').slick('resize');
        }, 500)
    });
})
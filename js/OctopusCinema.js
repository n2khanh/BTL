$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity : true,
        arrows : true,
        autoplay : true,
        autoplaySpeed: 1000,
        draggable:false,
        dots:true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><ion-icon name='arrow-back-outline'></ion-icon></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><ion-icon name='arrow-forward-outline'></ion-icon></button>",
        responsive: [
            {
                breakpoint:1024,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 844,
                settings: {
                  slidesToShow: 1,
                  arrows:false,
                  infinity:false,
                  autoplay:false,
                }
            },
            {
                breakpoint: 915,
                settings: {
                  slidesToShow: 1,
                  arrows:false,
                  infinity:false,
                  autoplay:false,
                }
            },
            {
                breakpoint: 653,
                settings: {
                  slidesToShow: 1,
                  arrows:false,
                  infinity:false,
                  autoplay:false,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                  slidesToShow: 3,
                  arrows:false,
                }
            },
        ]
    });
  });
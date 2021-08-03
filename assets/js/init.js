

$(document).ready(function () {
    (function ($) {
        $('.testimonial').owlCarousel({
            loop:true,
            margin:30,
            //nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    })(jQuery);
});






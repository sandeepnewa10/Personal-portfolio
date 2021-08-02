

$(document).ready(function () {
    (function ($) {
        // $('.testimonial__content').owlCarousel({
        //     items: 1,
        //     loop: true,
        //     dots: false,
        //     autoplay: true,
        //     // animateOut: 'slideInLeft',
        //     // animateIn: 'slideInRight',
        //     //stagePadding:30,
        //     smartSpeed:450
        // });
        // $('.testimonial').owlCarousel({
        //     items: 1,
        //     loop: true,
        //     animateOut: 'fadeOut',
        //     animateIn: 'slideInRight',
        //     //stagePadding:30,
        //     smartSpeed:450
        // });
        $('.testimonial__content').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
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
    })(jQuery);
});






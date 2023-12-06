// Reviews Slider
$('.honest-reviews--slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1366,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
    ]
    });

// Testimonials Slider
$('.awesome-feature__col--slider').slick({
    infinite: false,
    dots: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
});
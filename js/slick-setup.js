function slickNews() {
    $(".popular-news-desktop-carousel").slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        verticalSwiping: true,
        vertical: true,
        draggable: true,
    });
}

$(document).ready(function () {
    var $windowWidth = $(window).width();
    if ($windowWidth >= 1400) {
        slickNews();
    }
});

$(window).resize(function () {
    var $windowWidth = $(window).width();
    if ($windowWidth < 1400) {
        $(".popular-news-desktop-carousel").slick("unslick");
    } else {
        slickNews();
    }
});

$b1 = $(".button-1");
$b2 = $(".button-2");
$b3 = $(".button-3");

$ac1 = $(".accordion-carousel-1");
$ac2 = $(".accordion-carousel-2");
$ac3 = $(".accordion-carousel-3");

function slickAccordionSetup($className, $buttonName) {
    $($buttonName).click(function () {
        $($className).slick({
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            draggable: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ],
        });
    });
}

$(document).ready(slickAccordionSetup($ac1, $b1));
$(document).ready(slickAccordionSetup($ac2, $b2));
$(document).ready(slickAccordionSetup($ac3, $b3));

$(document).ready(function () {
    $(".lures-carousel").slick({
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1199,
                settings: "unslick",
            },
        ],
    });
});

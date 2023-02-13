var $slickCarousels = $(".slick");
var $accordionButtons = $(".accordion-button");
var $nextSlideButtons = $(".next-slide");
var $previousSlideButtons = $(".previous-slide");

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

function slickAccordionSetup($className, $buttonName) {
    $($buttonName).click(function () {
        $($className).slick({
            arrows: false,
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

$(document).ready(() => {
    $.each($slickCarousels, (index, carousel) => {
        slickAccordionSetup(carousel, $accordionButtons.get(index));
    });
    $.each($slickCarousels, (index, carousel) => {
        $($nextSlideButtons.get(index)).click(function () {
            $(carousel).slick("slickNext");
        });
    });
    $.each($slickCarousels, (index, carousel) => {
        $($previousSlideButtons.get(index)).click(function () {
            $(carousel).slick("slickPrev");
        });
    });
});

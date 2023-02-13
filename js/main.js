$btn = $(".return-top");

$(window).scroll(function () {
    if ($(this).scrollTop() >= 250) {
        $btn.addClass("show");
    } else {
        $btn.removeClass("show");
    }
});

$(document).ready(function () {

});

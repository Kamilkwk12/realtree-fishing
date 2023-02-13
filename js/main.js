const returnBtn = document.querySelector(".return-top");

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (this.scrollY.valueOf() >= 250) {
            returnBtn.classList.add("show");
        } else {
            returnBtn.classList.remove("show");
        }
    });
});

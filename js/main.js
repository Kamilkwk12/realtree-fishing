const returnBtn = document.querySelector(".return-top");

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (this.scrollY.valueOf() >= 250) {
            returnBtn.classList.add("show-return-button");
        } else {
            returnBtn.classList.remove("show-return-button");
        }
    });
});

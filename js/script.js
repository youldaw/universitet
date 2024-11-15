$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header2').addClass("sticky");
        }
        else {
            $('.header2').removeClass("sticky");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar-con').addClass("sticky");
        }
        else {
            $('.navbar-con').removeClass("sticky");
        }
    });


    var swiper1 = new Swiper(".main-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: "cube",
        fadeEffect: {
            crossFade: true,
        },
    });


    var swiper2 = new Swiper(".main-slide2", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
        },
        effect: "cube",
        fadeEffect: {
            crossFade: true,
        },
    });

});

AOS.init();
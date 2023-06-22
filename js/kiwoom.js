$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



    // $('.mok_slide').slick({
    //     vertical: true,

    //     arrows: false,
    //     dots: true,
    // });

    var swiper = new Swiper(".swiper", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    $('.box .color_change ').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.change_content li').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });




    // $('.shop_menu .right .touch li').on('click', function () {
    //     e.preventDefault();
    //     let idx = $(this).index();
    //     $('.mok_slide li').eq(idx).addClass('on').siblings().removeClass('on');
    // });



    $('.shop_menu .right .touch li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        swiper.slideTo(idx);
    })





    $(window).on('load scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        $('.page1').each(function () {
            if (sct > $(this).offset().top - 200) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })
    })





})



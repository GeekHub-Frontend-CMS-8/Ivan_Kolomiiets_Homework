$(document).ready(function () {
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: '980px' ,
        mobileFirst: 'boolean' ,
        cssEase: 'linear',
        prevArrow : '.prevbt',
        nextArrow : '.nextbt',
    });
});
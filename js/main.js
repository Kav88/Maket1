$(function(){
    $("#1, #6").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".nav").offset().top
        }, 2000);
    });
    $("#2, #7").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".about").offset().top
        }, 2000);
    });
    $("#3, #8").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".skills").offset().top
        }, 2000);
    });
    $("#4, #9").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".portfolio").offset().top
        }, 2000);
    });
    $("#5, #10").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contacts").offset().top
        }, 2000);
    });  

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#back2Top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    
    });

    $('.mobile div').on('click', () => {
        $('.mobile div').toggleClass('active');
        $('.mobile nav').toggleClass('open');
        $('.mobile nav ul').toggleClass('show');
    });
    for (let a = 1; a <= $(".mobile ul li").length; a++){
        $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
    }
    
});
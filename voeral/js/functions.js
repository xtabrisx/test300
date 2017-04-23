$(document).ready(function($) {
	/*EXTEND ANIMACIONES*/
    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    /*CÁLCULO DE ALTURAS*/
    var winHeight = $(window).height();
    console.log(winHeight);
    $(".main-screen").height(winHeight);
    $(".col-container").height(winHeight);

    /*LAZYLOAD*/
    $("img").unveil();
    //alert("test");

    //SCROLLING
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200);
                    return false;
                }
            }
        });
    });


    /*COMPORTAMIENTO BURGER*/
    $('.burger-menu').click(function(){
    	$(this).animateCss("flipInY");
    	$(this).toggleClass('active');
    	$('.modal-menu').toggleClass('active');
    	$('.modal-menu').toggleClass('flipInX');
    });
    /*COMPORTAMIENTO BLOQUE 1*/
    $(".col1").click(function() { 
    	$(".col2").animateCss('flipInY');
    	$(".col3").animateCss('flipInY');
        //$(".block-1").animateCss("flipInY");
        $(".block-1").toggleClass('flipInY').toggleClass('animated');
       

        $(".block-1").toggleClass("active");
    });

    /*COMPORTAMIENTO BLOQUE 2*/
    $(".col2").click(function() {
        $(this).toggleClass("active");
        $(this).animateCss("flipInY");
    });

    /*COMPORTAMIENTO BLOQUE 3*/
    $(".col3").click(function() {
        $(this).toggleClass("active");
        $(this).animateCss("flipInY");
    });

});

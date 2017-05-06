$(document).ready(function($) {
	

    $.MultiLanguage('language.json');
	$(".btn-es").click(function(){
		//alert("HOLA");
		$.MultiLanguage('language.json', 'es');
	});
	$(".btn-en").click(function(){
		$.MultiLanguage('language.json', 'en');
	});
	$(".btn-fr").click(function(){
		$.MultiLanguage('language.json', 'fra');
	});
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
    });

    /*COMPORTAMIENTO ENLACES MODAL*/
    $('.company-link').click(function() {
	    block1();
	    $('.modal-menu').removeClass('active');

	});
	$(".news-link").click(function() {		
	    block2();
	    $('.modal-menu').removeClass('active');

	});
	$(".contact-link").click(function() {
	    block3();
	    $('.modal-menu').removeClass('active');

	});

    /*COMPORTAMIENTO BLOQUE 1*/
    function block1(){
    	$(".col2").animateCss('flipInY');
    	$(".col3").animateCss('flipInY');
        //$(".block-1").animateCss("flipInY");
        $(".block-1").toggleClass('flipInY').toggleClass('animated');
        $(".block-1").toggleClass("active");

    }
    $(".col1").click(function() { 
    	block1();
    });

    /*COMPORTAMIENTO BLOQUE 3*/
    function block3(){
        $(".col1").animateCss('flipInY');
    	$(".col2").animateCss('flipInY');
        //$(".block-1").animateCss("flipInY");
        $(".block-3").toggleClass('flipInY').toggleClass('animated');  
        $(".block-3").toggleClass("active");

    }
    $(".col3").click(function() {
    	block3();
    });

    /*COMPORTAMIENTO BLOQUE 2*/
    function block2(){
    	$(".col1").animateCss('flipInY');
    	$(".col1").toggleClass('active-alt');
    	$(".col2").toggleClass('active-alt');
    	if($(".col2").hasClass('active-alt')){
    		$(".col2").animateCss('slideInRight');
    	}else{
    		$(".col2").animateCss('slideInLeft');
    	}
    	

    	$(".col3").animateCss('flipInY');
        //$(".block-1").animateCss("flipInY");
        $(".block-2").toggleClass('flipInY').toggleClass('animated');
        $(".block-2").toggleClass("active");
    }

    $(".col2").click(function() { 
    	block2();
    });

});

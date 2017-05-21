$(document).ready(function($) {
    //CREACIÓN DEL CAROUSEL
    $slideshow = $('.news-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true
    });
    //CLICAR EN SLIDE PARA PASAR AL SIGUIENTE - DEPRECATED
    /*$('.news-container').click(function() {
    $slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide'))+1);
    });*/
    //CAMBIO DE IDIOMA
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

    //DISPARAR EVENTO SCROLLDOWN EN TODA LA PANTALLA
    $(".main-screen").click(function(){
        $("#anchor-scroll").click();
    });
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
    var controlBloque = 0;
    function burgerFunc(){
            if($(".block-1").hasClass('active')){
                block1();
            }
            if($(".block-2").hasClass('active')){
                block2();
            }
            if($(".block-3").hasClass('active')){
                block3();
            }

            $('.burger-menu').animateCss("flipInY");
            $('.burger-menu').toggleClass('active');
            $('.modal-menu').toggleClass('active');            
    }

    /*COMPORTAMIENTO BURGER*/
    $('.burger-menu').click(function(){burgerFunc();});

    /*COMPORTAMIENTO ENLACES MODAL*/
    $('.company-link').click(function() {
        if($(window).scrollTop() + $(window).height() != $(document).height()) {
           $("html, body").animate({ scrollTop: $(document).height() }, 1700);
        }        	    
        burgerFunc();
        block1();
	});
	$(".news-link").click(function() {	
        if($(window).scrollTop() + $(window).height() != $(document).height()) {
           $("html, body").animate({ scrollTop: $(document).height() }, 1700);
        }  
        burgerFunc();
	    block2();
	});
	$(".contact-link").click(function() {
	    if($(window).scrollTop() + $(window).height() != $(document).height()) {
           $("html, body").animate({ scrollTop: $(document).height() }, 1700);
        }  
        burgerFunc();
        block3();
	});

    /*COMPORTAMIENTO BLOQUE 1*/
    function block1(){
        $(".col1").toggleClass('minus');
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
        $(".col3").toggleClass('minus');
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

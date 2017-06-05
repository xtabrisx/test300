$(document).ready(function($) {
    //VARIABLES
    var bloqueUno = $(".block-1");
    var bloqueDos = $(".block-2");
    var bloqueTres = $(".block-3");
    var colUno = $(".col1");
    var colDos = $(".col2");
    var colTres = $(".col3");
    
    //CREACIÓN DEL CAROUSEL
    $slideshow = $('.news-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
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
    $(".main-welcome-inner").height(winHeight-200);

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
    //SCROLLTOP
    $('.go-top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
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
    //SCROLL BOTTOM
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
           $("#voeral-logo").show().animateCss("fadeIn");
        }else{
            $("#voeral-logo").fadeOut();
        }

        if($(window).scrollTop()==0){
            $(".col1-bg").css("opacity","0");
            $(".col2-bg").css("opacity","0");
            $(".col3-bg").css("opacity","0");
        }else{
            $(".col1-bg").css("opacity","0.5");
            $(".col2-bg").css("opacity","0.5");
            $(".col3-bg").css("opacity","0.5");
        }

    });
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
        if(bloqueUno.hasClass('active')){
            colDos.animateCss('fadeIn');
            colTres.animateCss('fadeIn');
            bloqueUno.animateCss('fadeOutRight');
        }else{
            colDos.animateCss('fadeOut');
            colTres.animateCss('fadeOut');
            bloqueUno.animateCss('fadeInRight');
        }
        colUno.toggleClass('minus');    	
        bloqueUno.toggleClass("active");
    }
    colUno.click(function() { 
    	block1();
    });

    /*COMPORTAMIENTO BLOQUE 3*/
    function block3(){     
        //$(".block-3").toggleClass('flipInY').toggleClass('animated');  
        if(bloqueTres.hasClass('active')){
            colUno.animateCss('fadeIn');
            colDos.animateCss('fadeIn');
            bloqueTres.animateCss('fadeOutLeft');
        }else{
            colUno.animateCss('fadeOut');
            colDos.animateCss('fadeOut');
            bloqueTres.animateCss('fadeInLeft');
        }
        colTres.toggleClass('minus');
        bloqueTres.toggleClass("active");
    }
    colTres.click(function() {
    	block3();
    });

    /*COMPORTAMIENTO BLOQUE 2*/
    function block2(){
        if(bloqueDos.hasClass('active')){
            //colUno.animateCss('fadeIn');
            colTres.animateCss('fadeIn');
            bloqueDos.animateCss('fadeOutRight');
        }else{
            //colUno.animateCss('bounce');
            colTres.animateCss('fadeOut');
            bloqueDos.animateCss('fadeInRight');
        }    	
    	
    	if(colDos.hasClass('active-alt')){
    		colUno.show();
            colUno.animateCss('slideInLeft');
            colDos.animateCss('slideInLeft');
    	}else{
    		colUno.animateCss('slideOutLeft');
            colDos.animateCss('slideOutLeft');
            colUno.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
                function(){
                    colUno.hide();
                });
    	}    	    	
        //bloqueDos.toggleClass('flipInY').toggleClass('animated');
        colUno.toggleClass('active-alt');
        colDos.toggleClass('active-alt');
        bloqueDos.toggleClass("active");
    }

    colDos.click(function() { 
    	block2();
    });
    


});

/* Navigation menu */
$(".open-menu").click(function(){

    $(".start-menu").removeClass("button-anim-close"),
    $(".main-nav").removeClass("nav-anim"),
    $(".start-menu").removeClass("button-anim"),
    $(".main-nav ").removeClass("nav-anim-close"),
    $(".start-menu").addClass("button-anim"),
    $(".main-nav").addClass("nav-anim")
});
$(".close-menu").click(function(){
    $(".start-menu").removeClass("button-anim-close"),
    $(".main-nav").removeClass("nav-anim"),
    $(".start-menu").removeClass("button-anim"),
    $(".main-nav").removeClass("nav-anim-close"),
    $(".start-menu").addClass("button-anim-close"),
    $(".main-nav").addClass("nav-anim-close")
});


/* Filterable Gallery */
$(document).ready(function() {
    $(".button").click(function(e) {
        e.preventDefault();
        var name = $(this).attr("data-filter");
        if(name == "all") {
            $(".filter").show("2000");
        } else {
            $(".filter").not("."+name).hide("2000");
            $(".filter").filter("."+name).show("2000");
        }
    });
    $(".button").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});


/* Smooth scroll */
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
     //closing menu
     $(function(){
        $(".start-menu").removeClass("button-anim-close"),
        $(".main-nav").removeClass("nav-anim"),
        $(".start-menu").removeClass("button-anim"),
        $(".main-nav").removeClass("nav-anim-close"),
        $(".start-menu").addClass("button-anim-close"),
        $(".main-nav").addClass("nav-anim-close")
    });
      
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* Gallery image popUp */
$(function() {
    $('.gallery-image').magnificPopup({ 
        type: 'image', 
        gallery: {
          enabled: true,
        }
    });
});



/* Activate Wow.js */
new WOW().init();


/* Preloader */
$(window).on( "load", function() {
	$(".load").fadeOut("slow");
})














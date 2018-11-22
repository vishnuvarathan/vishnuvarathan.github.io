jQuery(document).ready(function ($) {


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });


  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
  });


  new WOW().init();


  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });


  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }


  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

 
});
jQuery(document).ready(function ($) {
  var jssor_1_SlideoTransitions = [
  [{b:-1,d:1,o:-0.7}],
  [{b:900,d:2000,x:-379,e:{x:7}}],
  [{b:900,d:2000,x:-379,e:{x:7}}],
  [{b:-1,d:1,o:-1,sX:2,sY:2},{b:0,d:900,x:-171,y:-341,o:1,sX:-2,sY:-2,e:{x:3,y:3,sX:3,sY:3}},{b:900,d:1600,x:-283,o:-1,e:{x:16}}]
  ];
  var jssor_1_options = {
  $AutoPlay: 1,
  $SlideDuration: 800,
  $SlideEasing: $Jease$.$OutQuint,
  $CaptionSliderOptions: {
  $Class: $JssorCaptionSlideo$,
  $Transitions: jssor_1_SlideoTransitions
  },
  $ArrowNavigatorOptions: {
  $Class: $JssorArrowNavigator$
  },
  $BulletNavigatorOptions: {
  $Class: $JssorBulletNavigator$
  }
  };
  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  var MAX_WIDTH = 3000;
  function ScaleSlider() {
  var containerElement = jssor_1_slider.$Elmt.parentNode;
  var containerWidth = containerElement.clientWidth;
  if (containerWidth) {
  var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
  jssor_1_slider.$ScaleWidth(expectedWidth);
  }
  else {
  window.setTimeout(ScaleSlider, 30);
  }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  });

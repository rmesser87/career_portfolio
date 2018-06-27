(function($){

  "use strict";

/*------------------------------------------------------------------
[Table of contents]

0. CUSTOM FUNCTION
01.  FRESHR - General Functions Init
02.  FRESHR - MENU TOGGLE INIT
03.  FRESHR - PROFILE IMAGE ADD
04.  FRESHR - Scroll to Top Button Hover effect
05.  FRESHR - SMOOTHSCROLL Init
06.  FRESHR - Click to Scroll Section Init
07.  FRESHR - Click to Top Init
08.  FRESHR - Menu smoothscroll on scroll
09.  FRESHR - EASY PIE INIT WITH APPEAR
10.  FRESHR - SKILL DATA ANIMATION INIT WITH APPEAR
11.  FRESHR - OWL SLIDER INIT
12.  FRESHR - Magnific - POPUP INIT
13.  FRESHR - Portfolio Effect
14.  FRESHR - MAXIMAGE SLIDER WITH CYCLE 2 INIT
15.  FRESHR - SLY HORIZANTAL SCROLL INIT
16.  FRESHR - Flex Slider
17.  FRESHR - Open and Close the testimonials modal page
18.  FRESHR - Check if user has pressed 'Esc'
19.  FRESHR - Build the grid for the testimonials modal page
20.  FRESHR CONTACT FORM INIT
21.  FRESHR - GOOGLE MAP INIT
22.  FRESHR - Video Header Section INIT
23.  FRESHR - PRELOADER INIT
24.  FRESHR - Banner Height Init
25.  FRESHR - About section profile Height Init
26.  FRESHR - FILTER ITEM INIT WITH ISOTOPE
27.  FRESHR - Banner Height (Resize) Init
28.  FRESHR - About section profile Height (Resize) Init
29.  FRESHR - COUNTER ANIMATION INIT

-------------------------------------------------------------------*/

  /*--------------------------------------------------------------
    0. CUSTOM FUNCTION
  --------------------------------------------------------------*/
  jQuery.fn.exists = function(){return this.length>0;}


  /*--------------------------------------------------------------
    01.  FRESHR - General Functions Init
  --------------------------------------------------------------*/
  var about_me_profile = $(".about-me-profile"),
      fresh_banner_section = $('#freshr-banner-section');

  function freshr_banner_height(){
     fresh_banner_section.height($(window).height());
  } // End Freshr Banner Height Function

  function freshr_about_me_profile_height(){
      var about_me_data =  $('.about-me-data'),
          about_me = about_me_data.outerHeight();

      about_me_profile.height(about_me);
  } // End Freshr About Me Profile Height Function


  $.fn.smoothScroll = function ( options ) {
      var settings = $.extend({
          duration : 500,
          animation: "easeInExpo"
      }, options );

      $(this).on('click', function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop,
        }, settings.duration, settings.animation);
        e.preventDefault();
      });
      return this;
  };  // End Freshr Smooth Scroll Function



$(function(){

  /*--------------------------------------------------------------
    02.  FRESHR - MENU TOGGLE INIT
  --------------------------------------------------------------*/
  var freshr_main_menu_icon = $("#freshr-main-menu-icon"),
      freshr_main_menu_nave = $('#freshr-main-menu-nav'),
      freshr_main_menu_link = $("#freshr-main-menu-nav ul li a");

  if(freshr_main_menu_icon.exists()){
    freshr_main_menu_icon.on('click', function(){
      freshr_main_menu_nave.slideToggle(500);
    });
  } // End exists

  if(freshr_main_menu_link.exists()){
    freshr_main_menu_link.on('click', function(){
      freshr_main_menu_nave.slideToggle('fast');
    });
  } // End exists

  /*--------------------------------------------------------------
    03.  FRESHR - PROFILE IMAGE ADD
  --------------------------------------------------------------*/
  var about_me_profile = $(".about-me-profile");
  if(about_me_profile.exists()){
      var profile_thumb_url = about_me_profile.attr('data-profile-thumb');
      about_me_profile.css({
        'background-image': 'url('+profile_thumb_url+')'
      });
  } // End exists
    

  /*--------------------------------------------------------------
    04.  FRESHR - Scroll to Top Button Hover effect
  --------------------------------------------------------------*/
  var up_to_bar = $(".up_to_bar"),
      freshr_footer_section  = $('#freshr-footer-section');

  if(up_to_bar.exists()){
    up_to_bar.on('hover', function(){
        freshr_footer_section.css({
          'border-color' : '#FFFFFF'
        })
    }, function(){
        freshr_footer_section.css({
          'border-color' : '#4c4c4c'
        })
    });
  } // End exists


  /*--------------------------------------------------------------
    05.  FRESHR - SMOOTHSCROLL Init
  --------------------------------------------------------------*/
  var post_comment_link = $(".post_comment a");

  if(post_comment_link.exists()){
    post_comment_link.smoothScroll();
  } // End exists
    

  /*--------------------------------------------------------------
    06.  FRESHR - Click to Scroll Section Init
  --------------------------------------------------------------*/
  var freshr_scroll_down_link = $(".freshr-scroll-down a");

  if(freshr_scroll_down_link.exists()){
    freshr_scroll_down_link.on( "click", function(e) {
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top -250;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop,
      }, 500);
      e.preventDefault();
    });
  } // End exists



 /*--------------------------------------------------------------
    07.  FRESHR - Click to Top Init
  --------------------------------------------------------------*/
  if(up_to_bar.exists()){
    up_to_bar.on('click', function(){
      $('html, body').animate({scrollTop : 0},500 , 'easeInExpo');
      return false;
    });
  } // End exists

  /*--------------------------------------------------------------
    08.  FRESHR - Menu smoothscroll on scroll
  --------------------------------------------------------------*/
  (function(){
    var lastId,
    topMenu = $("#freshr-main-menu-nav"),
    minusHeight = topMenu.height(),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // so we can get a fancy scroll animation
    menuItems.on('click', function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop,
      }, 500, 'easeInExpo');
      e.preventDefault();
    });

    $(window).on('scroll',function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active-menu")
             .end().filter("[href=\\#"+id+"]").parent().addClass("active-menu");
       }
    });

  })();



  /*--------------------------------------------------------------
    09.  FRESHR - EASY PIE INIT WITH APPEAR
  --------------------------------------------------------------*/
  var chart = $(".chart");
  if(chart.exists()){
    chart.appear();
      $(document.body).on('appear', '.chart', function () {
        chart.each(function () {
           $(this).easyPieChart({
          easing: 'easeOutBounce',
          barColor:'#000',
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
      });
    });
  } // End exists


  /*--------------------------------------------------------------
    10.  FRESHR - SKILL DATA ANIMATION INIT WITH APPEAR
  --------------------------------------------------------------*/
  var number_animate = $(".number-animate");

  if(number_animate.exists()){
    number_animate.appear();
        $(document.body).on('appear', '.numeric-count', function () {
        number_animate.each(function () {
        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
      });             
    });
  } // End exists


  var number_percentage = $(".number-percentage");

  if(number_percentage.exists()){
    number_percentage.appear();
    $(document.body).on('appear', '.number-percentage-count', function () {
      number_percentage.each(function () {
        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
        var value = $(this).attr("data-value");
        var duration = $(this).attr("data-animation-duration");
        $(this).closest('.single_team_skill').find('.team_skill .skill_right').animate({width : value+'%'}, 4500);
      });
    });
  } // End exists



  var appear = $('.appear');
  appear.appear();
  $.fn.animateNumbers = function (stop, commas, duration, ease) {
    return this.each(function () {
      var $this = $(this);
      var start = parseInt($this.text().replace(/,/g, ""), 10);
      commas = (commas === undefined) ? true : commas;
      $({
        value: start
      }).animate({
          value: stop
        }, {
          duration: duration == undefined ? 500 : duration,
          easing: ease == undefined ? "swing" : ease,
          step: function () {
            $this.text(Math.floor(this.value));
            if (commas) {
              $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            }
          },
          complete: function () {
            if (parseInt($this.text(), 10) !== stop) {
              $this.text(stop);
              if (commas) {
                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
              }
            }
          }
        });
    });
  };


  /*--------------------------------------------------------------
    11.  FRESHR - OWL SLIDER INIT
  --------------------------------------------------------------*/

  var freshr_interest = $(".freshr-interest-in-section");
  if(freshr_interest.exists()){
      freshr_interest.owlCarousel({
          autoPlay : false,
          slideSpeed : 1000,
          items : 5,
          itemsDesktop : [1199,5],
          itemsDesktopSmall : [979,5],
          itemsTablet: [768,4],
          itemsMobile: [479,3],
          navigation : false,
          pagination: false
      });
  } // End exists

  var freshr_personal_photography = $("#freshr_personal_photography_slider");
  if(freshr_personal_photography.exists()){
      freshr_personal_photography.owlCarousel({
        autoPlay : false,
        slideSpeed : 1000,
        singleItem : true,
        navigation : false
      });
  } // End exists


  var freshr_testimonial = $("#freshr-testimonial-slider");
  if(freshr_testimonial.exists()){
      freshr_testimonial.owlCarousel({
        autoPlay : false,
        singleItem : true,
        navigation : false
      });
  } // End exists

  var freshr_blog_slider = $(".freshr-blog-slider-1");
  if(freshr_blog_slider.exists()){
      freshr_blog_slider.owlCarousel({
        autoPlay : false,
        singleItem : true,
        navigation : true,
        pagination: true
      });
  } // End exists


  /*--------------------------------------------------------------
    12.  FRESHR - Magnific - POPUP INIT
  --------------------------------------------------------------*/
  var freshr_single_portfolio_link = $(".freshr-single-portfolio-item a");
  if(freshr_single_portfolio_link.exists()){
    freshr_single_portfolio_link.magnificPopup({
      type:'image'
    });
  } // End exists

  var lightbox_intigrate_link = $(".lightbox-intigrate a");
  if(lightbox_intigrate_link.exists()){
    lightbox_intigrate_link.magnificPopup({
      type:'image'
    });
  } // End exists


  /*--------------------------------------------------------------
    13.  FRESHR - Portfolio Effect
  --------------------------------------------------------------*/
  var portfolio_effect = $("#da-thumbs > li ");
  if(portfolio_effect.exists()){
    portfolio_effect.each( function() { $(this).hoverdir(); } );
  } // End exists

  /*--------------------------------------------------------------
    14.  FRESHR - MAXIMAGE SLIDER WITH CYCLE 2 INIT
  --------------------------------------------------------------*/
  var maximage = $("#maximage");
  if(maximage.exists()){
    maximage.maximage({
      cycleOptions: {
          speed: 800,
          timeout: 5000
      }
    });
  } // End Exist
    

  /*--------------------------------------------------------------
    15.  FRESHR - SLY HORIZANTAL SCROLL INIT
  --------------------------------------------------------------*/
  var $frame  = $('#mg_countdown');
  if($frame.exists()){
    var $wrap   = $frame.parent();
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 3,
      scrollBy: 1,
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,
    });
  } // End Exist



  /*--------------------------------------------------------------
    16.  FRESHR - Flex Slider
  --------------------------------------------------------------*/
  var freshr_testimonial_wrapper = $(".freshr-testimonials-wrapper"),
      freshr_testimonial_container = $('.freshr-testimonials');

  if(freshr_testimonial_wrapper.exists()){
    freshr_testimonial_wrapper.flexslider({
      selector: ".freshr-testimonials > li",
      animation: "slide",
      controlNav: false,
      slideshow: false,
      smoothHeight: true,
      start: function(){
        freshr_testimonial_container.children('li').css({
          'opacity': 1,
          'position': 'relative'
        });
      }
    });
  } // End Exist

  /*--------------------------------------------------------------
    17.  FRESHR - Open and Close the testimonials modal page
  --------------------------------------------------------------*/
  var freshr_see_all = $(".freshr-see-all"),
      freshr_testimonial_all = $('.freshr-testimonials-all'),
      freshr_testimonial_close_btn = $(".freshr-testimonials-all .close-btn");

  if(freshr_see_all.exists()){
    freshr_see_all.on('click', function(){
      freshr_testimonial_all.addClass('is-visible');
    });
  } // End Exist  

  
  if(freshr_testimonial_close_btn.exists()){
    freshr_testimonial_close_btn.on('click', function(){
      freshr_testimonial_all.removeClass('is-visible');
    });
  } // End Exist


  /*--------------------------------------------------------------
    18.  FRESHR - Check if user has pressed 'Esc'
  --------------------------------------------------------------*/
  $(document).keyup(function(event){
    if(event.which=='27'){
      freshr_testimonial_all.removeClass('is-visible');  
    }
  });
    
  /*--------------------------------------------------------------
    19.  FRESHR - Build the grid for the testimonials modal page
  --------------------------------------------------------------*/
  var freshr_testimonial_all_wrapper = $(".freshr-testimonials-all-wrapper");
  if(freshr_testimonial_all_wrapper.exists()){
    freshr_testimonial_all_wrapper.children('ul').masonry({
        itemSelector: '.freshr-testimonials-item'
    });
  } // End Exist
    


  /*--------------------------------------------------------------
    20.  FRESHR CONTACT FORM INIT
  --------------------------------------------------------------*/
  function valid_email_address(email) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(email);
  } 

  var freshr_name = $('#freshr_name'),
      freshr_email = $('#freshr_email'),
      freshr_subject = $('#freshr_subject'),
      freshr_message = $('#freshr_message'),
      freshr_mail_fail = $('#mail_fail'),
      freshr_mail_success = $('#mail_success'),
      freshr_submit_button = $('#freshr_submit_btn'),
      freshr_field_error_class = 'filed_error',
      freshr_contactForm = $('#freshr-contactForm');

  freshr_name.on('input', function() {
    var input=$(this);
    var is_name=input.val().length >= 2;
    if(is_name){
      $(this).parent().removeClass(freshr_field_error_class).addClass("filed_ok");
    }
    else{
      $(this).parent().removeClass('filed_ok').addClass("filed_error");
    }
  });
  freshr_email.on('input', function() {
    var input=$(this);
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    var is_email=re.test(input.val());
    if(is_email){
      $(this).parent().removeClass(freshr_field_error_class).addClass("filed_ok");
    }
    else{
      $(this).parent().removeClass('filed_ok').addClass("filed_error");
    }
  });
  freshr_subject.on('input', function() {
    var input=$(this);
    var is_subject=input.val().length >= 2;
    if(is_subject){
      $(this).parent().removeClass(freshr_field_error_class).addClass("filed_ok");
    }
    else{
      $(this).parent().removeClass('filed_ok').addClass("filed_error");
    }
  });
  freshr_message.on('input', function() {
    var input=$(this);
    var is_message=input.val().length >= 5;
    if(is_message){
      $(this).parent().removeClass(freshr_field_error_class).addClass("filed_ok");
    }
    else{
      $(this).parent().removeClass('filed_ok').addClass("filed_error");
    }
  });

  freshr_contactForm.on('submit',function(e){
          
    //Stop form submission & check the validation
    e.preventDefault();

    
    // Variable declaration
    var error       = false,
      name          = freshr_name.val(),
      email         = freshr_email.val(),
      subject       = freshr_subject.val(),
      message       = freshr_message.val(),
      mail_fail     = freshr_mail_fail,
      mail_success  = freshr_mail_success,
      submit_btn    = freshr_submit_button;
      
    // Form field validation
      if(name.length <= 1){
          var error = true;
          freshr_name.parent().addClass(freshr_field_error_class);
      }else{
          freshr_name.parent().removeClass(freshr_field_error_class);
      }
      if(email.length <= 6 || email.indexOf('@') == '-1'){
          var error = true;
          freshr_email.parent().addClass(freshr_field_error_class);
      }else{
          freshr_email.parent().removeClass(freshr_field_error_class);
      }
      if(subject.length == 0){
          var error = true;
          freshr_subject.parent().addClass(freshr_field_error_class);
      }else{
          freshr_subject.parent().removeClass(freshr_field_error_class);
      }
      if(message.length == 0){
          var error = true;
          freshr_message.parent().addClass(freshr_field_error_class);
      }else{
          freshr_message.parent().removeClass(freshr_field_error_class);
      }

      if (error == true) {
        $(mail_success).fadeOut(500);
        $(mail_fail).slideDown(800);
      };

      // If there is no validation error, next to process the mail function
      if(error == false){

          $('i.freshr-submit-spinner').fadeIn(350);
          $(mail_success).hide();
          $(mail_fail).hide();
          $.ajax({
          url: $(this).attr('action'),
          data: $(this).serialize(),
          type: 'POST',
          success: function() {
            $(mail_fail).fadeOut(500);
            $(mail_success).slideDown(800);
            $('.single_contact_column input, .single_contact_column textarea').val('');
            $('.filed_error').removeClass(freshr_field_error_class);
            $('.filed_ok').removeClass('filed_ok');
            $('i.freshr-submit-spinner').fadeOut('fast');
          },
          error: function() {
            $(mail_success).fadeOut(500);
            $(mail_fail).slideDown(800);
            $('i.freshr-submit-spinner').fadeOut('fast');
          }
          });

      }
  });


  /*--------------------------------------------------------------
    21.  FRESHR - GOOGLE MAP INIT
  --------------------------------------------------------------*/

  var map = $("#map_canvas");
  if(map.exists()){
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            zoom: 11,
            scrollwheel: false,
            disableDefaultUI: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        };
        var contentString = '<div id="content">' +
          '<div id="myDiv">' +
          '</div>' +
          '<h3 id="heading">COLORADO</h3>' +
          '<div id="bodyContent">' +
          '<p>PIXIEFY THEMES ' +
          '2746 Scheuvront Drive ' +
          '<a href="#">www.pixiefy.com </a>' +
          'Denver, CO 80202 . </p>' +
          '</div>' +
          '</div>';

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map_canvas');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            icon: "images/marker.png",
            title: 'freshr'
        });
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 280
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

    }
  }



}); // End Document Ready



$( window ).on('load',function() {

  /*--------------------------------------------------------------
    22.  FRESHR - Video Header Section INIT
  --------------------------------------------------------------*/
  var youtube_video = $('#mg_youtube_video'),
      freshr_hero = $('#freshr-hero');

  if (!device.tablet() && !device.mobile()) {
      youtube_video.YTPlayer({
          fitToBackground: true,
          videoId: 'BsekcY04xvQ'
      });
  } else {
      freshr_hero.addClass('big-background-default-image');
  }

  /*--------------------------------------------------------------
    23.  FRESHR - PRELOADER INIT
  --------------------------------------------------------------*/

  var freshr_preloader = $("#freshr-preloader")
  if(freshr_preloader.exists()){
    freshr_preloader.delay(600).fadeOut(500);
  } // End exists

  var freshr_body = $("body");
  if(freshr_body.exists()){
    freshr_body.css({ 'overflow' : 'visible'});
  } // End exists

  var freasr_scroll_down = $(".freshr-scroll-down");
  if(freasr_scroll_down.exists()){
    freasr_scroll_down.addClass('animated');
  } // End exists


 /*--------------------------------------------------------------
    24.  FRESHR - Banner Height Init
  --------------------------------------------------------------*/
  freshr_banner_height();


  /*--------------------------------------------------------------
    25.  FRESHR - About section profile Height Init
  --------------------------------------------------------------*/
  freshr_about_me_profile_height();

  /*--------------------------------------------------------------
    26.  FRESHR - FILTER ITEM INIT WITH ISOTOPE
  --------------------------------------------------------------*/

  var $container = $('#da-thumbs'),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 4;
      } else if (w > 900) {
        columnNum  = 3;
      } else if (w > 600) {
        columnNum  = 3;
      } else if (w > 300) {
        columnNum  = 2;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.freshr-single-portfolio-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/item-w(\d)/),
          multiplier_h = $item.attr('class').match(/item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.7 : columnWidth*0.7;
        $item.css({
          width: width,
          height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.freshr-single-portfolio-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 4
        }
      });
    };
  isotope();
  var $optionSets = $('.freshr-portfolio-nav'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.on('click', function(){
  var $this = $(this);
    var $optionSet = $this.parents('.freshr-portfolio-nav');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
      

}); //End Window Load


$(window).on('resize', function(){
  /*--------------------------------------------------------------
    27. FRESHR - Banner Height (Resize) Init
  --------------------------------------------------------------*/
    freshr_banner_height();

  /*--------------------------------------------------------------
    28.  FRESHR - About section profile Height (Resize) Init
  --------------------------------------------------------------*/
  freshr_about_me_profile_height();


}); // End Window Resize




$(window).on('scroll', function () {

  /*--------------------------------------------------------------
    29.  FRESHR - COUNTER ANIMATION INIT
  --------------------------------------------------------------*/
  var y = $(document).scrollTop(),
      counter = $("#mg_countdown");

  if (y >= 200) {
      counter.removeClass('freshr-hide-counter');
  } else {
      counter.addClass('freshr-hide-counter');
  }

}); // End Window Scroll






}(jQuery));
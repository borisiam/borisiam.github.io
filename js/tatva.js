// Tatva - Javascript Document

// Use strict

(function(){
  "use strict";

  //On Window Load

  $(window).load(function(){

      //Page Loader

      $('.page-loader').delay(800).fadeOut('slow');

      //Page Loader Ends

      $(window).trigger("resize");


      //Detect Mobile Device
    
      var mobileTest;

      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
          mobileTest = true;
          $("html").addClass("mobile");
        }  

      else{
           mobileTest = false;
           $("html").addClass("no-mobile");
           }
    
      //Detect Mobile Device Ends

      
      //Parallax

      if (($(window).width() >= 1024) && (mobileTest == false)){
        
          $('.parallax-one').parallax('50%',0.3);
            
         }

      //Parallax Ends
      

      //Background Video

      if(mobileTest==false){

         $('.video-section').addClass('bg-yt-video');

         $(".bg-yt-video").YTPlayer({

              autoPlay:true, 
              mute:true, 
              opacity:1,
              showControls:false,
              optimizeDisplay:true,
              startAt:4,
              showYTLogo:false,
              stopMovieOnBlur: true, 
              quality:'hd720',
              gaTrack:false

             });

      }

      //Background Video Ends
      
  });

  //On Window Load


  //Document Ready

$(document).ready(function(){


    $(window).trigger('resize'); 

     // Full Height
    
     (function(){

        $(window).resize(function(){

            $(".full-height").height($(window).height()+2);

        });

     })();

     // Full Height Ends


     // Navigation

     (function(){

        var  cnw = $(".classic-nav.white"),
             cnb = $(".classic-nav.black"),
             cns = "classic-nav-scrolled",
             wh = $(window).height();

        $(window).scroll(function() {

            if( $(this).scrollTop() > 200 ){

                   cnw.addClass(cns);
                   cnb.addClass(cns);
                   cnw.addClass('black');
                   cnb.addClass('white');

            } else{
                   cnw.removeClass(cns);
                   cnw.removeClass('black');
                   cnb.removeClass(cns);
                   cnb.removeClass('white');
                  }

        });

        // Classic Nav Search Box

        $('.classic-nav .open-search-box').on('click',function(){

            $('.classic-nav .nav-menu').fadeOut(400);
            $('.classic-nav .search-div').fadeIn(400);
            return false;

        });

        $('.classic-nav .close-search-box').on('click',function(){

            $('.classic-nav .nav-menu').fadeIn(400);
            $('.classic-nav .search-div').fadeOut(400);
            return false;

        });

        // Classic Nav Search Box Ends


        // Sidebar Nav Search Box

        $('#sidr .open-search-box').on('click',function(){

            $('#sidr .navigation-wrapper').fadeOut(200);
            $('#sidr .search-div').fadeIn(200);
            $('#sidr .search-div').css('visibility','visible');
            return false;

        });

        $('#sidr .close-search-box').on('click',function(){

            $('#sidr .navigation-wrapper').fadeIn(200);
            $('#sidr .search-div').fadeOut(200);
            return false;

        });

        // Sidebar Nav Search Box Ends


        // Full Screen Navigation One Search Box

        $('.full-screen-nav-two .open-search-box').on('click',function(){

            $('.full-screen-nav-two .navigation-wrapper').fadeOut(200);
            $('.full-screen-nav-two .search-div').fadeIn(200);
            return false;

        });

        $('.full-screen-nav-two .close-search-box').on('click',function(){

            $('.full-screen-nav-two .navigation-wrapper').fadeIn(200);
            $('.full-screen-nav-two .search-div').fadeOut(200);
            return false;

        });

        // Full Screen Navigation One Search Box Ends


        // Full Screen Navigation Two Search Box

        $('.full-screen-nav-one .open-search-box').on('click',function(){

            $('.full-screen-nav-one .navigation-wrapper').fadeOut(200);
            $('.full-screen-nav-one .search-div').fadeIn(200);
            return false;

        });

        $('.full-screen-nav-one .close-search-box').on('click',function(){

            $('.full-screen-nav-one .navigation-wrapper').fadeIn(200);
            $('.full-screen-nav-one .search-div').fadeOut(200);
            return false;

        });

        // Full Screen Navigation Two Search Box Ends

     })();


     //Navigation Ends

     
     //Sidebar Navigation

    (function(){
      
      if( $('#nav-trigger').hasClass('nav-trigger-right')){
          var f="right";
        }
        else{
          var f="left";
        }

      $('#nav-trigger').sidr({
                             side: f
                             });
    
    })();
    
    //Sidebar Navigation Ends

    // Responsive Classic Navigation
     
     (function(){
      
        $('.nav-mobile-trigger').on('click',function(){

            $('.classic-nav .nav-content').fadeIn('slow');
            return false;
   
        });

        $('.nav-mobile-close').on('click',function(){

            $('.classic-nav .nav-content').fadeOut('slow');
            return false;

        });

     })();   
 
    // Responsive Classic Navigation Ends


    // Classic Navigation - One Page

     (function(){
  
        $('.classic-nav .nav-content .one-page-nav li a').on('click',function(){

            var sectionLink=$(this).attr('data-section');

            $('.classic-nav .nav-content').fadeOut(200);

            $('html,body').animate({scrollTop:$('#'+sectionLink).offset().top - 0}, 750); 

            $('body').css('overflow','scroll');    

        });

     })();


    // Classic Navigation - One Page Ends


    //One Page Sidebar Navigation
    
    (function(){
  
        $('#sidr .one-page-nav li a').on('click',function(){

            var sectionLink=$(this).attr('data-section');

            $('html,body').animate({scrollTop:$('#'+sectionLink).offset().top - 0}, 750);

        });

     })();

    //One Page Sidebar Navigation Ends


     // Full Screen Navigation - One Page

     (function(){
  
        $('.full-screen-nav-one .one-page-nav li a').on('click',function(){

            var sectionLink=$(this).attr('data-section');

            $('.full-screen-nav-one').fadeOut(200);

            $('html,body').animate({scrollTop:$('#'+sectionLink).offset().top - 0}, 750);  

            $('body').css('overflow','scroll');   

        });

     })();


    // Full Screen Navigation - One Page Ends
    
    // Full Screen Navigation Two - One Page

    (function(){
  
        $('.full-screen-nav-two .one-page-nav li a').on('click',function(){

            var sectionLink=$(this).attr('data-section');

            $('.full-screen-nav-two').fadeOut(200);

            $('html,body').animate({scrollTop:$('#'+sectionLink).offset().top - 0}, 750);     

            $('body').css('overflow','scroll');

        });

    })();
    
    // Full Screen Navigation Two - One Page Ends

    // Accordions

    (function(){

         $('.accordion .accordion-content.active').prev('.title').addClass('active-title');

         $('.accordion').find('.title').on('click',function(){

              //Expand or collapse this panel

              $(this).next().slideToggle('fast');

              $(this).toggleClass('active-title');

              //Hide the other panels

              $(this).find(".accordion-content").not($(this).next()).slideUp('fast');

         });

    
         $('.accordion-toggle .accordion-content.active').prev('.title').addClass('active-title');

         $('.accordion-toggle').find('.title').on('click',function(){
             
               $(this).toggleClass('active-title');

               $(this).next().slideToggle('fast');

               $('.accordion-toggle').find(".accordion-content").not($(this).next()).slideUp('fast');

               $('.accordion-toggle').find(".title").not($(this)).removeClass('active-title');

         });

    })();

    // Accordions End


     // Tabs

     (function(){

         var tabItems = $('.tabs-navigation a'),
             tabContentWrapper = $('.tabs-content');

         tabItems.on('click', function(event){

            event.preventDefault();
            var selectedItem = $(this);

            if( !selectedItem.hasClass('selected') ) {

                var selectedTab = selectedItem.data('content'),
                selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
                slectedContentHeight = selectedContent.innerHeight();     
                tabItems.removeClass('selected');
                selectedItem.addClass('selected');
                selectedContent.addClass('selected').siblings('li').removeClass('selected');
                //animate tabContentWrapper height when content changes 
                tabContentWrapper.animate({
                'height': slectedContentHeight
                }, 200);

            }

         });

         //hide the .tabs::after element when tabbed navigation has scrolled to the end (mobile version)

         checkScrolling($('.tabs nav'));

         $(window).on('resize', function(){

             checkScrolling($('.tabs nav'));
             tabContentWrapper.css('height', 'auto');

         });

         $('.tabs nav').on('scroll', function(){ 

              checkScrolling($(this));

         });

         function checkScrolling(tabs){

              var totalTabWidth = parseInt(tabs.children('.tabs-navigation').width(),13),
              tabsViewport = parseInt(tabs.width(),13);

              if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {

                 tabs.parent('.tabs').addClass('is-ended');

              } else{
                   tabs.parent('.tabs').removeClass('is-ended');
                   }

         }

     })();

     // Tabs Ends

     // Background Image.

     (function(){

          var bg_link = $(".bg-link");

          bg_link.each(function(indx){
        
            if ($(this).attr("data-bg-link")){
              $(this).css("background-image", "url(" + $(this).data("bg-link") + ")");
            }

          });

     })();

     // Background Image Ends


     // MagnificPopup Lightbox

     (function(){

       $('.lightbox').magnificPopup({
            delegate: '.item:visible > a',
            type: 'image',
            gallery:{
                    enabled:true,
                    removalDelay: 500,
                    mainClass: 'mfp-fade'
                    }
            });
      })();

     // Magnific Popup Lightbox Ends


     // Thumbnail Slider One

     (function(){

        $(window).resize(function(){

          if($(window).width()<480){

            var fh=80;
            var fw=80;

          }

          else{
            
            var fh=140;
            var fw=140;

          }
             
          $('#thumbnail-slider-one').fotorama({

            thumbHeight:fh,
            thumbWidth:fw,
            nav: 'thumbs',
            width:'100%',
            height:'100%'

          });


        });

     })();

     // Thumbnail Slider One Ends

     
     // Thumbnail Slider Two

     (function(){

        $(window).resize(function(){

           if($(window).width()<480){

              var fh2=80;
              var fw2=80;

             }

             else{
            
               var fh2=130;
               var fw2=130;
             }
            
           $('#thumbnail-slider-two').fotorama({

              thumbHeight:fh2,
              thumbWidth:fw2,
              nav: 'thumbs',
              width:'100%',
              height:'100%',
              transition:'dissolve'

           });

        });

     })();

     // Thumbail Slider Two Ends



     //Blog Masonry

     (function(){

         $(window).on('resize',function(){

             var blog_item = $("#blog-masonry");

             blog_item.imagesLoaded(function(){

               blog_item.isotope({

                   itemSelector: '.blog-item'

               });

             });

         });

     })();

     //Blog Masonry Ends



     // Blog Masonry Media Slider

     (function(){

         $('.blog-mas-slider').owlCarousel({

              nav:true,       
              navText:['<i class="fa fa-angle-left link"></i>','<i class="fa fa-angle-right  link"></i>'],
              items:1,
              loop:true,
              autoplay:true,
              autoplayTimeout:4000, 
              navigation:false,
              autoHeight:true,
              singleItem:true,
              slideSpeed:400,
              dots:false,
              ControlsClass:false

         });

     })();

     // Blog Masonry Media Slider Ends



     // Main Intro Slider - Owl Carousel

     (function(){

         $('#main-intro-slider-two').owlCarousel({

             nav:true,
             items:1,
             loop:true,
             autoplay:false,
             autoHeight:true,
             singleItem:true,
             slideSpeed:400,
             ControlsClass:'true',
             navText:['<i class="fa link fa-angle-left"></i>','<i class="fa link fa-angle-right"></i>'],
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
             navigation:true,
             dots:true

         });

         $('#main-intro-slider-three').owlCarousel({

             nav:false,
             items:1,
             loop:true,
             autoplay:true,
             autoplayTimeout:3000,
             autoHeight:true,
             singleItem:true,
             slideSpeed:400,
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
             navigation:false,
             dots:false,

         });

     })();

     // Main Intro Slider - Owl Carousel Ends
     

     // Filterable Portfolio

     (function(){

         var filters = 0;
         var gallery = $("#gallery");

         (function($){     
    
               gallery.imagesLoaded(function(){

                   gallery.isotope({

                      itemSelector: '.item',
                      filter: filters,
                      transitionDuration: '0.8s'

                   });

               });
        
               $(".filters").on('click',function(){

                    $(".filters").removeClass("active");

                    $(this).addClass("active");
                    filters = $(this).attr('data-filter');
            
                    gallery.isotope({

                       itemSelector: '.item',              
                       filter: filters,
                       transitionDuration: '0.6s'

                    });

                    return false;

               });
        
         })(jQuery);

     })();
     
     // Filterable Portfolio
    


     //Intro Slider Three

     (function(){
        
        $('#intro-slider-three').owlCarousel({
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false,
                }
            }
        });
         
     })();


     //Intro-Slider Three - Owl Carousel Ends


     // Intro Slider Three (Margin) - Owl Carousel
     
     (function(){

        $('#intro-slider-three-margin').owlCarousel({
            loop:true,
            margin:20,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:false,
                    dots:false
                }
            }
        });

     })();

     // Intro Slider Three (Margin) - Owl Carousel Ends
  
 
     // Blog Media Slider

     (function(){

         $('.media-slider').owlCarousel({

              nav:true,
              navText:['<i class="icon-arrow-left link"></i>','<i class="icon-arrow-right link"></i>'],
              items:1,
              loop:true,
              autoplay:true,
              autoplayTimeout:4000, 
              navigation:true,
              autoHeight:true,
              singleItem:true,
              slideSpeed:400,
              dots:true,
              ControlsClass:'true'

         });

     })();

     // Blog Media Slider Ends
     
     // Facts Section
     
     (function(){

       $('.fact-number').counterUp({

            delay: 10,
            time: 2000
            
       });

     })();

     // Fects Section Ends


     // Testimonials

     (function(){
        
        $('#testimonials').owlCarousel({

              items:1,    
              autoplay:true,
              autoplayTimeout:4000,
              loop:true,
              dots:true,
              dotsEach:true,
              controlsClass:true

         });
         
      })();

     // Testimonials End


     // Fade In on Link hover

     (function(){

        $('.link').mouseenter(function() {

          $(this).fadeTo(300,0.5);

        });

        $('.link').mouseleave(function() {

           $(this).fadeTo(300,1);

        });
    
     })();

     // Fade In on Link hover


     // Inline Lightbox

     (function(){

          $('.open-popup-link').magnificPopup({

             type:'inline',
             midClick: true,
             removalDelay: 500,
             mainClass: 'mfp-fade'

          });

     })();

     // Inline Lightbox Ends

     

     
    // Clients Slider
    
    (function(){
        
        $('#clients-slider').owlCarousel({
              items:5,
              dots:false,
              responsiveClass:true,
              responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
              },
              loop:true,
              autoplay:2000
             });

    })();

    // Clients Slider Ends


    // Footer Instagram
    
    (function(){
        
        $('#insta-feed-footer').owlCarousel({
              items:10,
              dots:false,
              responsiveClass:true,
              responsive:{
                0:{
                    items:4
                },
                600:{
                    items:8
                },
                1000:{
                    items:10
                }
              },
              loop:true,
              autoplay:2000
             });

    })();

    // Footer Instagram Ends
     
    
    // Full Screen Navigation

    (function(){

         $('#open-full-screen-nav').on('click',function(){

            $('.full-screen-nav-one').fadeIn('fast');
            $('.full-screen-nav-two').fadeIn('fast');
            $('body').css('overflow','hidden');

            return false;

         });
          
         $('#close-full-screen-nav').on('click',function(){
            $('.full-screen-nav-one').fadeOut('fast');
            $('.full-screen-nav-two').fadeOut('fast');
            $('body').css('overflow','auto');

            return false;

         });
            
    })();

    // Full Screen Navigation Ends


     
     // Creative Sliders  Owl Carousle
    
    (function(){
        
        $('#creative-slider-three-gutter').owlCarousel({
              margin:10,
              nav:true,
              navText:['<i class="icon-arrow-left link"></i>','<i class="icon-arrow-right link"></i>'],
              dots:false,
              responsiveClass:true,  
              loop:true,
              autoplay:false,
              responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
              }
             });

        $('#creative-slider-three').owlCarousel({
              nav:true,
              navText:['<i class="icon-arrow-left link"></i>','<i class="icon-arrow-right link"></i>'],
              dots:false,
              responsiveClass:true,  
              loop:true,
              autoplay:false,
              responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
              }
             });

        $('#creative-slider-two').owlCarousel({
              nav:true,
              margin:80,
              navText:['<i class="icon-arrow-left link"></i>','<i class="icon-arrow-right link"></i>'],
              dots:false,
              responsiveClass:true,  
              loop:true,
              autoplay:false,
              items:3,
              responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2,
                    margin:20
                },
                1050:{
                    items:3,
                    margin:20
                },
                1100:{
                    items:3,
                    margin:80
                }
              }
             });

        $('#creative-slider-one').owlCarousel({
              nav:true,
              margin:100,
              navText:['<i class="icon-arrow-left link"></i>','<i class="icon-arrow-right link"></i>'],
              dots:false,
              responsiveClass:true,  
              loop:true,
              autoplay:false,
              items:2,
              responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1050:{
                    items:1
                },
                1100:{
                    items:2
                }
              }
             });

    })();

    // Creative Slider Owl Carousel Ends

    // Creative Slider Lightbox

    (function(){

          $('.home-lightbox').magnificPopup({
            delegate: 'a.slide-block',
            type: 'image',
            gallery:{
                    enabled:true,
                    removalDelay: 500,
                    mainClass: 'mfp-fade'
                    }
          });

          $('.home-lightbox-two').magnificPopup({
            delegate: 'a.slide-media',
            type: 'image',
            gallery:{
                    enabled:true,
                    removalDelay: 500,
                    mainClass: 'mfp-fade'
                    }
          });

    })();

    // Creative Slider Lightbox

    // Full page Slider

    (function(){

      if( $('#full-page-slider').hasClass('scroll-bar')){
          var scroll_bar=true;
        }

        else{
          var scroll_bar=false;
        }

      $('#full-page-slider').fullpage({

          sectionSelector: '.full-page-item',
          scrollBar:scroll_bar,
          navigation: true,
          navigationPosition: 'right'

      });

    })();

    // Full Page Slider Ends

    // Map Container Visibility
    
    (function(){
        
        $('#open-map').on('click',function(){

              $('.full-screen-map-container').css({

                    'z-index':4000,
                    'position':'fixed'

              });

              $('.full-screen-map-container').addClass('opacity');

              return false;
        });

        $('#close-map').on('click',function(){

            $('.full-screen-map-container').css({

                'z-index':-100,
                'position':'absolute'

            });

            $('.full-screen-map-container').removeClass('opacity');
  
            return false;

        });
            
    })();

    // Map Container Visibility Ends

    // Shipping Address Visibility

    (function(){

        $('input[name=ship-location]').on('click',function(){

            if( $('input[name=ship-location]').is(':checked') ){
                $('.shipping-info-block').addClass('visible');
            }

            else{

                 $('.shipping-info-block').removeClass('visible');
            }

        });

    })();

    // Shipping Address Visibility Ends


    // Mailchimp Subscribtion Form

    (function(){

    $('#mailchimp-form').ajaxChimp({
        callback: mailchimpCallback,
        url: "http://mailchimp-post-url.com" //Replace this link with your mailchimp post URL 
    });

    function mailchimpCallback(resp) {

        $('#subscribe-result').fadeIn();

        if (resp.result === 'success') {

            $('#subscribe-result .sub-error').fadeOut('slow').html('');
            $('#subscribe-result .sub-success').html(resp.msg).fadeIn('slow');
        }
        if (resp.result === 'error') {

            
            $('#subscribe-result .sub-success').fadeOut('slow').html('');
            $('#subscribe-result .sub-error').html(resp.msg).fadeIn('slow');
            
        }
    }

    })();

    // Mailchimp Subscribtion Form Ends
     
  });

  //Document Ready Ends
  

})();

// Use of strict Ends.


// On Scroll Animations

(function(){

  wow = new WOW(
                  {

                    animateClass:'animated',
                    offset:100,
                    mobile: false, 
                    live:true

                  }

                );

  wow.init();

})();

// On Scroll Animation End


 

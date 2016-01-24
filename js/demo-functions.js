$(document).ready(function(){

    (function(){

         var filters = $('.one-demo');
         var gallery = $("#demo-gallery");

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
     

    });
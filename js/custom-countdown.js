$(document).ready(function(){

      //Countdown 

      (function(){

         var time = new Date();

         time = new Date(time.getFullYear() + 1, 1 - 1, 26);

         $('#time').countdown({until: time,compact:true});

      })();

      //Countdown Ends

});
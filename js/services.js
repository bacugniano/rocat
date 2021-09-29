$(document).ready(function(){
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    })

    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

  });
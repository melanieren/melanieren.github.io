/* Initialize AOS */
AOS.init();

/* Back to Top */
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

/* Interest buttons */
$("#interest1").click(function(){
  $("#interest1Content").slideToggle();
  if ($(this).text() === '+') {
      $(this).text('–');
  } else {
      $(this).text('+');
  }
});

$("#interest2").click(function(){
  $("#interest2Content").slideToggle();
  if ($(this).text() === '+') {
      $(this).text('–');
  } else {
      $(this).text('+');
  }
});

$("#interest3").click(function(){
  $("#interest3Content").slideToggle();
  if ($(this).text() === '+') {
      $(this).text('–');
  } else {
      $(this).text('+');
  }
});
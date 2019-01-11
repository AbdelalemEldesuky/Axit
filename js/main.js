$(function(){
'use strict'
$(window).scroll(function(){

  var navbar =$('.navbar');
  if($(window).scrollTop()>= navbar.height()){
     navbar.addClass('scrolled');
  }
  else{
     navbar.removeClass('scrolled');
  }
});
/*start tabs section*/
$('.tab-switch li').click(function(){
  $(this).addClass('selected').siblings().removeClass();

  $('.tabs-section .tabs-content > div').hide();
$('.tabs-section .imgs-content >div').hide();
  $('.'+$(this).data('class')).show();

});
/*end tabs section*/

});

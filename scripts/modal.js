$(function () {
  $('.humbuggerBtn').click(function () {
    
    if($('.menuBtn').hasClass('active')){
      $('.menuBtn').removeClass('active');
    } else {
      $('.menuBtn').addClass('active');
    }
    
    if($('.navigation,.navigationList').hasClass('active')){
      $('.navigation,.navigationList').removeClass('active');
    } else {
      $('.navigation,.navigationList').addClass('active');
    }
  });
  
  $('.fa-times').click(function () {
    
    if($('.navigation,.navigationList').hasClass('active')){
      $('.navigation,.navigationList').removeClass('active');
    } else {
      $('.navigation,.navigationList').addClass('active');
    }

    if($('.menuBtn').hasClass('active')){
      $('.menuBtn').removeClass('active');
    } else {
      $('.menuBtn').addClass('active');
    }

  });


});
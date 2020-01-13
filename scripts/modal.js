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

  ityped.init(document.querySelector("#ityped"), {
    strings: ['and more...'],
    typeSpeed:  150,
    backSpeed:  100,
    startDelay: 500,
    backDelay:  5000,
})


});
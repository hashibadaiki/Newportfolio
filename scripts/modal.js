$(function () {
  $('.humbuggerBtn').click(function () {
    
    if($('.menuBtn').hasClass('active')){
      $('.menuBtn').removeClass('active');
    } else {
      $('.menuBtn').addClass('active');
    }
    
    if($('.navigation').hasClass('active')){
      $('.navigation').removeClass('active');
    } else {
      $('.navigation').addClass('active');
    }
    
    if($('.navigationList').hasClass('active')){
      $('.navigationList').removeClass('active');
    } else {
      $('.navigationList').addClass('active');
    }

    
  });
    
  $('.fa-times').click(function () {
    
    $('.navigation,.navigationList').removeClass('active');

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
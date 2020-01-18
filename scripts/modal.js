$(function () {
  $('.zdo_drawer_button').click(function () {
    
    if($('.zdo_drawer_button').hasClass('active')){
      $('.zdo_drawer_button').removeClass('active');
    } else {
      $('.zdo_drawer_button').addClass('active');
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
  
  ityped.init(document.querySelector('#iTyped'), {
    strings: ['and more...'],
    typeSpeed:  150,
    backSpeed:  100,
    startDelay: 500,
    backDelay:  5000,
})

var portfolio = $('#goPortfolio').offset().top-100;

  $('#portfolioJs').click(function(){
    $('html,body').animate({scrollTop: portfolio},400,);

    if($('.zdo_drawer_button').hasClass('active')){
      $('.zdo_drawer_button').removeClass('active');
    } else {
      $('.zdo_drawer_button').addClass('active');
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

var about = $('#goAbout').offset().top-100;

  $('#aboutJs').click(function(){
    $('html,body').animate({scrollTop: about},800,);

    if($('.zdo_drawer_button').hasClass('active')){
      $('.zdo_drawer_button').removeClass('active');
    } else {
      $('.zdo_drawer_button').addClass('active');
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

var contact = $('#iTyped').offset().top-100;

  $('#contactJs').click(function(){
    $('html,body').animate({scrollTop: contact},1200,);

    if($('.zdo_drawer_button').hasClass('active')){
      $('.zdo_drawer_button').removeClass('active');
    } else {
      $('.zdo_drawer_button').addClass('active');
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
  
  var $top = $('html').offset().top;

    $('#topJs__wide').click(function(){
      $('html,body').animate({scrollTop: $top},800,);
    });
    $('#portfolioJs__wide').click(function(){
      $('html,body').animate({scrollTop: portfolio},800,);
    });
    $('#aboutJs__wide').click(function(){
      $('html,body').animate({scrollTop: about},800,);
    });
    $('#contactJs__wide').click(function(){
      $('html,body').animate({scrollTop: contact},800,);
    });

    $(function () {
      var set = 120;
      var boxTop = new Array;
      var current = -1;
      $('.position-now').each(function (i) {
        boxTop[i] = $(this).offset().top;
      });
      changeBox(0);
      $(window).scroll(function () {
        scrollPosition = $(window).scrollTop();
        for (var i = boxTop.length - 1; i >= 0; i--) {
          if ($(window).scrollTop() > boxTop[i] - set) {
            changeBox(i);
            break;
          }
        };
      });

      function changeBox(secNum) {
        if (secNum != current) {
          current = secNum;
          secNum2 = secNum + 1;
          $('.navigation.wide li div').removeClass('link-current');
    
          if (current == 0) {
            $('#topJs__wide').addClass('link-current');
          } else if (current == 1) {
            $('#portfolioJs__wide').addClass('link-current');
          } else if (current == 2) {
            $('#aboutJs__wide').addClass('link-current');
          }
          else if (current == 3) {
            $('#contactJs__wide').addClass('link-current');
          }
          }
    
        }
    });

    });
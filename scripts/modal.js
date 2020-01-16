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

var about = $('#goAbout').offset().top-100;

  $('#aboutJs').click(function(){
    $('html,body').animate({scrollTop: about},800,);

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

var contact = $('#iTyped').offset().top-100;

  $('#contactJs').click(function(){
    $('html,body').animate({scrollTop: contact},1200,);

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
      var set = 100;//ウインドウ上部からどれぐらいの位置で変化させるか
      var boxTop = new Array;
      var current = -1;
      //各要素の位置
      //position-nowは場所を取得したい対象の要素に付ける
      $('.position-now').each(function (i) {
        boxTop[i] = $(this).offset().top;
      });
      //最初の要素にclass="position-now"をつける
      changeBox(0);
      //スクロールした時の処理
      $(window).scroll(function () {
        scrollPosition = $(window).scrollTop();
        for (var i = boxTop.length - 1; i >= 0; i--) {
          if ($(window).scrollTop() > boxTop[i] - set) {
            changeBox(i);
            break;
          }
        };
      });
      //ナビの処理
      function changeBox(secNum) {
        if (secNum != current) {
          current = secNum;
          secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
          $('.navigation.wide li div').removeClass('link-current');
    
          //位置によって個別に処理をしたい場合　
          if (current == 0) {
            $('#topJs__wide').addClass('link-current');
            // 現在地がsection1の場合の処理
          } else if (current == 1) {
            $('#portfolioJs__wide').addClass('link-current');
            // 現在地がsection2の場合の処理
          } else if (current == 2) {
            // 現在地がsection3の場合の処理
            $('#aboutJs__wide').addClass('link-current');
          }
          else if (current == 3) {
            // 現在地がsection4の場合の処理
            $('#contactJs__wide').addClass('link-current');
          }
          }
    
        }
    });
    });
    // $(function () {
    //   $('a[href^="#"]').click(function () {
    //     var adjust = -100;
    //     var speed = 500;
    //     var href = $(this).attr("href");
    //     var target = $(href == "#" || href == "" ? 'html' : href);
    //     var position = target.offset().top + adjust;
    //     $("html, body").animate({ scrollTop: position }, speed, "swing");
    //     return false;
    //   });
    // });
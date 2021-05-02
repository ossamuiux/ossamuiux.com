$(document).ready(function (){
  // 탭메뉴
  var gnbUI = function () {
    // 탭메뉴 - 메뉴
    $('.gnb>li>a').on('click', function () {
      $(this).parent().stop().toggleClass('on');
      $(this).parent().siblings().removeClass('on');

      $(this).siblings().stop().slideToggle(300);
      $(this).parent().siblings().find('.depth2').slideUp(300);
    });

    // 탭메뉴 터치액션
    $('#header .btn_tabmenu').on('click', function () {
      $('#header .gnb_wrap').addClass('active');
      $('#header .dimm').fadeIn(300);
      $('body').addClass('fixed');
    });


    // 탭메뉴 닫기액션
    $('.top_gnb .tab_menu_close, #header .dimm').on('click', function () {
      $('#header .gnb_wrap').removeClass('active');
      $('#header .dimm').fadeOut(300);
      $('body').removeClass('fixed');
      setTimeout(function () {
        $('.gnb>li>.depth2').slideUp();
        $('.gnb>li').removeClass('on');

      },300);
    });
  };
  gnbUI();


  // 탭메뉴 - 언어선택
  $('#header .gnb_wrap .top_gnb .util li:nth-child(2) a').on('click', function () {
    $(this).parent().parent().toggleClass('active');
    $(this).siblings().slideToggle(300);
  });


  // 메인 이미지 슬라이더
  var mainSlider = new Swiper ('.main_slider', {
      loop: true,
      autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
      },
    });

    var productSlider = new Swiper ('.product_slider', {
      pagination: {
        el: '.swiper-pagination',
      },

    });


  // 메인 페이지 - 스크롤 애니메이션
  var sectionAni = function () {
    if($('#main .section3').length || $('#main .section5').length) {
      var eventAni = $('#main .section3 .event_wrap .event');
      var franchiseAni = $('#main .section5 .franchise_cont');
      var sect3PosY = $('#main .section3').offset().top - 450;
      var sect5PosY = $('#main .section5').offset().top - 750;

      $(window).resize(function () {
        sect3PosY = $('#main .section3').offset().top - 450;
        sect5PosY = $('#main .section5').offset().top - 750;
        console.log(sect3PosY);
      }); 
  
      $(window).scroll(function () {
        var _scroll = $(this).scrollTop();
  
        if(_scroll > sect3PosY) {
          eventAni.addClass('on')
        } else {
          eventAni.removeClass('on')
        };
  
        if(_scroll > sect5PosY) {
          franchiseAni.addClass('on')
        } else {
          franchiseAni.removeClass('on')
        }
      });
    };

  }
  sectionAni();




  ////////////////////////// 서브페이지 ////////////////////////////////
  var subAbuotAni = function () {
    // 서브페이지 - 회사소개 탭메뉴
    if($('.about_main .sub_banner_sect').length) {
      $('.about_main .lnb_wrap .lnb li').on('click', function () {
        var idx = $(this).index(); 
        console.log(idx);
    
        $(this).addClass('on').siblings().removeClass('on');
      });
    
      // 서브 페이지 - 스크롤 애니메이션
      var subBannerPosY = $('.about_main .sub_banner_sect').offset().top - 500;
      var firstHistoryPosY = $('.about_main .history_section1').offset().top - 500;
      var firstHistorySeoulPosY = $('.about_main .history_section2').offset().top - 500;
      
      $(window).resize(function () {
        subBannerPosY = $('.about_main .sub_banner_sect').offset().top - 500;
        firstHistoryPosY = $('.about_main .history_section1').offset().top - 500;
        firstHistorySeoulPosY = $('.about_main .history_section2').offset().top - 500;
      });
    
      $(window).scroll(function () {
        var _scroll = $(this).scrollTop();
        console.log(_scroll); 
    
        if(_scroll > subBannerPosY) {
          $('.about_main .sub_banner_sect').addClass('on')
        } else {
          $('.about_main .sub_banner_sect').removeClass('on')
        }

        if(_scroll > firstHistoryPosY) {
          $('.about_main .history_section1').addClass('active')
        } else {
          $('.about_main .history_section1').removeClass('active')
        }

        if(_scroll > firstHistorySeoulPosY) {
          $('.about_main .history_section2').addClass('active')
        } else {
          $('.about_main .history_section2').removeClass('active')
        }
      });
    }
  };
  subAbuotAni();













  /////////////////////////// 푸터 //////////////////////////////////////
  // 푸터 - 패밀리 사이트
  $('#footer .top_footer .btn_family_wrap .btn_family').on('click', function () {
    $(this).siblings().stop().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

});
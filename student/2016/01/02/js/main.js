
$(document).ready(init);

window.onload = function()
{
  var slide_obj = $('.section.new_and_event .list .item5 .slide');
  slide_obj.slick({
      dots:true,
      arrows:false,
      swipe:false,
      autoplay:true,
      autoplaySpeed:2000,
      responsive:[
        {
          breakpoint:771,
          settings:{swipe:true}
        }
      ]
  });
  slide_obj.slick('setPosition');
};

function init()
{



  var mobile_menu_box_obj = $('.mobile_menu_box');
  var mobile_search_box_obj = $('.header .content1 .content1_inner .mobile_search_box');

  // 모바일 메뉴 버튼
  $('.mobile_menu_open_button').on('click',function(){
    mobile_menu_box_obj.show();
    $('body').css('overflow','hidden');
  });

  $('.mobile_menu_box .button .close').on('click',function(){
    mobile_menu_box_obj.hide();
    $('body').removeAttr('style');
  });

  // 모바일 검색 버튼
  $('.header .content1 .content1_inner .etc li.mobile_search').on('click',function(){
    if($(window).width() > 414){return;}
    $('body').css('overflow','hidden');
    mobile_search_box_obj.show();
  });

  $('.header .content1 .content1_inner .mobile_search_box .mobile_search_close_button').on('click',function(){
    mobile_search_box_obj.hide();
    $('body').removeAttr('style');
  });

  // 메인 메뉴
  var sub_menu_background_obj = $('.header .content2 .sub_menu_background');
  $('.header .content2 .content2_inner .main_menu > li').mouseenter(function(){
    $(this).find('.sub_menu').css({'display':'block','opacity':0}).stop().animate({opacity:1},400);
    var height = 300;
    if($(window).width() <= 720)
    {
      if($(this).hasClass('menu')){height = 1095;}
      else if($(this).hasClass('event')){height = 790;}
      else if($(this).hasClass('brand')){height = 550;}
    }
    sub_menu_background_obj.stop().animate({height:height},300,'easeInOutQuad',function(){ $(this).css('border-bottom','1px solid #483325'); });
  }).mouseleave(function() {
    $(this).find('.sub_menu').stop().animate({opacity:0},300,'easeInOutQuad',function(){ $(this).removeAttr('style'); });
    sub_menu_background_obj.stop().animate({height:0},400,'easeInOutQuad',function(){ $(this).removeAttr('style'); });
  });

  // 패밀리 사이트 셀렉트 박스
  var family_nav_button_obj = $('.footer .footer_inner .info .family_nav button');
  var sw = true;
  family_nav_button_obj.on('click',function(){
    if(sw)
    {
      $(this).addClass('on');
      $(this).next().show();
    } else {
      $(this).removeAttr('class');
      $(this).next().hide();
    }
    sw = !sw;
  });

  // 창 사이즈를 변경하면 열려있던 메뉴나 검색버튼을 닫음
  $(window).resize(function(){
    mobile_menu_box_obj.hide();
    mobile_search_box_obj.hide();
    $('body').removeAttr('style');
  });
}

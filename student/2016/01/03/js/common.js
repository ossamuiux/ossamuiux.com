
$(document).ready(init);

function init(){

  var select_menu_location;           // 선택한 메뉴 위치(top,left,right,bottom)
  var select_menu_name;               // 선택한 메뉴명(index,about_me,project,contact)
  var prev_select_menu_name;          // 선택한 이전 메뉴명
  var background_animation_standard;  // 배경 애니메이션을 줄 때 기준이 width인지 height인지
  var location_prop;
  var standard_prop;
  var header_menu_a_object = $('.header .header_inner .menu a');
  var background_object = $('.wrap .background');

  // 메뉴 호버시 엘라스틱 애니메이션.
  header_menu_a_object.mouseenter(function(){
    prop_setting(this, '30');
    $(this).stop().animate(location_prop,1000,'easeOutElastic');
    background_object.find('.' + select_menu_location + '.hover').stop().animate(standard_prop,700,'easeOutElastic');
  }).mouseleave(function(){
    location_prop[select_menu_location] = 8;
    standard_prop[background_animation_standard] = 0;
    $(this).stop().animate(location_prop,800,'easeOutElastic');
    background_object.find('.' + select_menu_location + '.hover').stop().animate(standard_prop,100,'linear');
  });

  // 클릭시 해당 페이지로 넘어간다.
  header_menu_a_object.click(function(e){
    e.preventDefault();
    prev_select_menu_name = $("body").attr('class');

    // 현재 메뉴랑 같은 메뉴를 선택 못하게 방지
    if(prev_select_menu_name == select_menu_name){ return; }

    //  로고 애니메이션 발생
    var logo = $('.header .header_inner h1.logo');
    if(prev_select_menu_name == 'index')
    {
      logo.delay(100).animate({'opacity':0,'top':'52%'},200,function(){
          $(this).find('img').attr('src','images/common/logo2.png');
      });
    }
    else if(select_menu_name == 'index')
    {
      logo.animate({'opacity':0},100,function(){
        $(this).find('img').attr('src','images/common/logo1.png');
      });
    }

    // 해당 메뉴의 html을 읽어옴
    $.ajax('dom/' + select_menu_name + '.html',{
      dataType : "html",
      success : function(html_dom){
        if(select_menu_name == 'index'){ html_dom = ""; }
        var main_inner_obj = $('.main .main_inner');
        main_inner_obj.animate({'opacity':0},300,'swing',function(){
          $(this).css('margin-top',-50);
          $(this).empty();
          $(this).append(html_dom);
          init_page(select_menu_name);
          $(this).animate({'opacity':1,'margin-top':0},500,'easeOutCubic');
        });
      }
    });

    // 하단 버튼 클릭시 스크롤방지 및 클릭이나 호버 이벤트를 못하게 제어한다.
    header_menu_a_object.css('pointer-events','none').animate({'opacity':0.4},200);

    // 화면 전환 효과
    prop_setting(this, '100%');
    background_object.find('.' + select_menu_location + '.change_effect').stop().animate(standard_prop, 1800,'easeOutElastic',function(){

      // 버튼클릭 방지 해제
      header_menu_a_object.css('pointer-events','auto').animate({'opacity':1},200);

      // 해당 컨텐츠 배경색으로 변경
      $('body').removeClass();
      $('body').addClass(select_menu_name);

      // 전환 백그라운드 초기화
      $(this).css(background_animation_standard,0);
    });
  }); // header_menu_a_object.click

  // 각 페이지 초기화
  function init_page(select_menu_name)
  {
    $('div.wrap').removeClass($('div.wrap').attr('class').split(' ')[1]);
    if(select_menu_name == 'index'){ $('div.wrap').addClass('front'); }
    else{ $('div.wrap').addClass('content'); }

    // 이전 메뉴가 index이면 상단 로고 애니메이션을 주거나 선택한 메뉴가 index이면 style 속성을 지운다.
    if(prev_select_menu_name != select_menu_name && prev_select_menu_name == "index")
    {
      $('h1.logo').delay(100).animate({'top':0,'opacity':1},600,'easeOutCubic');
    } else {
      $('h1.logo').removeAttr('style');
    }

    // 해당 컨텐츠 css로 초기화
    $('.main_inner').removeClass($('.main_inner').attr('class').split(' ')[1]);
    $('.main_inner').addClass(select_menu_name);

    if(select_menu_name == "project")
    {
      $('.work_list .slides').on('init',function(){
        $('.slick-prev').insertBefore('.slick-dots');
        $('.slick-next').insertAfter('.slick-dots');
      }).slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode: true,
        centerPadding:'0px',
        variableWidth: true,
        appendArrows: $('.work_list .buttons'),
        appendDots: $('.work_list .buttons')
      });
      $('<div class="modal_box_effect"></div>').insertAfter('.modal_box');
      site_information();
    }
  } // init_page

  // 메뉴의 이름과 위치 및 넓이와 높이중 어느거에 값을 줄지 선택하여 오브젝트 생성
  function prop_setting(obj, standard_value)
  {
    var class_names = $(obj).attr('class').split(' ');
    select_menu_location = class_names[0];
    select_menu_name = class_names[2];
    if(select_menu_location == "left" || select_menu_location == "right"){background_animation_standard = 'width'; }
    else{background_animation_standard = 'height';}
    eval("location_prop = { " + select_menu_location + ":'" + standard_value + "' }");
    eval("standard_prop = { " + background_animation_standard + ":'" + standard_value + "' }");
  } // prop_setting
}


// 각 페이지 초기화(테스트용)
function init_page2(select_menu_name)
{
  if(select_menu_name == "project")
  {
    $('.work_list .slides').on('init',function(){
      $('.slick-prev').insertBefore('.slick-dots');
      $('.slick-next').insertAfter('.slick-dots');
    }).slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll:2,
      centerMode: true,
      centerPadding:'0px',
      variableWidth: true,
      appendArrows: $('.work_list .buttons'),
      appendDots: $('.work_list .buttons')
    });
    $('<div class="modal_box_effect"></div>').insertAfter('.modal_box');
    site_information();
  }
  else if(select_menu_name == "contact")
  {

  }
} // init_page

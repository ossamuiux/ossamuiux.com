// 로고 변경
function logo_change(file_nm)
{
  $('h1.logo').delay(400).animate({opacity:0},300,function(){
    $(this).find('img').attr('src','images/common/'+file_nm);
    $('h1.logo').animate({opacity:1},300);
  });
}


/* ------- 프로젝트 ------- */

// 슬라이드 클릭시 해당 사이트 상세정보 모달팝업
function site_information()
{
  var mousedownX = null;
  var site_name;

  $(".slides .box").on("mousedown", function(e) { mousedownX = e.pageX; });

  $(".slides .box").on("click", function(e)
  {
    e.preventDefault();
    // 0픽셀이라도 마우스를 움직인 상태에서 마우스를 떼면 이벤트 중지
    if (Math.abs(mousedownX - e.pageX)) { return; }

    // 중앙 슬라이드 클릭시
    if($(this).hasClass('slick-current'))
    {
      site_name = $(this).attr('class').split(' ')[1];
      $('body').css('overflow','hidden');

      // 로고 변경
      logo_change('logo3.png');

      var modal_box_obj = $('.modal_box');
      var modal_box_inner_obj = $('.modal_box .modal_box_inner');
      var modal_box_effect_obj = $(".modal_box_effect");
      var modal_box_effect_duration = 900;

      // 해당 슬라이드의 html을 읽어옴
      $.ajax('dom/modal_box/project/' + site_name + '/index.html',{
        dataType : "html",
        success : function(html_dom)
                  {
                    modal_box_inner_obj.empty();
                    modal_box_inner_obj.append(html_dom);

                    modal_box_obj.css('display','block').delay(300).animate({'opacity':1},800,'swing',function(){});

                    // 닫기버튼 설정
                    modal_box_inner_obj.find('.close_button').on('click',function(){

                      // 로고 변경
                      logo_change('logo2.png');

                      // 사라지게 하고 지운다.
                      $('.menu').removeAttr('style');
                      modal_box_obj.stop().animate({'opacity':0},900,'swing',function(){ modal_box_inner_obj.empty(); });
                      modal_box_effect_obj.css({'display':'block','opacity':0}).stop().animate({'opacity':1,'transform':9},{
                        step: function(now,fx)
                              {
                                var data = fx.prop == 'transform' ? 'scale('+Math.abs((now-10))+')' : now;
                                $(this).css(fx.prop,data);
                              },
                        duration: modal_box_effect_duration,
                        complete: function()
                                  {
                                    // 초기화
                                    modal_box_obj.css('display','none');
                                    modal_box_effect_obj.removeAttr('style');
                                    $('body').removeAttr('style');
                                  }
                      },'swing');
                    });
                  }
      });

      // 모달 박스로 화면 전환 효과
      modal_box_effect_obj.css('display','block').stop().animate({'opacity':0,'transform':9},
      {
        step: function(now,fx)
              {
                var data = fx.prop == 'transform' ? 'scale('+(now+1)+')' : now;
                $(this).css(fx.prop,data);
              },
        duration: modal_box_effect_duration,
        complete: function()
                  {
                    $('.menu').css('display','none');
                    modal_box_effect_obj.css('display','none');
                  }
      },'swing');
    }
    else
    {
      // 양옆 슬라이드를 클릭하면 움직인다.
      $('.slides').slick('slickGoTo',$(this).data('slick-index'));
    }
  });
} // site_information

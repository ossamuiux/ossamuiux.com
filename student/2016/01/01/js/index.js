/* 메인화면 전용 스크립트 */

// 이미지 확대
function expand()
{
  var ratio = 0.10;
  var w = parseInt($(this).css('width').replace('px',''));
  var h = parseInt($(this).css('height').replace('px',''));

  $(this).find('a img.back').stop().animate({
    width: w + (w*ratio) +'px'
    ,height: h + (h*ratio) +'px'
    ,'margin-top': -1*((h*ratio)/2) + 'px'
    ,'margin-left': -1*((w*ratio)/2) + 'px'
    }, 350, 'easeOutQuart');
}

// 이미지 축소
function reduction()
{
  var ratio = 0;
  $(this).find('a img.back').stop().animate({
    width:'100%'
    ,height:'100%'
    ,margin: '0 0 0 0'
  }, 350, 'easeOutQuart');
}

// 슬라이드 재생
function sPlay(){$('.slide').slick('slickPlay');}
// 슬라이드 멈춤
function sPause(){$('.slide').slick('slickPause');}

// 메인 첫 슬라이드 애니메이션
function firstSlide()
{
  $('.section1 .slide .box0 .img0').animate({width:'100%'},3900,'easeOutQuart');
  $('.section1 .slide .box0 .img1').delay(900).animate({'height':18,'margin-top':0},500, 'easeOutQuint', function(){
    $(this).next().delay(200).animate({'height':111,'margin-top':0},700, 'easeOutQuint', function(){
      $(this).next().animate({'width':1000},1200,'linear', sPlay);
    });
  });
}

// 슬라이드 애니메이션
function slideAni()
{
  var onSwitch = [true,true,true,true];

  function on()
  {
    var index = $('.slick-track .slick-active').index();
    if(index === 0 || !onSwitch[index]){return;}
    onSwitch[index] = false;

    switch(index)
    {
      case 1:
        sPause();
        $('.section1 .slide .box' + index + ' .img1').delay(500).animate({'opacity':1},800, function(){ // 새마을 휘트니스는
          $(this).next().animate({'height':38}, 300, 'linear', function(){                              // ...
            $(this).next().delay(100).animate({'left':127,'opacity':1},300, function() {                // 가족
              $(this).next().animate({'left':259,'opacity':1},300, function(){                          // 친구
                $(this).next().animate({'width':214,'opacity':1},500,'linear',function(){               // 올바른 길잡이
                  $(this).next().animate({'height':24,'opacity':1},200,function(){                      // 안락
                    $(this).next().animate({'top':292,'opacity':1},600,function(){                      // 봉사
                      $(this).next().delay(200).animate({'opacity':1},700,sPlay);                       // 이라고 말하는 사람들
                    });
                  });
                });
              });
            });
          });
        });
        break;
      case 2 :
        break;
      case 3 :
        break;
    }
  }
  return on;
}

function init() {

  $('.slide').slick({
      arrows:false
      ,autoplay: false
      ,autoplaySpeed:2500
      ,pauseOnHover:false
      ,swipe:false
      ,fade:true
      ,dots:true
  });

  // 자동으로 슬라이드가 넘어가거나 사용자가 도트를 클릭했을 경우 애니메이션 효과 줌
  // ※주의※ slick.js에 임의로 트리거속성을 직접 넣었다.
  $('.slide').on("dotsAddClass", slideAni());

  // 블로그 hover시 이미지 확대
  $('.section4_inner .blog').mouseenter(expand).mouseleave(reduction);
}

$(document).ready(init);

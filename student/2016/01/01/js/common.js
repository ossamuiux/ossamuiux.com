
window.onload = function(){

  // 화면 로딩후 페이드아웃 효과, 화면 올리기 효과, 슬라이드 시작
  $('.fadeInOut').animate({'opacity':0},600,function(){ $(this).css('display','none'); });
  $('.header').animate({'margin-top':0},700,'easeOutQuart');

  var pathname = window.location.pathname.split('/')[window.location.pathname.split('/').length-1];
  if( pathname === "" || pathname === "index.html" ){ firstSlide(); }
};


$(document).ready(function(){

  // 링크 클릭시 페이드인 효과
  $("a[href!='#']").click(function(e) {
    e.preventDefault();
    var loc = this.href;
    $('.fadeInOut').css({'display':'block','background-image':'none'}).animate({'opacity':1},250,function(){ window.location = loc; });
    $('.header').animate({'margin-top':-30},700,'easeOutQuart');
  });

  // 메인메뉴 hover시 라인효과
  $('.header_inner ul.main_menu li').mouseenter(function(){
    $(this).animate({'border-bottom-width':4},100);
    // $(this).find('a').animate({'color':'#499e8d'},150);
  }).mouseleave(function(){
    $(this).animate({'border-bottom-width':0},100);
    // $(this).find('a').animate({'color':'#666'},150);
  });
});

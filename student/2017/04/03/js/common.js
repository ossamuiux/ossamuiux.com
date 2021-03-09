$(window).ready(function() {
  $('.gnb').mouseenter(function() {
    $('.gnb .depth2').stop().slideDown(100, 'easeOutExpo');
  }).mouseleave(function() {
    $('.gnb .depth2').stop().slideUp(100, 'easeOutExpo');
  }); //desktop gnb

  $('.m_btn').click(function() {
    $('.gnb2_wrap').slideToggle(400, 'easeOutExpo');
  }); //max-width 1800px gnb

  $('.m_btn2').click(function() {
    $('.gnb3_wrap').fadeIn(400, 'easeOutExpo');
    $('.cover').fadeIn();
  });
  $('.m_btn_close').click(function() {
    $('.gnb3_wrap').fadeOut(400, 'easeOutExpo');
    $('.cover').fadeOut();
  }); //max-width 1200px gnb

  $('.gnb3 li').click(function() {
    $(this).find('li').slideToggle();
    $(this).toggleClass('active');
  });
});
$(document).ready(function() {

  $('.m_btn_gnb').click(function() {
    $(this).toggleClass('is-active');
    $('.gnb_wrap').slideToggle();
    $('#main .main_cover').toggle();
    // $('#wrap').toggleClass('on');
  });
  $(window).resize(function() {

    $('#main .main_cover').hide();
    $('.m_btn_gnb').removeClass('is-active');

    var widthSize = $(this).width();

    if (widthSize > 1250) {
      $('.gnb_wrap').show();
    } else {
      $('.gnb_wrap').hide();
    }
  }); // moblie menu

})
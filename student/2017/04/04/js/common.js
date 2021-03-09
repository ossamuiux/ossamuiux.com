$(document).ready(function() {
    $('.bottom_header .bottom_header_inner .menu>li').mouseenter(function() {
        $(this).find('.depth2').stop().slideDown(400, 'easeOutExpo');
    }).mouseleave(function() {
        $(this).find('.depth2').stop().slideUp(200, 'easeOutExpo');
    }); //depth 메뉴 나타내기

    $('.login').click(function() {
        $('.login_popup').show();
    });
    $('.login_content .btn_close').click(function() {
        $('.login_popup').hide();
        $('.left_login p input').val('');
    }); //로그인팝업나타내기

    $('.left_login p input').keyup(function() {
        $(this).siblings('label').hide();
        console.log('wwnsql');
    }); //로그인팝업내용

    $('.program_list li .depth2 li').click(function() {
        var programList = $(this).index();

        $('.program_content2').eq(num).show().siblings().hide();
    });
});
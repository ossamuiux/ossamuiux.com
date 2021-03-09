$(document).ready(function() {
	//회원가입 아이디찾기 비밀번호찾기 호버
	$('a.join').mouseenter(function() {
        $(this).stop().animate({'background-color':'#ab202f'},300);
    }).mouseleave(function() {
        $(this).stop().animate({'background-color':'transparent'},300);
    });
	
	$('a.find_id').mouseenter(function() {
        $(this).stop().animate({'background-color':'#ab202f'},300);
    }).mouseleave(function() {
        $(this).stop().animate({'background-color':'transparent'},300);
    });
	
	$('a.find_pw').mouseenter(function() {
        $(this).stop().animate({'background-color':'#ab202f'},300);
    }).mouseleave(function() {
        $(this).stop().animate({'background-color':'transparent'},300);
    });
});
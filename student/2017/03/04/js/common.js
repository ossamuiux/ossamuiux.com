$(document).ready(function() {
    //햄버거 메뉴
	$('.btn_m').click(function() {
        $(this).toggleClass('on',800);
		$('.gnb').toggle();
    });

});


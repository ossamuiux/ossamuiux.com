//btn_x 클릭 시 on처리

$(document).ready(function() {
	//버튼클릭 모양변환
    $('.btn_x').click(function() {
        $(this).toggleClass('on');
		$('.quick_menu').toggleClass('on');
    });
	
});
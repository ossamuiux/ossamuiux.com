$(document).ready(function() {	
	$('#main.new_production .menu_list>li>a').click(function(e) {
        $(this).parent().find('.detail_info').slideToggle(200);
		e.preventDefault();//a태그 기본이벤트 막기
		
    });
	
	$('#main .btn_more').click(function() {
		$('#main.new_production .menu_list li:hidden').slideDown(200);
		$(this).hide();
    });
});


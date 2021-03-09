$(document).ready(function() {	
	$('#main.store_search .search_wrap .btn_search').click(function(e) {
        $('#main.store_search .result_wrap').slideDown(300).ready(function() {
            $('html').animate({scrollTop:840});
		});
		e.preventDefault();//a태그 기본이벤트 막기
    });

	$('#main .btn_more').click(function() {
		$('#main.store_search .result_list li:hidden').slideDown(200);
		$(this).hide();
    });
	
	
});


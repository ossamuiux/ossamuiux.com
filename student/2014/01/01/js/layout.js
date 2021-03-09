$(document).ready(function(){
	 var sw=false;
	
	//언어선택 버튼
	$('.lang2 a').click(function(){
		var str=$(this).text();
		var str2=$('.lang').text();
		$('.lang').text(str);
		
		console.log(str2);
		
		$('.lang2 a').text(str2);
	});
	

	
	//패밀리사이트 버튼
	$('.family .family_btn').click(function(){
		if(sw==false){
			$('.family .family_list').show();
			sw=true;
		}else{
			$('.family .family_list').hide();
			sw=false;
		}
	});

});
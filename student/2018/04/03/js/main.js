$(document).ready(function(){
//    $("body").mousemove(function(e){
//		var x = e.pageX;
//		var y = e.pageY;
//		$("#cursor_e").css({"top":y,"left":x})
//	});
    winHeight($('.section1'));
    
    $(window).resize(function(){
        winHeight($('.section1'));
        
    });
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      freeMode: true,
      loopFillGroupWithBlank: true,
        autoplay: {
      delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    $('#header .header_inner .po_menu>ul>li').click(function(e){
        var num=$(this).index();
        if(num==0){
            $('html,body').animate({'scrollTop':1000});
        } else if(num==1){
            $('html,body').animate({'scrollTop':2000});
        } else if(num==2){
            $('html,body').animate({'scrollTop':5000});
        } else if(num==3){
            $('html,body').animate({'scrollTop':5900});
        } else {
            $('html,body').animate({'scrollTop':7000});
        }
        e.preventDefault();
    });
}); 

//창크기구해서 section1의 높이에 넣어주는 함수 
function winHeight(el){
    var winH=$(window).height();
    $('.section1').css('height',winH);
}






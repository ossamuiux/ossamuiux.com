$(document).ready(function() {
    
    $('.m_btn_gnb, .m_btn_gnb2').click(function() {
        $('#header .m_gnb').show(400);   
    });
    $('.m_btn_gnbclose').click(function() {
        $('#header .m_gnb').hide(400);   
    });    
    
    $(window).scroll(function() {
        var num = $(this).scrollTop();
        if(num >= 30){
			$('#header').addClass('on');
		} else {
			$('#header').removeClass('on');
		};
    });

	$('.btn01').mouseenter(function(){
        $('.btn01 img').attr('src', 'images/pc_btn01_hover.png').fadeIn(900);
    }).mouseleave(function() {
        $('.btn01 img').attr('src', 'images/pc_btn01.png').fadeIn(900);
    });
    
    $('.btn02').mouseenter(function(){
        $('.btn02 img').attr('src', 'images/pc_btn02_hover.png');
    }).mouseleave(function() {
        $('.btn02 img').attr('src', 'images/pc_btn02.png');
    });
    
    $('.btn03').mouseenter(function(){
        $('.btn03 img').attr('src', 'images/pc_btn03_hover.png');
    }).mouseleave(function() {
        $('.btn03 img').attr('src', 'images/pc_btn03.png');
    });
    
    
    var numImg=1;
    
    setInterval(function(){
        $('.section5_mb .section5_mb_img>img').eq(numImg-1).fadeOut(2000);
        $('.section5_mb .section5_mb_img>img').eq(numImg).fadeIn(2000);
        numImg++;
        
        if(numImg==3){
            numImg=0;
        }
        //console.log(numImg, numImg-1);
    },2000);
    
    
    var numImg2=1;
    
    setInterval(function(){
        $('.section4_mb .section4_mb_img>img').eq(numImg2-1).fadeOut(2000);
        $('.section4_mb .section4_mb_img>img').eq(numImg2).fadeIn(2000);
        numImg2++;
        
        if(numImg2==2){
            numImg2=0;
        }
        //console.log(numImg2, numImg2-1);
    },2000);
    
    var numImg3=1;
    
    setInterval(function(){
        $('.section3_mb .section3_mb_img>img').eq(numImg3-1).fadeOut(2000);
        $('.section3_mb .section3_mb_img>img').eq(numImg3).fadeIn(2000);
        numImg3++;
        
        if(numImg3==2){
            numImg3=0;
        }
        console.log(numImg3, numImg3-1);
    },2000);
});


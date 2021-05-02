$(document).ready(function () {
    // header

    // section - main slider
    var mainSlider = new Swiper ('.main_slider', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // section - hot light hour
        function hotDay() {
            var nowDate = new Date();
            var month = nowDate.getMonth() + 1;
            var date = nowDate.getDate();
            var day = nowDate.getDay();
            
            switch(day) {
                case 0: 
                    day = '일';
                    break;
                case 1: 
                    day = '월';
                    break;
                case 2: 
                    day = '화';
                    break;
                case 3: 
                    day = '수';
                    break;
                case 4: 
                    day = '목';
                    break;
                case 5: 
                    day = '금';
                    break;
                case 6: 
                    day = '토';
                    break;
            }
    
            $('.hotlight_time .day').text(month + '/' + date + '(' + day + ')');
        }
        hotDay();
    
        function hotTime() {
            var nowTime = new Date();
            var hour = nowTime.getHours();
            var min = nowTime.getMinutes();
    
            var newHour = (hour < 10) ? '0'+hour : hour;
            var newMin = (min < 10) ? '0'+min : min;
    
            $('.hotlight_time .time').text(newHour + ':' + newMin);
        }
        hotTime();
        setInterval(hotTime);
    
    // hotligt list 갯수
    var listNum = $('.list_slider .swiper-slide').length;
    $('.hotlight_list .list_length').text(listNum);

    // hotlight hour list slider
    var listSlider = new Swiper('.list_slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
        },
    });      

    // event slider
    var eventSlider = new Swiper('.event_slider', {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // section - scroll banner
    if($('#main .scroll_bnr1').length) {
        var scrollBnr1 = $('#main .wrap_bnr1').offset().top;
        var scrollBnr2 = $('#main .wrap_bnr2').offset().top;

        $(window).scroll(function () {
            var _scrollTop = $(this).scrollTop();
            
            if(_scrollTop >= scrollBnr1) {
                $('#main .wrap_bnr1').addClass('on');
            } else {
                $('#main .wrap_bnr1').removeClass('on');
            }

            if(_scrollTop >= scrollBnr2) {
                $('#main .wrap_bnr2').addClass('on');
            } else {
                $('#main .wrap_bnr2').removeClass('on');
            }
        });
    }

    // section - sns slider
    var snsSlider = new Swiper('.sns_slider', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 0,
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
    });

    // sub page - monthly donut slider (title)
    if($('.monthly_tit_slider').length) {
        var monthlyTitleSlider = new Swiper ('.monthly_tit_slider', {
            loop: true,
            speed: 500,
            // autoplay: {
            //     delay: 6000,
            //     disableOnInteraction: false,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        // sub page - monthly donut slider (list)
        var monthlyListSlider = new Swiper ('.monthly_list_slider', {
            loop: true,
            speed: 500,
            // autoplay: {
            //     delay: 6000,
            //     disableOnInteraction: false,
            // },
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'bullets',
            //     clickable: true,
            // },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        });
    
        monthlyTitleSlider.controller.control = monthlyListSlider;
        monthlyListSlider.controller.control = monthlyTitleSlider;
    }


    // footer - family site
    $('.btn_family').on('click', function () {
        $(this).next().slideToggle(200);        
    });
}); // ready
front1 = {
    init: function() {
        front1.kakaoMap();

    },

    kakaoMap: function() {
        //  안양공장
        var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.360741, 126.953145),
            level: 3
		};
		var map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(37.360771, 126.953961); 

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

        // function resizeMap() {
        //     var mapContainer = document.getElementById('map');
        //     mapContainer.style.width = '100%';
        //     mapContainer.style.height = '100%'; 
        // }
        
        // function relayout() {    
            
        //     map.relayout();
        // }
        
        // 안성공장
        var container2 = document.getElementById('map2');
		var options2 = {
			center: new kakao.maps.LatLng(37.01570202434286, 127.25105220080103),
            level: 3
		};
		var map2 = new kakao.maps.Map(container2, options2);

        var markerPosition2  = new kakao.maps.LatLng(37.01590940146465, 127.2509910806306); 

        var marker2 = new kakao.maps.Marker({
            position: markerPosition2
        });

        marker2.setMap(map2);

        // function resizeMap2() {
        //     var mapContainer = document.getElementById('map2');
        //     mapContainer.style.width = '100%';
        //     mapContainer.style.height = '100%'; 
        // }
        
        // function relayout2() {    
            
        //     map2.relayout2();
        // }

        // 아산공장
        var container3 = document.getElementById('map3');
		var options3 = {
			center: new kakao.maps.LatLng(36.827988066364675, 127.0895957822984),
            level: 3
		};
		var map3 = new kakao.maps.Map(container3, options3);

        var markerPosition3  = new kakao.maps.LatLng(36.82824035954933, 127.08961849510078); 

        var marker3 = new kakao.maps.Marker({
            position: markerPosition3
        });

        marker3.setMap(map3);

        // function resizeMap3() {
        //     var mapContainer = document.getElementById('map3');
        //     mapContainer.style.width = '100%';
        //     mapContainer.style.height = '100%'; 
        // }
        
        // function relayout3() {    
            
        //     map3.relayout3();
        // }

        // 구미공장
        var container4 = document.getElementById('map4');
        var options4 = {
            center: new kakao.maps.LatLng(36.108155586809076, 128.37878151359675),
            level: 3
        };
        var map4 = new kakao.maps.Map(container4, options4);

        var markerPosition4  = new kakao.maps.LatLng(36.10826827018062, 128.37877793070444);

        var marker4 = new kakao.maps.Marker({
            position: markerPosition4
        });

        marker4.setMap(map4);

        // function resizeMap4() {
        //     var mapContainer = document.getElementById('map4');
        //     mapContainer.style.width = '100%';
        //     mapContainer.style.height = '100%'; 
        // }
        
        // function relayout4() {    
            
        //     map4.relayout4();
        // }

        // 부산공장
        var container5 = document.getElementById('map5');
        var options5 = {
            center: new kakao.maps.LatLng(35.18643852020831, 128.98375633420875),
            level: 3
        };
        var map5 = new kakao.maps.Map(container5, options5);

        var markerPosition5  = new kakao.maps.LatLng(35.18649711805887, 128.98375501457778);

        var marker5 = new kakao.maps.Marker({
            position: markerPosition5
        });

        marker5.setMap(map5);

        // function resizeMap5() {
        //     var mapContainer = document.getElementById('map5');
        //     mapContainer.style.width = '100%';
        //     mapContainer.style.height = '100%'; 
        // }
        
        // function relayout5() {    
            
        //     map5.relayout5();
        // }

        // 녹산공장
        var container6 = document.getElementById('map6');
        var options6 = {
            center: new kakao.maps.LatLng(35.096732636861965, 128.84187315690545),
            level: 3
        };
        var map6 = new kakao.maps.Map(container6, options6);

        var markerPosition6  = new kakao.maps.LatLng(35.09686326764464, 128.84187609568122);

        var marker6 = new kakao.maps.Marker({
            position: markerPosition6
        });

        marker6.setMap(map6);

        // function resizeMap6() {
        //     var mapContainer = document.getElementById('map6');
        //     mapContainer.style.width = '100%';
        //     mapContainer.style.height = '100%'; 
        // }
        
        // function relayout6() {    
            
        //     map6.relayout6();
        // }

        $('.factory_trip_container select').on('change', function() {
            var value1 = $(this).val();

            console.log(value1);

            if(value1 === 'anyang') {
                $('#map').show().siblings('#map2, #map3, #map4, #map5, #map6').hide();
            } else if(value1 === 'ansung') {
                $('#map2').show().siblings('#map, #map3, #map4, #map5, #map6').hide();
            } else if(value1 === 'asan') {
                $('#map3').show().siblings('#map, #map2, #map4, #map5, #map6').hide();
            } else if(value1 === 'gumi') {
                $('#map4').show().siblings('#map, #map2, #map3, #map5, #map6').hide();
            } else if(value1 === 'busan') {
                $('#map5').show().siblings('#map, #map2, #map3, #map4, #map6').hide();
            } else if(value1 === 'noksan') {
                $('#map6').show().siblings('#map, #map2, #map3, #map4, #map5').hide();
            };

            setTimeout(function (){
                map2.relayout();
                map2.setCenter(new kakao.maps.LatLng(37.01570202434286, 127.25105220080103));
                map3.relayout();
                map3.setCenter(new kakao.maps.LatLng(36.827988066364675, 127.0895957822984));
                map4.relayout();
                map4.setCenter(new kakao.maps.LatLng(36.108155586809076, 128.37878151359675));
                map5.relayout();
                map5.setCenter(new kakao.maps.LatLng(35.18643852020831, 128.98375633420875));
                map6.relayout();
                map6.setCenter(new kakao.maps.LatLng(35.096732636861965, 128.84187315690545));
            }, 0);  
        });
    },
}

$(document).ready(function() {
    front1.init();
    // map.relayout()

});

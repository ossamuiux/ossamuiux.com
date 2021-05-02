function storeSearchMap() {    
    // 유한킴벌리 본사 좌표 37.51300, 127.10274
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = { 
        center: new kakao.maps.LatLng(37.51300, 127.10274), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

    // 마커가 표시될 위치
    var markerPosition  = new kakao.maps.LatLng(37.51300, 127.10274); 

    // 마커 생성
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시
    marker.setMap(map);
}
storeSearchMap();
//  레디로 묶어도 되는거였음
// $(document).ready(function() {
    //37.556224, 126.939428


function storeSearchMap() {    
    // 제이퉈리 선택자가아닌 자바스크립트.getElementById를 사용
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = { 
        center: new kakao.maps.LatLng(37.5373713,126.8923203), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 위의 정보들이 인자값으로 여기 담김
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.5373713,126.8923203); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
}
storeSearchMap();
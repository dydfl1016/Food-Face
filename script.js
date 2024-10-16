const faceArea = document.getElementById('face-area');

// 음식 재료를 드래그 앤 드롭할 수 있도록 구현
const foodItems = document.querySelectorAll('.food');

foodItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

faceArea.addEventListener('dragover', dragOver);
faceArea.addEventListener('drop', drop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.src);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const src = e.dataTransfer.getData('text/plain');
    const img = document.createElement('img');
    img.src = src;
    
    // 크기를 고정함 (50x50 픽셀로 설정)
    img.style.width = '50px';
    img.style.height = '50px';
    
    // 이미지 위치 설정
    img.style.position = 'absolute';
    img.style.left = `${e.clientX - faceArea.offsetLeft - 25}px`; // 중앙 정렬
    img.style.top = `${e.clientY - faceArea.offsetTop - 25}px`;   // 중앙 정렬
    img.classList.add('food-on-face');
    
    faceArea.appendChild(img);

    // 터치 시작 시 이미지 드래그 효과를 구현
foodItems.forEach(item => {
    item.addEventListener('touchstart', touchStart);
});

function touchStart(e) {
    const touch = e.touches[0];
    const imgSrc = e.target.src;
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.position = 'absolute';
    
    document.body.appendChild(img);

    // 터치 움직임에 따라 이미지 위치 업데이트
    document.addEventListener('touchmove', function (moveEvent) {
        img.style.left = `${moveEvent.touches[0].pageX - 25}px`; // 중앙 정렬
        img.style.top = `${moveEvent.touches[0].pageY - 25}px`;
    });

    // 터치가 끝났을 때 위치 확정
    document.addEventListener('touchend', function () {
        faceArea.appendChild(img);
    });
}
// 기존 드래그 앤 드롭 코드

// 터치 이벤트 관련 코드 추가
foodItems.forEach(item => {
    item.addEventListener('touchstart', touchStart);
});

function touchStart(e) {
    const touch = e.touches[0];
    const imgSrc = e.target.src;

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.position = 'absolute';

    document.body.appendChild(img);

    document.addEventListener('touchmove', function (moveEvent) {
        img.style.left = `${moveEvent.touches[0].pageX - 25}px`;
        img.style.top = `${moveEvent.touches[0].pageY - 25}px`;
    });

    document.addEventListener('touchend', function () {
        faceArea.appendChild(img);
    });
}

}

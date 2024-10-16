const faceArea = document.getElementById('face-area');
const foodItems = document.querySelectorAll('.food');

// 터치 및 드래그 앤 드롭 이벤트 모두 처리
foodItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('touchstart', touchStart);
});

faceArea.addEventListener('dragover', dragOver);
faceArea.addEventListener('drop', drop);

faceArea.addEventListener('touchmove', touchMove);
faceArea.addEventListener('touchend', touchEnd);

let currentImg = null;

// 드래그 앤 드롭 이벤트
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
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.position = 'absolute';
    img.style.left = `${e.clientX - faceArea.offsetLeft - 25}px`; // 중앙 정렬
    img.style.top = `${e.clientY - faceArea.offsetTop - 25}px`;
    img.classList.add('food-on-face');
    faceArea.appendChild(img);
}

// 터치 이벤트
function touchStart(e) {
    const touch = e.touches[0];
    currentImg = document.createElement('img');
    currentImg.src = e.target.src;
    currentImg.style.width = '50px';
    currentImg.style.height = '50px';
    currentImg.style.position = 'absolute';
    document.body.appendChild(currentImg);
    
    currentImg.style.left = `${touch.pageX - 25}px`;
    currentImg.style.top = `${touch.pageY - 25}px`;
}

function touchMove(e) {
    if (currentImg) {
        const touch = e.touches[0];
        currentImg.style.left = `${touch.pageX - 25}px`;
        currentImg.style.top = `${touch.pageY - 25}px`;
    }
}

function touchEnd(e) {
    if (currentImg) {
        const touch = e.changedTouches[0];
        const faceAreaRect = faceArea.getBoundingClientRect();
        
        // 터치 위치가 얼굴 영역 안에 있으면 추가
        if (touch.pageX >= faceAreaRect.left && touch.pageX <= faceAreaRect.right &&
            touch.pageY >= faceAreaRect.top && touch.pageY <= faceAreaRect.bottom) {
            currentImg.style.left = `${touch.pageX - faceAreaRect.left - 25}px`;
            currentImg.style.top = `${touch.pageY - faceAreaRect.top - 25}px`;
            faceArea.appendChild(currentImg);
        } else {
            currentImg.remove();
        }
        currentImg = null;
    }
}
console.log('스크립트가 제대로 로드되었습니다!');

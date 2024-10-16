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
    img.style.position = 'absolute';
    img.style.left = `${e.clientX - faceArea.offsetLeft - 25}px`; // 이미지 중앙 정렬을 위한 오프셋 조정
    img.style.top = `${e.clientY - faceArea.offsetTop - 25}px`;
    img.classList.add('food-on-face');
    faceArea.appendChild(img);
}

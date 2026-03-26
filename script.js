const doll = document.getElementById('matryoshka');
const levelText = document.getElementById('level-display');
const statusText = document.getElementById('status');
const face = doll.querySelector('.face');

let currentLevel = 1;
const maxLevel = 6;

// 인형 데이터 (색상, 표정, 크기 비율)
const dollData = [
    { color: '#e53935', face: '😊', scale: 1 },
    { color: '#fb8c00', face: '😄', scale: 0.85 },
    { color: '#fdd835', face: '🙂', scale: 0.7 },
    { color: '#43a047', face: '😮', scale: 0.55 },
    { color: '#1e88e5', face: '😯', scale: 0.4 },
    { color: '#8e24aa', face: '👶', scale: 0.25 }
];

doll.addEventListener('click', () => {
    if (currentLevel < maxLevel) {
        currentLevel++;
        updateDoll();
    } else {
        alert('마지막 인형입니다! 다시 처음으로 돌아갑니다.');
        alert('🎉 축하합니다! 드디어 가장 작은 인형을 찾아냈어요! 정말 끈기 있으시네요.');
        currentLevel = 1;
        updateDoll();
    }
});

function updateDoll() {
    const data = dollData[currentLevel - 1];
    
    // 스타일 업데이트
    doll.style.backgroundColor = data.color;
    doll.style.transform = `scale(${data.scale})`;
    face.textContent = data.face;
    
    // 텍스트 업데이트
    levelText.textContent = `Level: ${currentLevel} / ${maxLevel}`;
    statusText.textContent = currentLevel === maxLevel ? "찾았다! 가장 작은 인형!" : "더 작은 인형이 들어있을까요?";
    statusText.textContent = currentLevel === maxLevel ? "✨ 와! 이게 마지막이에요! ✨" : "안에 하나 더 있을지도 몰라요...";
}
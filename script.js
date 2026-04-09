const card = document.getElementById('city-card');
const cityName = document.getElementById('city-name');
const cityIcon = document.querySelector('.city-icon');
const nextBtn = document.getElementById('next-btn');
const levelText = document.getElementById('level-display');
const statusText = document.getElementById('status');

let currentLevel = 1;
const maxLevel = 6;

// 숨겨진 보석 같은 도시 데이터 (도시명, 배경색, 대표 아이콘)
const cityData = [
    { name: '할슈타트', color: '#e0f2f7', icon: '🏞️' }, // 오스트리아 호수 마을
    { name: '콜마르', color: '#ffe0b2', icon: '🏘️' },   // 프랑스 동화 마을
    { name: '셰프샤우엔', color: '#bbdefb', icon: '💙' }, // 모로코 파란 도시
    { name: '블레드', color: '#c8e6c9', icon: '🏰' },   // 슬로베니아 호수 성
    { name: '지로카스터', color: '#d7ccc8', icon: '⛰️' }, // 알바니아 돌의 도시
    { name: '로텐부르크', color: '#f3e5f5', icon: '🥨' }  // 독일 중세 마을
];

nextBtn.addEventListener('click', () => {
    if (currentLevel < maxLevel) {
        currentLevel++;
    } else {
        alert(`모든 도시 투어를 마쳤습니다! \n제작자: 차준호 (GitHub: chajunho5)`);
        currentLevel = 1;
    }
    updateCity();
});

function updateCity() {
    const data = cityData[currentLevel - 1];
    
    // 애니메이션 효과 추가
    card.classList.remove('pop-animation');
    void card.offsetWidth; // 리플로우 강제 발생
    card.classList.add('pop-animation');

    // 스타일 업데이트
    card.style.backgroundColor = data.color;
    cityIcon.textContent = data.icon;
    cityName.textContent = data.name;
    
    // 텍스트 업데이트
    levelText.textContent = `${currentLevel} / ${maxLevel}`;
    statusText.textContent = currentLevel === maxLevel 
        ? "✨ 차준호의 숨겨진 도시 리스트 끝! ✨" 
        : "다음은 어떤 보석 같은 도시일까요?";
}
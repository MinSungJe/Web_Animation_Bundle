const jsUpgradePlanet = document.querySelector('.jsUpgrade .planet');
const jsUpgradePlayButton = document.querySelector('.jsUpgrade #play');
const jsUpgradeStopButton = document.querySelector('.jsUpgrade #stop');

let jsUpgradeTimeline = 0;
let animationFrameId = null;
let isAnimating = false;
let lastTime = 0;
const rotationSpeed = 360 / 3000; // 3초에 한 바퀴(360도)

const jsUpgradeRotatePlanet = (currentTime) => {
  if (!lastTime) lastTime = currentTime;
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;

  jsUpgradeTimeline += rotationSpeed * deltaTime;
  jsUpgradePlanet.style.transform = `rotate(${jsUpgradeTimeline}deg)`;

  animationFrameId = requestAnimationFrame(jsUpgradeRotatePlanet);
};

jsUpgradePlayButton.addEventListener('click', () => {
  if (!isAnimating) {
    isAnimating = true;
    lastTime = performance.now(); // 초기 시간 설정
    animationFrameId = requestAnimationFrame(jsUpgradeRotatePlanet);
  }
});

jsUpgradeStopButton.addEventListener('click', () => {
  if (isAnimating) {
    cancelAnimationFrame(animationFrameId);
    isAnimating = false;
  }
});

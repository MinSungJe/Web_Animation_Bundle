const waapiPlanet = document.querySelector('.waapi .planet');
const waapiPlayButton = document.querySelector('.waapi #play');
const waapiStopButton = document.querySelector('.waapi #stop');

let waapiAnimation;

waapiPlayButton.addEventListener('click', () => {
  if (!waapiAnimation) {
    waapiAnimation = waapiPlanet.animate(
      [{ transform: 'rotate(0)' }, { transform: 'rotate(1turn)' }],
      {
        duration: 3000,
        easing: 'linear',
        iterations: Infinity,
      }
    );
    return;
  }
  waapiAnimation.play();
});

waapiStopButton.addEventListener('click', () => {
  waapiAnimation.pause();
});

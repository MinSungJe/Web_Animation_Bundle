const cssPlanet = document.querySelector('.css .planet');
const cssPlayButton = document.querySelector('.css #play');
const cssStopButton = document.querySelector('.css #stop');

cssPlayButton.addEventListener('click', () => {
  cssPlanet.classList.add('rotate');
});

cssStopButton.addEventListener('click', () => {
  cssPlanet.classList.remove('rotate');
});

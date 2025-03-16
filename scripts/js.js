const jsPlanet = document.querySelector('.js .planet');
const jsPlayButton = document.querySelector('.js #play');
const jsStopButton = document.querySelector('.js #stop');

let jsTimeline = 0;
let jsIntervalId = null;

const jsRotatePlanet = () => {
  jsTimeline += 360 / 60;
  jsPlanet.style.transform = `rotate(${jsTimeline}deg)`;
};

jsPlayButton.addEventListener('click', () => {
  if (!jsIntervalId) {
    jsIntervalId = setInterval(jsRotatePlanet, 3000 / 60);
  }
});

jsStopButton.addEventListener('click', () => {
  if (jsIntervalId) {
    clearInterval(jsIntervalId);
    jsIntervalId = null;
  }
});

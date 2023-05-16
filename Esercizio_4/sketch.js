let canvas;
let progressBarWidth;
let progressBarHeight = 30;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
  progressBarWidth = width * 0.8;
}

function draw() {
  background(0);

  let now = new Date();
  let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  let remainingTime = (endOfDay.getTime() - now.getTime()) / 1000; 
  let totalSecondsInADay = 24 * 60 * 60;
  let elapsedSeconds = totalSecondsInADay - remainingTime;

  let percentage = (elapsedSeconds / totalSecondsInADay) * 100;

  let countdownText = formatTime(remainingTime);
  let progressBarFill = map(elapsedSeconds, 0, totalSecondsInADay, 0, progressBarWidth);

  fill(255);
  text('Tempo rimanente: ' + countdownText, width / 2, height / 2 - 80);
  text('Completamento giornaliero: ' + percentage.toFixed(2) + '%', width / 2, height / 2 + 80);

  noFill();
  stroke(255);
  rect(width / 2 - progressBarWidth / 2, height / 2, progressBarWidth, progressBarHeight);

  fill(255);
  noStroke();
  rect(width / 2 - progressBarWidth / 2, height / 2, progressBarFill, progressBarHeight);
}

function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = Math.floor(seconds % 60);

  return nf(hours, 2) + ':' + nf(minutes, 2) + ':' + nf(remainingSeconds, 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  progressBarWidth = width * 0.8;
}

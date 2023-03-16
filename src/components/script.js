let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 90,
  speed = 100;

let progress = setInterval(() => {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.index.background = `conic-gradient(red, ${
    progressStartValue * 3.6
  }deg, yellow, 0deg, #ededed)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

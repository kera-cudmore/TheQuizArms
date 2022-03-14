//High Score Constants
const highScoresList = document.getElementById("highscoreslist");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// adds to the high scores area
highScoresList.innerHTML = highScores.map(highScores => {
  return `<li class="highscoreitem">${highScores.name} - ${highScores.score}</li>`;
}).join("");
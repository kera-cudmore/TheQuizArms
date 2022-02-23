// MODAL
// Modal created using tutorial - https://www.youtube.com/watch?v=XH5OW46yO8I

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");


openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});


// BUTTONS
//index page play button

const indexPlay = document.getElementById("play");

indexPlay.onclick = function() {
    window.location.href = "game.html";
};

// index page high scores button

const indexHighScores = document.getElementById("highScores");

indexHighScores.onclick = function() {
    window.location.href = "highscores.html";
};

// high scores page play button

const highScorePlay = document.getElementById("highScorePlay");

highScorePlay.onclick = function() {
    window.location.href="game.html";
};


// high scores page home button

const highScoreHome = document.getElementById("highScoreHome");
    
highScoreHome.onclick = function() {
    location.href = "index.html";
};



// CALL API

// declaring the api urls 
const easyQuiz = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";


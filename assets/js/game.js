// DECLARING CONSTANTS
const easyQuiz = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";

const easy = document.getElementById("easy");
const medium = document.getElementById("medium")
const hard = document.getElementById("hard")

const question = document.getElementById("question");
const next = document.getElementById("next");
 

// HIDE DIFFICULTY SECTION
function hideDifficulty() {
    document.getElementById("difficulty").classList.add("hide");
    document.getElementById("quiz-area").classList.remove("hide");

}


// START GAME FUNCTION
function startGame() {
    fetch(easyQuiz)
    .then(response => response.json())
    .then(data => console.log(data));  
};



// CHOOSE DIFFICULTY - EVENT LISTENERS
// change this to the class of button difficulty so that it performs for all of the difficulty buttons
easy.addEventListener("click", hideDifficulty)
easy.addEventListener("click", startGame);
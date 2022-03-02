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


// START GAME FUNCTION - calling api
async function startGame() {
const response = await fetch(easyQuiz);
const data = await response.json();
return data;
};


// SHUFFLE THE ANSWERS ARRAY - Fisher Yates Shuffle
// shown on youtube tutorial - https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3
function arrayShuffle(array) {
for (let i = array.length -1; i > 0; i--) {
    let s = Math.floor(Math.random() * (i + 1));
[array[i], array[s]] = [array[s], array[i]];
console.log(i);
console.log(s);
console.log(array);
}
};


// Start Game Function - adding questions & answers
startGame().then((data) => {
    console.log(data);
    const results = data.results[0];

    // adds the question to the site
    document.getElementById("question").innerHTML = results.question;

    // Create an array that holds all the answer choices for the question
    const answers = [...results.incorrect_answers, results.correct_answer];
    console.log(answers);


    
    arrayShuffle(answers);
});



// CHOOSE DIFFICULTY - EVENT LISTENERS
// change this to the class of button difficulty so that it performs for all of the difficulty buttons
easy.addEventListener("click", hideDifficulty);
easy.addEventListener("click", startGame);

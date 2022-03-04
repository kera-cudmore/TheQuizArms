// DECLARING CONSTANTS
// api
const easy = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const medium = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hard = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";

/* difficulty buttons
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
*/
//game page buttons
const question = document.getElementById("question");
const answer1 = document.getElementById("answer1")
const answer2 =document.getElementById("answer2")
const answer3 =document.getElementById("answer3")
const answer4 =document.getElementById("answer4")
const next = document.getElementById("next");
 

// HIDE DIFFICULTY SECTION FUNCTION
function hideDifficulty() {
    document.getElementById("difficulty").classList.add("hide");
    document.getElementById("quiz-area").classList.remove("hide");
}


// SHUFFLE THE ANSWERS ARRAY FUNCTION - using Fisher Yates Shuffle
// reseached on W3Schools and adapted as shown on youtube tutorial - https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3
function arrayShuffle(array) {
for (let i = array.length -1; i > 0; i--) {
    let s = Math.floor(Math.random() * (i + 1));
[array[i], array[s]] = [array[s], array[i]];
}
}


// START GAME FUNCTION - calling api
async function startGame() {
    const response = await fetch(easyQuiz);
    const data = await response.json();

        console.log(data);
        const results = data.results[0];
    
        // adds the question to the site
        document.getElementById("question").innerHTML = results.question;
    
        // Create an array that holds all the answer choices for the question
        const answers = [...results.incorrect_answers, results.correct_answer];
        console.log(answers);
    
        // answers array shuffled & added to answer buttons
        arrayShuffle(answers);
        console.log(answers);
            answer1.innerHTML = `${answers[0]}`;
            answer2.innerHTML = `${answers[1]}`;
            answer3.innerHTML = `${answers[2]}`;
            answer4.innerHTML = `${answers[3]}`;   
        };


/* CHOOSE DIFFICULTY - EVENT LISTENERS
// change this to the class of button difficulty so that it performs for all of the difficulty buttons
easy.addEventListener("click", hideDifficulty);
easy.addEventListener("click", startGame);
*/

const difficultyButtons = document.querySelectorAll(".difficulty")
difficultyButtons.forEach(x => x.setAttribute("onclick", "hideDifficulty", "startGame(this.id)"))

function callApi(theId){
alert(theId)
}
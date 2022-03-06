// DECLARING CONSTANTS
// api
const easyQuiz = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";


// difficulty buttons
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

//game page buttons
const question = document.getElementById("question");
const answer1 = document.getElementById("answer1")
const answer2 =document.getElementById("answer2")
const answer3 =document.getElementById("answer3")
const answer4 =document.getElementById("answer4")
const next = document.getElementById("next");
const answerButtons = document.getElementsByClassName("answer-text");

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


//CALL API FUNCTION
async function callApi() {
    const response = await fetch(easyQuiz);
    const data = await response.json(); 
    console.log(data);
    
    // hides the difficulty box and runs start game function with data called
    hideDifficulty();
    startGame(data);
}


// CHECK ANSWER FUNCTION
function checkAnswer(e) {
  console.log(e);
    // check if item clicked has the dataset of correct
    if (e.target.dataset.correct) {
        console.log("Right answer");
    // add the correct answer css

    } else {
        console.log("wrong answer");
        //add class incorrect (class to be made)

    }

// if questions less than 15 display next button
next.classList.remove("hide");
// if answers =15 show end game page

// remove data-correct from button
}

/*
// NEXT QUESTION FUNCTION - run when next button pressed
function nextQuestion() {
    
    // run start game again?
};
*/

// START GAME FUNCTION
function startGame(data) {
    //hides the next button
    const results = data.results[0];
    // adds the question to the site
    document.getElementById("question").innerHTML = results.question;

    const correctAnswer = results.correct_answer;

    // Create an array that holds all the answer choices for the question
    const answers = [...results.incorrect_answers, correctAnswer];

    // answers array shuffled & added to answer buttons (can this be condensed?)
    arrayShuffle(answers);
    //console.log(answers);
        answer1.innerText = `${answers[0]}`;
        answer2.innerText = `${answers[1]}`;
        answer3.innerText = `${answers[2]}`;
        answer4.innerText = `${answers[3]}`;   
    console.log(correctAnswer);

    for (let button of answerButtons) {

        if (button.innerText === correctAnswer) {
            button.setAttribute("data-correct", "true")
            console.log(button);
        }
        button.addEventListener("click", checkAnswer);
    }
}


// CHOOSE DIFFICULTY - EVENT LISTENERS
// change so the button selected calls the api and adds the correct url into fetch
easy.addEventListener("click", callApi);
/*
medium.addEventListener("click", callApi);
hard.addEventListener("click", callApi);
*/

/*
const difficultyButtons = document.querySelectorAll(".difficulty")
difficultyButtons.forEach(x => x.setAttribute("onclick", "callApi(this.id)"))
*/


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

/*
// CHECK ANSWER FUNCTION
function checkAnswer() {
    
if (    // check if item clicked correctAnswer === true - 
    ) {
    //add class correct (class to be made)
} else {
    //add class incorrect (class to be made)
}

    // display next button
   // next.classList.remove("hide");
}
*/

/*
// NEXT QUESTION FUNCTION - run when next button pressed
function nextQuestion() {
    for (let questionsCompleted = 1; questionsCompleted < 15; questionsCompleted ++) {
    // run start game again?
        //startGame - add 1 to results 
    } else {
    //else results.length reached show score page - To be added
    }
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
        console.log(answers);
    
        // answers array shuffled & added to answer buttons (can this be condensed?)
        arrayShuffle(answers);
        console.log(answers);
            answer1.innerHTML = `${answers[0]}`;
            answer2.innerHTML = `${answers[1]}`;
            answer3.innerHTML = `${answers[2]}`;
            answer4.innerHTML = `${answers[3]}`;   

        
        
        };


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


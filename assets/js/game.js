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
let questionNo = 0;

const questionNumber = document.getElementById("answer-no");
const score = document.getElementById("score");

const question = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answerButtons = document.getElementsByClassName("answer-text");

const next = document.getElementById("next");


// HIDE DIFFICULTY SECTION FUNCTION
function hideDifficulty() {
  document.getElementById("difficulty").classList.add("hide");
  document.getElementById("quiz-area").classList.remove("hide");
}


// SHUFFLE THE ANSWERS ARRAY FUNCTION - using Fisher Yates Shuffle
// reseached on W3Schools and adapted as shown on youtube tutorial - https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3
function arrayShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
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
  getQuestion(data);
}


// increase score function
function increaseScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = oldScore + 10;

}


// NEXT QUESTION FUNCTION - run when next button pressed
function nextQuestion(e) {
  console.log("next question");
  getQuestion();
}


// CHECK ANSWER FUNCTION - e is the event (an answer button being clicked)
function checkAnswer(e) {
  console.log(e);
  // check if item clicked has the dataset of correct
  if (e.target.dataset.correct) {
    console.log("Right answer");
    // add the correct answer css
    document.getElementById("outer-container").classList.add("correct");
    //add to the score counter
    increaseScore();
    // Remove the attribute on correct question ready for the next question

  } else {
        console.log("wrong answer");
        //add class incorrect (class to be made)
        document.getElementById("outer-container").classList.add("incorrect");
  }

    //removes hide class from the next button to display
    document.getElementById("next").classList.remove("hide");
    document.getElementById("next").addEventListener("click", nextQuestion);
    e.target.removeAttribute("data-correct", "true");
  }



// GET QUESTION FUNCTION
function getQuestion(data) { 
  document.getElementById("next").classList.add("hide");

  let results = data.results[0];

  if (questionNo <= 14) {
    // adds the question to the site
    document.getElementById("question").innerHTML = results.question;

    const correctAnswer = results.correct_answer;

    // Create an array that holds all the answer choices for the question
    const answers = [...results.incorrect_answers, correctAnswer];

    // answers array shuffled & added to answer buttons  (condensed using interation)
     arrayShuffle(answers);

    answer1.innerText = `${answers[0]}`;
    answer2.innerText = `${answers[1]}`;
    answer3.innerText = `${answers[2]}`;
    answer4.innerText = `${answers[3]}`;
    console.log(correctAnswer);

    // loops through to check for correct answer & adds data attribute to the correct answer 
    for (let button of answerButtons) {
      if (button.innerText === correctAnswer) {
        button.setAttribute("data-correct", "true");
        console.log(button);
      }
      // adds event listener to each button & on click runs check answer function
      button.addEventListener("click", checkAnswer);
    }
  } else {
    console.log("No more questions");
    }
    } 




// CHOOSE DIFFICULTY - EVENT LISTENERS
// change so the button selected calls the api and adds the correct url into fetch
easy.addEventListener("click", callApi);
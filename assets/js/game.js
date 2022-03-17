let data = {};
let questionNo = 0;

// API
//const easyQuiz = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";

// DIFFICULTY BUTTONS
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
let apiAddress;

//GAME PAGE
// Counter Area - Scores & Question Number
let questionCounter = 1;
let questionNumber = document.getElementById("answer-no");
let score = 0;
let acceptingAnswers = true;
let scoreCounter = document.getElementById("score");

// Quiz Area
const question = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer-text");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const next = document.getElementById("next");
let answerSelected;
let displayCorrectAnswer;

// End Game Area
const finalScore = document.getElementById("final-score");
const teamName = document.getElementById("teamname");
const submitScoreBtn = document.getElementById("submitscorebtn");
const MAX_HIGH_SCORES = 10;


// HIDE DIFFICULTY FUNCTION
function hideDifficulty() {
  document.getElementById("difficulty").classList.add("hide");
  document.getElementById("quiz-area").classList.remove("hide");
}


// SHUFFLE THE ANSWERS ARRAY FUNCTION - using Fisher Yates Shuffle
// reseached on W3Schools and adapted as shown on youtube tutorial - 
// https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3
function arrayShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let s = Math.floor(Math.random() * (i + 1));
    [array[i], array[s]] = [array[s], array[i]];
  }
}


//CALL API FUNCTION
async function callApi() {
  const response = await fetch(apiAddress);
  if (response.status >= 200 && response.status <=299) {
  data = await response.json();
  // hides the difficulty box and runs start game function with data called
  hideDifficulty();
  getQuestion(data);
} else 
  // This is where the error is handled - redirects to 500 page
  window.location.assign("500.html");
}


// INCREASE SCORE FUNCTION
function increaseScore() {
  score += 10;
  scoreCounter.innerText = `${score}`;
}


// NEXT QUESTION FUNCTION - run when next button pressed
function nextQuestion(e) {
  questionCounter++;
  questionNumber.innerText = `${questionCounter}`;
  document.getElementById(answerSelected).classList.remove("correctbtn", "incorrectbtn");
  displayCorrectAnswer.classList.remove("correctbtn");
  // Remove the attribute on correct question ready for the next question
  e.target.removeAttribute("data-correct", "true");
  getQuestion(data);
}


// CHECK ANSWER FUNCTION - e is the event (an answer button being clicked)
function checkAnswer(e) {
  // Disables the answer buttons to prevent them being clicked after user answers
  $('.answer-text').prop('disabled', true);
  // get the id of the clicked button and add to this variable
  answerSelected = e.target.getAttribute("id");

  // check if item clicked has the dataset of correct
  if (e.target.dataset.correct) {
    // add the correct answer css styling
    document.getElementById("outer-container").classList.add("correct");
    // add the correctbtn styling
    document.getElementById(answerSelected).classList.add("correctbtn");
    //add to the score counter
    increaseScore();

  } else {
    // add the incorrectbtn styling
    document.getElementById(answerSelected).classList.add("incorrectbtn");
    //add incorrect styling
    document.getElementById("outer-container").classList.add("incorrect");
    // adds the correct answer to the constant & applies the correct button styling
    displayCorrectAnswer = document.querySelector("[data-correct='true']");
    displayCorrectAnswer.classList.add("correctbtn");

  }
  //removes hide class from the next button to display
  next.classList.remove("hide");
  next.addEventListener("click", nextQuestion);
}


// GET QUESTION FUNCTION
function getQuestion(data) {
  next.classList.add("hide");
  document.getElementById("outer-container").classList.remove("correct", "incorrect");

  //Allows the answer buttons to be clicked
  $('.answer-text').prop('disabled', false);
  let results = data.results[questionNo];
  if (questionNo <= 14) {
    // adds the question to the site
    question.innerHTML = results.question;
    const correctAnswer = results.correct_answer;
    // Create an array that holds all the answer choices for the question
    const answers = [...results.incorrect_answers, correctAnswer];
    // answers array shuffled & added to answer buttons
    arrayShuffle(answers);
    answer1.innerHTML = `${answers[0]}`;
    answer2.innerHTML = `${answers[1]}`;
    answer3.innerHTML = `${answers[2]}`;
    answer4.innerHTML = `${answers[3]}`;

    // loops through to check for correct answer & adds data attribute to the correct answer 
    for (let button of answerButtons) {
      if (button.innerText === correctAnswer) {
        button.setAttribute("data-correct", "true");
      }
      // adds event listener to each button & on click runs check answer function
      button.addEventListener("click", checkAnswer);
    }
    questionNo++;
  } else {
    // display final screen
    document.getElementById("quiz-area").classList.add("hide");
    document.getElementById("end-area").classList.remove("hide");
    // insert the final score
    finalScore.innerText = `${score}`;
  }
}


// SAVE HIGH SCORE FUNCTION
//tutorial used to implement https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9
function saveHighScore(e) {
  // prevents the form opening new page which it does by default
  e.preventDefault();
  // creating scoreLog object that will hold the team name and the score
  const scoreLog = {
    name: teamName.value,
    score: score
  };

  // pushes the scoreLog object into the highScores array
  highScores.push(scoreLog);
  //sorts the array by score
  highScores.sort((a, b) => b.score - a.score);
  // cuts off the array at the max high scores number
  highScores.splice(MAX_HIGH_SCORES);
  // saves the highscore array to local storage 
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // opens the highscores.html page
  window.location.assign("highscores.html");
}


//HIGH SCORES STORAGE AND RETRIVAL SECTION
//tutorial used to implement https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9
//get the high scores array from local storage - OR - get empty array if there isn't one
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// adds event listener to the teamname input field on keyup
teamName.addEventListener("keyup", () => {
  //if there is nothing in the input field it disabled the submit score button
  submitScoreBtn.disabled = !teamName.value;
});

// event listener on the Submit high score button on end game page - on click runs the saveHighScore function
submitScoreBtn.addEventListener("click", saveHighScore);


// adds event listener to each button & on click runs check answer function
easy.addEventListener('click', callApi);
medium.addEventListener('click', callApi);
hard.addEventListener('click', callApi);
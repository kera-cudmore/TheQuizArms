// Setting up the html elements to place questions and answers

const question = document.getElementById("question");

//makes an array from the 4 answers buttons
const answers = Array.from(document.getElementsByClassName("answer-text"));
console.log(answers);






// CALL API
// declaring the api urls 
const easyQuiz = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";

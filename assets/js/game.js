// DECLARING CONSTANTS
const easyQuiz = "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple";
const mediumQuiz = "https://opentdb.com/api.php?amount=15&difficulty=medium&type=multiple";
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=9&difficulty=hard&type=multiple";

const easy = document.getElementById("easy");
const medium = document.getElementById("medium")
const hard = document.getElementById("hard")

const question = document.getElementById("question");
const next = document.getElementById("next");
 


// CHOOSE DIFFICULTY - EVENT LISTENERS
easy.addEventListener("click", alert("hello"));








/*

// START GAME FUNCTION
startGame = () => {

};





function useApiData(data) {
    document.getElementById("question").innerHTML = `${data.results[0].question}`
}


// START GAME
//defines the start game function
startGame = () => {
    console.log("hello");

async function easyApiRequest() {
    let response = await fetch (easyQuiz);
    console.log(response)
    let data = await response.json()
    console.log(data)
};

    document.getElementsByClassName("difficulty").classList.add("hide");
    document.getElementByClass("quiz-area").classList.remove("hide");



    useApiData(data)
};

*/

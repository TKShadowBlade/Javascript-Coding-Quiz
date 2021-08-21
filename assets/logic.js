const startButton = document.getElementById("start-button")
const questionArea = document.getElementById("question-card")
const answerButtons = document.getElementById("answer-buttons")
const questionsEl = document.getElementById("questions")
const timerEl = document.getElementById("timer")

var timeRemain = 80

let randomQuestion
let questionIndex

startButton.addEventListener("click", startQuiz)


function startQuiz(){
    startButton.classList.add("hide")
    randomQuestion = questionsArr.sort(function(){
        Math.floor(Math.random() * questionsArr.length)})
    questionIndex = 0
    questionArea.classList.remove("hide")
    startTimer()
    newQuestion()
}

function newQuestion() {
    showQuestion(randomQuestion[questionIndex])
}

function startTimer() {
    let timeInterval = setInterval(function(){
        timeRemain--;
        timerEl.textContent = "Time: " + timeRemain;

        if(timeRemain === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);

}

function showQuestion(question) {
    questionsEl.innerText = question.title
    
}

function pickAnswer() {

}






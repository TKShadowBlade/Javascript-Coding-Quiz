const startButton = document.getElementById("start-button")
const questionArea = document.getElementById("question-card")
const answerButtons = document.getElementById("answer-buttons")
var questionsEl = document.getElementById("questions")
const timerEl = document.getElementById("timer")
var score = document.getElementById("score")


var timeRemain = 80
var timePenalty = 10
var startScore = 0


let randomQuestion
let questionIndex = 0
let currentQuestion = ""

startButton.addEventListener("click", startQuiz)


function startQuiz(){
    startButton.classList.add("hide")
    questionIndex = 0
    questionArea.classList.remove("hide")
    startTimer()
    newQuestion()
}

function startTimer() {
    let timeInterval = setInterval(function(){
        timeRemain--;
        timerEl.textContent = "Timer: " + timeRemain;

        if(timeRemain === 0) {
            clearInterval(timeInterval);
            finalScore()
        }
    }, 1000);

}

function newQuestion() {
    currentQuestion = questionsArr[questionIndex]
    showQuestion(currentQuestion)
    questionIndex++
       
}

function showQuestion(question) {
    console.log(question)
    questionsEl.innerText = question.title
    answerButtons.innerHTML = ""
    for(let i = 0; i < question.choices.length; i++){
        let choice = document.createElement("button")
        choice.setAttribute("value", question.choices[i])
        choice.textContent = question.choices[i]
        choice.onclick = pickAnswer
        answerButtons.append(choice)
    }
}

function pickAnswer(event) {
    if (event.target.value === currentQuestion.answer) {
        alert("Correct!")
        score.textContent = "Score: " + (startScore + 1)
        startScore++
        
        
    }
    else {
        alert("Incorrect!")
        timeRemain-=timePenalty
        
        
        
    }
    if (questionIndex < questionsArr.length){
    newQuestion()}
    else {
        finalScore()
    }
}

function finalScore() {
// Show final score
    questionArea.innerHTML = ""
    let newHeader = document.createElement("h1")
        newHeader.setAttribute("id", "newHeader")
        newHeader.textContent = "Final Score: " + startScore
        questionArea.append(newHeader)

    let newLabel = document.createElement("p")
        newLabel.setAttribute("id", "newLabel")
        newLabel.textContent = "Enter Initials Here: "
        questionArea.appendChild(newLabel)

    let newInput = document.createElement("input")
        newInput.setAttribute("type", "text")
        newInput.setAttribute("id", "initials")
        newInput.textContent = ""
        questionArea.appendChild(newInput)
}

function highScores() {
// collect and display high scores
}

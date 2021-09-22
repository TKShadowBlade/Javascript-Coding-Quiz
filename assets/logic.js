const startButton = document.getElementById("start-button")
const questionArea = document.getElementById("question-card")
const answerButtons = document.getElementById("answer-buttons")
var questionsEl = document.getElementById("questions")
const timerEl = document.getElementById("timer")
let score = document.getElementById("score")
const highScore = document.getElementById("high-scores")


var timeRemain = 80
var timePenalty = 10
var startScore = 0
var timeInterval


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
            endQuiz();
        }

        }, 1000)


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
        endQuiz()
    }
}

function endQuiz() {
// Create area to show final score
    questionArea.innerHTML = ""
    let newHeader = document.createElement("h1")
        newHeader.setAttribute("id", "newHeader")
        newHeader.textContent = "Final Score: " + startScore
        questionArea.append(newHeader)

// create area to enter initials
    let newLabel = document.createElement("p")
        newLabel.setAttribute("id", "newLabel")
        newLabel.textContent = "Enter Initials Here: "
        questionArea.appendChild(newLabel)

    let newInput = document.createElement("input")
        newInput.setAttribute("type", "text")
        newInput.setAttribute("id", "initials")
        newInput.textContent = ""
        questionArea.appendChild(newInput)

    let submitButton = document.createElement("button")
        submitButton.setAttribute("type", "submit")
        submitButton.setAttribute("id", "Submit")
        submitButton.textContent = "Submit"
        questionArea.appendChild(submitButton)

// collect and display high scores
    submitButton.addEventListener('click', function() {
        //console.log("Did this work?")
        localStorage.setItem("inits", newInput.value);
        localStorage.setItem("score", startScore)

        highScore.textContent = "High Score: " + localStorage.getItem("score")
    })
        

        

    
}

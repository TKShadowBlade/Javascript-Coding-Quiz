const startButton = document.getElementById("start-button")
const questionArea = document.getElementById("question-card")
const answerButtons = document.getElementById("answer-buttons")
const questionsEl = document.getElementById("questions")
const timerEl = document.getElementById("timer")
let correct = document.getElementById("correct")
let wrong = document.getElementById("wrong")

var timeRemain = 80

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

function newQuestion() {
    currentQuestion = questionsArr[questionIndex]
    showQuestion(currentQuestion)
    questionIndex++
    
    
}

function startTimer() {
    let timeInterval = setInterval(function(){
        timeRemain--;
        timerEl.textContent = "Timer: " + timeRemain;

        if(timeRemain === 0) {
            clearInterval(timeInterval);
            endQuiz()
        }
    }, 1000);

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
        correct++
        correct.textContent = ""
    }
    else {
        alert("Incorrect!")
        wrong++
        wrong.textContent = ""
        
    }
    if (questionIndex < questionsArr.length){
    newQuestion()}
    else {
        endQuiz()
        displayStats()
    }
}

function displayStats() {
// Show total right and wrong answers
    alert(correct + " correct")
    alert(wrong + " incorrect")
}

function endQuiz() {
// Set up what happens when the quiz is over
    prompt("Enter your initials to save your score")
}

function highScores() {
// collect and display high scores
}

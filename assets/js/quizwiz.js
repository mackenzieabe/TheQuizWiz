//setting variables so that I can call on them later on in this js
var quiz = [
    {
        question: "What symbol is used to identiy classes in JavaScript?",
        choices: ['!', '$', '.'],
        correct: '.'
    },
    {
        question: "Arrays are enclosed with ______? ",
        choices: ['parenthesis', 'curly brackets', 'square brackets'],
        correct: 'square brackets'
    },
    {
        question: "What command is used to create a new branch on gitbash?",
        choices: ['I-command-you-to-create-a-new-branch-now', 'git checkout -b <newbranchname>', 'git create new branch'],
        correct: 'git checkout -b <newbranchname>'
    }
]
var score = 0
var timer = 60
var questionIndex = 0
var quizContainer = document.querySelector('#quiz-container')
var startContainer = document.querySelector('#start-container')
var timeContainer = document.querySelector('.time-container')
var buttonContainer = document.querySelector('#button-container')
var startBtn = document.querySelector('.start')
var nextBtn = document.querySelector('.next-btn')
var questionContainer1 = document.querySelector('.question-container1')
var choiceContainer1 = document.querySelector('.choice-container1')

//Created a click function for the start button 
startBtn.addEventListener('click', function () {
    //added the hidden class to the start button so that it disappears after it is clicked 
    startContainer.classList.add('hidden')
    //this function renders question one as soon the start button is clicked 
    renderQuestionOne()
    //this function starts the timer as soona as the start button is clicked and the first question is rendered 
    startTimer()
})
//timer starts when quiz starts and begins at 60 seconds and begins counting down. If the questions are answered before the time gets to 0 the quiz will end. 
function startTimer() {
    timeContainer.textContent = timer
    var timeInt = setInterval(function () {
        timer--
        timeContainer.textContent = timer
        if (timer <= 0 || questionIndex === quiz.length) {
            endQuiz()
            clearInterval(timeInt)
            timeContainer.textContent = "0"
        }
    }, 1000);
}
//grabs the first question in the quiz variable above and renders it on the page 
function renderQuestionOne() {
    var question = document.createElement('h1')
    question.textContent = quiz[0].question
    questionContainer1.append(question)
//appends choices for the first question from the quiz variable above and renders it on the page 
    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[0].choices[i]
        choiceContainer1.append(choices)
//click function for choices; if right choice is clicked then the user will recieve 33 points. If wrong choice is clicked 30 seconds will be subtracted from time.
        choices.addEventListener('click', function (event) {
            var clicked = event.target.textContent
            if (clicked === quiz[0].correct) {
                console.log('correct');
                score += 33

            } else {
                console.log('incorrect');
                timer -= 30
            }
            renderQuestionTwo();
        });
    }
}

//question one and it's corresponding choices will be cleared and the second question will render 
function renderQuestionTwo() {
    questionIndex++
    questionContainer1.textContent = ""
    choiceContainer1.textContent = ""
    var question = document.createElement('h1')
    question.textContent = quiz[1].question
    questionContainer1.append(question)

    for (var i = 0; i < quiz[1].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[1].choices[i]
        choiceContainer1.append(choices)

        choices.addEventListener('click', function (event) {
            var clicked = event.target.textContent
            if (clicked === quiz[1].correct) {
                console.log('correct');
                score += 33

            } else {
                console.log('incorrect');
                timer -= 30
            }

            renderQuestionThree()
        })
    }
}
//question two and it's corresponding choices will be cleared and the third question will render
function renderQuestionThree() {
    questionIndex++
    questionContainer1.textContent = ""
    choiceContainer1.textContent = ""
    var question = document.createElement('h1')
    question.textContent = quiz[2].question
    questionContainer1.append(question)

    for (var i = 0; i < quiz[2].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[2].choices[i]
        choiceContainer1.append(choices)

        choices.addEventListener('click', function (event) {
            var clicked = event.target.textContent
            if (clicked === quiz[2].correct) {
                console.log('correct');
                score += 33

            } else {
                console.log('incorrect');
                timer -= 30
            }
            questionIndex++
        })
    }
}

//the third question and it's corresponding choices will clear and the user will be directed to an input field for their name and a 'submit' button
function endQuiz() {
    questionContainer1.textContent = ""
    choiceContainer1.textContent = ""
    var name = document.createElement('input')
    name.setAttribute('placeholder', 'Please Type Your Name')
    questionContainer1.append(name)

    var submitBtn = document.createElement('button')
    
    submitBtn.textContent = 'Submit'
    questionContainer1.append(submitBtn)

    submitBtn.addEventListener('click', function () {
        var userData = {
            name: name.value,
            finalScore: score
        }
//user's score is saved to local storage 
        var storage = JSON.parse(localStorage.getItem('quizScores'))
        if (storage === null) {
            storage = []
        }

        storage.push(userData)
        localStorage.setItem('quizScores', JSON.stringify(storage))
        window.location.href = 'highscores.html'
    })

}
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
        question: "What command do you use to create a new branch on gitbash?",
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

startBtn.addEventListener('click', function () {
    startContainer.classList.add('hidden')
    renderQuestionOne()
    startTimer()
})

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

function renderQuestionOne() {
    var question = document.createElement('h1')
    question.textContent = quiz[0].question
    questionContainer1.append(question)

    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[0].choices[i]
        choiceContainer1.append(choices)

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

        var storage = JSON.parse(localStorage.getItem('quizScores'))
        if (storage === null) {
            storage = []
        }

        storage.push(userData)
        localStorage.setItem('quizScores', JSON.stringify(storage))
        window.location.href = 'highscores.html'
    })

}
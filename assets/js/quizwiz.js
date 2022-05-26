var quiz = [
    {
        question: "this is question 1",
        choices: ['answer 1 of 1', 'answer 2 of 1', 'answer 3 of 1'],
        correct: 'answer 1 of 1'
    },
    {
        question: "this is question 2",
        choices: ['answer 1 of 2', 'answer 2 of 2', 'answer 3 of 2'],
        correct: 'answer 2 of 2'
    },
    {
        question: "this is question 3",
        choices: ['answer 1 of 3', 'answer 2 of 3', 'answer 3 of 3'],
        correct: 'answer 3 of 3'
    }
]
var score = 0
var timer = 100
var startContainer = document.querySelector('#start-container')
var startBtn = document.querySelector('.start')
var questionContainer = document.querySelector('.question-container')
var choiceContainer = document.querySelector('.choice-container')

startBtn.addEventListener('click', function() {
    startContainer.classList.add('hidden')
    renderQuestionOne()
})

function renderQuestionOne() {
    var question = document.createElement('h1')
    question.textContent = quiz[0].question
    questionContainer.append(question)

    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[0].choices[i]
        choiceContainer.append(choices)
        
        choices.addEventListener('click', function(event) {
            var clicked = event.target.textContent
            if (clicked === quiz[0].correct) {
                console.log('correct');
                score += 33

            } else {
                console.log('incorrect');
                timer -= 30
            }
            renderQuestionTwo()
        })
    }
}

function renderQuestionTwo() {
    questionContainer.textContent = ""
    choiceContainer.textContent = ""
    
}
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
var timer = 100
var startContainer = document.querySelector('#start-container')
var buttonContainer = document.querySelector('#button-container')
var startBtn = document.querySelector('.start')
var nextBtn = document.querySelector('.next')
var submitBtn = document.querySelector('.submit')
var questionContainer = document.querySelector('#question-container')
var questionContainer1=document.querySelector('.question-container1')
var choiceContainer1 = document.querySelector('.choice-container1')
var questionContainer2=document.querySelector('.question-container2')
var choiceContainer2 = document.querySelector('.choice-container2')
var questionContainer3=document.querySelector('.question-container3')
var choiceContainer3 = document.querySelector('.choice-container3')

startBtn.addEventListener('click', function() {
    startContainer.classList.add('hidden')
    renderQuestionOne()
})
function renderQuestionOne() {
    var question = document.createElement('h1')
    question.textContent = quiz[0].question
    questionContainer1.append(question)

    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[0].choices[i]
        choiceContainer1.append(choices)
        
        choices.addEventListener('click', function(event) {
            var clicked = event.target.textContent
            if (clicked === quiz[0].correct) {
                console.log('correct');
                score += 33

            } else {
                console.log('incorrect');
                timer -= 30

            }
            questionContainer1.classList.add('hidden')
            choiceContainer1.classList.add('hidden')

            nextBtn.addEventListener('click',function(event){
                if (event.key === "Next"){
                    event.preventDefault();
                    document.getElementsByClassName('next').click();
                }
                renderQuestionTwo();
            })
            
            
        })
    }
}
 
function renderQuestionTwo() {
    var question = document.createElement('h1')
    question.textContent = quiz[1].question
    questionContainer2.append(question)

    for (var i = 0; i < quiz[1].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[1].choices[i]
        choiceContainer2.append(choices)

        choices.addEventListener('click',function(event) {
            var clicked = event.target.textContent
            if (clicked === quiz[1].correct) {
                console.log('correct');
                score += 33
            
            } else { 
                console.log('incorrect');
                timer -= 30
            }
            questionContainer2.classList.add('hidden')
            choiceContainer2.classList.add('hidden')
            renderQuestionThree()
        })
    }
} 
function renderQuestionThree() {
    var question = document.createElement('h1')
    question.textContent = quiz[2].question
    questionContainer3.append(question)

    for (var i = 0; i < quiz[2].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[2].choices[i]
        choiceContainer3.append(choices)

        choices.addEventListener('click',function(event) {
            var clicked = event.target.textContent
            if (clicked === quiz[2].correct) {
                console.log('correct');
                score += 33
            
            } else { 
                console.log('incorrect');
                timer -= 30
            }
        })
    }
}
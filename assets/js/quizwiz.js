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
var quizContainer = document.querySelector('#quiz-container')
var startBtn = document.querySelector('.start')
var questionOne = document.querySelector('#q1')
var questionTwo=document.querySelector('#q2')
var questionThree = document.querySelector('#q3')
var choiceOne = document.querySelector('.choice1')
var choiceTwo = document.querySelector('.choice2')
var choiceThree = document.querySelector('.choice3')


startBtn.addEventListener('click', function() {
    quizContainer.classList.add('hidden')
    renderQuestionOne()
})
function renderQuestionOne() {
    var question = document.createElement('h1')
    question.textContent = quiz[0].question
    questionOne.append(question);

    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[0].choices[i]
        choiceOne.append(choices);
        
        choices.addEventListener('click', function(event) {
            var clicked = event.target.textContent
            if (clicked === quiz[0].correct) {
                console.log('correct');
                score += 33

            } else {
                console.log('incorrect');
                timer -= 30

            }
           questionOne.classList.add('hidden')
            choiceOne.classList.add('hidden')
        $(".next-btn").click(function() {
            var $parent = $(this).parent("#q1");
            $parent.hide();
            $parent.next().show();
        })
        renderQuestionTwo();
            })
            
         }
    }

 
function renderQuestionTwo() {
    var question = document.createElement('h1')
    question.textContent = quiz[1].question
    questionTwo.append(question)

    for (var i = 0; i < quiz[1].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[1].choices[i]
        choiceTwo.append(choices)

        choices.addEventListener('click',function(event) {
            var clicked = event.target.textContent
            if (clicked === quiz[1].correct) {
                console.log('correct');
                score += 33
            
            } else { 
                console.log('incorrect');
                timer -= 30
            }
            questionTwo.classList.add('hidden')
            choiceTwo.classList.add('hidden')
            renderQuestionThree()
        })
    }
} 
function renderQuestionThree() {
    var question = document.createElement('h1')
    question.textContent = quiz[2].question
    questionThree.append(question)

    for (var i = 0; i < quiz[2].choices.length; i++) {
        var choices = document.createElement('button')
        choices.textContent = quiz[2].choices[i]
        choiceThree.append(choices)

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

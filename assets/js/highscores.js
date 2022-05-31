var highscoreContainer = document.querySelector('.highscore-container')
var storage = JSON.parse(localStorage.getItem('quizScores'))

if (storage === null) {
    var noScore = document.createElement('h4')
    noScore.textContent = "No Highscores"
    highscoreContainer.append(noScore)
} else {
    highscoreContainer.textContent = ""

    for (var i = 0; i < storage.length; i++) {
        var p = document.createElement('p')
        p.textContent = 'NAME: ' + storage[i].name + '---------- SCORE: ' + storage[i].finalScore
        highscoreContainer.append(p) 
    }
}
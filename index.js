
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")


function increaseHomeButton(points){
    let currentscore = parseInt(homeScoreEl.textContent)
    homeScoreEl.textContent = currentscore + points
}


function increaseAwayButton(points){
    let currentscore = parseInt(awayScoreEl.textContent)
    awayScoreEl.textContent = currentscore + points
}

function resetHomeButton(points) {
    let currentscore = parseInt(homeScoreEl.textContent)
    homeScoreEl.textContent = points
}

function resetAwayButton(points) {
    let currentscore = parseInt(awayScoreEl.textContent)
    awayScoreEl.textContent = points
}

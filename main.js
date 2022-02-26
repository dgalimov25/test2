let e_score = document.getElementById('score')
let score = 0

document.getElementById('click').onclick = function () {
    score++
    e_score.innerHTML = score
}
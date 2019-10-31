var rightScore = localStorage.getItem("rightScore");
var wrongScore = localStorage.getItem("wrongScore");
console.log(rightScore);
console.log(wrongScore);

document.querySelector("main").innerHTML = `<h1>Halloween Movie Quizz</h1>
<div class="score-panel">
  <h2>FINAL SCORE</h2>
  <div class="score-number">
    <p class="right"><span>${rightScore}</span>Correct</p>
    <p class="wrong"><span>${wrongScore}</span>Wrong</p>
  </div>
</div>`;

displayCatchPhrase();
// function for the final-score html
function displayCatchPhrase() {
  // display catchphrase depending on the score
  if (rightScore >= 5) {
    document.querySelector(
      ".score-number"
    ).innerHTML += `<p class="win">You survived</p>`;
  } else if (rightScore < 5) {
    document.querySelector(
      ".score-number"
    ).innerHTML += `<p class="lose">You're dead...</p>`;
  } else if (rightScore === 5) {
    document.querySelector(
      ".score-number"
    ).innerHTML += `<p class="even">You were almost dead...but you survived!</p>`;
  }
}

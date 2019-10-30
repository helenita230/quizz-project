import myQuestions from "./questions.js";

var currentQuestionIndex = 0;

displayQuizz();

// function to build quizz with images
function buildFormImages(question) {
  const output = [];
  const answers = [];

  for (let number in question.answers) {
    answers.push(`<div>${question.answers[number]}</div>`);
  }

  function buildImages() {
    var str = '<div class="container media">';
    question.image.forEach(img => {
      str += `<img src="${img}" />`;
    });
    str += "</div>";
    return str;
  }

  output.push(
    `<main id="quizz">
           <h1>Halloween Movie Quizz</h1>
           <div class="container question">
             <h2>Question ${currentQuestionIndex + 1}</h2>
             <p>${question.question}</p>
           </div>
           ${buildImages()}
           <div class="container time">
             <div id=progress-time>
               <div class="gauge"></div>
             </div>
           </div>
           <div class="container answers"> ${answers.join("")} </div>
           <div class="footer">
             <div class="score"><span>SCORE:</span>
               <p class="right"><span>0</span>Correct</p>
               <p class="wrong"><span>0</span>Wrong</p> 
          </div>
          <button id="btn_next">Next question</button>
        </main>`
  );

  console.log(output);
  return output.join("");
}

// function to build quizz with audio
function buildFormAudio(question) {
  const output = [];
  const answers = [];

  for (let number in question.answers) {
    answers.push(`<div>${question.answers[number]}</div>`);
  }

  function buildAudio() {
    var str = '<div class="container media">';
    question.audio.forEach(audio => {
      str += `<audio controls autoplay src="${audio}"></audio>`;
    });
    str += "</div>";
    return str;
  }
  output.push(
    `<main id="quizz">
             <h1>Halloween Movie Quizz</h1>
             <div class="container question">
               <h2>Question ${currentQuestionIndex + 1}</h2>
               <p>${question.question}</p>
             </div>
             ${buildAudio()}
             <div class="container time">
             <div id=progress-time>
               <div class="gauge"></div>
             </div>
           </div>
             <div class="container answers"> ${answers.join("")} </div>
           <div class="footer">
             <div class="score"><span>SCORE:</span>
               <p class="right"><span>0</span>Correct</p>
               <p class="wrong"><span>0</span>Wrong</p> 
          </div>
          <button id="btn_next">Next question</button>
        </main>`
  );

  console.log(output);
  return output.join("");
}

// function to build quizz with video
function buildFormVideo(question) {
  const output = [];
  const answers = [];

  for (let number in question.answers) {
    answers.push(`<div>${question.answers[number]}</div>`);
  }

  function buildVideo() {
    var str = '<div class="container media">';
    question.video.forEach(video => {
      str += `<video controls width="250" autoplay src="${video}"></video>`;
    });
    str += "</div>";
    return str;
  }

  output.push(
    `<main id="quizz">
           <h1>Halloween Movie Quizz</h1>
           <div class="container question">
             <h2>Question ${currentQuestionIndex + 1}</h2>
             <p>${question.question}</p>
           </div>
           ${buildVideo()}
           <div class="container time">
             <div id=progress-time>
               <div class="gauge"></div>
             </div>
           </div>
           <div class="container answers"> ${answers.join("")} </div>
           <div class="footer">
             <div class="score"><span>SCORE:</span>
               <p class="right"><span>0</span>Correct</p>
               <p class="wrong"><span>0</span>Wrong</p> 
          </div>
          <button id="btn_next">Next question</button>
        </main>`
  );

  console.log(output);
  return output.join("");
}

// function to display a quizz
function displayQuizz() {
  const body = document.querySelector("body");
  body.innerHTML = "";
  const question = myQuestions[currentQuestionIndex];
  var htmlTemplate;

  if (question.video) {
    htmlTemplate = buildFormVideo(question);
  } else if (question.image) {
    htmlTemplate = buildFormImages(question);
  } else if (question.audio) {
    htmlTemplate = buildFormAudio(question);
  }

  if (!htmlTemplate) htmlTemplate = "<p>todo ... images/video/audio</p>";

  body.innerHTML += htmlTemplate;

  const buttonNext = document.getElementById("btn_next");
  const buttonsAnswer = document.querySelectorAll(".container.answers div");

  console.log(buttonsAnswer);

  buttonsAnswer.forEach(answer => {
    answer.onclick = function() {
      displayAnswer(answer, question.correctAnswer, answer.textContent);
    };
  });

  buttonNext.addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuizz();
  });

  if (currentQuestionIndex === myQuestions.length - 1) {
    buttonNext.innerHTML = "Final Score";
    buttonNext.onclick = () => location.replace("final-score.html");
  }
  setGauge();
}

// function to show right or wrong answer
function displayAnswer(button, responseCorrect, responsePlayer) {
  if (responseCorrect === responsePlayer) {
    button.id = "correctAnswer";
  } else {
    button.id = "wrongAnswer";
  }
}

function setGauge() {
  let time = 0;
  let vG = 255;
  let vR = 0;
  let gauge = document.querySelector(".gauge");
  const changeColor = () => {
    vG -= 40;
    vR += 40;
    gauge.style.backgroundColor = `rgb(${vR},${vG},0)`;
    // const randomNum = Math.round(Math.random() * 100);
  };
  let intervalId = setInterval(() => {
    if (time >= 10) {
      clearInterval(intervalId);
      return;
    }
    changeColor();
    let percentage = (time * 100) / 10;
    gauge.style.width = percentage + "%";
    time++;
  }, 1000);

  if ((time = 10)) {
    var containerTime = document.getElementsByClassName("time");
  }
}

setGauge();

// If myQuestions.video || audio => setTimeOut(temps de la video);

// If myQuestions.

var rightAnswer = document.getElementsByClassName("right");
var rightScore = rightAnswer.children;
var wrongAnswer = document.getElementsByClassName("wrong");

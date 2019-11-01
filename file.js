import myQuestions from "./questions.js";

var currentQuestionIndex = 0;
let rightScoreCounter = 0;
let wrongScoreCounter = 0;
let gaugeIntervalId;
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
           <div class="container" id="time">
             <div id=progress-time>
               <div class="gauge"></div>
               <audio id="laugh" src="./MP3/evil-laugh.wav"></audio>
             </div>
           </div>
           <div class="container answers"> ${answers.join("")} </div>
           <div class="footer">
             <div class="score"><span>SCORE:</span>
               <p class="right"><span id="rightCounter">${rightScoreCounter}</span>Correct</p>
               <p class="wrong"><span id="wrongCounter">${wrongScoreCounter}</span>Wrong</p> 
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
      str += `<audio controls autoplay src="${audio}" id="audio"></audio>`;
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
             <div class="container" id="time">
             <div id=progress-time>
               <div class="gauge"></div>
               <audio id="laugh" src="./MP3/evil-laugh.wav"></audio>
             </div>
           </div>
             <div class="container answers"> ${answers.join("")} </div>
           <div class="footer">
             <div class="score"><span>SCORE:</span>
             <p class="right"><span id="rightCounter">${rightScoreCounter}</span>Correct</p>
             <p class="wrong"><span id="wrongCounter">${wrongScoreCounter}</span>Wrong</p>  
          </div>
          <button id="btn_next">Next question</button>
        </main>`
  );

  console.log(output);
  return output.join("");
}

function buildVideo(video, fullScreen, autoplay) {
  var str = `<div class="container media ${fullScreen}">`;
  str += `<video controls ${autoplay} src="${video}" class="video ${fullScreen}" preload="auto"></video>`;
  str += "</div>";
  return str;
}

// function to build quizz with video
function buildFormVideo(question) {
  console.log("build video");
  const output = [];
  const answers = [];

  for (let number in question.answers) {
    answers.push(`<div>${question.answers[number]}</div>`);
  }

  output.push(
    `<main id="quizz">
           <h1>Halloween Movie Quizz</h1>
           <div class="container question">
             <h2>Question ${currentQuestionIndex + 1}</h2>
             <p>${question.question}</p>
           </div>
           ${buildVideo(question.video)}
           <div class="container" id="time">
             <div id=progress-time>
               <div class="gauge"></div>
               <audio id="laugh" src="./MP3/evil-laugh.wav"></audio>
             </div>
           </div>
           <div class="container answers"> ${answers.join("")} </div>
           <div class="footer">
             <div class="score"><span>SCORE:</span>
             <p class="right"><span id="rightCounter">${rightScoreCounter}</span>Correct</p>
             <p class="wrong"><span id="wrongCounter">${wrongScoreCounter}</span>Wrong</p>  
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

  //build template
  if (question.video) {
    htmlTemplate = buildFormVideo(question);
    htmlTemplate += buildVideo(question.video, "fullScreen", "autoplay");
  } else if (question.image) {
    htmlTemplate = buildFormImages(question);
  } else if (question.audio) {
    htmlTemplate = buildFormAudio(question);
  }

  body.innerHTML += htmlTemplate;

  const buttonNext = document.getElementById("btn_next");
  const buttonsAnswer = document.querySelectorAll(".container.answers div");

  console.log(buttonsAnswer);

  buttonsAnswer.forEach(answer => {
    answer.onclick = function() {
      displayAnswer(answer, question.correctAnswer, answer.textContent);
    };
  });

  //display next question
  buttonNext.addEventListener("click", () => {
    stopGaugeInterval();
    currentQuestionIndex++;
    displayQuizz();
  });

  if (currentQuestionIndex === myQuestions.length - 1) {
    buttonNext.innerHTML = "Final Score";
    buttonNext.onclick = () => {
      localStorage.setItem("rightScore", rightScoreCounter);
      localStorage.setItem("wrongScore", wrongScoreCounter);
      location.replace("final-score.html");
    };
  }

  // launch gauge time
  function launchTime(e) {
    if (question.video)
      document.querySelector(".container.media.fullScreen").remove();

    setGauge();
  }

  if (question.video) {
    document.querySelectorAll("video")[1].addEventListener("ended", launchTime);
  } else if (question.image) {
    setGauge();
  } else if (question.audio) {
    document.getElementById("audio").addEventListener("ended", launchTime);
  }
}

// function to set the gauge and display it
function setGauge() {
  let time = 0;
  let vG = 255;
  let vR = 0;
  let gauge = document.querySelector(".gauge");

  //change color every second from green to red
  const changeColor = () => {
    vG -= 30;
    vR += 20;
    gauge.style.backgroundColor = `rgb(${vR},${vG},0)`;
  };

  // count from 1 to 8
  gaugeIntervalId = setInterval(() => {
    changeColor();
    let percentage = (time * 100) / 7;
    gauge.style.width = percentage + "%";
    if (time >= 7) {
      return laugh();
    }
    time++;
  }, 700);
}

// Stop the gauge
function stopGaugeInterval() {
  clearInterval(gaugeIntervalId);
}

function laugh() {
  const laugh = document.getElementById("laugh");
  laugh.addEventListener("ended", function() {
    console.log("ended laugh");
    laugh.pause();
    laugh.currentTime = 0;
    stopGaugeInterval();
  });
  laugh.play();
}

// function to show right or wrong answer
function displayAnswer(button, responseCorrect, responsePlayer) {
  if (responseCorrect === responsePlayer) {
    button.id = "correctAnswer";
    rightScoreCounter++;
    document.getElementById("rightCounter").innerHTML = rightScoreCounter;
    if (question.correctAnswer === responsePlayer) {
      clearInterval(function() {
        time = 0;
      });
    }
  } else {
    button.id = "wrongAnswer";
    button.className = "shake-horizontal";
    wrongScoreCounter++;
    document.getElementById("wrongCounter").innerHTML = wrongScoreCounter;
  }
}

const exp = { rightScoreCounter, wrongScoreCounter };

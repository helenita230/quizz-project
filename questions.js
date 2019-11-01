// var qALt = {
//   question: "In which movie can we hear this line ?",
//   audio: ["images/img1.png", "images/image-fake.png"],
//   answers: {
//     a1: "A nightmare on Elm Street",
//     a2: "Hellraiser",
//     a3: "It",
//     a4: "Braindead"
//   },
//   correctAnswer: "It"
// };
// const allQs = [qALt];

const myQuestions = [
  {
    question:
      "If you don't want to be killed by Candyman, what should you NEVER do ?",
    image: ["./IMAGE/candyman.jpg"],
    answers: {
      a1: "Sleep",
      a2: "Say his name 5 times in front of the mirror",
      a3: "Invoke his spirit in an Indian Cementary",
      a4: "Never eat sugar after midnight"
    },
    correctAnswer: "Say his name 5 times in front of the mirror"
  },
  {
    question:
      "This kid is really cute, but he hides some terrible secret which is...",
    video: ["./VIDEO/the-omen.mp4"],
    answers: {
      a1: "He's the son of the devil",
      a2: "He has risen from the dead after being buried in a pet cementary",
      a3: "He's an alien who wants to take control of the earth",
      a4: "He sees dead people"
    },
    correctAnswer: "He's the son of the devil"
  },
  {
    question: "Who directed this movie?",
    image: ["./IMAGE/braindead.jpg"],
    answers: {
      a1: "Sam Raimi",
      a2: "Peter Jackson",
      a3: "Wes Craven",
      a4: "John Carpenter"
    },
    correctAnswer: "Peter Jackson"
  },
  {
    question: "In which movie can we hear this line ?",
    audio: ["./MP3/it.mp3"],
    answers: {
      a1: "A nightmare on Elm Street",
      a2: "Hellraiser",
      a3: "It",
      a4: "Braindead"
    },
    correctAnswer: "It"
  },
  {
    question: "How many Saw movies were released?",
    image: ["./IMAGE/saw.jpg"],
    answers: {
      a1: "6",
      a2: "8",
      a3: "9",
      a4: "7"
    },
    correctAnswer: "8"
  },
  {
    question: "Who is he?",
    image: ["./IMAGE/hellraiserr.jpg"],
    answers: {
      a1: "Pinhead",
      a2: "Hellraiser",
      a3: "Pinhell",
      a4: "Eraser Head"
    },
    correctAnswer: "Pinhead"
  },
  {
    question: "In Which movie can we hear this music ?",
    audio: ["./MP3/shining.mp3"],
    answers: {
      a1: "Child's Play",
      a2: "Amityville",
      a3: "Shining",
      a4: "The Thing"
    },
    correctAnswer: "Shining"
  },
  {
    question: "What's the name of this movie?",
    image: ["./IMAGE/halloween-4.jpg"],
    answers: {
      a1: "Halloween II",
      a2: "Halloween III",
      a3: "Halloween IV",
      a4: "Halloween V"
    },
    correctAnswer: "Halloween IV"
  },
  {
    question: "What's the third rule?",
    video: ["./VIDEO/scream.mp4"],
    answers: {
      a1: "Never say I'll be back",
      a2: "Never take an unknown passenger with you",
      a3: "Never spend your holidays in the wood",
      a4: "Never go alone in the attic"
    },
    correctAnswer: "Never say I'll be back"
  },
  {
    question: "What's the weapon of the killer in this movie?",
    image: ["./IMAGE/souviens-toi-ete-dernier.jpg"],
    answers: {
      a1: "A Butcher Knife",
      a2: "An Axe",
      a3: "A Hook",
      a4: "A Saw"
    },
    correctAnswer: "A Hook"
  }
];

export default myQuestions;

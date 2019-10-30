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
    question: "Which movie Wes Craven did NOT direct ?",
    image: [
      "./IMAGE/wes-craven.jpg",
      "./IMAGE/wes-craven-2.jpg",
      "./IMAGE/wes-craven-3.jpg",
      "./IMAGE/maniac.jpg"
    ],
    answers: {
      a1: "Maniac",
      a2: "The people under the Stars",
      a3: "Deadly Blessing",
      a4: "A Nightmare on Elm Street"
    },
    correctAnswer: "Maniac"
  },
  {
    question:
      "This kid is really cute, but he hides some terrible secret which is...",
    video: ["./VIDEO/the-omen.mp4"],
    answers: {
      a1: "He's the son of the devil",
      a2: "He has rose from the dead after being buried in a pet cementary",
      a3:
        "He's an alien who took form of a human being to take control of the earth",
      a4: "He sees dead people"
    },
    correctAnswer: "He's the son of the devil"
  },
  {
    question: "Which movie has not been adapted from a Stephen King book ?",
    image: [
      "./IMAGE/christine.jpg",
      "./IMAGE/cujo.jpg",
      "./IMAGE/friday-13th.jpg",
      "./IMAGE/pet-semetary.jpg"
    ],
    answers: {
      a1: "Friday the 13th",
      a2: "Pet Semetary",
      a3: "Christine",
      a4: "Cujo"
    },
    correctAnswer: "Friday the 13th"
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
    question: "What's the name of the slasher in this movie ?",
    image: ["./IMAGE/jason.jpg"],
    answers: {
      a1: "Jason",
      a2: "Michael Myers",
      a3: "Hellraiser",
      a4: "Freddy Kruger"
    },
    correctAnswer: "Jason"
  },
  {
    question: "In Which movie can we hear this music ?",
    audio: ["./MP3/halloween.mp3"],
    answers: {
      a1: "Halloween",
      a2: "The Exorcist",
      a3: "Shining",
      a4: "The Thing"
    },
    correctAnswer: "Halloween"
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
  }
];

export default myQuestions;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
    answer: "C"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["A. Java", "B. C", "C. Python", "D. JavaScript"],
    answer: "D"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "A. Central Style Sheets",
      "B. Cascading Style Sheets",
      "C. Creative Style Syntax",
      "D. Colorful Style System"
    ],
    answer: "B"
  }
];


const state = {
  currentQuestionIndex: 0,
  score: 0,
  timePerQuestion: 10,
  gameTimeLimit: 60,   
  gameOver: false
};


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let gameTimer;
let questionTimer;

function startGame() {
  console.log("\n🎮 Welcome to the Trivia Game!\n");
  console.log(`⏳ You have ${state.gameTimeLimit} seconds total.\n`);

  gameTimer = setTimeout(() => {
    console.log("\n⏰ Game time is up!");
    endGame();
  }, state.gameTimeLimit * 1000);

  askQuestion();
}

function askQuestion() {
  if (state.gameOver) return;

  if (state.currentQuestionIndex >= questions.length) {
    return endGame();
  }

  const q = questions[state.currentQuestionIndex];

  console.log(`\nQuestion ${state.currentQuestionIndex + 1}: ${q.question}`);
  q.options.forEach(opt => console.log(opt));

  console.log(`⏱️ You have ${state.timePerQuestion} seconds to answer.`);

  questionTimer = setTimeout(() => {
    console.log("\n⏰ Time's up for this question!");
    moveToNextQuestion();
  }, state.timePerQuestion * 1000);

  rl.question("\nYour answer (A, B, C, D): ", handleAnswer);
}

function handleAnswer(input) {
  clearTimeout(questionTimer);

  const userAnswer = input.trim().toUpperCase();
  const correctAnswer = questions[state.currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    console.log("✅ Correct!");
    state.score++;
  } else {
    console.log(`❌ Incorrect! Correct answer was ${correctAnswer}`);
  }

  moveToNextQuestion();
}

function moveToNextQuestion() {
  state.currentQuestionIndex++;
  askQuestion();
}

function endGame() {
  state.gameOver = true;

  clearTimeout(gameTimer);
  clearTimeout(questionTimer);

  console.log("\n🎯 GAME OVER");
  console.log(`🏆 Final Score: ${state.score} / ${questions.length}`);

  rl.close();
}

startGame();
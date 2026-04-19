const readline = require("readline");

const quizQuestions = [
  {
    question: "What is the capital of Kenya?",
    options: ["A. Nairobi", "B. Mombasa", "C. Kisumu", "D. Nakuru"],
    answer: "A"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["A. Python", "B. JavaScript", "C. C++", "D. Java"],
    answer: "B"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "A. Hyper Trainer Markup Language",
      "B. HyperText Markup Language",
      "C. HighText Machine Language",
      "D. Hyper Tool Multi Language"
    ],
    answer: "B"
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
-
const gameState = {
  currentIndex: 0,
  score: 0,
  startTime: null,
  endTime: null
};

function startGame() {
  console.log("\n🎮 Welcome to the Trivia Game!");
  console.log("You will have 10 seconds per question.\n");

  gameState.startTime = Date.now();
  gameState.currentIndex = 0;
  gameState.score = 0;

  askQuestion();
}

function askQuestion() {
  if (gameState.currentIndex >= quizQuestions.length) {
    return endGame();
  }

  const current = quizQuestions[gameState.currentIndex];

  console.log(`\nQuestion ${gameState.currentIndex + 1}: ${current.question}`);

  current.options.map(option => console.log(option));

  let answered = false;

  const timer = setTimeout(() => {
    if (!answered) {
      console.log("\n⏰ Time's up!");
      gameState.currentIndex++;
      askQuestion();
    }
  }, 10000);

  rl.question("\nYour answer (A, B, C, D): ", (input) => {
    answered = true;
    clearTimeout(timer);

    validateAnswer(input.trim().toUpperCase(), current.answer);
  });
}

function validateAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("✅ Correct!");
    gameState.score++;
  } else {
    console.log(`❌ Incorrect! Correct answer: ${correctAnswer}`);
  }

  gameState.currentIndex++;
  askQuestion();
}

function endGame() {
  gameState.endTime = Date.now();

  const timeTaken = ((gameState.endTime - gameState.startTime) / 1000).toFixed(2);

  console.log("\n===========================");
  console.log("🎯 GAME OVER");
  console.log("===========================");

  console.log(`Score: ${gameState.score} / ${quizQuestions.length}`);
  console.log(`Time Taken: ${timeTaken} seconds`);

  const percentScore = quizQuestions.reduce((acc, _, index) => {
    return acc + (index < gameState.score ? 1 : 0);
  }, 0);

  console.log(`Performance: ${percentScore}/${quizQuestions.length}`);

  rl.close();
}

startGame();

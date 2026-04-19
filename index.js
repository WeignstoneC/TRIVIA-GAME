const questions = [
  {
    question: "What is the capital of Kenya?",
    options: ["A. Nairobi", "B. Mombasa", "C. Kisumu", "D. Eldoret"],
    answer: "A"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["A. Python", "B. Java", "C. C++", "D. JavaScript"],
    answer: "D"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "A. Hyper Trainer Marking Language",
      "B. HyperText Markup Language",
      "C. HyperText Markdown Language",
      "D. HighText Machine Language"
    ],
    answer: "B"
  }
];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gameState = {
  score: 0,
  currentQuestion: 0
};

function startGame() {
  console.log("\n=== Welcome to the Trivia Game ===");
  console.log("You have 10 seconds per question!\n");
  gameState.score = 0;
  gameState.currentQuestion = 0;

  askQuestion();
}

function askQuestion() {
  if (gameState.currentQuestion >= questions.length) {
    endGame();
    return;
  }

  const q = questions[gameState.currentQuestion];

  console.log(`\nQuestion ${gameState.currentQuestion + 1}: ${q.question}`);
  q.options.forEach(opt => console.log(opt));

  let answered = false;

  const timer = setTimeout(() => {
    if (!answered) {
      console.log("\n⏰ Time's up! Moving to next question.");
      gameState.currentQuestion++;
      askQuestion();
    }
  }, 10000);

  rl.question("\nYour answer (A, B, C, D): ", (input) => {
    answered = true;
    clearTimeout(timer);

    handleAnswer(input.trim().toUpperCase(), q.answer);
  });
}

function handleAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("✅ Correct!");
    gameState.score++;
  } else {
    console.log(`❌ Incorrect! Correct answer was ${correctAnswer}`);
  }

  gameState.currentQuestion++;
  askQuestion();
}

function endGame() {
  console.log("\n=== Game Over ===");
  console.log(`Your final score: ${gameState.score} / ${questions.length}`);
  rl.close();
}

startGame();

# 🎮 TRIVIA GAME (CLI JavaScript Quiz)

A simple and interactive Command Line Interface (CLI) trivia game built using Node.js.  
The game tests users with multiple-choice questions, provides instant feedback, tracks score, and includes a time limit per question.

---

## 📌 Features

- Start the trivia game from the terminal
- Answer multiple-choice questions (A, B, C, D)
- Immediate feedback on answers (correct/incorrect)
- Score tracking system
- 10-second timer per question
- Total game duration tracking
- Final performance summary
- Sequential question flow
- Clean CLI-based user experience

---

## 🧠 Technologies Used

- JavaScript (ES6+)
- Node.js
- readline module (for CLI input handling)

---

## 🚀 How to Run the Project

### 1. Install Node.js
Make sure Node.js is installed on your system:
```bash
node -v

2. Clone the Repository
git clone https://github.com/your-username/TRIVIA-GAME.git

3. Navigate into the Project Folder
cd TRIVIA-GAME

4. Run the Game
node index.js

🎯 How to Play
Run the program using Node.js
A question will appear with four answer options
Type your answer (A, B, C, or D)
Press Enter to submit
You have 10 seconds per question
The game continues until all questions are answered
Final score and performance are displayed at the end

📊 Game Logic Overview
✔ Core Features Implemented
Functions
startGame() → Initializes the game
askQuestion() → Displays questions and handles timer
validateAnswer() → Checks user input and updates score
endGame() → Displays final results
Arrays
quizQuestions[] stores all questions, options, and answers
Objects
gameState tracks:
Current question index
Score
Start and end time
Loops / Iteration
.map() → Displays answer options
.reduce() → Calculates performance score
Asynchronous Features
setTimeout() → Enforces 10-second timer per question

📁 Project Structure
TRIVIA-GAME/
│── index.js        # Main game logic
│── README.md       # Project documentation

🧪 Example Gameplay
🎮 Welcome to the Trivia Game!
You will have 10 seconds per question.

Question 1: What is the capital of Kenya?
A. Nairobi
B. Mombasa
C. Kisumu
D. Nakuru

Your answer (A, B, C, D): A
✅ Correct!
🏁 End of Game Output
===========================
🎯 GAME OVER
===========================
Score: 2 / 3
Time Taken: 22.45 seconds
Performance: 2/3

🔧 Future Improvements
Add difficulty levels (Easy / Medium / Hard)
Add replay option without restarting program
Store high scores in a file
Randomize question order
Add colored CLI output for better UX

👨‍💻 Author
Created as a JavaScript CLI project demonstrating:
Problem-solving skills
Asynchronous programming
Modular function design
CLI application development

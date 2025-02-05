# Wordle Clone

This project is a clone of the popular word guessing game, Wordle, built with React. The goal of the game is to guess a 5-letter word in a limited number of attempts. Each guess provides feedback on the letters that are correct or incorrect, helping the player make better guesses.

## Features
- Guess a 5-letter word within 3 attempts.
- Color-coded feedback for correct and incorrect guesses.
- Dark mode for enhanced user experience.
- Hint functionality (indicates that the word is technical).
- Responsive design for a seamless experience across devices.
- Confetti animation for a fun "win" effect.
  
## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

To get started with the Wordle Clone project, follow the steps below.

### Set Up the Project Directory:
Create a new directory for your project.
Navigate to your project directory using the terminal.

### Initialize the Project:
Initialize a new React project using create-react-app:
npx create-react-app wordle-clone

### Install Dependencies:
 1. React-icons
 2. React-confetti
 

### Installation
1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TarunAdaraboina/world-clone

### Game Instructions
  1. The goal is to guess a 5-letter word in 3 attempts.
  2. Each time you make a guess, you’ll receive color-coded feedback:
  3. Green indicates the letter is in the correct position.
  4. Yellow indicates the letter is in the word but in the wrong position.
  5. Gray indicates the letter is not in the word.
  6. You have a total of 3 attempts to guess the word.
  7. If you guess correctly, confetti will show as a celebratory effect.
  8. Use the "New Game" button to start a fresh game.

### state Management

  1. State Variables:
    > The component uses multiple state variables to manage different aspects of the game, such as user input, guesses, and game status.
    > These states are managed using React’s useState hook.
    > guesses: Holds an array of the user’s guesses. Each guess is added to the array after the user submits their guess.
    > currentGuess: Holds the value of the current guess being typed by the user.
    > gameStatus: Tracks the current state of the game, which can be "playing", "won", or "lost".
    > message: Displays messages related to the current game status, such as warnings or success messages.
    > darkMode: A boolean state to toggle between light and dark mode themes.
    > hints: Stores hints provided to the user (such as letters of the word to guess), which helps guide them.

  2. State Changes:
    > The state is updated using the set functions provided by useState.
    > setCurrentGuess(): Updates the current guess being typed. It’s called inside the handleInputChange function, which runs when the user   types in the input field.
    > setGuesses(): Updates the list of guesses after each guess is submitted. The new guess is added to the guesses array.
    > setGameStatus(): Updates the game status. If the guess is correct, the status changes to "won". If the number of guesses exceeds the max limit, the status becomes "lost".
    > SetMessage(): Displays warning or success messages based on the current game state.
    > setHints(): Updates the hints based on the user’s guesses. It adds a hint when a guess is made, showing part of the target word.

  3. State-Dependent Rendering:
     1. Conditional Rendering Based on Game Status:
        a. The component conditionally renders different parts of the UI depending on the gameStatus state. If the game is still ongoing (gameStatus === "playing"), the input field for the next guess and the submit button are shown.
        b. If the game is over (either won or lost), the Result component is displayed with the appropriate message.
     2. Dark Mode:
        a.The darkMode state controls whether the app should display in dark or light mode. The theme changes dynamically when the user toggles the theme using the button (which is reflected by setDarkMode(!darkMode)).

4. Managing User Input:
   1. Input Handling: The state variable currentGuess tracks what the user is typing in the input field. The state is updated on each keystroke by the handleInputChange function.
   2. Max Length Validation: The handleInputChange function ensures the user can only type up to 5 letters in the input box (as per the game’s rule).
   3. Submit Guess: When the user clicks the submit button, the checkGuess function is triggered. It updates the guesses state, checks if the guess is correct, and updates the gameStatus accordingly.

5. State-Driven Effects:
   1. Confetti Effect: The Confetti component is conditionally rendered when gameStatus === "won", providing a celebratory visual effect when the player wins.
   2. Hints: The hints state is updated with a part of the target word, and if more than one hint has been generated, a message is displayed to the player.

6. State Reset on Restart:
   1. When the player clicks the "New Game" button, the restartGame function is called, which resets all the state variables to their initial values (e.g., guesses, currentGuess, gameStatus, message, etc.).

### Technologies Used
1. React.js for building the user interface.
2. React Icons for adding icons like the moon and sun for dark mode.
3. Confetti for a fun visual effect when the game is won.
4. CSS for styling the application by using Media queries
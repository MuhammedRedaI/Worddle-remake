# Word Masters Game

**Word Masters** is a fun and interactive word guessing game inspired by the classic word-guessing puzzle. The goal of the game is to guess a 5-letter word in as few tries as possible.
This project is part of my **Front-End Developer Beginner Path**, where I aim to build web applications by exploring existing apps, studying their features, and practicing through self-directed learning. It is a work in progress, and while the game functions, it's not perfect as I continue to improve and learn.

### Features

- **Word Guessing:** Players have 6 attempts to guess the correct word.
- **Word Validation:** Each guess is validated by making a POST request to an API that checks if the word exists in the English dictionary.
- **Color-Coding:** 
  - Green: Correct letter in the correct position.
  - Yellow: Correct letter but in the wrong position.
  - Gray: Incorrect letter.
- **Dynamic Feedback:** Visual feedback with color changes and animations to show progress.
- **Rainbow Effect:** The game title animates with a rainbow effect when the player wins.

### Technologies Used

- **HTML:** Structure of the game interface.
- **CSS:** Styling and animations.
- **JavaScript:** Core game logic and handling of user interactions.
- **Fetch API:** 
  - Fetches a random word of the day from an API.
  - Makes a POST request to validate the guessed word in the English dictionary.

### Word Validation API

- The game uses a **POST API** to validate if the guessed word exists in the English dictionary.
- The API endpoint for word validation is:
- The guess is sent as part of the request body, and the API responds with a validation result.

### How to Play

1. You will see an empty grid of 6 rows and 5 columns.
2. Start typing a 5-letter word in the first row.
3. Press **Enter** to submit your guess.
4. After each guess, feedback will be provided in the form of colors:
 - Green: Correct letter in the correct position.
 - Yellow: Correct letter but in the wrong position.
 - Gray: Incorrect letter.
5. If you guess the correct word, the background color will turn green, and a success message will appear.

### Future Improvements

- **Double Characters Handling:** Support for words containing duplicate characters (e.g., "apple", "level").
- **Reset Button:** Add a button to reset the game and start a new round.
- **Loading Animation:** Add a loading animation when fetching the word or validating a guess.

### Installation

To run the game locally:

1. Clone the repository:
  ```bash
  git clone https://github.com/your-username/word-masters.git
  ```
2. Navigate to the project folder:
  ```bash
  cd word-masters
  ```
3. Open `index.html` in your browser to start playing.

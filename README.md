# Responsive Random Number Generator

A small, responsive web page that displays a number and lets the user reset it to zero or generate a random integer between 0 and 99. The project is written with plain HTML, CSS and JavaScript and is suitable as a beginner-friendly demo or starting point for learning DOM manipulation and responsive layout.

## How it works

The script grabs three elements by ID: the number display (`counter`) and two buttons (`reset` and `random`). Clicking the Reset button sets the displayed value to 0. Clicking Randomize uses `Math.random()` and `Math.floor()` to produce an integer between 0 and 99 which is then shown in the display.

Key code (from `script.js`):

- `count = Math.floor(Math.random() * 100);` — produces the random integer.

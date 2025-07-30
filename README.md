# DiceGame
🎲 A simple 2-player dice game built using HTML, CSS, and JavaScript.
A fun and interactive 2-player dice game built with **HTML**, **CSS**, and **JavaScript**, with animations powered by [Animate.css](https://animate.style/). Click **"Roll"** to roll the dice — and see who wins!

---

## 📂 Project Structure

DiceGame/
├── static/
│   └── images/
│       ├── Dice1.png
│       ├── Dice2.png
│       ├── Dice3.png
│       ├── Dice4.png
│       ├── Dice5.png
│       └── Dice6.png   # Images of dice faces
├── index.html          # Main HTML file
├── styles.css          # Styling file
├── app.js              # Game logic and animation
└── README.md           # Project description


---

## 🚀 Features

- 🎲 Roll two dice with a single click.
- 🏆 Displays the winner based on dice roll.
- ✨ Smooth shake animation using Animate.css.
- 📱 Responsive design for mobile and desktop.

---

## 📦 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **[Animate.css](https://animate.style/)** – for animations
- **[Font Awesome](https://fontawesome.com/)** – for trophy icon
- **[Google Fonts](https://fonts.google.com/)** – used *Bitcount Prop Single* for typography

---

## 🔧 How It Works

1. Dice images are stored in `/static/` and displayed in the UI.
2. On clicking the **Roll** button:
   - Dice images shake using the `animate__shakeX` class.
   - After a short delay (500ms), two random numbers between 1 and 6 are generated.
   - Dice images update based on the result.
   - Winner is displayed: "A Wins", "B Wins", or "DRAW".

---

## 🧠 Concepts Demonstrated

- DOM Manipulation with JavaScript
- Dynamic image updates
- Class handling for animations
- Forcing reflow using `void element.offsetWidth;` to retrigger animation
- Math-based randomization using `Math.random()`

---

## 💻 How to Run

1. Clone or download the repo.
2. Open `index.html` in a web browser.
3. Click the **"Roll"** button and enjoy the game!

---

## ✍️ Author

Designed and developed by:  
**[Priyanshu Jangir](https://github.com/Priyanshu11011)**

---

## 🌟 Show Your Support

If you like this project:

- ⭐ Star this repository
- 🍴 Fork it
- 📢 Share it with your friends

---

## 📃 License

This project is open-source and free to use. No license restrictions.

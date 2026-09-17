# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- See a countdown animation before the computer makes its choice
- See a dynamic glowing effect highlighting the winner

### Screenshot

<img width="1333" height="932" alt="image" src="https://github.com/user-attachments/assets/fc46027c-aae7-4929-81bf-012f26387113" />


### Links

- Solution URL: https://github.com/miguelima29/frontendmentor-rockpaperscissors/
- Live Site URL: https://frontendmentor-rockpaperscissors-five.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox (Advanced alignment and ordering)
- Responsive Design (Media Queries & `clamp()`)
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling

### What I learned

During this project, I focused heavily on writing clean, modular React code and mastering advanced CSS layout techniques. Some of my major learnings include:

**1. Dynamic Rendering with Dictionaries in React:**
Instead of writing repetitive HTML for each choice (rock, paper, scissors), I learned how to use a dictionary object to dynamically map the user's choice to the correct icon and CSS class.

```jsx
const icons = {
  paper: paperIcon,
  scissors: scissorsIcon,
  rock: rockIcon
};

// Rendering dynamically based on state
<div className={userChoice}>
  <img src={icons[userChoice]} alt={userChoice} />
</div>
```

**2. Advanced CSS Layouts for Mobile:**
I learned how to drastically change the visual layout without altering the HTML structure, which is great for accessibility and React logic. Using flex-direction: column-reverse and the order property allowed me to perfectly match the mobile design.

```css
@media (max-width: 768px) {
    /* Flipping the title and the coin vertically */
    .player-side, .house-side {
        flex-direction: column-reverse;
    }

    /* Forcing the result outcome to break to the next line */
    .result-outcome {
        order: 3;
        width: 100%;
    }
}
```

### Continued development

In future updates, I plan to:
- Build the "Bonus" layout (Rock, Paper, Scissors, Lizard, Spock).

### AI Collaboration

Tool Used: Google Gemini

How it was used: I used Gemini as an interactive pair-programming mentor. Instead of just generating code, I used it to discuss architecture (like lifting state to App.jsx), troubleshoot CSS overflow issues, and brainstorm solutions for tricky layouts (like the mobile reordering).

What worked well: It was excellent for understanding why a CSS rule wasn't working (e.g., conflicting widths in mobile) and for learning best practices in React (like separating the logic in gamelogic.js from the UI components).

## Author
Frontend Mentor - @miguelima29

LinkedIn - [Miguel Lima](https://www.linkedin.com/in/miglim/)

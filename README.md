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

![Desktop Preview](./design/desktop-preview.jpg)
*(Note: Replace with your actual screenshot path)*

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]

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
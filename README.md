# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
	- [The challenge](#the-challenge)
	- [Screenshot](#screenshot)
	- [Links](#links)
	- [Built with](#built-with)
	- [What I used](#what-i-used)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop screenshot](./images/Essence%20Eau%20De%20Parfum%20Desktop.PNG)
![Mobile phone screenshot](./images/Essence%20Eau%20de%20parfum%20mobile-design.PNG)

### Links

- Solution URL: [Solution URL here](https://github.com/qahsishaq/product-preview-card-component-main)
- Live Site URL: [Live site URL here](https://product-preview-card-component-gules-three.vercel.app/)


### Built with

- Semantic HTML5 markup
- Flexbox

### What I used

```css
Media query:

@media only screen and (min-width: 280px) and (max-width: 800px) {

}

```
```js
const cartButton = document.getElementById("cart-button");
let itemEntry = 0;
function updateCart() {
  itemEntry = itemEntry + 1;
  alert(
    `🎉You have added an item to your cart! Number of items in cart: ${itemEntry}`
  );
}
cartButton.addEventListener("click", updateCart);
```

## Author
- Frontend Mentor - [@qahsishaq](https://www.frontendmentor.io/profile/qahsishaq)
- Twitter - [@qahs_I_I_shaq](https://x.com/qahs_I_I_shaq)
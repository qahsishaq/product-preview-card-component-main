const cartButton = document.getElementById("cart-button");
let itemEntry = 0;
function updateCart() {
  itemEntry = itemEntry + 1;
  alert(
    `🎉You have added an item to your cart! Number of items in cart: ${itemEntry}`
  );
}

cartButton.addEventListener("click", updateCart);

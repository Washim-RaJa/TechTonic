import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";

import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts = getCartProductFromLS();
// console.log(cartProducts);
let filterProducts = products.filter((currProd) => {
  // console.log(currElem.id, currElem.name);
  return cartProducts.some((currElem) => currElem.id === currProd.id);
});

// console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProducts = () => {
  filterProducts.forEach((currProd) => {
    // console.log(currProd);
    const { id, name, category, brand, price, stock, description, image } =
      currProd;

    let productClone = document.importNode(templateContainer.content, true);
    const localStorageData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector(".cards").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productPrice").textContent = localStorageData.price;
    productClone.querySelector(".productQuantity").textContent = localStorageData.quantity;

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price)
    });

    cartElement.appendChild(productClone);
  });
};
// Showing the Cart Products
showCartProducts();

// Calculating the card total in our cartProduct page
updateCartProductTotal()
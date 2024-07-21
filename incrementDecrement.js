import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`)
    const productQuantity = currentCardElement.querySelector('.productQuantity');
    const productPrice = currentCardElement.querySelector('.productPrice')

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProduct = getCartProductFromLS();
    let existingProd = localCartProduct.find(currProd => currProd.id === id)
    if (existingProd) {
        quantity = existingProd.quantity
        localStoragePrice = existingProd.price
    } else {
        localStoragePrice = price;
        price = price; // making sure price remains same if localStoragePrice doesn't exist.
    }
    if (event.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity += 1;
        } else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }
    if (event.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        }
    }
    // Finally we will update the price in localStorage
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2))
    let updatedCart = { id, quantity, price: localStoragePrice};
    updatedCart = localCartProduct.map( currProd => {
       return currProd.id === id ? updatedCart : currProd
    })

   localStorage.setItem('cartProductLS', JSON.stringify(updatedCart))

   // Also we need to reflect the changes on the webpage too
   productQuantity.innerText = quantity;
   productPrice.innerText = localStoragePrice;

   // Calculating the card total in our cartProduct page
    updateCartProductTotal()
}
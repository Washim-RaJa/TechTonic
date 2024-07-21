import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLS();
export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`)
    // console.log(currentProdElem);
   let quantity =  currentProdElem.querySelector('.productQuantity').innerText;
   let price = currentProdElem.querySelector('.productPrice').innerText;
   price = price.replace('₹', '');
   quantity = Number(quantity)

   let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
   )
//    console.log(existingProd);

   if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + quantity
    price = (quantity*price).toFixed(2)
    price = Number(price)
    let updatedCart = { id, quantity, price };
    updatedCart = arrLocalStorageProduct.map( currProd => {
       return currProd.id === id ? updatedCart : currProd
    })

   localStorage.setItem('cartProductLS', JSON.stringify(updatedCart))
   // Show toast when product added to the cart
   showToast('add', id)

   }

   if (existingProd) {
    // alert('This product has already been added!')
    return false;
   }
   price = (quantity*price).toFixed(2)
   price = Number(price)
   arrLocalStorageProduct.push( {id, quantity, price})
   localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct))

   // Updating cart button value
    updateCartValue(arrLocalStorageProduct);

   // Show toast when product added to the cart
   showToast('delete', id)
}
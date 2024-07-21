import { getCartProductFromLS } from "./getCartProductFromLS.js";

export const updateCartProductTotal = ()=> {
    let productSubTotal = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');
    let localCartProduct = getCartProductFromLS();
    // console.log(localCartProduct);
    let initialValue = 0;
    let totalProductPrice = localCartProduct.reduce((accm , currElem) => {
        let productPrice = parseInt(currElem.price) || 0;
        return accm + productPrice
    }, initialValue)

    // console.log(totalProductPrice);
    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;

}
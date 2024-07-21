import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((currProd)=> currProd.id !== id);

    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

    // To remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);

    if (removeDiv) {
        removeDiv.remove();
        // Show toast when product deleted from the cart
        showToast('delete', id)
    }
    updateCartValue(cartProducts)
}
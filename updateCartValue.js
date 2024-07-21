const cartValue = document.querySelector('#cartValue')
export const updateCartValue = (cardProducts) => {
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cardProducts.length}</i>`)
}
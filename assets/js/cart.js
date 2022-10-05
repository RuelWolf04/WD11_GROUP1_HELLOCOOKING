//remove items from the cart

let removeCartItem = document.getElementsByClassName('btn-area')
console.log(removeCartItem)
for (let i = 0; i < removeCartItem.length; i++) {
    let button = removeCartItem[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

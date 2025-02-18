

const button = document.querySelector("#button1")
const ccingredients = document.querySelector("#ccingredients")
const on_click = function(){
    ccingredients.innerHTML = "chicken thighs, yellow onion, garlic, Jamaican curry powder, allspice, coconut milk"
} 

button.addEventListener("click", on_click)
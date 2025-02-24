

const button1 = document.querySelector("#button1")
const ccprice = document.querySelector("#ccprice")
const on_click1 = function(){
    if (ccprice.innerHTML === "") {
    ccprice.innerHTML = "$5 for 9oz, $8 for a pint"
    }
    else {
        ccprice.innerHTML = ""
    }
} 

if (button1) {
    button1.addEventListener("click", on_click1);
} else {
    console.error("Button1 element not found");
}


const button2 = document.querySelector("#button2")
const ccprice2 = document.querySelector("#ccprice2")
const on_click2 = function(){
    if (ccprice2.innerHTML === "") {
        ccprice2.innerHTML = "$2.50 per cookie"
        }
        else {
            ccprice2.innerHTML = ""
        }
} 

if (button2) {
    button2.addEventListener("click", on_click2);
} else {
    console.error("Button2 element not found");
}

const button3 = document.querySelector("#button3")
const ccprice3 = document.querySelector("#ccprice3")
const on_click3 = function(){
    if (ccprice3.innerHTML === "") {
        ccprice3.innerHTML = "$4 per slice"
        }
        else {
            ccprice3.innerHTML = ""
        }
} 

if (button3) {
    button3.addEventListener("click", on_click3);
} else {
    console.error("Button3 element not found");
}
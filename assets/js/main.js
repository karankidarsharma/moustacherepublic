
var hoverCart = document.getElementById('hoverCart')


cartBtn.addEventListener('click', showCart)

// you can use this function to add a class using key value pair # used on Line 13
function addClass(p) {
    for (key in p) {
        if (document.getElementById(key)) {
            document.getElementById(key).classList.add(p[key])
        } else if (document.getElementsByClassName(key)[0]) {
            document.getElementsByClassName(key)[0].classList.add(p[key])
        } else {
            console.log(key)
        }
    }
}
// you can use this fucntion to remove a class using key value pair # used on Line 21
function removeClass(p) {
    for (key in p) {
        if (document.getElementById(key)) {
            document.getElementById(key).classList.remove(p[key])
        } else if (document.getElementsByClassName(key)[0]) {
            document.getElementsByClassName(key)[0].classList.remove(p[key])
        } else {
            console.log(key)
        }

    }
}

function showCart() {
    if (!hoverCart.classList.contains("show")) {
        addClass({
            "hoverCart": "show",
            "cart-total-holder": "if002",
            "info-box": "if001"
        })


    } else {
        removeClass({
            "hoverCart": "show",
            "cart-total-holder": "if002",
            "info-box": "if001"
        })
    }
}




let size = "";
function checkSize(val) {
    size = val;
    sizeVal.innerHTML = size

}

var errorLine = document.getElementById('error')
var sizeVal = document.getElementById('size-val')
function verify() {
    if (size === "") {
        errorLine.innerHTML = "Please Choose a size";
    } else {
        errorLine.innerHTML = "";

    }
}


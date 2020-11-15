
var hoverCart = document.getElementById('hoverCart')
var content = document.getElementsByClassName('content')[0]


cartBtn.addEventListener('click', showCart)

// you can use this function to add a class using key value pair # used on Line 35
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
// you can use this fucntion to remove a class using key value pair # used on Line 43
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
            "info-box": "if001",
            "single-product-image-holder": "if001"
        })


    } else {
        removeClass({
            "hoverCart": "show",
            "cart-total-holder": "if002",
            "info-box": "if001",
            "single-product-image-holder": "if001"
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
function verify(product) {
    if (size === "" || !localStorage.getItem('sizeInfo')) {
        errorLine.innerHTML = "Please Choose a size";
    } else {
        errorLine.innerHTML = "";
        cartNumbers(product)
    }
}

// ******************************** Dummy Product APi ******************************
var product = [
    {
        id: 1,
        name: 'tshirt',
        size: 'S',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
        inCart: 0

    },
    {
        id: 2,
        name: 'tshirt',
        size: 'M',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
        inCart: 0


    },
    {
        id: 3,
        name: 'tshirt',
        size: 'L',
        sdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
        inCart: 0


    },
]
// ******************************************************************************************************
// create cart
var ProductsInCart = []

function addToCart() {
    if (cart) {
        console.log('do something here')
    } else {
        localStorage.setItem('cart', cart)
    }
}

var sizeBtn = document.getElementsByClassName('checkmark');

for (i = 0; i < sizeBtn.length; i++) {
    sizeBtn[i].addEventListener('click', function (event) {
        var sizeInfo = localStorage.setItem('sizeInfo', event.target.innerHTML)

    })
}



var addToCart = document.getElementById('add-to-cart');
addToCart.addEventListener('click', () => {
    let selectedProduct = []
    for (i = 0; i < product.length; i++) {
        if (product[i].size == localStorage.getItem('sizeInfo')) {
            selectedProduct.push(product[i])
        }
    }
    verify(selectedProduct[0])
})
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.getElementById('cartNumber').innerHTML = productNumbers;
    }
}


function cartNumbers(product) {
    console.log("Product added to the cart")
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.getElementById('cartNumber').innerHTML = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.getElementById('cartNumber').innerHTML = 1;
    }
    setItems(product)
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    console.log('my cart items are', cartItems)
    if (cartItems != null) {
        if (cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems, [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1;


    } else {
        product.inCart = 1
        cartItems = {
            [product.id]: product
        }
    }


    productsInCart = localStorage.setItem('productsInCart', JSON.stringify(cartItems))
    window.location.reload()

}
onLoadCartNumbers()

var mc = document.getElementById('hoverCart');
var productsInCart = JSON.parse(localStorage.getItem('productsInCart'))
if (localStorage.getItem('productsInCart')) {
    for (k in productsInCart) {
        console.log(productsInCart[k]['id'])

        mc.innerHTML += ' <div id="mini-cart" class="hover-cart-card flex"><div class="row left-card"><img class="hover-cart-image" src="assets/images/classic-tee.jpg" alt="t-shirt"></div><div class="row right-card"><p>Classic Tee</p><p class="mini-cart-qty"><span class="qty">' + productsInCart[k]['inCart'] + '</span> X <strong>$<span>75.00</span></strong></p><p class="mini-cart-size">Size: <span>' + productsInCart[k]['size'] + '</span></p></div></div>';
    }
} else {
    mc.innerHTML += ' <div id="mini-cart" class="hover-cart-card flex" style="padding:30px 20px;"><br>Currently Cart is Empty!<br></div>';

}


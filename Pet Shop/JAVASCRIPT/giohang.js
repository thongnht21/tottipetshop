const btn = document.querySelectorAll("button")
//console.log(btn)

var products = [
    { ID: 1, productName: "Capuchima-Vietnamo", productImg: "/IMAGES/trà sữa 2.jpg", price: 45.000, catalogy: "thức uống" },
    { ID: 2, productName: "Trà sữa chân châu", productImg: "/IMAGES/trà sữa.jpg", price: 35.000, catalogy: "thức uống" },
    { ID: 3, productName: "Trà sữa kem", productImg: "/IMAGES/trà sữa 1.jpg", price: 30.000, catalogy: "thức uống" },
    { ID: 4, productName: "Trà đào", productImg: "/IMAGES/trà.jpg", price: 50.000, catalogy: "thức uống" },
    { ID: 4, productName: "cơm trứng", productImg: "/IMAGES/cơm.jpg", price: 50.000, catalogy: "thức ăn" },
  ];
  

  var drink = [];
  
  products.forEach(function(product) {
    if (product.catalogy === "thức uống") {
      drink.push(product);
    }
  });
  
  console.log(drink);
  var productList = document.getElementById("product-list");


btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("H1").innerText
            var productPricce = product.querySelector("span").innerText
            // console.log(productPricce,productImg,productName)
            addcart(productPricce, productImg, productName)
        }
    })
})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var trcontent = '<tr> <td style="display: flex;align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt="banmeo">' + productName + '</td> <td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
}

// --------------------total----------------------
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    // console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPricce = cartItem[i].querySelector("span").innerHTML
        // console.log(productPricce)
        totalA = inputValue * productPricce * 1000
        // totalB = totalA.tolocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        totalD = totalC.toLocaleString('de-DE')
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalD
}

// --------------------------delete---------------------
function deleteCart() {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
        })

    }
}
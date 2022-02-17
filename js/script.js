//Query------------------------------------------------------------------------

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}

//Cart----------------------------------------------------------------------

let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}

//Contact Telephone format----------------------------------------------------------------

function phoneFormat(input) {
  input = input.replace(/\D/g, '')
  var size = input.length
  if (size > 0) {
    input = '(' + input
  }
  if (size > 2) {
    input = input.slice(0, 3) + ') ' + input.slice(3, 12)
  }
  if (size > 6) {
    input = input.slice(0, 10) + '-' + input.slice(10)
  }
  return input
}

//Modal Contact --------------------------------------------------------------------------

var modal = document.getElementById('myModal')

var btn = document.getElementById('myBtn')

var okButton = document.getElementsByClassName('close')[0]

btn.onclick = function () {
  modal.style.display = 'block'
}

okButton.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

//Checkout Cart Modal -------------------------------------------------------------------

var checkoutModal = document.getElementById('myCheckoutModal')

var checkoutBtn = document.getElementById('myCheckoutBtn')

var checkoutOkButton = document.getElementById('myCheckoutOk')

var emptyCart = document.getElementById('empty-cart')

checkoutBtn.onclick = function () {
  checkoutModal.style.display = 'block'
  cartItem.classList.remove('active')

  var cartItems = document.getElementsByName('cartItem')

  while (cartItems.length) {
    cartItems.forEach(cartItem => {
      cartItem.remove()
    })
  }

  checkoutBtn.style.display = 'none'
  emptyCart.style.display = 'flex'
}

checkoutOkButton.onclick = function () {
  checkoutModal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == checkoutModal) {
    checkoutModal.style.display = 'none'
  }
}

// Populate Menu ----------------------------------------------------------------------

const menuProducts = [
  {
    menuProductName: 'Tradicional',
    menuDiscountValue: '4,99',
    menuValue: '6,99',
    menuImage: 'images/menu-1.png'
  },
  {
    menuProductName: 'Expresso',
    menuDiscountValue: '5,99',
    menuValue: '10,99',
    menuImage: 'images/menu-2.png'
  },
  {
    menuProductName: 'Caffè latte',
    menuDiscountValue: '15,99',
    menuValue: '20,99',
    menuImage: 'images/menu-3.png'
  },
  {
    menuProductName: 'Macchiato',
    menuDiscountValue: '3,99',
    menuValue: '5,99',
    menuImage: 'images/menu-4.png'
  },
  {
    menuProductName: 'Capuccino',
    menuDiscountValue: '15,99',
    menuValue: '20,99',
    menuImage: 'images/menu-5.png'
  },
  {
    menuProductName: 'Irish coffee',
    menuDiscountValue: '12,99',
    menuValue: '15,99',
    menuImage: 'images/menu-6.png'
  }
]

function populateMenu() {
  var checkoutButton = document.getElementById('myCheckoutBtn')
  var emptyCart = document.getElementById('empty-cart')
  menuProducts.forEach(menuProduct => {
    function appendItemsToMenu() {
      var menuItemElement = document.createElement('div')

      menuItemElement.innerHTML = `
        <div class="box">
          <img src=${menuProduct.menuImage} alt=${menuProduct.menuProductName} />
          <h3>${menuProduct.menuProductName}</h3>
          <div class="price">R$${menuProduct.menuDiscountValue} <span>${menuProduct.menuValue}</span></div>
          <button name="buttonAddToCart" class="btn">Adicionar </br> ao carrinho</button>
        </div>
      `

      var coffeDrinksMenu = document.getElementById('coffee-drinks-menu')
      coffeDrinksMenu.appendChild(menuItemElement)
    }

    appendItemsToMenu()

    //Add and delete cart items--------------------------------------------------------------

    var addToCartModal = document.getElementById('addToCartModal')

    var buttonsAddToCart = document.getElementsByName('buttonAddToCart')

    var addToCartModalOk = document.getElementById('addToCartModalOk')

    buttonsAddToCart.forEach((button, index) => {
      button.onclick = function () {
        emptyCart.style.display = 'none'
        checkoutButton.style.display = 'block'
        addToCartModal.style.display = 'block'

        var cartItemElement = document.createElement('div')

        cartItemElement.innerHTML = `
          <div name="cartItem" class="cart-item">
            <span class="fas fa-times" id="remove-item-${index}" name="remove-item-${index}"></span>
            <img src=${menuProducts[index].menuImage} alt=${menuProducts[index].menuProductName} />
            <div class="content">
              <h3>${menuProducts[index].menuProductName}</h3>
              <div class="price">R$${menuProducts[index].menuDiscountValue}</div>
            </div>
          </div>
        `
        //Only 1 item for each checkout---------------------------------------------------------

        var cartItemQuantity = document.getElementsByName(
          `remove-item-${index}`
        )

        if (cartItemQuantity.length === 0) {
          var cartItemsContainer = document.getElementById('cart-items')
          cartItemsContainer.appendChild(cartItemElement)

          var removeItemButtons = document.getElementById(
            `remove-item-${index}`
          )

          removeItemButtons.onclick = function () {
            cartItemElement.remove()

            var cartItems = document.getElementsByName('cartItem')

            if (cartItems.length === 0) {
              var t = document.getElementById('myCheckoutBtn')
              t.style.display = 'none'
              emptyCart.style.display = 'flex'
            }
          }
        }
      }
    })

    addToCartModalOk.onclick = function () {
      addToCartModal.style.display = 'none'
    }

    window.onclick = function (event) {
      if (event.target == addToCartModal) {
        addToCartModal.style.display = 'none'
      }
    }
  })
}

populateMenu()

// Populate Products --------------------------------------------------------------------

const productItems = [
  {
    productItemsName: 'Traditional NICARAGUA Whole Bean',
    productItemsDiscountValue: '35,99',
    productItemsValue: '50,99',
    productItemsImage: 'images/product-1.png',
    productItemsRating: 5
  },
  {
    productItemsName: 'Traditional COLUMBIA Whole Bean',
    productItemsDiscountValue: '15,99',
    productItemsValue: '45,99',
    productItemsImage: 'images/product-2.png',
    productItemsRating: 3
  },
  {
    productItemsName: 'Traditional PERU Whole Bean',
    productItemsDiscountValue: '30,99',
    productItemsValue: '50,99',
    productItemsImage: 'images/product-3.png',
    productItemsRating: 4
  }
]

function populateProducts() {
  productItems.forEach(productItem => {
    var menuItemElement = document.createElement('div')
    menuItemElement.classList.add('box')

    var productStars = []
    for (var i = 0; i < productItem.productItemsRating; i++) {
      var star = '<i class="fas fa-star"></i>'
      productStars.push(star)
    }

    menuItemElement.innerHTML = `
      <div class="icons">
        <a href="#products" class="fas fa-shopping-cart"></a>
        <a href="#products" class="fas fa-heart"></a>
        <a href="#products" class="fas fa-eye"></a>
      </div>
      <div class="image">
        <img src="${productItem.productItemsImage}" alt="${
      productItem.productItemsName
    }" />
      </div>
      <div class="content">
        <h3>${productItem.productItemsName}</h3>
        <div class="stars">
        ${productStars.map(star => star)}
        </div>
        <div class="price">R$${productItem.productItemsDiscountValue} <span>${
      productItem.productItemsValue
    }</span></div>
    `

    var productItemsMenu = document.getElementById('product-items')
    productItemsMenu.appendChild(menuItemElement)
  })
}

populateProducts()

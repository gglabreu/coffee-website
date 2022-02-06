//Query-----------------------------------------------------------

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

// Populate Menu ----------------------------------------------------------------

const products = [
  {
    productName: 'Tradicional',
    discountValue: '4,99',
    value: '6,99',
    image: 'images/menu-1.png'
  },
  {
    productName: 'Expresso',
    discountValue: '5,99',
    value: '10,99',
    image: 'images/menu-2.png'
  },
  {
    productName: 'Caffè latte',
    discountValue: '15,99',
    value: '20,99',
    image: 'images/menu-3.png'
  },
  {
    productName: 'Macchiato',
    discountValue: '3,99',
    value: '5,99',
    image: 'images/menu-4.png'
  },
  {
    productName: 'Capuccino',
    discountValue: '15,99',
    value: '20,99',
    image: 'images/menu-5.png'
  },
  {
    productName: 'Irish coffee',
    discountValue: '12,99',
    value: '15,99',
    image: 'images/menu-6.png'
  }
]

function populateMenu() {
  var checkoutButton = document.getElementById('myCheckoutBtn')
  var emptyCart = document.getElementById('empty-cart')
  products.forEach(product => {
    function appendItemsToMenu() {
      var menuItemElement = document.createElement('div')

      menuItemElement.innerHTML = `
        <div class="box">
          <img src=${product.image} alt=${product.productName} />
          <h3>${product.productName}</h3>
          <div class="price">R$${product.discountValue} <span>${product.value}</span></div>
          <button name="buttonAddToCart" class="btn">Adicionar </br> ao carrinho</button>
        </div>
      `

      var coffeDrinksMenu = document.getElementById('coffee-drinks-menu')
      coffeDrinksMenu.appendChild(menuItemElement)
    }

    appendItemsToMenu()

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
            <span class="fas fa-times" id="remove-item-${index}"></span>
            <img src=${products[index].image} alt=${products[index].productName} />
            <div class="content">
              <h3>${products[index].productName}</h3>
              <div class="price">R$${products[index].discountValue}</div>
            </div>
          </div>
        `

        var cartItemsContainer = document.getElementById('cart-items')
        cartItemsContainer.appendChild(cartItemElement)

        var removeItemButtons = document.getElementById(`remove-item-${index}`)

        removeItemButtons.onclick = function () {
          cartItemElement.remove()
          var cartItems = document.getElementsByName('cartItem')
          if (cartItems.length === 0) {
            checkoutButton.style.display = 'none'
            emptyCart.style.display = 'flex'
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

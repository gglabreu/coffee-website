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

//Modal-------------------------------------------------------------------

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

//Checkout Modal-------------------------------------------------------------------

var checkoutModal = document.getElementById('myCheckoutModal')

var checkoutBtn = document.getElementById('myCheckoutBtn')

var checkoutOkButton = document.getElementById('myCheckoutOk')

checkoutBtn.onclick = function () {
  checkoutModal.style.display = 'block'
  cartItem.classList.remove('active')
}

checkoutOkButton.onclick = function () {
  checkoutModal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == checkoutModal) {
    checkoutModal.style.display = 'none'
  }
}

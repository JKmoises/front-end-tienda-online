import { ProductCart } from "../components/ProductCart.js";
import { formatPrice } from "./productUtils.js";

let cart = [];
let totalCart = 0;

let cartProductObj = {
  id: "",
  name: "",
  image: "",
  price: 0,
  subtotal: 0,
  units: 1,
};

export function finishShopping() {
  const $buyBtn = document.querySelector('#cart-container__buy-btn');

  $buyBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      Swal.fire({
        title: 'Agrega un producto',
        text: `Debes agregar al menos un producto al carrito`,
        icon: 'warning',
      });
      return;
    }
    cart = [];
    totalCart = 0;

    cleanHTML();
    calculateTotalBuy();

    Swal.fire({
      title: 'Compra realizada',
      text: `Tu compra a sido realizada con éxito`,
      icon: 'success',
      timer: 3000,
    });
  });
}

export function toggleCart() {
  const $cartBtn = document.querySelector('#navigation__cart');
  const $cartContainer = document.querySelector('#cart-container');


  $cartBtn.addEventListener('click', () => {
    $cartContainer.classList.toggle('none');
    $cartBtn.classList.toggle('navigation__cart--toggle');

    if ($cartBtn.classList.contains('navigation__cart--toggle')) {
      $cartBtn.title = "Haga click para ocultar Carrito";
    } else {
      $cartBtn.title = "Haga click para fijar Carrito";
    }
  });
}

export function addProductToCart(products) {
  const $productBtns = document.querySelectorAll(".shopping-container__btn");
  $productBtns.forEach(($productBtn) => $productBtn.addEventListener("click",e => addProduct(e,products)));
}

function addProduct(e, products) {
  let productId = e.target.dataset.id || e.target.parentElement.dataset.id;
  let product = products.filter((product) => product.id === productId);
  
  let [{ id, name, price, url_image }] = product;
  
  cartProductObj.id = id;
  cartProductObj.name = name;
  cartProductObj.price = price;
  cartProductObj.subtotal = price;
  cartProductObj.image = url_image;
  
  
  let productExists = cart.find(product => product.id === cartProductObj.id);
  if (productExists) return;
  
  cart = [...cart, { ...cartProductObj }];
  renderCart();
}

export function calculateBuySubtotal() {
  document.addEventListener('click', e => {
    if (!(e.target.matches('.product-cart__add-btn') || e.target.matches('.product-cart__remove-btn'))) {
      return;
    }

    let cartProductId = e.target.parentElement.parentElement.dataset.productoId;

    if (e.target.matches('.product-cart__add-btn')) {
      addUnitToProduct(cartProductId);
    }

    if (e.target.matches('.product-cart__remove-btn')) {
      removeUnitToProduct(cartProductId);
    }

    renderCart();
  });
}

function addUnitToProduct(productoId) {
  cart = cart.map(product => {
    if (product.id === productoId) {
      product.units += 1;
      product.subtotal = product.price * product.units;
    }
    
    return product;

  });
}

function removeUnitToProduct(productoId){
  cart = cart
    .map(product => {
      if (product.id === productoId) {
        product.units -= 1;
        product.subtotal -= product.price;
      }

      return product;
    })
    .filter(product => product.units >= 1);
}

export function renderCart() {
  cleanHTML();

  const $cart = document.querySelector("#cart");
  const $template = ProductCart();
  const $fragment = document.createDocumentFragment();
  let secondaryImage = 'app/assets/sin-imagen.jpg';

  cart.forEach(({ id, name, price, subtotal, units, image }) => {
    $template.querySelector(".product-cart").dataset.productoId = id;
    $template.querySelector(".product-cart__name").textContent = name;
    $template.querySelector(".product-cart__name").classList.add("text-center");
    $template.querySelector(".product-cart__img > img").src = image || secondaryImage;
    $template.querySelector(".product-cart__img > img").alt = name;
    $template.querySelector(".product-cart__units").innerHTML = units;
    $template.querySelector(".product-cart__price").innerHTML = `${formatPrice(price)}`;
    $template.querySelector(".product-cart__subtotal").innerHTML = `${formatPrice(subtotal)}`;

    let clone = document.importNode($template, true);

    $fragment.appendChild(clone);
  });
  $cart.appendChild($fragment);

  calculateTotalBuy();
}


function calculateTotalBuy(){
  const $totalCart = document.querySelector(".cart-container__total--buy");
  
  totalCart = cart.reduce((acc, product) => acc + parseInt(product.subtotal), 0);
  
  $totalCart.textContent = `${totalCart === 0 ? totalCart : formatPrice(totalCart)}`;
}

export function cleanCart() {
  const $cleanBtn = document.querySelector('#cart-container__clean-btn');

  $cleanBtn.addEventListener('click', () => {
    cart = [];
    renderCart();
  });
}

function cleanHTML($container = document.querySelector("#cart")) {

  while ($container.firstElementChild) {
    $container.firstElementChild.remove();
  }
}
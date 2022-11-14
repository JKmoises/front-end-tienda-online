import { ProductCart } from "./ProductCart.js";
import { ShoppingCart } from "./ShoppingCart.js";

export function CartContainer(){
  const $cartContainer = document.createElement('section');
  $cartContainer.id = 'cart-container';
  $cartContainer.classList.add('cart-container','none');
  
  const $cleanBtn = document.createElement('button');
  $cleanBtn.id = 'cart-container__clean-btn';
  $cleanBtn.classList.add('cart-container__clean-btn');
  $cleanBtn.textContent = 'Limpiar Carrito';

  const $totalCart = document.createElement('div');
  $totalCart.classList.add('cart-container__total');
  $totalCart.innerHTML = /*html*/`
    <h2>Total: <span class="cart-container__total--buy"></span></h2>
  `;

  const $buyBtn = document.createElement('button');
  $buyBtn.id = 'cart-container__buy-btn';
  $buyBtn.classList.add('cart-container__buy-btn');
  $buyBtn.textContent = 'Terminar Compra';


  $cartContainer.appendChild($cleanBtn);
  $cartContainer.appendChild(ShoppingCart());
  $cartContainer.appendChild($totalCart);
  $cartContainer.appendChild($buyBtn);
  
  ProductCart();



  return $cartContainer;


}
import { CartContainer } from "./CartContainer.js";

export function Navigation(){
  const $nav = document.createElement('nav');
  $nav.classList.add('navigation');

  $nav.innerHTML = /*html*/`
    <a id="carrito-icon" class="navigation__cart" title="Haga click para fijar Carrito">
      <i class="navigation__icon fas fa-cart-plus"></i>
    </a>
  `;

  $nav.appendChild(CartContainer());

  return $nav;
}
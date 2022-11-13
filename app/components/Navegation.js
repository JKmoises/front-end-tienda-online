export function Navigation(){
  const $nav = document.createElement('nav');
  $nav.classList.add('navigation');

  $nav.innerHTML = /*html*/`
    <a id="carrito-icon" class="navigation__cart" title="Haga click para fijar Carrito">
      <i class="fas fa-cart-plus"></i>
    </a>
  `;

  return $nav;
}
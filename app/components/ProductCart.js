export function ProductCart(){
  const $template = document.createElement('template');
  $template.id = 'template-cart';
  $template.innerHTML = /*html*/`
    <li class="product-cart">
      <h3 class="product-cart__name"></h3>

      <div class="product-cart__img">
        <img src="" alt="">
      </div>

      <div class="product-cart__container-units">
        <span class="product-cart__units"></span>
        <span class="product-cart__x">X</span>
        <span class="product-cart__price"></span>
      </div>

      <h4 class="product-cart__container-subtotal">Subtotal: <span class="product-cart__subtotal"></span></h4>

      <div class="product-cart__actions">
        <button class="product-cart__add-btn">+</button>
        <button class="product-cart__remove-btn">-</button>
      </div>
    </li>
  `;

  return $template.content;
}
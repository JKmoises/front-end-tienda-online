import { formatPrice } from "../helpers/productUtils.js";

export function ProductCard(props) {
  let { id, name, price, url_image, discount } = props;
  
  let priceDiscount = parseInt(discount) ? `${discount}%` : '';
  let productImage = url_image || 'app/assets/sin-imagen.jpg';
  
  return /*html*/`
    <article class="product-card">
      <img loading="lazy" class="product-card__image" src="${productImage}" alt="${name}">
      <h4 class="product-card__name">${name}</h4>
      
      <div class="shopping-container">
        <p>
          <span class="shopping-container__price">${formatPrice(price)}</span>
          <sup class="shopping-container__discount" title="Producto con ${priceDiscount} de descuento">
            ${priceDiscount}
          </sup>
        </p>
        <button class="shopping-container__btn" data-id="${id}">
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </article>`;
}
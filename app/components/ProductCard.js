

export function ProductCard(props) {
  let { id, name, price, url_image, discount } = props;
  
  let priceDiscount = parseInt(discount) ? `${discount}%` : '';
  
  return /*html*/`
    <article class="product-card">
      <img class="product-card__image" src="${url_image}" alt="${name}">
      <h2 class="product-card__name">${name}</h2>
      
      <div class="shopping-container">
        <p>
          <span class="shopping-container__price">$${price}</span>
          <sup>${priceDiscount}</sup>
        </p>
        <button class="shopping-container__btn" data-id="${id}">
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </article>`;
}
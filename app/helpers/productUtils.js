export function formatPrice(price) {
  const options = {
    style: "currency",
    currency: "CLP",
  };

  const config = new Intl.NumberFormat("USD",options);

  return config.format(price);
}

export function animateProductCard() {
  const $productBtns = document.querySelectorAll(".shopping-container__btn");

  $productBtns.forEach(($productBtn) => {
    let $productCard = $productBtn.parentElement.parentElement;

    $productBtn.addEventListener("mouseenter", (e) => {
      $productCard.classList.add("product-card--animar");
    },true);

    $productBtn.addEventListener("mouseout", (e) => {
      $productCard.classList.remove("product-card--animar");
    },true);
  });
}

export function isProductsFiltered() {
  const $products = document.querySelectorAll('.product-card');
  let productList = Array.apply(null, $products),
    productClasses = productList.map(product => product.className),
    isFiltered = productClasses.every(productClass => productClass.includes('product-card--filter'))

  return isFiltered;
}
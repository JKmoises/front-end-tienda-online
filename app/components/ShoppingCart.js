export function ShoppingCart(){
  const $cart = document.createElement('ul');
  $cart.id = 'cart';
  $cart.classList.add('cart');
  
  return $cart;
}
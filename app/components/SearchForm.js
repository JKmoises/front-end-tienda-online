import { isProductsFiltered } from "../helpers/productUtils.js";
import { Alert } from "./Alert.js";


export function SearchForm() {
  const $inputContainer = document.createElement('div');
  $inputContainer.classList.add('search-form');
  
  const $input = document.createElement('input');
  $input.classList.add('search-form__input');
  $input.id = 'categoria'
  $input.type = 'text';
  $input.required = true;
  $input.autocomplete = 'off';

  const $placeholder = document.createElement('span');
  $placeholder.textContent = 'Busca tu producto';
  $placeholder.classList.add('search-form__placeholder');

  $inputContainer.appendChild($input);
  $inputContainer.appendChild($placeholder);

  document.addEventListener("keyup", e => { 
    const $products = document.querySelectorAll('.product-card');


    if (e.target.matches('.search-form__input')) {   
      if (e.key === "Escape") e.target.value = "";
      
      let searchedProduct = e.target.value.toLocaleLowerCase();

      const $alert = Alert('No existen resultados de búsqueda para el término', searchedProduct);
      console.log($alert);
  
      $products.forEach(el => {
        (el.textContent.toLocaleLowerCase().includes(searchedProduct)) 
          ? el.classList.remove("product-card--filter")
          : el.classList.add("product-card--filter");
      });


      if (isProductsFiltered()) {
        document.querySelector('#main').appendChild($alert);
      } else {

      }
    }
  });


  
  return $inputContainer;
  
}
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { animateProductCard } from "../helpers/productUtils.js";
import { ProductCard } from "./ProductCard.js";


export async function Router(){
  const $main = document.getElementById('main');

  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    await ajax({
      url: api.PRODUCTS,
      cbSuccess: (products) => {

        let html = ''; //* Acumulador
        products.forEach(product => html += ProductCard(product));

        $main.innerHTML = html;
      }
    });
    animateProductCard();

  } else if (hash.includes('#/productos')) {
    let query = localStorage.getItem('category');

    if (!query) { 
      document.querySelector('.loader').style.display = 'none';
      return false;
    }

    await ajax({ 
      url: `${api.SEARCH}${query}`, 
      cbSuccess: (search) => {
        let html = ''; 
           
        search.forEach(product => html += ProductCard(product));

        $main.innerHTML = html; 
      }
    });
    animateProductCard();
    
  } 

  document.querySelector('.loader').style.display = 'none';
}
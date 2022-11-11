import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
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

  } else if (hash.includes('#/productos')) {
    let query = localStorage.getItem('category');
    console.log(query);

    if (!query) { 
      document.querySelector('.loader').style.display = 'none';
      return false;
    }

    await ajax({ 
      url: `${api.SEARCH}${query}`, 
      cbSuccess: (search) => {
        console.log(search);
        let html = ''; 

        if (search.length === 0) {  
          html = /*html*/`
            <p class="error">
              No existen resultados de búsqueda para el término
              <mark>${query}</mark>
            </p>
          `;
        } else {
          search.forEach(product => html += ProductCard(product));
        }

        $main.innerHTML = html; 
      }
    });
  }

  document.querySelector('.loader').style.display = 'none';
}
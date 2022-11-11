import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { ProductCard } from "./ProductCard.js";


export async function Router(){
  const d = document,
    w = window,
    $main = d.getElementById('main');

  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    await ajax({
      url: api.PRODUCTS,
      cbSuccess: (products) => {
        console.log(products);

        let html = ''; //* Acumulador
        products.forEach(product => html += ProductCard(product));
        
        $main.innerHTML = html;
      }
    });

  }
}
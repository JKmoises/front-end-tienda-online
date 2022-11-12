import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";

export function CategoryFilters() {
  const $select = document.createElement('select');
  $select.classList.add('form__filters');
  $select.name = 'categoria';
  $select.title = 'Elige una categoría';

   ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories) => {
      let html = /*html*/`<option value="todas">Todos los productos</option>`;

      categories.forEach(({ name }) => html += /*html*/`<option value="${name}">${name}</option>`);

      $select.innerHTML = html;

      if (location.hash.includes('#/productos')) {
        $select.value = localStorage.getItem('category');
      }
    }
   });
  
  
  
  document.addEventListener('change', e => {
    if (!e.target.matches('.form__filters')) return false;

    localStorage.setItem('category', e.target.value);

    location.hash = `#/productos?categoria=${e.target.value}`
  });

  return $select;
}
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";

export function CategoryFilters() {
  const $select = document.createElement('select');
  $select.classList.add('form__filters');
  $select.name = 'categoria';

   ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories) => {
      let html = /*html*/`<option value="">Elige una categoría</option>`;

      categories.forEach(({ name }) => html += /*html*/`<option value="${name}">${name}</option>`);

      $select.innerHTML = html;
    }
   });
  
  document.addEventListener('change', e => {
    if (!e.target.matches('.form__filters')) return false;

    localStorage.setItem('category', e.target.value);

    location.hash = `#/productos?categoria=${e.target.value}`
  });

  return $select;
}
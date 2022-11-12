import { ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";

export function CategoryFilters() {
  const $select = document.createElement('select');
  $select.classList.add('form__filters');
  $select.name = 'categoria';

   ajax({
    url: api.CATEGORIES,
    cbSuccess: (categories) => {
      console.log(categories);
      let html = /*html*/`<option value="">Elige una categoría</option>`;

      categories.forEach(({ name }) => html += /*html*/`<option value="${name}">${name}</option>`);

      $select.innerHTML = html;
    }
  });

  return $select;
}
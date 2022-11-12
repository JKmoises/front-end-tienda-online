import { CategoryFilters } from "./CategoryFilters.js";
import { SearchForm } from "./SearchForm.js";


export function Form(){
  const $form = document.createElement('form');
  $form.classList.add('form');

  $form.appendChild(SearchForm());
  $form.appendChild(CategoryFilters());

  $form.addEventListener('submit',e => e.preventDefault());


  return $form;
}
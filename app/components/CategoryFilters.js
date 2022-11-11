

export function CategoryFilters() {
  const $select = document.createElement('select');
  $select.classList.add('form__filters');

  $select.innerHTML = /*html*/`
    <option value="">Elige una categoría</option>
  `;
  
  return $select;
}
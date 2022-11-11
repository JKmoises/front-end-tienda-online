

export function SearchForm() {
  const $inputContainer = document.createElement('div');
  $inputContainer.classList.add('search-form');
  
  const $input = document.createElement('input');
  $input.classList.add('search-form__input');
  $input.id = 'categoria'
  $input.name = 'categoria';
  $input.type = 'search';
  $input.placeholder = 'Tienda';
  $input.autocomplete = 'off';

  const $icon = document.createElement('div');
  $icon.classList.add('search-form__icon');
  $icon.innerHTML = /*html*/`<i class="fas fa-search"></i>`;

  $inputContainer.appendChild($input);
  $inputContainer.appendChild($icon);


  if (location.hash.includes('#/productos')) {
    $input.value = localStorage.getItem('category');
  }

  document.addEventListener('submit', e => {
    if (!e.target.matches('.form')) return false;
    e.preventDefault();
    localStorage.setItem('category', e.target.categoria.value);

    location.hash = `#/productos?categoria=${e.target.categoria.value}`
  });
  
  return $inputContainer;
  
}
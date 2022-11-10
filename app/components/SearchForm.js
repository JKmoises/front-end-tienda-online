

export function SearchForm() {
  const $inputContainer = document.createElement('div');
  $inputContainer.classList.add('search-form');
  
  $inputContainer.innerHTML = /*html*/`
    <input 
      class="search-form__input" 
      type="search" 
      name="search" 
      id="search" 
      autocomplete="off" 
      placeholder = 'Tienda'
    >

    <div class="search-form__icon">
      <i class="fas fa-search"></i>
    </div>
  `;
  
  
  return $inputContainer;
  
}
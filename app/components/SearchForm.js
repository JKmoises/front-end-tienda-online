

export function SearchForm() {
  const $inputContainer = document.createElement('div');
  $inputContainer.classList.add('search-form');
  
  const $input = document.createElement('input');
  $input.classList.add('search-form__input');
  $input.id = 'categoria'
  $input.type = 'text';
  $input.placeholder = 'Busca tu producto...';
  $input.autocomplete = 'off';

  const $icon = document.createElement('div');
  $icon.classList.add('search-form__icon');
  $icon.innerHTML = /*html*/`<i class="fas fa-search"></i>`;

  $inputContainer.appendChild($input);
  $inputContainer.appendChild($icon);

  document.addEventListener("keyup", e => { 
    const $main = document.querySelectorAll('#main > *');
    const $products = document.querySelectorAll('.product-card');
    
    if (e.target.matches('.search-form__input')) { 
      if (e.key === "Escape") e.target.value = "";
      
      let searchedProduct = e.target.value.toLocaleLowerCase();
  


      $products.forEach(el => {
        (el.textContent.toLocaleLowerCase().includes(searchedProduct))
          ? el.classList.remove("product-card--filter")
          : el.classList.add("product-card--filter");
      });





    }
  });


  
  return $inputContainer;
  
}
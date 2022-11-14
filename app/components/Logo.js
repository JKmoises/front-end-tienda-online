

export function Logo(){
  const $logo = document.createElement('h1');
  $logo.classList.add('header__logo');

  $logo.innerHTML = /*html*/`
    <a href="https://jkmoises.github.io/front-end-tienda-online/">Bsale Test</a>
  `;

  return $logo;
}


export function Logo(){
  const $logo = document.createElement('h1');
  $logo.classList.add('header__logo');

  $logo.innerHTML = /*html*/`
    <a href="/#">Bsale Test</a>
  `;

  return $logo;
}
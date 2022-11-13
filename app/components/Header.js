import { Form } from "./Form.js";
import { Logo } from "./Logo.js";
import { Navigation } from "./Navegation.js";


export function Header(){
  const $header = document.createElement('header');
  $header.classList.add('header');

  $header.appendChild(Logo());
  $header.appendChild(Form());
  $header.appendChild(Navigation());
  return $header;
}
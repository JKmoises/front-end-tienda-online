import { Header } from "./app/components/Header.js";
import { Main } from "./app/components/Main.js";


export function App() {
  const $root = document.getElementById('root');

  $root.appendChild(Header());
  $root.appendChild(Main());
  

  
}
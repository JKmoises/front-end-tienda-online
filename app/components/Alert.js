export function Alert(text, data = "",type = "alert--error") {
  const $previousAlert = document.querySelector('.alert');
  if ($previousAlert) $previousAlert.remove();

  const $alert = document.createElement('p');
  $alert.classList.add('alert',type);
  $alert.innerHTML = /*html*/`
    ${text}
    <mark>${data}</mark>
  `;

  return $alert;
}
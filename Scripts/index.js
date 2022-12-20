document.getElementById('barsMenu').addEventListener('click', mostrarMenu);
document.getElementById('back__menu').addEventListener('click', ocultarMenu);
const nav = document.getElementById('nav');
const backMenu = document.getElementById('back__menu');

/** @type {string | boolean}} se usa un type solo para comprobar si usar JSdoc eliminaba el error en eslint*/
function mostrarMenu() {
  nav.style.right = '0px';
  backMenu.style.display = 'block';
}

function ocultarMenu() {
  nav.style.right = '-250px';
  backMenu.style.display = 'none';
}

const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect);

if(h2rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches

if(small) {
  console.log('Usuário mobile')
} else {
  console.log('Usuário desktop')
}


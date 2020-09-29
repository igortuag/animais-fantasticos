// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImg = document.querySelector("img");
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
let somaLarguras = 0;

window.onload = () => {
  const todasImgs = document.querySelectorAll("img");
  todasImgs.forEach((img) => (somaLarguras += console.log(img.offsetWidth)));
};
console.log(somaLarguras);

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const LinksPage = document.querySelectorAll("a");
LinksPage.forEach((link) => {
  let linkProps = link.getBoundingClientRect()
  console.log(linkProps.width);
  console.log(linkProps.height);
  if (linkProps.width < 48 || linkProps.height < 48) {
    console.log("Não possui boa acessibilidade")
  } else {
    console.log("Possui boa acessibilidade")
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
if(window.matchMedia('(max-width: 720px)')) {
  menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}

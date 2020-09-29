// Retorne no console todas as imagens do site
const images = document.querySelectorAll("img");
images.forEach((img) => console.log(img));

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagesImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagesImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2aniamis = document.querySelector(".animais-descricao h2");
console.log(h2aniamis);

// Selecione o último p do site
const lastP = document.querySelectorAll("p");
console.log(lastP[--lastP.length]);

// Adicione a clase ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => item.classList.add("ativo"));
console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => item.classList.remove("ativo"));
itensMenu[0].classList.add("ativo");
console.log(itensMenu);

// Verifique se as imagens possuem atributo alt
const images = document.querySelectorAll('img');
images.forEach((img) => console.log(img.hasAttribute("alt")));

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://wwww.google.com/')
console.log(link)
const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.toggle("ativo");
menu.classList.toggle("azul");

/// adicionar antigamente
menu.className += " Antigo";

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
}

// console.log(menu.classList)

const animais = document.querySelector(".animais");
console.log(animais.attributes.id);

const img = document.querySelector("img");
const srcImg = img.getAttribute("src");

img.setAttribute("alt", "É uma raposa");
const srcAlt = img.getAttribute("alt");

const possuiAlt = img.hasAttribute("alt");

console.log(possuiAlt);

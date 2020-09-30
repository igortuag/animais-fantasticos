// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma.
// Previna o comportamento padrão desses links
const internalLinks = document.querySelectorAll("a[href^='#']");

const addActive = (event) => {
  event.preventDefault();
  internalLinks.forEach((link) => link.classList.remove("ativo"));
  event.currentTarget.classList.add("ativo");
};

internalLinks.forEach((el) => el.addEventListener("click", addActive));


// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
// const showInfos = (event) => (console.log(event.target))
// const allElements = document.querySelectorAll('*')
// allElements.forEach((el) => el.addEventListener('click', showInfos))

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
//const removeInfos = (event) => (event.target.remove())
//const allElements = document.querySelectorAll('*')
//allElements.forEach((el) => el.addEventListener('click', removeInfos))

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const handleClickT = (event) => {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
};

window.addEventListener("keydown", handleClickT);

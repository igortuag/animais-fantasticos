// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)

copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista')
console.log(faq.querySelector('dt'))

// Selecione o DD referente ao primeiro DT
console.log(faq.querySelector('dt').nextElementSibling)

// Substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faqContent = document.querySelector('.faq')

faqContent.innerHTML = animais.innerHTML
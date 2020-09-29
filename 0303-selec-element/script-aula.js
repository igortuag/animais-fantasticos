const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[1])

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]')
console.log(linksInternos)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach((item, index) => {
  console.log(item, index )
})

const arrayGrid = Array.from(gridSectionHTML)
arrayGrid.map((item) => console.log(item))
// const li = document.querySelector('li')

// const arrayLi = Array.from(li)

// const obj = {
//   0: 'Igor',
//   1: 'Tuag',
//   2: 'Teste',
//   length: 3,
// }

// const objArray = Array.from(obj)
// console.log(objArray)

// console.log(Array.isArray(obj))
// console.log(Array.isArray(objArray))

// const frutas = ['Banana', 'Pêra', ['Uva roxa', 'Uva Verde']]

// console.log(frutas.length)

const carros = ['Ford', 'Fiat', 'VW']
carros.unshift('Kia', 'Ferrari')
const novoArray = carros.push('Parati', 'Gol')

console.log(novoArray)

console.log(carros)

console.log(carros.pop())
console.log(carros.shift())
console.log(carros)
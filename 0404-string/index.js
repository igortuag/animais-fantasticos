// const comida = "Pizza";
// const agua = new String("Agua");

// console.log(comida.length);
// console.log(agua.length);

// const frase = "A melhor comida";

// console.log(frase[frase.length - 1])
// console.log(frase.charAt(frase.length - 1))

// const frase = "A melhor linguagem é ";
// const linguagem = "Javascript";

// const fraseFinal = frase.concat(linguagem, '!', '!')
// console.log(fraseFinal)

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

// console.log(listaFrutas.includes(fruta));
// console.log(listaFrutas.includes(fruta, 14));
// console.log(fruta.includes(listaFrutas));

// console.log(fruta.startsWith("Ba"));
// console.log(fruta.endsWith("na"));

const transacao1 = "Deposito de cliente";
const transacao2 = "Deposito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao3.slice(3));
console.log(transacao3.slice(0, -3));
console.log(transacao3.slice(-5));

console.log(fruta.indexOf("a"));
console.log(fruta.lastIndexOf("na"));

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((el) => {
  console.log(el.padStart(10, "-"));
});

const listaPedidos = ['1', '2', '3', '4', '5', '6', '22', '354', '485'];
listaPedidos.forEach((el) => {
  console.log(el.padStart(6, '0'))
})
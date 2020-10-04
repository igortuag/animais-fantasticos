// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const igor = new Pessoa("Igor", "Tuag", 25);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype)
console.log(HTMLAllCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");
li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name) // Document
console.log(li.click.constructor.name) // HRMLLIElement
console.log(li.innerText.constructor.name) // Function
console.log(li.value.constructor.name) // String
console.log(li.hidden.constructor.name) // Number
console.log(li.offsetLeft.constructor.name) // Boolean
console.log(li.click.constructor.name) // Undefined
// Qual o construtor do dado abaixo:*
li.hidden.constructor.name;
console.log(li.hidden.constructor.name) // String

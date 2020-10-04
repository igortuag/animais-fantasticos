function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function() {
    return 'Andou pelo objeto'
  }
}

var obj = {
  nome: "Fulano",
  idade: 28,
};

obj.teste = "Isso";

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};

const igor = new Pessoa("Igor", 25);

console.log(Pessoa.prototype);
console.log(igor.prototype);

console.log(igor.andar);

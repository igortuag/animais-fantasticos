// const pessoa = new Object({
//   nome: "Andre",
// });

// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(carro).init("Honda");
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init("Ferrari");
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },
//   buzinar() {
//     return "buzinou";
//   },
// };
// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// Object.assign(moto, funcaoAutomovel, carro);

// console.log(moto)

// const moto = {
// 	capacete: true,
// };
// console.log(moto);

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
// 		configurable: false,
// 		writable: true,
//   },
// });

// moto.rodas = 5;
// delete moto.rodas;
// delete moto.capacete;
// console.log(moto);

const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});
moto.rodas = 4;
console.log(moto);
console.log(moto.rodas);

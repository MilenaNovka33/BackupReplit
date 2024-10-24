// Loops são lações/ciclos de repetição infinita
// for, for in, for of, foreach, while, do while
const pokedex = ["pikachu, bulbassauro, charmander, squirtle, mew"];
//                   0          1           2           3      4
const valores = [150, 250, 1000, 3500];
//                0    1     2     3
const pokemonList = [
  { nome: "pikachu", tipo: "eletrico" },
  { nome: "bulbassauro", tipo: "grama" },
  { nome: "charmander", tipo: "fogo" },
  { nome: "squirtle", tipo: "agua" },
];
// Faça um loop e retorne nome+tipo de cada pokemon

for (let pokemon of pokemonList) {
  const nome = pokemon.nome;
  const tipo = pokemon.tipo;
  console.log(`Nome: ${nome.toUpperCase()} - Tipo: ${tipo.toUpperCase()}`);
}

// for (let i = 0; i < pokedex.length; i++) {
//   console.log(pokedex[i])
// }

// Retorna os índices
// for (let i in valores) {
//   console.log(valores[i]);
// }

// Retorna os valores relacionados aos índices
// for (let i of pokedex) {
//   console.log(i);
// }

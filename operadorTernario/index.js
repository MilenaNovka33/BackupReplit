// OPERADOR TERNÁRIO SERVE PARA FAZER ESCOLHA DO FLUXO DE UMA CONDIÇÃO, OU SEJA, PODEMOS SUBSTITUIR O USO DO IF/ELSE POR ELE.
// EX0: <variavel> = <condição> ? <valor_verdadeiro> : <valor_falso>;

//const idade = 18
//if(idade >= 18) {
//  console.log("PERMITA A ENTRADA")
//} else {
//  console.log("ACESSO NEGADO")
//}

// OPÇÃO TERNÁRIA

//const passe = idade >= 18 ? "PERMITA A ENTRADA" : "ACESSO NEGADO"
//console.log(passe)

// Ternário com multiplos valores

//const operador = "*"

// function calcula(n1, n2, op) {
//   const res = op === "+" ? n1 + n2
//     : op === "*" ? n1 * n2
//     : op === "-" ? n1 - n2
//     :n1 / n2
//   return res
// }
//console.log(calcula(2, 5, operador))

// USANDO IF/ELSE
// EX1:

//function calcula(n1, n2, op){
//  let res = 0;
//  if(op === "+") {
//    res = n1 + n2
//  } else if(op === "*") {
//    res = n1 * n2
//  } else if(op === "-") {
//    res = n1 - n2
//  } else {
//    res = n1 / n2
//  }
//  return res
//}
//console.log(calcula(2, 5, operador))

// EX2:
// 1) Crie um array pessoas
// Deve conter o nome, idade e sexo da pessoa.
// 2) Crie um array vazio (meninos)
// 3) Crie um array vazio (meninas)
// Faça uma função que:
// Itere (loop) sobre o array pessoas
// Se o sexo da pessoa for igual a "F"
// Adicione a pessoa no array meninas (array.push(obj))
// Caso contrário, se for "M" adicione ao objeto (meninos))
// Imprima os objetos> [pessoas, meninos, meninas]]

const pessoas = [
  { nome: "Esdras", idade: 18, sexo: "M" },
  { nome: "Maria", idade: 25, sexo: "F" },
  { nome: "João", idade: 20, sexo: "M" },
  { nome: "Ana", idade: 22, sexo: "F" }
];

const meninos = [];
const meninas = [];

for (let pessoa of pessoas) {
  if (pessoa.sexo === "M") {
    meninos.push(pessoa);
  } else {
    meninas.push(pessoa);
  }
}

console.log("Pessoas:", pessoas);
console.log("Meninos:", meninos);
console.log("Meninas:", meninas);
// A) CRIE UM ARRAY DE OBJETOS CHAMADO > PESSOAS 
// B) FAÇA UMA FUNÇÃO QUE RECEBA UM ARRAY
// C) ITERE SOBRE O ARRAY DE PESSOAS E VERIFIQUE SE O ITEM SEXO == 'F' OU 'M'
// D) SE FOR IGUAL A 'F', INSIRA A PESSOA CORRENTE EM UM ARRAY CHAMADO MENINAS, SE FOR 'M' INSIRA A PESSOA EM UM ARRAY CHAMADO MENINOS
// E) FINALMENTE, IMPRIMA OS TRÊS ARRAYS

const pessoas = [
  { nome: "Esdras", idade: 17, sexo: "M" },
  { nome: "Rute", idade: 30, sexo: "F" },
  { nome: "Cain", idade: 18, sexo: "M" },
  { nome: "Amanda", idade: 50, sexo: "F" },
  { nome: "Henrique", idade: 35, sexo: "M" },
  { nome: "Melquisedeque", idade: 60, sexo: "M"}   
];
// Objeto animais: raça, pelo, sexo

const animais = [
     { raça: "cachorro", pelo: "curto", sexo: "M"},
     { raça: "leão", pelo: "longo", sexo: "F"},
     { raça: "gato", pelo: "curto", sexo: "M"},
     { raça: "cavalo", pelo: "curto", sexo: "M"},
     { raça: "pato", pelo: "curto", sexo: "F"}

]

const meninos = [];
const meninas = [];
         
//     if (pessoa.sexo === "F") {
//     meninas.push(pessoa);          
//     } else if (pessoa.sexo === "M") {
//     meninos.push(pessoa);
//     } else {
//     console.log("Sexo não especificado")
//     }

function filtroPessoas(arrPessoas) {
     if (typeof arrPessoas == "object") {
          for (pessoa of arrPessoas) {
               pessoa.sexo == "F"
               ? meninas.push(pessoa)
               : meninos.push(pessoa); 
     }
}
}
filtroPessoas(pessoas);
filtroPessoas(animais);

console.log("---Meninas---");
console.log(meninas);

console.log("---Meninos---");
console.log(meninos);
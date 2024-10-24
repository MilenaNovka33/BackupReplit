/**
 *  ARRAYS
 *  Listas mistas ou uniformes
 *  podem ser iterados
 *  são ordenados por índice (a partir do 0)
 *  Podemos alterá-los em tempo real
 *  Têm métodos próprios
 */

const jogos = ["GTA", "FIFA", "MINECRAFT", "FORZA", "PES"];
// Índice:       0      1          2          3       4
console.log(jogos);
console.log(jogos[3]); // 33
jogos[12] = "MORTAL KOMBAT";
console.log(jogos[12]); // Mortal Kombat

// Métodos
jogos.push("Gran Turismo"); // Adiciona um elemento no final do array
jogos.pop(); // Remove o último elemento do array
jogos.shift(); // Remove o primeiro elemento do array
jogos.unshift("God of War"); // Adiciona um elemento no início do array
console.log(jogos.lenth); // Retorna o tamanho do array

console.log(jogos); // Resultado final

// Iteração: loop for
for (let i = 0; i < jogos.lenth; i++) {
// console.log(i)
  console.log(jogos[i]); // Acessa o elemento do índice i
}
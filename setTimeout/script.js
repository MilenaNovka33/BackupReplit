// Set interval - Executa a cada x milissegundos
//let n = 0
//const intervalo1 = setInterval(function() {
//  console.clear()
//  console.log("Executando a cada 1 segundo", n);
//  n = n + 1
//}, 1000)

// Set timeout - Executa "após" x milissegundos
//setTimeout(function() {
//  clearInterval(intervalo1) // Stop no intervalo
//  window.alert("Já passou 5 segundos") // Gera um pop up
//  location.href = "https://www.google.com.br/?hl=pt-BR" // Redireciona para outra página
//}, 5000)

//** Exercício/Desafio
//Gerar o número aleatório = Math.random() * 10
//A) Crie um script que mostre um número randômico de 0 a 10 a cada de 3 segundos
//B) Após passados 15 segundos, encerre o intervalo usando clearinterval e setTimeout

const intervalo2 = setInterval(function() {
  let aleatorio = Math.round(Math.random() * 10)
  console.log("Número aleatório: ", aleatorio)
} , 3000) // 3 segundos

setTimeout(function(){
  window.alert("Já passou 15 segundos")
  clearInterval(intervalo2)
  location.href = "https://www.google.com.br/?hl=pt-BR" // Redireciona para outra página
}, 15000) // 15 segundos
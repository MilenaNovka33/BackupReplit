// Desafio login com while 01

//Crie um código que peça login e seha enquanto o usuário não estiver logado, caso usuário e senha estejam corretos, envie msg de boas vindas, caso contrário, envie mensagem de erro. 

const usuario = "admin"
const senha = "123"
let estaLogado = false
let u, s = " "

while (!estaLogado) {
  u = window.prompt("Digite o usuário: ")
  s = window.prompt("Digite a senha: ")
  if (u == usuario && s == senha) {
    estaLogado = true
    window.alert("Bem vindo! " + usuario)
  }

  window.prompt("Qual é o seu nome: ")

// Desafio while 02
// Crie um código que peça ao usuário para adivinhar qual é meu número da sorte
// Math.random() * 50
// Insira um limite máximo de 3 tentativas, caso o usuário exceda as tentativas, quebre o programa, senão, se os parabéns e quantidade de tentativas usadas.
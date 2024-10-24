/** Crie um array de objeto => pessoas
 *  Com os seguintes atributos: nome/sobrenome
 *  Crie uma função que itere sobre o array e retire nomes e sobrenomes
 *  Crie uma variável com o conteúdo:
 *    -> const emailBase = "@escola.pr.gov.br"
 *  A partir deses dados forme um @escola com nome.sobre+emailbase execute a função
 */

// A) Criar um array de pessoas
// B) Iterar sobre o array e montar o email
// C) Converter para uma função reaproveitável
// D) Criar uma função para cadastro de pessoas

const pessoas = [
  ];

// Email base

//for (pessoa of pessoas){
  //console.log(pessoa);
//  console.log(`${pessoa.nome}.${pessoa.sobrenome}${emailBase}`)

//}

const emailBase = "@escola.pr.gov.br";

function montarEmail() {
  if (pessoas.length == 0) {
    console.log("Não há pessoas cadastradas");
  } else {
    for (pessoa of pessoas) {
      const nome = pessoa.nome;
      const sobrenome = pessoa.sobrenome;
      const email = `${nome}.${sobrenome}${emailBase}`;
    console.log(email.toLowerCase());
    }
  }
}
  
//montarEmail();

// Criar uma função para cadastro de pessoas
function cadastrarPessoa(nome, sobrenome){
  pessoas.push(
    {
      nome: nome,
      sobrenome: sobrenome
    }  
  )
}

cadastrarPessoa("José", "Silva")
cadastrarPessoa("Maria", "Souza")
cadastrarPessoa("Pedro", "Santos")
cadastrarPessoa("Ana", "Ferreira")
montarEmail();
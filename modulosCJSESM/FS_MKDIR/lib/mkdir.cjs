// Criar uma função que gera uma pasta
const fs = require('node:fs');
const path = require('node:path');

// Criar uma função sem o PATH
function criarPastaEstatica(pasta) {
  fs.mkdir(pasta, function(err) {
    console.log("Erro ao criar a pasta")
    console.log(err)
  })
}

// Criar uma função com o PATH/IF/TRY/CATCH
function criarPastaDinamica(pasta) {
  if (!fs.existsSync(path.join(___dirname, pasta))) {
    fs.mkdirSync(path.join(___dirname, pasta))
    console.log(`Pasta ${pasta} criada com sucesso!`)
  } else {
    console.log(`Não foi possível criar a pasta ${pasta}`)
  }
}

// Exportar módulos
module.exports = { criarPastaEstatica, criarPastaDinamica }


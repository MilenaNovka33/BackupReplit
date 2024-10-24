// Criar pastas com NODEJS
const fs = require('fs')
const path = require('path')

// Criando com caminhos estáticos

function pastaEstatica(nomePasta) {
  fs.mkdir(nomePasta, function(err) {
    console.log("Erro ao criar pasta: ")
    console.log(err)
  })
}

// Criando com caminhos dinâmicos

function pastaDinamica(nomePasta) {
  if (!fs.existsSync(nomePasta)) {
    if (!fs.existsSync(path.join(__dirname, nomePasta))) {
      fs.mkdirSync(path.join(__dirname, nomePasta))
      console.log("Pasta criada com sucesso!")
      return true
    } else {
      console.log(`A Pasta " ${nomePasta} " já existe!`)
      return false
    }
  }
}




module.exports = { pastaEstatica, pastaDinamica }



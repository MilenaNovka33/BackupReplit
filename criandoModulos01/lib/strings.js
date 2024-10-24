// Exports EJS
// Variáveis, funções, classes

const nome = "Julius"

function dizOla(){
  return `Olá, ${nome}`
}

// Exports inline
export function toUpper(text) {
  return `${text.toUpperCase()}`;
}

// Exportação default (padrão)
function toLower(text) {
  return `${text.toLowerCase()}`;
}

// Exportação multipla
export default toLower;
export {nome, dizOla};
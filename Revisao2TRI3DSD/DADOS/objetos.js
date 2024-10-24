// Objetos são estruturas complexas em javascript e são organizados por chave-valor (key-value)
// Contém atributos e métodos
// Objetos literais

const banana = {
  cor: "amarela",
  casca: true,
  peso: "200g",
  paisesDeOrigem: ["Brasil", "Argentina", "Chile"],
  descascar: function() {
    this.casca = false;
    return `Banana descascada com sucesso!`;
    // console.log("Funciona?"); Não funciona porque o return acaba com o cõdigo
  },
};
console.log(banana)
console.log("--------------------------------------------------------------------------------")
console.log(Object.keys(banana)) // Retorna as chaves do objeto
console.log("--------------------------------------------------------------------------------")
console.log(Object.values(banana)) // Returma os valores do objeto
console.log(banana.casca);
console.log(banana.descascar());

// É possível fazer uma iteração em objetos
// For, for in, for of

for (let bananas of banana) {
  const cor = bananas.cor;
  const casca = bananas.casca;
  console.log(`${cor.toUpperCase()}`);
}
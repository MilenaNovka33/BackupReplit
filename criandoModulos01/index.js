// Imports de módulos

import { nome, dizOla, toUpper } from "./lib/strings.js";

// Importação default
import toLower from "./lib/strings.js";

console.log(nome);
console.log(dizOla());
console.log(toUpper("Marcello"));
console.log(toLower("Anne"));

/** Passos de utilização dos módulos EJS 
1) Exportamos com export ou export default
2) Liberamos o uso de módulos "type":"module"
3) Importamos com import
4) Utilizamos o módulo importado dentro inde.js*/

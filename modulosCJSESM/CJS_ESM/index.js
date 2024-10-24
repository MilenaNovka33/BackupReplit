// Import
import {getGuilda} from "./lib/personagem.js";
import getPersonagem from "./lib/personagem.js";
import {fs, path, http} from "./lib/nativos.cjs"
// Chamando funçã do modulo ESM personagem
console.log(getPersonagem());
getGuilda() // Console.log()

// Chamando modulos CJS
console.log(fs);
console.log(path);
console.log(http);
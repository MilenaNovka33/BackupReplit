// Utilizar o módulo

import { pastaDinamica, pastaEstatica } from "./lib/gerenciadorArquivos.cjs";

//pastaEstatica("./relatorio");
//pastaEstatica("./contratos");

// Dentro da pasta atual
pastaDinamica("./Novorelatorio");
pastaDinamica("./ArquivoX");

// Cria um nível acima da pasta atual
pastaDinamica("../Novorelatorio");
pastaDinamica("../ArquivoX");

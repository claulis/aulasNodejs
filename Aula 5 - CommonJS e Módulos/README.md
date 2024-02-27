## CommonJS

CommonJS  é uma *especificação* para módulos em JavaScript que visa padronizar a forma como os módulos são importados e exportados em ambientes JavaScript, especialmente no lado do servidor, como o Node.js. Foi uma tentativa de resolver o problema de modularidade em JavaScript antes que os padrões de módulos do ECMAScript (ES6) fossem finalizados e amplamente adotados.

A especificação CommonJS define um conjunto de regras para definir, importar e exportar módulos JavaScript. Aqui estão alguns dos conceitos chave da especificação CommonJS:

1. **`require()`**: A função `require()` é usada para **importar** módulos em um arquivo JavaScript. Ela aceita o caminho do módulo que está sendo importado e retorna o objeto exportado pelo módulo.

2. **`module.exports`**: A propriedade `module.exports` é usada para **exportar** objetos, funções ou valores de um módulo JavaScript. Qualquer valor atribuído a `module.exports` será disponibilizado para outros módulos que o requerem.

3. **`exports`**: A variável `exports` é uma referência para `module.exports`. É utilizada para exportar objetos, funções ou valores, mas não pode ser reatribuída diretamente como `module.exports`. Por exemplo, `exports.minhaFuncao = minhaFuncao` adiciona `minhaFuncao` aos objetos exportados.

4. **Módulos síncronos**: O sistema de módulos CommonJS é síncrono por natureza, o que significa que os módulos são carregados e avaliados de forma síncrona.

No contexto do Node.js, a especificação CommonJS permitiu que os desenvolvedores estruturassem seus aplicativos de forma modular e compartilhassem código de maneira eficaz. Ela foi fundamental para o crescimento do ecossistema Node.js, permitindo que os desenvolvedores criassem e reutilizassem módulos de forma fácil e eficiente.

## ECMAScript 6
No entanto, com o advento do ECMAScript 6 (também conhecido como ES6 ou ES2015), a linguagem JavaScript introduziu seus próprios recursos de módulos, que se tornaram parte do próprio JavaScript padrão. Esses recursos de módulos oferecem uma sintaxe mais limpa e poderosa, incluindo importações e exportações nomeadas, bem como importações e exportações padrão.

Apesar disso, o CommonJS ainda é amplamente utilizado em ambientes como o Node.js, especialmente em código legado e em projetos existentes que ainda não migraram para os módulos ECMAScript.

## Resumo das diferenças entre CommonJS e ECMAScript
O ECMAScript 6, também conhecido como ES6 ou ES2015, introduziu suporte nativo para módulos no JavaScript. Antes do ES6, o JavaScript dependia de sistemas de módulos específicos do ambiente, como CommonJS no Node.js e AMD (Asynchronous Module Definition) no navegador. Com a introdução dos módulos ES6, o JavaScript agora possui um sistema de módulos padrão integrado à linguagem.

Aqui está uma tabela comparativa das diferenças entre CommonJS e ECMAScript (ES6) em relação a módulos:

| Recurso                    | CommonJS                                               | ECMAScript (ES6)                                        |
|----------------------------|--------------------------------------------------------|---------------------------------------------------------|
| **Sintaxe de Exportação**  | Utiliza `module.exports` e `exports` para exportação. | Utiliza `export` para exportação nomeada e `export default` para exportação padrão. |
| **Sintaxe de Importação**  | Utiliza `require()` para importação de módulos.       | Utiliza `import` para importação de módulos.            |
| **Exportação Assíncrona**  | Não suporta exportação assíncrona.                    | Não suporta exportação assíncrona.                      |
| **Carregamento Assíncrono**| Não suporta carregamento assíncrono de módulos.       | Suporta carregamento assíncrono de módulos usando a função `import()`. |
| **Exportações Nomeadas**   | Não suporta exportações nomeadas.                     | Suporta exportações nomeadas usando a palavra-chave `export`. |
| **Exportação Padrão**      | Não suporta exportação padrão.                        | Suporta exportação padrão usando `export default`.       |
| **Escopo de Módulo**       | Não possui escopo de módulo.                          | Possui escopo de módulo.                                |
| **Módulos Dinâmicos**      | Não suporta carregamento dinâmico de módulos.         | Suporta carregamento dinâmico de módulos usando `import()`. |
| **Suporte Nativo**          | Amplamente usado no Node.js.                          | Suportado em navegadores modernos e Node.js.             |

Essas são algumas das principais diferenças entre CommonJS e ECMAScript (ES6) em relação a módulos. Ambos os sistemas têm suas vantagens e são amplamente utilizados em seus respectivos contextos. O CommonJS foi muito importante para o desenvolvimento no Node.js, enquanto o ECMAScript (ES6) introduziu um sistema de módulos nativo no JavaScript, tornando-o mais padronizado e interoperável com outros ambientes de execução JavaScript.
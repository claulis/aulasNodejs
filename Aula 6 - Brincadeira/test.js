import {RetornaEmpregoFuturo} from './brincadeira.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

console.log('-------------------------------------');
console.log('🌟Descubra o seu emprego do futuro🌟');
console.log('-------------------------------------');

let dia = await rl.question('->qual o seu dia? ');
let mes =await rl.question('->Qual o seu mês?');
 
rl.close();

console.log('-------------------------------------');
RetornaEmpregoFuturo(dia,mes);
console.log('-------------------------------------');
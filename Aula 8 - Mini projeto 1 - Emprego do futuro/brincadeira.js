import { readFileSync } from "fs";
import { read } from "xlsx/xlsx.mjs";

export const RetornaEmpregoFuturo = (dia, mes) => {
  const arquivo = readFileSync("dados.xlsx");
  let workbook;
  // Lê o arquivo Excel e retorna um objeto Workbook
  try {
    workbook = read(arquivo);
  } catch (error) {
    console.error(error.message);
  }

  // Acessa a primeira planilha do Workbook
  const worksheet = workbook.Sheets["Planilha1"]; // Altere o nome da planilha se necessário

  // Obtém os valores de todas as células da primeira coluna
  const primeiraColuna = [];
  for (let i = 1; i <= 12; i++) {
    primeiraColuna.push(worksheet[`A${i}`].v);
  }

  // Obtém os valores de todas as células da segunda coluna
  const segundaColuna = [];
  for (let i = 1; i <= 31; i++) {
    segundaColuna.push(worksheet[`B${i}`].v);
  }
 callback
  try {
    console.log(
      `Seu emprego futuro será: ${primeiraColuna[mes]} ${segundaColuna[dia]}`
    );
  } catch (error) {
    console.error(error.message);
  }
};

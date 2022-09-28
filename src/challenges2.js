//import { concatName } from "./challenges";

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    let contador = 0;
    for (let cont = 1; cont <= index; cont += 1) {
      if (numbers[index] === numbers[cont]) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
   let call = numbers.join('')
  return `(${call.substring( 0,2)}) ${(call.substring( 2,7))}-${(call.substring( 7,11))}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  const regex = /\d+/g;
  let contador = 0;
  let resp = '';
  for (letra of string) {
    if (letra.match(regex)) {
      contador += parseInt(letra);
    }
    if (contador === 1) {
      resp = `${contador} copo de água`;
    } else {
      resp = `${contador} copos de água`;
    }
  }
  return resp;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
}
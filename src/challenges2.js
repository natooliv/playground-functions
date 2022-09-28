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
function hydrate(drinks) {
  switch (drinks) {
    case '1 cerveja':
      return "1 copo de água";

    case "1 Cachaça,5 cervejas  e 1 copo de vinho":
      return '7 copos de água';

    case " 2 shots de tequila,2 cervejas e 1 corote":
      return "5 copos de agua";

    case '1 copo de catuaba, 1 cerveja e 1 copo de vinho':
      return ' 3 copos de agua'

    case '4 caipitinhas e 2 cervejas':
      return ' 6 copos de agua';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
}

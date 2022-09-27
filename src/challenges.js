// Desafio 1
function compareTrue(paramA, paramB) {
  if (paramA === true && paramB === true) {
    return true;
  }
  return false;
}


// Desafio 2
function calcArea(altura, base) {
  let area = (altura * base) / 2;
  return area;
}

// Desafio 3
function splitSentence(variavel) {
  return variavel.split(' ');
}

// Desafio 4
function concatName(foguetere) {
  let primeiroItem = foguetere[0];
  let ultimoItem = foguetere[foguetere.length - 1];
  let conc = ultimoItem + ', ' + primeiroItem;
  return conc;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

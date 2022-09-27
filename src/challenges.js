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
  let conc = '';
  return conc.concat(ultimoItem, ', ', primeiroItem);
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6
function highestCount(vetores) {
  let pontos = 0;
  let numeroMaior = vetores[0];
  for (let index = 0; index < vetores.length; index += 1) {
    if (vetores[index] > numeroMaior) {
      numeroMaior = vetores[index];
    }
  }
  for (let index01 = 0; index01 < vetores.length; index01 += 1) {
    if (vetores[index01] === numeroMaior) {
      pontos += 1;
    }
  }
  return pontos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta = '';
  const corridaCat1 = Math.abs(mouse - cat1);
  const corridaCat2 = Math.abs(mouse - cat2);
  if (corridaCat1 < corridaCat2) {
    resposta = 'cat1';
  } else if(corridaCat2 < corridaCat1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
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

/* eslint-disable sonarjs/cognitive-complexity */
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
  } else if (corridaCat2 < corridaCat1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let result = [];

  for (let value of array) {
    if (value % 3 === 0 && value % 5 === 0) {
      result.push('fizzBuzz');
    } else if (value % 3 === 0) {
      result.push('fizz');
    } else if (value % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
// Desafio 9

function encode(palavra) {
  let novaPalavra = palavra;
  const objeto = { a: "1", e: "2", i: "3", o: "4", u: "5" };
  for (let letra of palavra) {
    for (let chave in objeto) {
      if (letra === chave) {
        novaPalavra = novaPalavra.replace(letra, objeto[chave]);
      }
    }
  }
  return novaPalavra;
}

function decode(palavras1) {
  let novoNumero = palavras1;
  const objeto = { 1 :"a", 2: "e", 3: "i", 4: "o", 5: "u" };
  for (let numero of palavras1) {
    for (let chave in objeto) {
      if (numero === chave) {
        novoNumero = novoNumero.replace(numero, objeto[chave]);
      }
    }
  }
  return novoNumero;
}


    // Desafio 10
    function techList(sorteio, nome) {
      let resultado = [];
      if (sorteio.length === 0) {
        return 'Vazio!';
      }
      let num = sorteio.sort();
      for (let alpha = 0; alpha < sorteio.length; alpha += 1) {
        resultado.push({
          tech: num[alpha],
          name: nome,
        });
      }
      return resultado;
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
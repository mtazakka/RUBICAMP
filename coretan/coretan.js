function weirdMultiply(sentence) {

  let huruf = sentence.toString();
  let angka = huruf.split('')
  if (angka.length == 1) {
    return sentence
  } else {
      return weirdMultiply(angka.reduce((previousValue, currentValue) => previousValue * currentValue))
    }
  }

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3))

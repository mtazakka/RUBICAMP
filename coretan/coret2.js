function stringManipulation(word) {
  const vokal = ["a", "i", "u", "e", "o"];
    if (vokal.includes(word.charAt(0))) {
      console.log(word)
    } else {
      let letter = word.split();
      firstLetter = letter.shift(0);
      letter.push(firstLetter);
      word = letter.join('')+"nyo"
      console.log(word)
}
}
stringManipulation('ayam bakar')
stringManipulation('bebek')


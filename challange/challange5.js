function stringManipulation(word) {
  const vokal = ["a", "i", "u", "e", "o"];
  if (vokal.includes(word.charAt(0))) {
    console.log(word)
  } else {
    word = word.substring(1) + word.charAt(0) + 'nyo'
    console.log(word)
  }
}
stringManipulation('ayam')
stringManipulation('bebek')
function stringManipulation(word) {
  const vokal = ["a", "i", "u", "e", "o"];
  let strings = word.split(" ");
  let newStrings = strings.map((string) => {
    if (vokal.includes(string.charAt(0))) {
      return string;
    } else {
      let chars = string.split("");
      let newChars = string.split("");

      for (const char of chars) {
        if (!vokal.includes(char)) {
          let firstChar = newChars.shift();
          newChars.push(firstChar);
        } else {
          break;
        }
      }
      let newString = newChars.join("") + "nyo";
      return newString;
    }
  });

  console.log(newStrings.join(" "))
}

stringManipulation('ayam')
stringManipulation('bebek')



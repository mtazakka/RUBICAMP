// const word = document.getElementById("word");
// const process = document.getElementById("process");
// const vowel = ["a", "i", "u", "e", "o"];
// const result = document.getElementById("result");

// process.addEventListener("click", () => {
//   // console.log('onclick');
//   let sentence = word.value;
//   let newSentence = wordCount(sentence);
//   result.innerHTML = newSentence;
// });

// after click check the word
function wordCount(sentence) {
  // return str.split('').length;
  let words = sentence.split(" ");

  //looping each words
  let newWords = words.map((word) => {
    // if the first word is vowel,
    if (vowel.includes(word.charAt(0))) {
      //countinue next word
      return word;
    } else {
      // else if the first word consonant move backwards + ay until meet the vowel
      let chars = word.split("");
      let newChars = word.split("");

      for (const char of chars) {
        if (!vowel.includes(char)) {
          let firstChar = newChars.shift();
          newChars.push(firstChar);
        } else {
          break;
        }
      }
      let newWord = newChars.join("") + "ay";
      return newWord;
    }
  });

  return newWords.join(" ");
}
// console.log(wordCount('hi apa kabar'))


function sentencesManipulation(sentence) {
    const vokal = ["a", "i", "u", "e", "o"];
    let words = sentence.split(" ");
    let newWords = words.map((word) => {
      if (vokal.includes(word.charAt(0))) {
        return word;
      } else {
        word = word.substring(1) + word.charAt(0) +'nyo'
        return word;
      }
    });
    console.log(newWords.join(" "))
  }
  sentencesManipulation('ibu pergi ke pasar bersama aku')
  
  
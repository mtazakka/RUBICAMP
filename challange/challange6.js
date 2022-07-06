function sentencesManipulation(sentence) {
    const vokal = ["a", "i", "u", "e", "o"];
    let words = sentence.split(" ");
    let newWords = [];
    for (let index = 0; index < words.length; index++){
      if (vokal.includes(words[index].charAt(0))){ /*tadi kurang index*/
        newWords.push(words[index])
      } else {
        words[index] = words[index].substring(1) + words[index].charAt(0) +'nyo'
        newWords.push(words[index])
      }
    } console.log(newWords.join(' '))
  }
  sentencesManipulation('ibu pergi ke pasar bersama aku')
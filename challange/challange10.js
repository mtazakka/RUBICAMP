const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini> '
});

function sentencesManipulation(sentence) {
  const vokal = ["a", "i", "u", "e", "o"];
  let words = sentence.split(" ");
  let newWords = [];
  for (let index = 0; index < words.length; index++) {
    if (vokal.includes(words[index].charAt(0))) {
      newWords.push(words[index])
    } else {
      words[index] = words[index].substring(1) + words[index].charAt(0) + 'nyo'
      newWords.push(words[index])
    }
  } return(newWords.join(' '))
}

rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    case line:
      console.log(`hasil konversi: ${sentencesManipulation(line)}`)
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});
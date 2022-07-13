const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini> '
});

const fs = require('fs');
let data = fs.readFileSync('data.txt', 'utf-8')

rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    case line:
      console.log(`hasil konversi: ${data(line)}`)
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});
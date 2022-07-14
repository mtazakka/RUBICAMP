const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // prompt: 'Pertanyaan: '
});
let num1 = Math.floor((Math.random()*10)+1)
let num2 = Math.floor((Math.random()*10)+1)
let answer = num1 + num2
// console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!')
rl.question(`What is ${num1} + ${num2}?\n`, //Pertanyaan: Siapakah presiden kita saat ini?
(userInput)=>{
  if(userInput == answer){
    rl.close()
  }
});


// rl.prompt();

// rl.on('line', (line) => {
//   switch (line.trim()) {
//     case 'hello':
//       console.log('world!'); // kasih jawaban Selamat anda Benar, kayak baca objek
//       break;
//     default:
//       console.log(`Say what? I might have h eard '${line.trim()}'`); //anda kurang beruntung + kasih jawaban benar +
//       break;
//   }
//   rl.prompt();
// }).on('close', () => {
//   console.log('Have a great day!');
//   process.exit(0);
// });
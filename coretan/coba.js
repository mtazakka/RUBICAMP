const fs = require('fs');
let data = fs.readFileSync('data.json', 'utf-8')
var objek = (JSON.parse(data))
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n')
let i = 0;
// let soalTambahan = 'Sebutkan kota yang memiliki julukan kota Intan?'
// let jawabanTambahan = 'garut'

rl.question(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,
    (userInput) => {
        if (userInput == objek[i].term) {
            console.log('Selamat Anda Benar!\n')
            i++
            if (i >= objek.length) {
                rl.close()
                console.log('Hore Anda Menang!\n')
            } else {
                rl.setPrompt(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,)
                rl.prompt()
            }
        } 
        else {
            rl.setPrompt(`Wkwkwkwk, Anda kurang beruntung! \nTebakan:`)
            rl.prompt()
            rl.question(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,
                (userInput) => {
                    if (userInput == objek[i].term) {
                        console.log('Selamat Anda Benar!\n')
                        i++
                    }
                }
            )
        }
    }
    )

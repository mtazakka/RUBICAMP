// process.argv.splice(1)
// console.log(process.argv.splice(0))
const fs = require('fs');
let data = fs.readFileSync('data.json', 'utf-8')
var objek = (JSON.parse(data))
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
console.log("Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json'\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi ")

let i = 0;
let j = 0;
rl.question(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,
    (userInput) => {
        if (userInput == objek[i].term) {
            console.log('Anda Beruntung!\n')
            i++
            if (i >= objek.length) {
                rl.close()
                console.log('Anda Berhasil!!\n')
            } else {
                rl.setPrompt(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,)
                rl.prompt()
                rl.on('line', (userInput) => {
                    if (userInput === objek[i].term) {
                        console.log('Anda Beruntung!')
                        i++;
                        if (i >= objek.length) {
                            rl.close()
                            console.log('Anda Berhasil!!\n')
                        } else {
                            rl.setPrompt(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,)
                            rl.prompt()
                        }
                    }
                    else {
                        rl.setPrompt(`Wkwkwkwk, Anda kurang beruntung! \nTebakan:`)
                        rl.prompt()
                    }
                })

            }
        } else {
            rl.setPrompt(`Wkwkwkwk, Anda kurang beruntung! \nTebakan:`)
            rl.prompt()
            rl.on('line', (userInput) => {
                if (userInput === objek[i].term) {
                    console.log('Anda Beruntung!\n')
                    i++;
                    if (i >= objek.length) {
                        rl.close()
                        console.log('Anda Berhasil!!\n')
                    } else {
                        rl.setPrompt(`Pertanyaan: ${objek[i].definition}?\nTebakan:`,)
                        rl.prompt()
                    }
                }
                else {
                    rl.prompt()
                }
            })

        }
    }



)

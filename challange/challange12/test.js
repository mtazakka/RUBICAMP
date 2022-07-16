if (!process.argv[2]) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya')
    console.log(`Misalnya 'node solution.js data.json'`)
}
else {
    const fs = require('fs');
    let data = fs.readFileSync(process.argv[2], 'utf-8')
    var objek = (JSON.parse(data))
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    console.log(`Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json'`)
    console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.')
    console.log(`Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`)

    // let i = 0;
    var j = 0;

    rl.question(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,
        (userInput) => {
            if (userInput == objek[0].term) {
                console.log('\nAnda Beruntung!\n')
                objek.shift()
                if (objek.length == 0) {
                    rl.close()
                    console.log('Anda Berhasil!!\n')
                } else {
                    rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                    rl.prompt()
                    rl.on('line', (userInput) => {
                        if (userInput === objek[0].term) {
                            console.log('\nAnda Beruntung!\n')
                            objek.shift()
                            if (objek.length === 0) {
                                rl.close()
                                console.log('Anda Berhasil!!\n')
                            } else {
                                rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                                rl.prompt()
                            }
                        } else if (userInput === 'skip') {
                            j = 0
                            objek.push(objek.shift())
                            rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                            rl.prompt()
                        }else {
                            j++
                            rl.setPrompt(`\nAnda Kurang Beruntung! anda telah salah ${j} kali, silahkan coba lagi \nJawaban:`)
                            rl.prompt()
                        }
                    })

                }
            } else if (userInput == 'skip') {
                j = 0
                objek.push(objek.shift())
                rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                rl.prompt();
                rl.on('line', (userInput) => {
                    if (userInput === objek[0].term) {
                        console.log('\nAnda Beruntung!\n')
                        objek.shift()
                        if (objek.length === 0) {
                            rl.close()
                            console.log('\nAnda Berhasil!!\n')
                        } 
                        // else if (userInput === 'skip') {
                        //     j = 0
                        //     objek.shift()
                        //     rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                        //     rl.prompt()
                        // }
                        else {
                            rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                            rl.prompt()
                        }
                    }
                    else if (userInput === 'skip') {
                        j = 0
                        objek.shift()
                        rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                        rl.prompt()
                    }
                    else {
                        j++
                        rl.setPrompt(`\nAnda Kurang Beruntung! anda telah salah ${j} kali, silahkan coba lagi \nJawaban:`)
                        rl.prompt()
                    }
                })
            }
            else {
                j++
                rl.setPrompt(`\nAnda Kurang Beruntung! anda telah salah ${j} kali, silahkan coba lagi \nJawaban:`)
                rl.prompt()
                rl.on('line', (userInput) => {
                    if (userInput === objek[0].term) {
                        console.log('\nAnda Beruntung!\n')
                        objek.shift()
                        if (objek.length === 0) {
                            rl.close()
                            console.log('\nAnda Berhasil!!\n')
                        } else if (userInput === 'skip') {
                            j = 0
                            objek.shift()
                            rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                            rl.prompt()
                        }else {
                            rl.setPrompt(`Pertanyaan: ${objek[0].definition}?\nJawaban:`,)
                            rl.prompt()
                        }
                    }
                    else {
                        j++
                        rl.setPrompt(`\nAnda Kurang Beruntung! anda telah salah ${j} kali, silahkan coba lagi \nJawaban:`)
                        rl.prompt()
                    }
                })

            }
        }
    )
}

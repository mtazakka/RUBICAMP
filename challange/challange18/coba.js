const fs = require('fs');
let data = fs.readFileSync('username.json', 'utf-8')
var user = (JSON.parse(data))
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const garis = ('====================================================')

console.log(garis)
console.log('Welcome to RUBICAMP BATCH 31\nGg.Mahdi, No.123, Cinambo, Bandung')
console.log(garis)

rl.setPrompt('please input username:')
rl.prompt()
rl.on('line', (userInput) => {
    let username = userInput
    rl.setPrompt('please input password:')
    rl.prompt()
    rl.on('line', (userInput2) => {
        let password = userInput2
        if ((user[0].username === username) && (user[0].password = password)) {
            console.log(`Welcome, ${username}. Your access level is ADMIN`)
            console.log(garis)
            console.log(`silahkan pilih opsi di bawah ini`)
            console.log(`[1] mahasiswa`)
            console.log(`[2] jurusan`)
            console.log(`[3] dosen`)
            console.log(`[4] mata kuliah`)
            console.log(`[5] pembelajaran`)
            console.log(`[6] keluar`)
            rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`,(userInput) => {
                switch (userInput){
                    case '1':
                        console.log(`aku`)
                }
            }
             
            
            
            )

























  
        } else {
            console.log('gagal')
        }
    })
   
    

})








/*
class mahasiswa{
    static read(callback){
        db.all(`SELECT mahasiswa.*, jurusan.nama as 'jurusan' FROM jurusan,mahasiswa ON jurusan.id_jurusan = mahasiswa.id_jurusan`,function (err,data){ callback (err,data)})
    }
}*/

const fs = require('fs');
// console.log('pertama')
// let data = fs.readFileSync('data.txt', 'utf-8')
// console.log (data)
// fs.writeFileSync('data.txt', data + ' tazakka', 'utf-8')
fs.writeFile('datas.txt', 'makan', (err)=>{
    if(err) {console.log}(err)
    console.log('bukan di dalam if')     /* errornya kok gk muncul*/
})










// fs.readFile('data.txt','utf-8', (err, isi) =>{
//     console.log(isi)
//     fs.readFile('satu.txt', 'utf8', (err, isi) =>{
//         console.log(isi)
//     })
// })



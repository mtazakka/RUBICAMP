// const fs = require('fs');

// const bacaFile = (file) => new Promise(function (resolve, reject) { //(file) -> fungsi, jadinya bacaFile(nama file) saat d invoke
//     fs.readFile(file, 'utf-8', (err, data) => {
//         // console.log('lagi baca')
//         if (err) { reject(err) } else {    //selain pake reject bisa pakai throw --> throw'gagal bro'
//             resolve(data)
//         }
//     })
// });


// // bacaFile('data.txt').then((hasil) => {                   // bacaFile()-> di invoke, then utk nangkap hasil 
// //     console.log('ini hasil baca', hasil)
// //     console.log('terakhir')

// //     bacaFile('satu.txt').then((hasil) => {              //bacaFile di dalam bacaFile
// //         console.log('ini hasil baca', hasil)
// //         console.log('terakhir')
// //     }).catch(err => {
// //         console.log('ini gagal', err)
// //     })

// // }).catch(err => {                             // nangkap error
// //     console.log('ini gagal', err)
// // })

// // const a = bacaFile('data.txt')

// // const b = a.then((data) => {
// //     return {status: 'succes', isi: data}
// // })

// // b.then((a)=> {
// //     console.log('ini promise kedua', a)
// // })

// Promise.all([bacaFile('data.txt'), bacaFile('satu.txt')]).then(values => {
//     console.log(values)
// }).catch(err => {
//     console.log('ini error', err)
// })

setTimeout(function(){
    console.log('ini keluar setelah dua detik')
}, 2000)
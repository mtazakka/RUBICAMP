const fs = require('fs');

const bacaFile = (file) => new Promise(function (resolve, reject) { //(file) -> fungsi, jadinya bacaFile(nama file) saat d invoke
    fs.readFile(file, 'utf-8', (err, data) => {
        // console.log('lagi baca')
        if (err) { reject(err) } else {    //selain pake reject bisa pakai throw --> throw'gagal bro'
            resolve(data)
        }
    })
});

async function jalan() {
    try {
        console.log('pertama')
        const data = await bacaFile('datas.txt')
        console.log(data)
        console.log('terakhir')
    } catch (err) {
        console.log('gagal')
    } finally {
        console.log('sabar bro')
    }

}
jalan()
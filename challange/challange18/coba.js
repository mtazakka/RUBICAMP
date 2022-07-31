const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./university.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    // console.log('Connection Success')
});
var Table = require('cli-table');

const garis = ('====================================================')

//-----------------------Menu----------------------//
class Menu {
    static menu_awal() {
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] mahasiswa`)
        console.log(`[2] jurusan`)
        console.log(`[3] dosen`)
        console.log(`[4] mata kuliah`)
        console.log(`[5] pembelajaran`)
        console.log(`[6] keluar`)
    }
    static menu_mahasiswa() {
        console.log(garis)
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] daftar murid`)
        console.log(`[2] cari murid`)
        console.log(`[3] tambah murid`)
        console.log(`[4] hapus murid`)
        console.log(`[5] kembali`)
        Interface.mahasiswa()
    }
}

//-----------------------Mahasiswa----------------------//
class Mahasiswa {
    static read() {
        console.log(garis)
        var table = new Table({
            head: ['nim', 'nama', 'umur', 'alamat', 'jurusan'],
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        const seluruhMahasiswa = `SELECT * FROM mahasiswa`;
        db.all(seluruhMahasiswa, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach(mahasiswa => {
                table.push([mahasiswa.nim, mahasiswa.nama, mahasiswa.tanggallahir, mahasiswa.alamat, mahasiswa.id_jurusan]);
            });
            console.log(table.toString());
            Menu.menu_mahasiswa()
        });

    }
    static cari() {
        const cariMahasiswa = `SELECT * FROM mahasiswa WHERE mahasiswa.nim = ?`

        console.log(garis)
        rl.question(`Masukkan NIM:`, (userInput) => {
            db.get(cariMahasiswa, [userInput], (err, mahasiswa) => {
                if (err) {
                    throw err;
                }
                if (mahasiswa) {
                    console.log(`${garis}\nstudent details\n${garis}\nnim     : ${mahasiswa.nim}\nnama    : ${mahasiswa.nama}\nlahir : ${mahasiswa.tanggallahir}\nalamat  : ${mahasiswa.alamat}\nid jurusan : ${mahasiswa.id_jurusan}`);

                } else {
                    console.log(garis)
                    console.log(`mahasiswa dengan nim ${userInput} tidak terdaftar`);
                }
                console.log(garis)
                Menu.menu_mahasiswa()
            });
        });

    }
    static tambah() {
        const tambahMahasiswa = `INSERT INTO mahasiswa(nim, nama, tanggallahir, alamat, id_jurusan) values (?, ? ,? ,?, ?)`
        console.log(garis)
        console.log('lengkapi data di bawah ini:')
        rl.question('nim        : ', (nim) => {
            rl.question('nama       : ', (nama) => {
                rl.question('lahir (yyyy-mm-dd): ', (tanggallahir) => {
                    rl.question(`alamat     :`, (alamat) => {
                        rl.question('id jurusan :', (jurusan) => {
                            db.get(tambahMahasiswa, [nim, nama, tanggallahir, alamat, jurusan], (err) => {
                                if (err) {
                                    throw err
                                } else {
                                    Mahasiswa.read()
                                }
                            })
                        })
                    })

                })
            })
        })
    }
    static hapus() {
        const hapusMahasiswa = 'DELETE FROM mahasiswa WHERE mahasiswa.nim = ?'
        rl.question(`masukkan NIM mahasiswa yang akan dihapus:`, (userInput) => {
            // db.run(hapusMahasiswa, [userInput], (err) => {
            //     if (!err) console.log(`mahasiswa dengan NIM:${userInput}, telah dihapus.`)
            //     Mahasiswa.read();
            // })
            db.get(hapusMahasiswa, [userInput], (err, mahasiswa) => {
                if (err) {
                    throw err;
                }
                if (mahasiswa) {
                    console.log(`mahasiswa dengan NIM:${userInput}, telah dihapus.`)
                    Mahasiswa.read();

                } else {
                    console.log(garis)
                    console.log(`mahasiswa dengan nim ${userInput} tidak terdaftar`);
                }
                Menu.menu_mahasiswa()
            });
        });
    }
}

// -----------------------Interface-----------------------
class Interface {
    static readline() {
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    console.log(garis)
                    Menu.menu_mahasiswa()

            }
        }
        )
    }
    static mahasiswa() {
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    Mahasiswa.read()
                    break;
                case '2':
                    Mahasiswa.cari()
                    break;
                case '3':
                    Mahasiswa.tambah()
                    break;
                case '4':
                    Mahasiswa.hapus()
                    break;
                case '5':
                    Menu.menu_awal()
                    break;
            }
        })
    }

}


const fs = require('fs');
let data = fs.readFileSync('username.json', 'utf-8')
var user = (JSON.parse(data))
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


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
        if ((user[0].username === username) && (user[0].password === password)) {
            console.log(`Welcome, ${username}. Your access level is ADMIN`)
            console.log(garis)
            Menu.menu_awal()
            Interface.readline()
        } else {
            console.log('gagal')
            rl.close()
        }
    })



})










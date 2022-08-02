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
        Interface.readline()
    }
    static menu_mahasiswa() {
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] daftar murid`)
        console.log(`[2] cari murid`)
        console.log(`[3] tambah murid`)
        console.log(`[4] hapus murid`)
        console.log(`[5] kembali`)
        Interface.mahasiswa()
    }
    static menu_jurusan() {
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] daftar jurusan`)
        console.log(`[2] cari jurusan`)
        console.log(`[3] tambah jurusan`)
        console.log(`[4] hapus jurusan`)
        console.log(`[5] kembali`)
        Interface.jurusan()
    }
    static menu_dosen() {
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] daftar dosen`)
        console.log(`[2] cari dosen`)
        console.log(`[3] tambah dosen`)
        console.log(`[4] hapus dosen`)
        console.log(`[5] kembali`)
        Interface.dosen()
    }
    static menu_matakuliah() {
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] daftar matakuliah`)
        console.log(`[2] cari matakuliah`)
        console.log(`[3] tambah matakuliah`)
        console.log(`[4] hapus matakuliah`)
        console.log(`[5] kembali`)
        Interface.matakuliah()
    }
    static menu_pembelajaran() {
        console.log(`silahkan pilih opsi di bawah ini`)
        console.log(`[1] daftar pembelajaran`)
        console.log(`[2] cari pembelajaran`)
        console.log(`[3] tambah pembelajaran`)
        console.log(`[4] hapus pembelajaran`)
        console.log(`[5] kembali`)
        Interface.pembelajaran()
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
            console.log(garis)
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
        rl.question(`${garis}\nmasukkan NIM mahasiswa yang akan dihapus:`, (userInput) => {
            db.run(hapusMahasiswa, [userInput], (err) => {
                if (!err) console.log(`${garis}\nmahasiswa dengan NIM:${userInput}, telah dihapus.`)
                Mahasiswa.read();
            })
        });
    }
}
//-----------------------Jurusan----------------------//
class Jurusan {
    static read() {
        console.log(garis)
        var table = new Table({
            head: ['id jurusan', 'nama jurusan']
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        const seluruhJurusan = `SELECT * FROM jurusan`;
        db.all(seluruhJurusan, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach(jurusan => {
                table.push([jurusan.id_jurusan, jurusan.nama]);
            });
            console.log(table.toString());
            console.log(garis)
            Menu.menu_jurusan()
        });

    }
    static cari() {
        const cariJurusan = `SELECT * FROM jurusan WHERE jurusan.id_jurusan = ?`

        console.log(garis)
        rl.question(`Masukkan ID Jurusan:`, (userInput) => {
            db.get(cariJurusan, [userInput], (err, jurusan) => {
                if (err) {
                    throw err;
                }
                if (jurusan) {
                    console.log(`${garis}\njurusan details\n${garis}\nnid jurusan    : ${jurusan.id_jurusan}\nnama jurusan  : ${jurusan.nama}`);

                } else {
                    console.log(garis)
                    console.log(`jurusan dengan id ${userInput} tidak terdaftar`);
                }
                console.log(garis)
                Menu.menu_jurusan()
            });
        });

    }
    static tambah() {
        const tambahJurusan = `INSERT INTO jurusan(id_jurusan, nama) values (?,?)`
        console.log(garis)
        console.log('lengkapi data di bawah ini:')

        rl.question(`id jurusan     :`, (id_jurusan) => {
            rl.question('nama jurusan   :', (nama) => {
                db.get(tambahJurusan, [id_jurusan, nama], (err) => {
                    if (err) {
                        throw err
                    } else {
                        Jurusan.read()
                    }
                })
            })
        })
    }
    static hapus() {
        const hapusJurusan = 'DELETE FROM jurusan WHERE jurusan.id_jurusan = ?'
        rl.question(`${garis}\nmasukkan ID jurusan yang akan dihapus:`, (userInput) => {
            db.run(hapusJurusan, [userInput], (err) => {
                if (!err) console.log(`${garis}\njurusan dengan ID:${userInput}, telah dihapus.`)
                Jurusan.read();
            })
        });
    }
}

//-----------------------Dosen----------------------//
class Dosen {
    static read() {
        console.log(garis)
        var table = new Table({
            head: ['id dosen', 'nama dosen']
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        const seluruhDosen = `SELECT * FROM dosen`;
        db.all(seluruhDosen, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach(dosen => {
                table.push([dosen.id_dosen, dosen.nama]);
            });
            console.log(table.toString());
            console.log(garis)
            Menu.menu_dosen()
        });

    }
    static cari() {
        const cariDosen = `SELECT * FROM dosen WHERE dosen.id_dosen = ?`

        console.log(garis)
        rl.question(`Masukkan ID dosen:`, (userInput) => {
            db.get(cariDosen, [userInput], (err, dosen) => {
                if (err) {
                    throw err;
                }
                if (dosen) {
                    console.log(`${garis}\ndosen details\n${garis}\nid dosen   : ${dosen.id_dosen}\nnama dosen  : ${dosen.nama}`);

                } else {
                    console.log(garis)
                    console.log(`Dosen dengan id ${userInput} tidak terdaftar`);
                }
                console.log(garis)
                Menu.menu_dosen()
            });
        });

    }
    static tambah() {
        const tambahDosen = `INSERT INTO dosen(id_dosen, nama) values (?,?)`
        console.log(garis)
        console.log('lengkapi data di bawah ini:')

        rl.question(`id dosen     :`, (id_dosen) => {
            rl.question('nama dosen   :', (nama) => {
                db.get(tambahDosen, [id_dosen, nama], (err) => {
                    if (err) {
                        throw err
                    } else {
                        Dosen.read()
                    }
                })
            })
        })
    }
    static hapus() {
        const hapusDosen = 'DELETE FROM dosen WHERE dosen.id_dosen = ?'
        rl.question(`${garis}\nmasukkan ID dosen yang akan dihapus:`, (userInput) => {
            db.run(hapusDosen, [userInput], (err) => {
                if (!err) console.log(`${garis}\ndosen dengan ID:${userInput}, telah dihapus.`)
                Dosen.read();
            })
        });
    }
}

//-----------------------MataKuliah----------------------//
class Matakuliah {
    static read() {
        console.log(garis)
        var table = new Table({
            head: ['id matakuliah', 'nama', 'sks', 'id jurusan'],
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        const seluruhMatakuliah = `SELECT * FROM matakuliah`;
        db.all(seluruhMatakuliah, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach(matakuliah => {
                table.push([matakuliah.id_matakuliah, matakuliah.nama, matakuliah.sks, matakuliah.id_jurusan]);
            });
            console.log(table.toString());
            console.log(garis)
            Menu.menu_matakuliah()
        });

    }
    static cari() {
        const cariMatakuliah = `SELECT * FROM matakuliah WHERE matakuliah.id_matakuliah = ?`

        console.log(garis)
        rl.question(`Masukkan ID matakuliah:`, (userInput) => {
            db.get(cariMatakuliah, [userInput], (err, matakuliah) => {
                if (err) {
                    throw err;
                }
                if (matakuliah) {
                    console.log(`${garis}\nmatakuliah details\n${garis}\nid     : ${matakuliah.id_matakuliah}\nnama   : ${matakuliah.nama}\nsks     : ${matakuliah.sks}\nid jurusan : ${matakuliah.id_jurusan}`);

                } else {
                    console.log(garis)
                    console.log(`matakuliah dengan nim ${userInput} tidak terdaftar`);
                }
                console.log(garis)
                Menu.menu_matakuliah()
            });
        });

    }
    static tambah() {
        const tambahMatakuliah = `INSERT INTO matakuliah(id_matakuliah, nama, sks, id_jurusan) values (?, ? ,? ,?)`
        console.log(garis)
        console.log('lengkapi data di bawah ini:')
        rl.question('id matakuliah  : ', (id_matakuliah) => {
            rl.question('nama           : ', (nama) => {
                rl.question(`sks            :`, (sks) => {
                    rl.question('id jurusan     :', (jurusan) => {
                        db.get(tambahMatakuliah, [id_matakuliah, nama, sks, jurusan], (err) => {
                            if (err) {
                                throw err
                            } else {
                                Matakuliah.read()
                            }
                        })
                    })
                })

            })
        })

    }
    static hapus() {
        const hapusMatakuliah = 'DELETE FROM matakuliah WHERE matakuliah.id_matakuliah = ?'
        rl.question(`${garis}\nmasukkan ID matakuliah yang akan dihapus:`, (userInput) => {
            db.run(hapusMatakuliah, [userInput], (err) => {
                if (!err) console.log(`${garis}\nmatakuliah dengan ID:${userInput}, telah dihapus.`)
                Matakuliah.read();
            })
        });
    }
}

//-----------------------Pembelajaran----------------------//
class Pembelajaran {
    static read() {
        console.log(garis)
        var table = new Table({
            head: ['no', 'nim', 'id matakuliah', 'id dosen', 'nilai'],
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        const seluruhPembelajaran = `SELECT * FROM pembelajaran`;
        db.all(seluruhPembelajaran, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach(pembelajaran => {
                table.push([pembelajaran.no, pembelajaran.nim, pembelajaran.id_matakuliah, pembelajaran.id_dosen, pembelajaran.nilai]);
            });
            console.log(table.toString());
            console.log(garis)
            Menu.menu_pembelajaran()
        });

    }
    static cari() {
        const cariPembelajaran = `SELECT * FROM pembelajaran WHERE pembelajaran.no = ?`

        console.log(garis)
        rl.question(`Masukkan No. pembelajaran:`, (userInput) => {
            db.get(cariPembelajaran, [userInput], (err, pembelajaran) => {
                if (err) {
                    throw err;
                }
                if (pembelajaran) {
                    console.log(`${garis}\npembelajaran details\n${garis}\nNIM         : ${pembelajaran.nim}\nid matakuliah : ${pembelajaran.id_matakuliah}\nid dosen    : ${pembelajaran.id_dosen}\nid nilai    : ${pembelajaran.nilai}`);

                } else {
                    console.log(garis)
                    console.log(`pembelajaran dengan nim ${userInput} tidak terdaftar`);
                }
                console.log(garis)
                Menu.menu_pembelajaran()
            });
        });

    }
    static tambah() {
        const tambahPembelajaran = `INSERT INTO pembelajaran(nim, id_matakuliah, id_dosen, nilai) values (?, ? ,? ,?)`
        console.log(garis)
        console.log('lengkapi data di bawah ini:')
        rl.question('NIM        : ', (nim) => {
            rl.question('id matakuliah  : ', (id_matakuliah) => {
                rl.question(`id dosen    :`, (id_dosen) => {
                    rl.question('nilai      :', (nilai) => {
                        db.get(tambahPembelajaran, [nim, id_matakuliah, id_dosen, nilai], (err) => {
                            if (err) {
                                throw err
                            } else {
                                Pembelajaran.read()
                            }
                        })
                    })
                })

            })
        })

    }
    static hapus() {
        const hapusPembelajaran = 'DELETE FROM pembelajaran WHERE pembelajaran.no = ?'
        rl.question(`${garis}\nmasukkan nomor yang akan dihapus:`, (userInput) => {
            db.run(hapusPembelajaran, [userInput], (err) => {
                if (!err) console.log(`${garis}\npembelajaran dengan NIM:${userInput}, telah dihapus.`)
                Pembelajaran.read();
            })
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
                    break;
                case '2':
                    console.log(garis)
                    Menu.menu_jurusan()
                    break;
                case '3':
                    console.log(garis)
                    Menu.menu_dosen()
                    break;
                case '4':
                    console.log(garis)
                    Menu.menu_matakuliah()
                    break;
                case '5':
                    console.log(garis)
                    Menu.menu_pembelajaran()
                    break;
                case '6':
                    console.log('Anda telah keluar.')
                    rl.close()
                    break;
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    Interface.readline()
                    break;

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
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    Interface.mahasiswa()
                    break;
            }
        })
    }
    static jurusan() {
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    Jurusan.read()
                    break;
                case '2':
                    Jurusan.cari()
                    break;
                case '3':
                    Jurusan.tambah()
                    break;
                case '4':
                    Jurusan.hapus()
                    break;
                case '5':
                    Menu.menu_awal()
                    break;
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    Interface.jurusan()
                    break;
            }
        })
    }
    static dosen() {
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    Dosen.read()
                    break;
                case '2':
                    Dosen.cari()
                    break;
                case '3':
                    Dosen.tambah()
                    break;
                case '4':
                    Dosen.hapus()
                    break;
                case '5':
                    Menu.menu_awal()
                    break;
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    Interface.dosen()
                    break;
            }
        })
    }
    static matakuliah() {
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    Matakuliah.read()
                    break;
                case '2':
                    Matakuliah.cari()
                    break;
                case '3':
                    Matakuliah.tambah()
                    break;
                case '4':
                    Matakuliah.hapus()
                    break;
                case '5':
                    Menu.menu_awal()
                    break;
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    Interface.matakuliah()
                    break;
            }
        })
    }
    static pembelajaran() {
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    Pembelajaran.read()
                    break;
                case '2':
                    Pembelajaran.cari()
                    break;
                case '3':
                    Pembelajaran.tambah()
                    break;
                case '4':
                    Pembelajaran.hapus()
                    break;
                case '5':
                    Menu.menu_awal()
                    break;
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    Interface.pembelajaran()
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

rl.question(`please insert username:`, (username) => {
    rl.question('please insert password:', (password) => {
        if ((user[0].username === username) && (user[0].password === password)) {
            console.log(garis)
            console.log(`Welcome, ${username}. Your access level is ADMIN`)
            console.log(garis)
            Menu.menu_awal()
            Interface.readline()
        } else {
            console.log('Anda belum terdaftar')
            rl.close()
        }
    })
})










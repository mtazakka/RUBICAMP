import { db, rl } from '../index.js'
import { Interface } from '../index.js'
import { garis } from '../index.js'
import { Kontrak } from '../model/Kontrak.js'
import { KontrakView } from '../view/KontrakView.js'
import Table from 'cli-table'
import { MahasiswaController } from './MahasiswaController.js'
import { MatakuliahController } from './MatakuliahController.js'
import { DosenController } from './DosenController.js'

export class KontrakController {
    static menu() {
        console.log(garis)
        KontrakView.menu()
        rl.question(`${garis}\nmasukkan salah satu no. dari opsi diatas:`, (userInput) => {
            switch (userInput) {
                case '1':
                    KontrakController.baca()
                    break;
                case '2':
                    KontrakController.cari()
                    break;
                case '3':
                    KontrakController.tambah()
                    break;
                case '4':
                    KontrakController.hapus()
                    break;
                case '5':
                    KontrakController.tambahNilai()
                    break;
                case '6':
                    Interface.menu()
                    break;
                default:
                    console.log(garis)
                    console.log('Masukkan pilihan dengan benar')
                    KontrakController.menu()
                    break;
            }
        })
    }
    static baca(callback) {
        console.log(garis)
        var table = new Table({
            head: ['NO', 'NIM', 'ID Matakuliah', 'ID Dosen', 'Nilai'],
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        Kontrak.baca(function (err, data) {

            if (err) {
                throw err;
            }
            data.forEach(kontrak => {
                table.push([kontrak.no, kontrak.nim, kontrak.id_matakuliah, kontrak.id_dosen, kontrak.nilai]);
            });
            console.log(table.toString());
            if (callback) {
                callback()
            } else {
                KontrakController.menu()
            }
        });

    }
    static cari() {
        console.log(garis)
        rl.question(`Masukkan NO:`, (no) => {
            Kontrak.cari(no, (err, kontrak) => {
                if (err) {
                    throw err;
                }
                if (kontrak) {
                    console.log(`${garis}\nkontrak details\n${garis}\nNIM         : ${kontrak.nim}\nid matakuliah : ${kontrak.id_matakuliah}\nid dosen    : ${kontrak.id_dosen}\nid nilai    : ${kontrak.nilai}`);
                } else {
                    console.log(garis)
                    console.log(`Kontrak dengan No ${no} tidak terdaftar`);
                }
                KontrakController.menu()
            });
        })
    };

    static tambah() {
        console.log(garis)
        console.log('lengkapi data di bawah ini:')
        MahasiswaController.baca(function () {
            rl.question('NIM            :', (nim) => {
                MatakuliahController.baca(function () {
                    rl.question('id matakuliah  :', (id_matakuliah) => {
                        DosenController.baca(function () {
                            rl.question(`id dosen       :`, (id_dosen) => {
                                //rl.question('nilai          :', (nilai) => {
                                Kontrak.tambah(nim, id_matakuliah, id_dosen, /*nilai,*/(err) => {
                                    if (err) {
                                        throw err
                                    } else {
                                        console.log(`Kontrak dengan telah didaftarkan.`)
                                        KontrakController.menu()
                                    }
                                    //  })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    static hapus() {

        rl.question(`${garis}\nmasukkan NO Kontrak yang akan dihapus:`, (no) => {
            Kontrak.hapus(no, (err) => {
                if (!err) console.log(`${garis}\nKontrak dengan NO:${no}, telah dihapus.`)
                KontrakController.menu();
            })

        });
    }
    static tambahNilai() {
        var table = new Table({
            head: ['NO', 'NIM', 'ID Matakuliah', 'ID Dosen', 'Nilai'],
            // chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
        });
        const pilihNIM = `SELECT * FROM kontrak WHERE kontrak.nim=?`
        console.log(garis)
        MahasiswaController.baca(function () {
            rl.question(`Masukkan NIM.   :`, (nim) => {
                db.all(pilihNIM, [nim], (err, data) => {
                    if (err) {
                        console.log(`NIM ${nim} belum terdaftar kontrak.`)
                    }
                    data.forEach(kontrak => {
                        table.push([kontrak.no, kontrak.nim, kontrak.id_matakuliah, kontrak.id_dosen, kontrak.nilai]);
                    })
                    console.log(table.toString())
                
                rl.question('Masukkan No. :', (no) => {
                    rl.question('Masukkan Nilai. :', (nilai) => {
                        Kontrak.tambahNilai(nilai, no, (err) => {
                            if (err) {
                                throw err
                            }
                            else {
                                console.log(`Nilai Kontrak dengan NIM. ${nim} telah ditambahkan.`)
                                KontrakController.baca()
                            }
                        })
                    })
                })
            })})}
        )}
    }


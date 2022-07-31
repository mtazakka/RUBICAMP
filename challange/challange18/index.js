const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./university.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connection Success')
});

var Table = require('cli-table');
var table = new Table({
    head: ['nim', 'nama', 'alamat', 'jurusan'],
    chars: { 'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' }
});


 const mahasiswa = "SELECT * FROM mahasiswa";

 db.all(mahasiswa, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((mahasiswa) => {
        table.push[mahasiswa]
      console.log(table.toString());
    });
  });
  
  // close the database connection
//   db.close();
// db.get(mahasiswa, function(err, mahasiswa) {
//     table.push([mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, mahasiswa.id_jurusan]);
 
//     console.log(table.toString());;
// });


db.close();
select mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat, jurusan.nama from jurusan JOIN mahasiswa ON jurusan.id_jurusan = mahasiswa.id_jurusan;

select DATEDIFF(yy, [tanggallahir], GETDATE()) + (CASE WHEN DATEPART(MONTH, GETDATE()) - DATEPART(MONTH, [tanggallahir])<0 THEN -1 ELSE 0 END) as umur;

tanggallahir DATE NOT NULL,
    DATEDIFF(yy, [tanggallahir], GETDATE()) + (CASE WHEN DATEPART(MONTH, GETDATE()) - DATEPART(MONTH, [tanggallahir])<0 THEN -1 ELSE 0 END) as umur,

     select nama, tanggallahir, strftime('%Y', date('now')) - strftime ('%Y', date('tanggallahir')) as 'age' from mahasiswa;
     select nama, tanggallahir, date('now') from mahasiswa;
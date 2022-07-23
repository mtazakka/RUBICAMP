--BUAT KOLOM TANGGAL LAHIR-
ALTER TABLE mahasiswa ADD COLUMN tanggallahir DATE; 
UPDATE mahasiswa set tanggallahir = '1998-01-17' WHERE mahasiswa.nim = 'M0001';
UPDATE mahasiswa set tanggallahir = '2002-01-01' WHERE mahasiswa.nim = 'M0002';
UPDATE mahasiswa set tanggallahir = '2002-09-12' WHERE mahasiswa.nim = 'M0003';
UPDATE mahasiswa set tanggallahir = '1999-06-07' WHERE mahasiswa.nim = 'M0004';
UPDATE mahasiswa set tanggallahir = '2000-12-12' WHERE mahasiswa.nim = 'M0005';

ALTER TABLE mahasiswa ADD column umur INTEGER;
UPDATE mahasiswa set umur = (strftime('%Y', 'now') - strftime('%Y', mahasiswa.tanggallahir)) - (strftime('%m-%d', 'now') < strftime('%m-%d', mahasiswa.tanggallahir) );

---1 Tampilkan data Mahasiswa dan Jurusan---
select mahasiswa.*, jurusan.nama as 'jurusan' FROM jurusan,mahasiswa ON jurusan.id_jurusan = mahasiswa.id_jurusan;

---2 Mahasiswa umur dibawah 20 tahun---
select * from mahasiswa where mahasiswa.tanggallahir > date('now','-20 years'); --kalau tidak ada kolom umur--
select * from mahasiswa where umur < '20';

--UPDATE Nilai Sebelumnya A sama B doang-
UPDATE pembelajaran set nilai = 'E' WHERE pembelajaran.no = '2';
UPDATE pembelajaran set nilai = 'C' WHERE pembelajaran.no = '5';
UPDATE pembelajaran set nilai = 'D' WHERE pembelajaran.no = '7';
UPDATE pembelajaran set nilai = 'D' WHERE pembelajaran.no = '9';

 
--3 Mahasiswa, Matakuliah nilai B ke Atas--
 SELECT mahasiswa.nama as 'nama', pembelajaran.nilai FROM mahasiswa, pembelajaran ON mahasiswa.nim = pembelajaran.nim WHERE nilai <= 'B';
       
--UPDATE JUMLAH MATAKULIAH SKS--
INSERT INTO matakuliah(id_matakuliah, nama, sks, id_jurusan) values ('MK0006', 'API','5','J0001'),
('MK0007', 'ReactJS','5','J0002'),
('MK0008', 'Promise','5','J0003'),
('MK0009', 'FileSystem','5','J0001'),
('MK0010', 'data mining','5','J0002');

--UPDATE PEMBELAJARAN--
INSERT INTO pembelajaran(nim, id_matakuliah, id_dosen, nilai) values 
('M0001','MK0006','D0001','A'),
('M0002','MK0007','D0001','A'),
('M0003','MK0008','D0001','A'),
('M0004','MK0009','D0002','B'),
('M0005','MK0010','D0002','B');

--4 Mahasiswa SKS lebih dari 10--
SELECT mahasiswa.nama, sum(matakuliah.sks) as 'jumlah sks' FROM mahasiswa, matakuliah, pembelajaran ON mahasiswa.nim = pembelajaran.nim AND matakuliah.id_matakuliah = pembelajaran.id_matakuliah GROUP BY mahasiswa.nim HAVING sum(matakuliah.sks) > 10;

--5 Mahasiswa mengontrak data mining--
SELECT mahasiswa.nama, matakuliah.nama FROM mahasiswa, matakuliah, pembelajaran ON mahasiswa.nim = pembelajaran.nim AND matakuliah.id_matakuliah = pembelajaran.id_matakuliah WHERE matakuliah.nama = 'data mining';

--6 jumlah mahasiswa untuk setiap dosen--
SELECT dosen.nama, count(DISTINCT mahasiswa.nim) as 'jumlah mahasiswa' FROM mahasiswa, dosen, pembelajaran ON mahasiswa.nim = pembelajaran.nim AND dosen.id_dosen = pembelajaran.id_dosen GROUP BY dosen.id_dosen;

--7 mahasiswa berdasarkan umur--
SELECT mahasiswa.nama, mahasiswa.umur FROM MAHASISWA ORDER BY mahasiswa.umur ASC;

--8 matakuliah yang diulang--
SELECT mahasiswa.nama, jurusan.nama as 'jurusan', matakuliah.nama as 'mata kuliah', dosen.nama as'dosen', pembelajaran.nilai FROM mahasiswa, jurusan, matakuliah, dosen JOIN pembelajaran ON mahasiswa.nim = pembelajaran.nim AND mahasiswa.id_jurusan = jurusan.id_jurusan AND matakuliah.id_matakuliah = pembelajaran.id_matakuliah AND dosen.id_dosen = pembelajaran.id_dosen WHERE pembelajaran.nilai >= 'D';

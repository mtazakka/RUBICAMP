CREATE TABLE mahasiswa(
    nim VARCHAR(10) PRIMARY KEY NOT NULL,
    nama VARCHAR (25) NOT NULL,
    alamat TEXT,
    id_jurusan VARCHAR (10) NOT NULL,
    FOREIGN KEY (id_jurusan) REFERENCES jurusan (id_jurusan)
);
CREATE TABLE jurusan(
    id_jurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    nama VARCHAR (25) NOT NULL
);
CREATE TABLE dosen(
    id_dosen VARCHAR(10) PRIMARY KEY NOT NULL,
    nama VARCHAR (25) NOT NULL
);
CREATE TABLE matakuliah(
    id_matakuliah VARCHAR (10) PRIMARY KEY NOT NULL,
    nama VARCHAR (25) NOT NULL,
    sks INTEGER NOT NULL,
    id_jurusan VARCHAR (25) NOT NULL,
    FOREIGN KEY (id_jurusan) REFERENCES jurusan (id_jurusan)
);
CREATE TABLE pembelajaran(
    no INTEGER PRIMARY KEY AUTOINCREMENT,
    nim VARCHAR(10) NOT NULL, 
    id_matakuliah VARCHAR (10) NOT NULL,
    id_dosen VARCHAR(10) NOT NULL, 
    nilai VARCHAR(3) NOT NULL,
    FOREIGN KEY (nim) REFERENCES mahasiswa (nim),
    FOREIGN KEY (id_matakuliah) REFERENCES matakuliah (id_matakuliah),
    FOREIGN KEY (id_dosen) REFERENCES dosen (id_dosen)
);

INSERT INTO jurusan(id_jurusan, nama)values('J0001', 'Teknik Informatika'),
('J0002', 'Sistem Informatika'),
('J0003', 'Informatika' );
INSERT INTO mahasiswa(nim, nama, alamat, id_jurusan) values ('M0001','Tazakka','Lampung','J0001'),
('M0002','Zafran','Bandung','J0002'),
('M0003','Abaz','Semarang','J0003'),
('M0004','Iril','Makassar','J0001'),
('M0005','Emir','Cianjur','J0002');
INSERT INTO dosen(id_dosen, nama) values ('D0001','Bpk. Rubi H'),
('D0002','Bpk. Bambang');
INSERT INTO matakuliah(id_matakuliah, nama, sks, id_jurusan) values ('MK0001', 'JavaScript','5','J0001'),
('MK0002', 'CSS','5','J0002'),
('MK0003', 'Phyton','5','J0003'),
('MK0004', 'HTML','5','J0001'),
('MK0005', 'Ruby','5','J0002');
INSERT INTO pembelajaran(nim, id_matakuliah, id_dosen, nilai) values 
('M0001','MK0001','D0001','A'),
('M0001','MK0004','D0002','B'),
('M0002','MK0002','D0001','A'),
('M0002','MK0005','D0002','B'),
('M0003','MK0003','D0001','A'),
('M0004','MK0001','D0001','A'),
('M0004','MK0004','D0002','B'),
('M0005','MK0002','D0001','A'),
('M0005','MK0005','D0002','B');
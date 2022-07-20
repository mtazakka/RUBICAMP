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
    nama VARCHAR (25) NOT NULL,
);
CREATE  TABLE matakuliah(
    id_matakuliah VARCHAR (10) PRIMARY KEY NOT NULL,
    nama VARCHAR (25) NOT NULL,
    id_jurusan VARCHAR (25) NOT NULL,
    FOREIGN KEY (id_jurusan) REFERENCES jurusan (id_jurusan)
);
CREATE TABLE nilai(
    id_nilai INTEGER PRIMARY KEY AUTOINCREMENT,
    nim VARCHAR(10) PRIMARY KEY NOT NULL,FOREIGN KEY (nim) REFERENCES mahasiswa (nim),
    id_matakuliah VARCHAR (10) PRIMARY KEY NOT NULL, FOREIGN KEY (id_matakuliah) REFERENCES matakuliah (id_matakuliah),
    id_dosen VARCHAR(10) PRIMARY KEY NOT NULL,  FOREIGN KEY (id_dosen) REFERENCES dosen (id_dosen),
    nilai VARCHAR(3) NOT NULL,
);
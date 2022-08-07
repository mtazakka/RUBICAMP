CREATE TABLE cobadata(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    string VARCHAR(25), 
    integer INTEGER,
    float FLOAT,
    date DATE,
    boolean BOOLEAN);

INSERT INTO cobadata(string, integer, float, date, boolean) values 
 ('Testing Data', '12', '1.45', '2017-12-12', 'true'),
 ('Coba Lagi', '99', '100.405', '2017-11-12', 'false'),     
 ("Super Sekali", "0", "1.45", "", "false")
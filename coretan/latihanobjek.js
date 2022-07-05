// Objek Literal

const methodMahasiswa = {
    makan : function (porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    },

    main : function (jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`)
    },
    tidur : function (jam){
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`)
    }
};

    function Mahasiswa(nama, energi){
        let mahasiswa = {};
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;
        mahasiswa.tidur = tidur;

    return mahasiswa;
}
let tazakka = Mahasiswa('Tazakka', 20)
console.log(tazakka)


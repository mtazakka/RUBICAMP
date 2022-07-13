function spiral(param1) {
    let matrix = []
    let array = []
    let counter = 0

    for (let i = 0; i < param1; i++) {
        for (let j = 0; j < param1; j++) {
            array.push(counter);
            counter++
        }
        matrix.push(array)
        array = []
    }
    let results = []
    let atas = 1;
    let bawah = param1 - 1;
    let kanan = param1 - 1;
    let kiri = 0;
    for (let k = 0; k < param1; k++) {
        results.push(matrix[0][k])
    }
    while (atas <= bawah && kiri <= kanan) {
        for (let i = atas; i <= bawah; i++) {
            results.push(matrix[i][kanan])
        } kanan--;
        for (let i = kanan; i >= kiri; i--) {
            results.push(matrix[bawah][i])
        }
        bawah--;
    }
    console.log(results)
}

spiral(5)
spiral(6)
spiral(7)
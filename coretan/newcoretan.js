function spiral(param1) {
  let arrNum = []
  let temp = []
  let spiral = []
  let num = 0

  for (var i = 0; i < param1; i++) {
    for (var j = 0; j < param1; j++) {
      temp.push(num);
      num++
    }
    arrNum.push(temp)
    temp = []
  }
  for (var i = 0; i < param1; i++) {
    spiral.push(arrNum[0][i])
  }
  let atas = 1;
  let bawah = param1 - 1;
  let kanan = param1 - 1;
  let kiri = 0;
  while (atas !== bawah && kanan !== kiri) {
    for (var i = atas; i <= bawah; i++) {
      spiral.push(arrNum[i][kanan])
    }
    kanan--;
    for (var i = kanan; i >= kiri; i--) {
      spiral.push(arrNum[bawah][i])
    }
    bawah--;
    for (var i = bawah; i >= atas; i--) {
      spiral.push(arrNum[i][kiri])
    }
    kiri++
    for (var i = kiri; i <= kanan; i++) {
      spiral.push(arrNum[atas][i])
    }
    atas++
  }
  console.log(spiral)
}

spiral(5)
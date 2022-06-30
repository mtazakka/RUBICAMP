function deretKaskus(i){ // i = parameter
    let deret = [];
    for ( i = 1; i < 10; i++){deret[i] = i*3}

    if((i%5 == 0) && (i%6 == 0)){console.log('KASKUS')} //kondisi
    else if (i%6 == 0){console.log('KUS')}
    else if (i%5 == 0){console.log('KAS')} 
    else {i};
}
// argumen belum dipanggil
// perlu pakai return?
//  value argumen != paramet
//..rest argumen?
console.log(deretKaskus(10)); // 10 = argumen

//coba deretkaskus ==> mathround(mathfloor()*arguments)
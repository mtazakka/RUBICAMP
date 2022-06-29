function deretKaskus(n){
    let deret = [];
    let i;
    for ( i = 1; i < 10; i++){deret[i] = i*3}
    if(i%5 == 0){console.log('KAS')} 
    else if (i%6 == 0){console.log('KUS')}
    else if((i%5 == 0) && (i%6 == 0)){console.log('KASKUS')} 
    else {i};
}
console.log(deretKaskus(10));

//coba deretkaskus ==> mathround(mathfloor()*arguments)
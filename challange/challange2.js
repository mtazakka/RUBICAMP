function deretKaskus(n){
    let result =[];
    for (j=1; j <= n; j++ ) {
        i = j*3
        if((i%5== 0) && (i%6==0)){result.push('KASKUS')}
        else if (i%6 == 0){result.push('KUS')}
        else if (i%5 == 0){result.push('KAS')} 
        else {result.push(i)}
    }return result
} ;
    
console.log(deretKaskus(10));

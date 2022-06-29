//challange 2
function deretKaskus(n){
    let n = deretKaskus(n)
    for ( n = 1; n < 10; n++){ n = n*3}
    if(n%5 == 0){console.log('KAS')}; 
    else if(n%6 == 0){console.log('KUS')};
    else if((n%5 == 0) && (n%6 == 0)){console.log('KASKUS')}
    else {console.log(n)}
}

console.log(deretKaskus(10));

// let a
a = 
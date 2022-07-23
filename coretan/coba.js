let aw = {
    num : 2

}
let addTo = function (a,b,c){
    return  this.num + a + b + c
}
let tambah = [1,2,3,4]
console.log (addTo.apply(aw, tambah))
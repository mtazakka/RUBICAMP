 class Tyre {
    constructor(quantity, type){
    this.quantity = quantity;
    this.type = type}

}
const tyre1 = new Tyre (4, 'Tube')
const tyre2 = new Tyre (4, 'Tubeless')

class CarFactory { 
    production(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      
    }

class Car {

    constructor(name, colour, tyre, chair, door, /*year*/){
        this.name = name;
        this.colour = colour;
        this.tyre = tyre;
        this.chair = chair;
        this.door = door;
        // this.year = year
    }
}

//year  kita overide
class Civic extends Car{
    constructor(year){
    super('Civic RS', 'red', tyre1, '8', '4', year )}
}

class Mobilio extends Car{
    constructor(year){
    super('Mobilio RS', 'red', tyre1, '8', '4', year )}
}

class Brio extends Car{
    constructor(year){
    super('Brio E', 'red', tyre1, '8', '4', year )}
}

const civic = new Civic()
console.log(civic)


// function carWarranty(name, age){
//     let carWarranty = {};
//     carWarranty.name = name;
//     carWarranty.age = age;
//     carWarranty.claim = function (claimed){
//         this.age += claimed;
//         console.log(`Halo ${this.name}, please claim warranty`)
//     }

    
//     return carWarranty;
// }

// let warranty = carWarranty(namaMobil, umur)
// console.log(warranty)
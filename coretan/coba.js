function production(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  console.log(production(1, 30))


class CarFactory {
    
    }


class Car{
    constructor(name, colour, tyre, chair, door){
        this.name = name;
        this.colour = colour;
        this.tyre = tyre;
        this.chair = chair;
        this.door = door;}
}
const avanza = new Car('avanza','merah','ducati','4','4')


console.log(avanza)

// class tyre(){

// }
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
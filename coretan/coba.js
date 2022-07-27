 class Tyre {
    constructor(quantity, type){
    this.quantity = quantity;
    this.type = type}

}
const tyre1 = new Tyre (4, 'Tube')
const tyre2 = new Tyre (4, 'Tubeless')
const currentYear = new Date().getFullYear(); /* ntar kita coba di carFactory*/
const min = 1;
const max = 4;

class CarFactory { 
    static production(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
    }

class Car {
    constructor(name, colour, tyre, chair, door, warranty, productionYear){
        this.name = name;
        this.colour = colour;
        this.tyre = tyre;
        this.chair = chair;
        this.door = door;
        this.warranty = warranty;
        this.productionYear = productionYear
    }
    carWarranty(currentYear){
        if(this.warranty >= currentYear - this.productionYear){
            console.log (`This ${this.name} ${this.productionYear}'s Warranty is available`)
        }else{
            console.log (`This ${this.name} ${this.productionYear}'s Warranty is unavailable`)
        }
    }
}

//year  kita overide
class Civic extends Car{
    constructor(productionYear){
    super('Civic RS', 'red', tyre1, '8', '4','4', productionYear )
    this.carWarranty(currentYear)
    
}
}

class Mobilio extends Car{
    constructor(productionYear){
    super('Mobilio RS', 'red', tyre1, '8', '4','5', productionYear )
    this.carWarranty(currentYear)
}
}

class Brio extends Car{
    constructor(productionYear){
    super('Brio E', 'red', tyre1, '8', '4','3', productionYear )
    this.carWarranty(currentYear)
}
}

const civic = new Civic(2012)
const mobilio = new Mobilio (2021)
const brio = new Brio (2022)

console.log(civic)
console.log(mobilio)
console.log(brio)

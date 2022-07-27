class Tyre {
  constructor(quantity, type) {
    this.quantity = quantity;
    this.type = type
  }
}
const tyre1 = new Tyre(4, 'Tube')
const tyre2 = new Tyre(4, 'Tubeless')
const currentYear = new Date().getFullYear();

function ManufactureNumber() {
  let min = 1000;
  let max = 9000;
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function productionYear() {
  let min = 2015;
  let max = 2022;
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class Car {
  constructor(name, manufactureNumber, tyre, chair, door, warranty, productionYear) {
    this.name = name;
    this.manufactureNumber = manufactureNumber;
    this.tyre = tyre;
    this.chair = chair;
    this.door = door;
    this.warranty = warranty;
    this.productionYear = productionYear
  }
  carWarranty(currentYear) {
    if (this.warranty >= currentYear - this.productionYear) {
      console.log(`In ${currentYear}, ${this.name} ${this.manufactureNumber} warranty is available`)
    } else {
      console.log(`In ${currentYear}, ${this.name} ${this.manufactureNumber} the warranty is unavailable`)
    }
  }
}
class Civic extends Car {
  constructor() {
    super('Civic RS', ManufactureNumber(), tyre1, '8', '4', '4', productionYear())


  }
}
class Mobilio extends Car {
  constructor() {
    super('Mobilio RS', ManufactureNumber(), tyre2, '8', '4', '5', productionYear())

  }
}
class Brio extends Car {
  constructor() {
    super('Brio E', ManufactureNumber(), tyre1, '8', '4', '3', productionYear())

  }
}
class CarFactory {
  constructor() {
    this.product = [];
  }
  static production() {
    let min = 1;
    let max = 5;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  produceCivic() {
    for (let i = 0; i < CarFactory.production(); i++) {
      this.product.push(new Civic())
      console.log(new Civic())
      new Civic().carWarranty(currentYear)
    }
    console.log(`Total Civic produced is ${this.product.length}`)
  }
  produceMobilio() {
    for (let i = 0; i < CarFactory.production(); i++) {
      this.product.push(new Mobilio())
      console.log(new Mobilio())
      new Mobilio().carWarranty(currentYear)
    }
    console.log(`Total Mobilio produced is ${this.product.length}`)
  }
  produceBrio() {
    for (let i = 0; i < CarFactory.production(); i++) {
      this.product.push(new Brio())
      console.log(new Brio())
      new Brio().carWarranty(currentYear)
    }
    console.log(`Total Brio produced is ${this.product.length}`)
  }
}
new CarFactory().produceCivic()
new CarFactory().produceBrio()
new CarFactory().produceMobilio()

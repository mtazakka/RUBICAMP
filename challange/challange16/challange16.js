class Tyre {
    constructor(quantity, type) {
        this.quantity = quantity;
        this.type = type
    }

}
const tyre1 = new Tyre(4, 'Tube')
const tyre2 = new Tyre(4, 'Tubeless')

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
          console.log(`In ${currentYear}, the warranty is available`)
        } else {
          console.log(`In ${currentYear}, the warranty is unavailable`)
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
        super('Mobilio RS', ManufactureNumber(), tyre1, '8', '4', '5', productionYear())
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
        for (let index = 0; index < CarFactory.production(); index++) {
           this.product.push(new Civic())
        }
    }
    produceMobilio() {
        for (let i = 0; i < CarFactory.production(); i++) {
            this.product.push(new Mobilio())
        }
    }
    produceBrio() {
        for (let i = 0; i < CarFactory.production(); i++) {
            this.product.push(new Brio())
        }
    }
    
    checkProduct(){
        console.log(`Total produced cars is ${this.product.length}, specifially:`)
        for (let i= 0; i <= this.product.length-1; i++){
            console.log(this.product[i])
        }
        }
    simulasiGaransi(currentYear){
        for (let i= 0; i <= this.product.length-1; i++){
            console.log(`${this.product[i].name} ${this.product[i].manufactureNumber}`)
            this.product[i].carWarranty(currentYear)
        }
    }
}


let honda = new CarFactory()
honda.produceCivic()
honda.produceMobilio()
honda.produceBrio()
honda.checkProduct()
honda.simulasiGaransi(2022)

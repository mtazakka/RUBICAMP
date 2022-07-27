
class CarFactory {
  constructor() {
    this.product = [1,2,3];
  }

  produceCivic() {
    for (let index = 0; index < CarFactory.production(); index++) {
      this.product.push(2)
      // console.log(new Civic(productionYear))
      // new Civic(productionYear).carWarranty(currentYear)
    }
    // console.log(`Total Civic produced is ${this.product}`)
  }
  static production() {
    let min = 1;
    let max = 5;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  checkProduct() {
    console.log(`Jumlah produksi Civic adalah ${this.product.length}:`)
    for (let index = 0; index < this.product.length; index++) {
      console.log(`Civic ${this.product[index]}`)
    }
  }




}

new CarFactory().produceCivic()
new CarFactory().checkProduct()
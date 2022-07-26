


class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.firstName}`)
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`)
  }
}

const zakka = new Employee('Tazakka')
zakka.sayHello('Emir')

const rubi = new Manager('Rubi', 'Henjaya')
rubi.sayHello('Emir')

console.log(zakka)
console.log(rubi)
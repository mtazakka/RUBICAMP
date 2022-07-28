export const Pi = 22 / 7
export class MesinHitung {
    constructor() {
        this.x = 1
        this.resultNumber = this.x

    }
    add(number) {
        this.x += number
        return this
    }
    subtract(number) {
        this.x -= number
        return this
    }
    divide(number) {
        this.x /= number
        return this
    }
    multiply(number) {
        this.x *= number
        return this
    }
    square() {
        this.x = Math.pow(this.x, 2)
        return this
    }
    squareRoot() {
        this.x = Math.pow(this.x, 0.5)
        return this
    }
    exponent(number) {
        this.x **= number
        return this
    }
    result() {
        console.log(this.x)
    }

}

// export {Pi, MesinHitung}
// basic OOP
class Rectangle {
    constructor(height, width) {
      this.height = height
      this.width = width
    }
    calcArea() {
      return this.height * this.width
    }
  }
  
  const square = new Rectangle(5, 5)  /*harus pakai new karena prototype */
  let luas = square.calcArea()
  console.log(luas)
  
  //latihan static
  
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    print(){
      return this.x, this.y
    }
    static distance(p1, p2) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return Math.hypot(dx, dy)
    }
  }
  const p1 = new Point(1, 1)
  const p2 = new Point(5, 4)
  let calc = Point.distance(p1, p2)
  console.log(`distance from ${this.p1()} and ${this.p2()} is ${calc}`)
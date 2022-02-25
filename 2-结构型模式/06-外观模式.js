class Rectangle {
  draw() {
    console.log('Rectangle::draw()')
  }
}

class Square {
  draw() {
    console.log('Square::draw()')
  }
}

class Circle {
  draw() {
    console.log('Circle::draw()')
  }
}

class ShapeMaker {
  constructor() {
    this.circle = new Circle() // {1}
    this.rectangle = new Rectangle()
    this.square = new Square()
  }

  drawCircle() {
    this.circle.draw() // {2}
  }
  drawRectangle() {
    this.rectangle.draw()
  }
  drawSquare() {
    this.square.draw()
  }
}

const shapeMaker = new ShapeMaker()

shapeMaker.drawCircle()
shapeMaker.drawRectangle()
shapeMaker.drawSquare()
/**
 * output:
 * Circle::draw()
 * Rectangle::draw()
 * Square::draw()
 */

/**
 * title: 外观模式
 * scene: 有几种形状类型，假设这几个形状设计的特别复杂，这个时候你肯定不愿意修改这些接口然后来提供新的接口
 * conclusion: 对外提供单一接口，来隐藏系统的复杂性
 */

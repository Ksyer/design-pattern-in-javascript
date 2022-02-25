class Circle {
  draw() {
    console.log("I'm a Circle")
  }
}

class Rectangle {
  draw() {
    console.log("I'm a Rectangle")
  }
}

class Square {
  draw() {
    console.log("I'm a Square")
  }
}

class ShapeFactory {
  getShape(shapeType) {
    switch (shapeType) {
      case 'CIRCLE':
        return new Circle()
      case 'Rectangle':
        return new Rectangle()
      case 'Square':
        return new Square()
      default:
        return null
    }
  }
}

class Red {
  fill() {
    console.log('fill Red')
  }
}

class Blue {
  fill() {
    console.log('fill Blue')
  }
}

class Green {
  fill() {
    console.log('fill Green')
  }
}

class ColorFactory {
  getColor(color) {
    switch (color) {
      case 'RED':
        return new Red()
      case 'BULE':
        return new Blue()
      case 'GREEN':
        return new Green()
      default:
        return null
    }
  }
}

class FactoryProducer {
  static getFactory(choice) {
    switch (choice) {
      case 'SHAPE':
        return new ShapeFactory()
      case 'COLOR':
        return new ColorFactory()
      default:
        return null
    }
  }
}

const shapeFactory = FactoryProducer.getFactory('SHAPE')
const shape1 = shapeFactory.getShape('CIRCLE')
shape1.draw()

const colorFactory = FactoryProducer.getFactory('COLOR')
const color1 = colorFactory.getColor('GREEN')
color1.fill()
/**
 * output：
 * I'm a circle
 * I'm a rectangle
 * I'm a square
 * fill red
 * fill blue
 * fill green
 */

/**
 * title: 抽象工厂模式
 * scene: 形状工厂
 * conclusion: 给工厂做了一个统一的出入口
 */

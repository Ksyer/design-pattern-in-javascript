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

const shapeFactory = new ShapeFactory()

const shape1 = shapeFactory.getShape('CIRCLE')
shape1.draw()
const shape2 = shapeFactory.getShape('Rectangle')
shape2.draw()
const shape3 = shapeFactory.getShape('Square')
shape3.draw()
/**
 * output:
 * I'm a circle
 * I'm a rectangle
 * I'm a square
 */

/**
 * title: 工厂模式
 * scene: 有很多形状比如圆形，矩形和正方形。这类都是属于形状，我们可以通过专门生产形状的工厂来生成它们的实例
 * conclusion: 需要什么东西不直接使用new的方法生成实例，然后统一通过工厂进行生产加工再生成实例
 */

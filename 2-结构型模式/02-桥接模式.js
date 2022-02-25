class RedCircle {
  drawCircle(radius, x, y) {
    console.log('Drawing Circle[ color: red, radius: ' + radius + ', x: ' + x + ', ' + y + ']')
  }
}

class GreenCircle {
  drawCircle(radius, x, y) {
    console.log('Drawing Circle[ color: green, radius: ' + radius + ', x: ' + x + ', ' + y + ']')
  }
}

class Shape {
  constructor(drawAPI) {
    // 防止调用 new 被初始化
    if (new.target == Shape) {
      throw new Error('this class must be extends.')
    }
    this.drawAPI = drawAPI
  }
  draw() {}
}

class Circle extends Shape {
  constructor(x, y, radius, drawAPI) { // {1}
    super(drawAPI) // {2}
    this.x = x
    this.y = y
    this.radius = radius
  }

  draw() {
    this.drawAPI.drawCircle(this.radius, this.x, this.y) // {3}
  }
}

const redCircle = new Circle(100, 100, 10, new RedCircle())
const greenCircle = new Circle(100, 100, 10, new GreenCircle())

redCircle.draw()
greenCircle.draw()
/**
 * output:
 * Drawing Circle[ color: red, radius: 10, x: 100, 100]
 * Drawing Circle[ color: green, radius: 10, x: 100, 100]
 */

/**
 * title: 桥接模式
 * scene: 有2个类，它们有很多不确定性，可能后续会改变
 * conclusion: 基础类不确定性，后续的变化，不影响上层的调用
 */

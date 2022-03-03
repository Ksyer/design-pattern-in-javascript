class OperationAdd {
  doOperation(num1, num2) {
    return num1 + num2
  }
}
class OperationSubstract {
  doOperation(num1, num2) {
    return num1 - num2
  }
}
class OperationMultiply {
  doOperation(num1, num2) {
    return num1 * num2
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy
  }
  executeStrategy(num1, num2) {
    return this.strategy.doOperation(num1, num2)
  }
}

let context = new Context(new OperationAdd())
console.log('10 + 5 = ' + context.executeStrategy(10, 5))

context = new Context(new OperationSubstract())
console.log('10 - 5 = ' + context.executeStrategy(10, 5))

context = new Context(new OperationMultiply())
console.log('10 * 5 = ' + context.executeStrategy(10, 5))
/**
 * output:
 * 10 + 5 = 15
 * 10 - 5 = 5
 * 10 * 5 = 50
 */

/**
 * title: 策略模式
 * scene: 策略和策略之间实现解耦，和状态模式类似可以通过此来消除一些if...else语句
 * conclusion: 感觉是状态模式的一种升级或衍生版本。策略模式更倾向于运算或策略，而状态模式更倾向于状态
 */

class Subject {
  constructor() {
    this.observers = []
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }

  attach(observer) {
    this.observers.push(observer)
  }

  // {2}
  notifyAllObservers() {
    for (const observer of this.observers) {
      observer.update()
    }
  }
}

class BinaryObserver {
  constructor(subject) {
    this.subject = subject
    this.subject.attach(this) // {1}
  }

  update() {
    console.log('Binary String: ' + this.subject.getState().toString(2))
  }
}

class OctalObserver {
  constructor(subject) {
    this.subject = subject
    this.subject.attach(this)
  }

  update() {
    console.log('Octal String: ' + this.subject.getState().toString(8))
  }
}

class HexObserver {
  constructor(subject) {
    this.subject = subject
    this.subject.attach(this)
  }

  update() {
    console.log('Hex String: ' + this.subject.getState().toString(16))
  }
}
const subject = new Subject()

new HexObserver(subject)
new OctalObserver(subject)
new BinaryObserver(subject)

console.log('First state change: 15')
subject.setState(15)
console.log('Second state change: 10')
subject.setState(10)
/**
 * output:
 * First state change: 15
 * Hex String: f
 * Octal String: 17
 * Binary String: 1111
 * Second state change: 10
 * Hex String: a
 * Octal String: 12
 * Binary String: 1010
 */

/**
 * title: 观察者模式
 * scene: 给一个十进制数，输出对应的其它进制
 * conclusion: 对象之间有关联，一个对象改变，变更状态会通知其他用到的对象，解耦
 */

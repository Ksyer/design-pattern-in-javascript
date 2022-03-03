class Memento {
  constructor(state) {
    this.state = state
  }
  getState() {
    return this.state
  }
}

class Originator {
  setState(state) {
    this.state = state
  }
  getState() {
    return this.state
  }
  saveStateToMemento() {
    return new Memento(this.state)
  }
  getStateFromMemento(memento) {
    this.state = memento.getState()
  }
}

class CareTaker {
  constructor() {
    this.mementoList = []
  }
  add(state) {
    this.mementoList.push(state)
  }
  get(index) {
    return this.mementoList[index]
  }
}

const originator = new Originator()
const careTaker = new CareTaker()
originator.setState('State #1')
originator.setState('State #2')
careTaker.add(originator.saveStateToMemento())
originator.setState('State #3')
careTaker.add(originator.saveStateToMemento())
originator.setState('State #4')

console.log('Current State: ' + originator.getState())
originator.getStateFromMemento(careTaker.get(0))
console.log('First saved State: ' + originator.getState())
originator.getStateFromMemento(careTaker.get(1))
console.log('Second saved State: ' + originator.getState())
/**
 * output:
 * Current State: State #4
 * First saved State: State #2
 * Second saved State: State #3
 */

/**
 * title: 备忘录模式
 * scene: 在编程中需要时光倒流的某些事件
 * conclusion: 游戏存档一样
 */

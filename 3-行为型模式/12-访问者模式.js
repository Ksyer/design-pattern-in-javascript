class Keyboard {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this)
  }
}

class Monitor {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this)
  }
}

class Mouse {
  accept(computerPartVisitor) {
    computerPartVisitor.visit(this)
  }
}

class Computer {
  constructor() {
    this.parts = [new Mouse(), new Keyboard(), new Monitor()]
  }

  accept(computerPartVisitor) {
    for (let i = 0; i < this.parts.length; i++) {
      this.parts[i].accept(computerPartVisitor) // {1}
    }
    computerPartVisitor.visit(this)
  }
}

class ComputerPartDisplayVisitor {
  visit(device) {
    console.log(`Displaying${device.constructor.name}`)
  }
}

const computer = new Computer()
computer.accept(new ComputerPartDisplayVisitor())
/**
 * output:
 * Displaying Mouse.
 * Displaying Keyboard.
 * Displaying Monitor.
 * Displaying Computer.
 */

/**
 * title: 访问者模式
 * scene: 如上类似设备这个东西是一个相对稳定的结构，而访问者要实现的功能又是非常不确定的，
 * 那么针对不同访问者，都可以对相同的设备进行不同的输出。其次只需要暴露特定接口，而相对稳
 * 定的设备不需要考虑接口中实现的内容。
 * conclusion: 根据访问者不同，所展示的行为也不同
 */

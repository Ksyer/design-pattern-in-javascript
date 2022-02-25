class SingleObject {
  constructor() {
    // 防止调用 new 被初始化
    if (new.target != undefined) {
      const errorMsg = "This is single object, Can't use keyword new!"
      const tipMsg = 'You should use method getInstance to get instance.'
      throw new Error(`\n${errorMsg}\n${tipMsg}`)
    }
  }

  static getInstance() {
    if (SingleObject.instance) {
      return SingleObject.instance
    }
    SingleObject.instance = {}
    SingleObject.instance.__proto__ = SingleObject.prototype
    return SingleObject.instance
  }

  showMessage() {
    console.log('Hello World!')
  }
}

const instance = SingleObject.getInstance()
instance.showMessage()
/**
 * output:
 * Hello World!
 */

/**
 * title: 单例模式
 * scene: 有个饿汉式，但推荐懒汉式
 * conclusion: 一个实例只生产一次
 */

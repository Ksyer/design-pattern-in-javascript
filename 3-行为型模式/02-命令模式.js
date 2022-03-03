// 股票
class Stock {
  constructor() {
    this.name = 'ABC'
    this.quantity = 10 // 数量
  }

  buy() {
    console.log('Stock [ Name: ' + this.name + ', Quantity: ' + this.quantity + ' ] bought')
  }

  sell() {
    console.log('Stock [ Name: ' + this.name + ', Quantity: ' + this.quantity + ' ] sold')
  }
}

// 买入股票
class BuyStock {
  constructor(abcStock) {
    this.abcStock = abcStock
  }

  extcute() {
    this.abcStock.buy()
  }
}

// 卖出股票
class SellStock {
  constructor(abcStock) {
    this.abcStock = abcStock
  }

  extcute() {
    this.abcStock.sell()
  }
}

// 经纪人
class Broker {
  constructor() {
    this.orderList = []
  }

  // 订单
  takeOrder(order) {
    this.orderList.push(order)
  }

  // 下单
  placeOrders() {
    for (const order of this.orderList) {
      order.extcute() // {1}
    }
    this.orderList = []
  }
}

const abcStock = new Stock()

const buyStockOrder = new BuyStock(abcStock)
const sellStockOrder = new SellStock(abcStock)

const broker = new Broker()
broker.takeOrder(buyStockOrder)
broker.takeOrder(buyStockOrder)
broker.takeOrder(buyStockOrder)
broker.takeOrder(sellStockOrder)
broker.takeOrder(sellStockOrder)

broker.placeOrders()
/**
 * output:
 * Stock [ Name: ABC,Quantity: 10 ] bought
 * Stock [ Name: ABC,Quantity: 10 ] bought
 * Stock [ Name: ABC,Quantity: 10 ] bought
 * Stock [ Name: ABC,Quantity: 10 ] sold
 * Stock [ Name: ABC,Quantity: 10 ] sold
 */

/**
 * title: 命令模式
 * scene: 解决一些比如预约的问题，如上述例子，股票买入卖出，可以提前下单，但是未必能最终生效
 * conclusion: 接受命令再统一执行，中途可以发出很多不同的命令
 */

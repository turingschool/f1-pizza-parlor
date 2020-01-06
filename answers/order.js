class Order {
  constructor({type}) {
    this.type = type;
    this.priceList = {
      small: 5,
      medium: 9,
      large: 12,
      topping: 2
    }
    this.pizzas = [];
  }

  addPizza(pizza) {
    this.pizzas.push(pizza)
  }

  getSubtotal() {
    var total = 0
    for(var i = 0; i < this.pizzas.length; i++) {
      var pizza = this.pizzas[i]
      var costOfPie = this.priceList[pizza.size]
      var costOfToppings = pizza.toppings.length * this.priceList.topping;
      total += (costOfPie + costOfToppings);
    }
    return total
  }
}

module.exports = Order;

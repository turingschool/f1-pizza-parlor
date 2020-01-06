class Pizza {
  constructor(size, allowedToppings = 2) {
    this.size = size;
    this.allowedToppings = allowedToppings;
    this.toppings = [];
  }

  addTopping(topping) {
    if(this.toppings.length === this.allowedToppings) {
      return 'Sorry, you have added all the toppings for this pizza';
    }
    this.toppings.push(topping)
    return `Great, you added ${topping}`
  }
}

module.exports = Pizza;

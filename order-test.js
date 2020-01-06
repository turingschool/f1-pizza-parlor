var assert = require('chai').assert
var Pizza = require('./pizza');
var Order = require('./order');

describe('Order', function () {
  it('can be for delivery or take-out', function () {
    var order1 = new Order({type: 'delivery'});
    var order2 = new Order({type: 'take-out'});

    assert.equal(order1.type, 'delivery');
    assert.equal(order2.type, 'take-out');
  })

  it('should have the default price list', function () {
    var order1 = new Order({type: 'delivery'});

    var priceList = {
      small: 5,
      medium: 9,
      large: 12,
      topping: 2
    }

    assert.deepEqual(order1.priceList, priceList);
  })

  it('should have no pizzas by default', function () {
    var order1 = new Order({type: 'delivery'});

    assert.deepEqual(order1.pizzas, [])
  })

  it('should be able to add a pizza to the order', function () {
    var order1 = new Order({type: 'delivery'});
    var pie1 = new Pizza('medium', 2)

    order1.addPizza(pie1)

    assert.deepEqual(order1.pizzas, [pie1])
  })

  it('should be able to calculate the subtotal for the order', function () {
    var order1 = new Order({type: 'delivery'})
    var pie1 = new Pizza('medium', 2)
    pie1.addTopping('Sausage')
    order1.addPizza(pie1)

    assert.equal(order1.getSubtotal(), 11)
  })

  it('should be able to calculate the subtotal for another order', function () {
    var order1 = new Order({type: 'delivery'})
    var pie1 = new Pizza('medium', 2)
    var pie2 = new Pizza('small', 4)
    pie1.addTopping('Sausage')
    pie1.addTopping('Mushroom')
    pie2.addTopping('Sausage')
    pie2.addTopping('Bacon')
    pie2.addTopping('Ham')
    pie2.addTopping('Extra Cheese')
    order1.addPizza(pie1)
    order1.addPizza(pie2)

    assert.equal(order1.getSubtotal(), 26)
  })
})

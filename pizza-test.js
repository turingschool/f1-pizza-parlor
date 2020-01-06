var assert = require('chai').assert
var Pizza = require('./pizza');

describe('Pizza', function () {
  it('should have a size', function () {
    var pie1 = new Pizza('medium');
    var pie2 = new Pizza('large');

    assert.equal(pie1.size, 'medium');
    assert.equal(pie2.size, 'large');
  })

  it('should have a number of allowed toppings', function () {
    var pie1 = new Pizza('medium', 3);
    var pie2 = new Pizza('medium', 4);

    assert.equal(pie1.allowedToppings, 3)
    assert.equal(pie2.allowedToppings, 4)
  })

  it('should have 2 toppings allowed by defualt', function () {
    var pie1 = new Pizza('medium');

    assert.equal(pie1.allowedToppings, 2)
  })

  it('should have an empty array of toppings by default', function () {
    var pie1 = new Pizza('medium');

    assert.deepEqual(pie1.toppings, []);
  })

  it('should be able to add toppings', function () {
    var pie1 = new Pizza('medium');

    pie1.addTopping('Mushrooms');
    pie1.addTopping('Sausage');

    assert.deepEqual(pie1.toppings, ['Mushrooms', 'Sausage']);;
  })

  it('should tell me that I have successfully added a topping', function () {
    var pie1 = new Pizza('medium');

    assert.equal(pie1.addTopping('Mushrooms'), 'Great, you added Mushrooms')
    assert.equal(pie1.addTopping('Sausage'), 'Great, you added Sausage')
  })

  it('should not be able to add more toppings than allowed', function () {
    var pie1 = new Pizza('medium');

    pie1.addTopping('Mushrooms');
    pie1.addTopping('Sausage');

    assert.equal(pie1.addTopping('Peppers'), 'Sorry, you have added all the toppings for this pizza');
    assert.deepEqual(pie1.toppings, ['Mushrooms', 'Sausage']);;
  })
})

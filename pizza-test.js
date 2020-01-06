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
})

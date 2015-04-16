var assert = require("assert");
var Lab = require('../isPersisted.js').Asessment;

describe('Testing function isPersisted', function(){
  it('should return 1 when the value is single digit', function(){
    assert.equal(1, Lab.isPersisted(0));
    assert.equal(1, Lab.isPersisted(1));
    assert.equal(1, Lab.isPersisted(9));
  });

  it('should return 1 when the value is 10', function(){
    assert.equal(1, Lab.isPersisted(10));
  });

  it('should return 2 when the value is 2718', function(){
    assert.equal(2, Lab.isPersisted(2718));
  });

  it('should return 2 when the value is 99999', function(){
    assert.equal(2, Lab.isPersisted(999999999999999));
  });
})
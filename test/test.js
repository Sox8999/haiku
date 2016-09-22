var haiku = require("../index")

var assert = require('assert');
describe('generateHaiku', function() {
    it('should return an empty string if there is not enough data', function() {
      assert.equal("", haiku.generateHaiku([]));
    });
    it('should return a 3 line haiku if there are enough words passed in', function() {
       assert.equal(3, haiku.generateHaiku("here is some data to make a haiku from and stuff".split(" ")).split("\n").length);
     });
  });
describe('syllableCount', function() {
	it('should return two for baseball', function(){
		assert.equal(2, haiku.syllableCount("baseball"));
	});
});
describe('generateHaikuLine', function() {
	it('should return two for baseball', function(){
		assert.equal("ball ball", haiku.generateHaikuLine(["ball"], 2));
	});
});

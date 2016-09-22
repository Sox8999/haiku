var haiku = require("./")

var assert = require('assert');
describe('generateHaiku', function() {
    it('should return an empty string if there is not enough data', function() {
     console.log(haiku);
      assert.equal("", haiku.generateHaiku([]));
    });
  });

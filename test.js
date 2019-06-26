var assert = require("assert");
var bowling = require("./exercise");

describe("zeroGame", function() {
  it(" should return 0", function() {
    assert.equal(bowling(0), [2]);
  });
});

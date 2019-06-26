var assert = require("assert");
var Bowling = require("./bowling");

describe("zeroGame", function() {
  it(" should return 0", function() {
    assert.equal(
      Bowling.calculate([
        [Bowling.x],
        [10],
        [10],
        [Bowling.x],
        [10],
        [6, 4],
        [10],
        [10],
        [10],
        [4, 6, 4]
      ]),
      244
    );
  });
});

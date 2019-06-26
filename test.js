var assert = require("assert");
var Bowling = require("./bowling");

describe("Zero Game", function() {
  it("should return 0", function() {
    assert.equal(
      Bowling.calculate([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]),
      0
    );
  });
});

describe("Perfect Game", function() {
  it("should return 300 for a perfect game", function() {
    assert.equal(
      Bowling.calculate([
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10]
      ]),
      300
    );
  });
});

describe("All spare game", function() {
  it("should return 0", function() {
    assert.equal(
      Bowling.calculate([
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5],
        [5, 5, 5]
      ]),
      150
    );
  });
});

describe("mixed results game", function() {
  it("should be able to take a mix of spares, strikes and gutter balls", function() {
    assert.equal(
      Bowling.calculate([
        [3, 5],
        [0, 0],
        [5, 5],
        [10, 0],
        [10, 0],
        [4, 1],
        [6, 4],
        [2, 7],
        [6, 1],
        [7, 3, 10]
      ]),
      120
    );
  });
});

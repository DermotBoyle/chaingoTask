//original template
var Game = function() {
  this.score = [];
  this.result = 0;
};

// new Obj
var NewGame = new Game();

//values
var nil = 0;
var x = 10,
  X = 10;

//input
NewGame.score = [
  [1, 2],
  [6, nil],
  [5, 4],
  [7, 3],
  [4, nil],
  [3, nil],
  [1, 4],
  [6, 2],
  [7, 3],
  [1, 3, 7]
];

// function
const basicBowlingCalculation = () => {
  exrtaThrow = NewGame.score[9][2];
  for (let i = 0; i < NewGame.score.length; i++) {
    // if its a spare
    if (NewGame.score[i][0] + NewGame.score[i][1] == 10) {
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i][1] + NewGame.score[i + 1][0];
    } else if (NewGame.score[i][0] + NewGame.score[i][1] !== 10) {
      // adds up the other scores
      NewGame.result += NewGame.score[i][0] + NewGame.score[i][1];
    }
  }
  NewGame.result = NewGame.result + exrtaThrow;
  console.log(NewGame.result);
};
basicBowlingCalculation();

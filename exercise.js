//original template
var Game = function() {
  this.score = [];
  this.result = 0;
  this.frames = 0;
};

// new Obj
var NewGame = new Game();

//values
var nil = 0;
var x = 10,
  X = 10;

//input
NewGame.score = [
  [10, 0],
  [10, 0],
  [8, 0],
  [7, 2],
  [6, 1],
  [4, 3],
  [5, 3],
  [10, 0],
  [2, 0],
  [6, 2, 0]
];

// function
const basicBowlingCalculation = () => {
  for (let i = 0; i < NewGame.score.length && NewGame.frames < 10; i++) {
    // if its a spare
    if (NewGame.score[i][0] + NewGame.score[i][1] == 10) {
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i][1] + NewGame.score[i + 1][0];
      NewGame.frames++;
    } else if (NewGame.score[i][0] == 10 && NewGame.score[i + 1][0] !== 10) {
      // for a strike
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i + 1][0] + NewGame.score[i + 1][1];
    } else if (NewGame.score[i][0] == 10 && NewGame.score[i + 1][0] == 10) {
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i + 1][0] + NewGame.score[i + 2][0];
    } else if (NewGame.score[i][0] + NewGame.score[i][1] !== 10) {
      // adds up the other scores
      NewGame.result += NewGame.score[i][0] + NewGame.score[i][1];
      NewGame.frames++;
    }

    //console.log(NewGame.result);
    //console.log(NewGame.frames);
  }
  NewGame.result += NewGame.score[9][0] + NewGame.score[9][1];
  console.log(NewGame.result);
  // console.log(NewGame.frames);
};
basicBowlingCalculation();

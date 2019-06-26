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
var x = 10;

//input
NewGame.score = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [7, 2],
  [3, 3, 0]
];

// function
const basicBowlingCalculation = () => {
  for (let i = 0; i < NewGame.score.length && NewGame.frames < 10; i++) {
    // if its a strike with the next score not a strike
    if (NewGame.score[i][0] == 10 && NewGame.score[i + 1][0] !== 10) {
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i + 1][0] + NewGame.score[i + 1][1];
      NewGame.frames++;
      // if its a strike and the next score is also a strike
    } else if (NewGame.score[i][0] == 10 && NewGame.score[i + 1][0] == 10) {
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i + 1][0] + NewGame.score[i + 2][0];
      NewGame.frames++;
      // if its a spare
    } else if (NewGame.score[i][0] + NewGame.score[i][1] === 10) {
      NewGame.result +=
        NewGame.score[i][0] + NewGame.score[i][1] + NewGame.score[i + 1][0];
      NewGame.frames++;
    } else if (NewGame.score[i][0] + NewGame.score[i][1] !== 10) {
      // adds up the other scores
      NewGame.result += NewGame.score[i][0] + NewGame.score[i][1];
      NewGame.frames++;
    }

    console.log(NewGame.result);
    console.log(NewGame.frames);
  }
  // NewGame.result += NewGame.score[9][0] + NewGame.score[9][1];
  //console.log(NewGame.result);
  //console.log(NewGame.frames);
};
basicBowlingCalculation();

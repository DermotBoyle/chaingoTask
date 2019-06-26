//original template
let Game = function(score) {
  this.score = score;
  this.result = 0;
  this.frames = 0;
};

// function
function Bowling() {}

//values
Bowling.nil = 0;
Bowling.x = 10;

Bowling.calculate = scores => {
  let newGame = new Game(scores);
  for (let i = 0; i < newGame.score.length && newGame.frames < 10; i++) {
    // if its a spare on the 10th frame
    if (
      newGame.score[i][0] + newGame.score[i][1] === 10 &&
      newGame.frames == 9
    ) {
      newGame.frames++;
      newGame.result +=
        newGame.score[i][0] + newGame.score[i][1] + newGame.score[i][2];
    }

    // if its the the 9th frame with a strike
    else if (newGame.score[i][0] == 10 && newGame.frames == 8) {
      newGame.result +=
        newGame.score[i][0] + newGame.score[i + 1][0] + newGame.score[i + 1][1];
      newGame.frames++;
    }
    // if its a strike and frame is the 10th
    else if (newGame.score[i][0] == 10 && newGame.frames == 9) {
      newGame.frames++;
      newGame.result +=
        newGame.score[i][0] + newGame.score[i][1] + newGame.score[i][2];
    }
    // if its a strike with the next score not a strike
    else if (
      newGame.score[i][0] == 10 &&
      newGame.score[i + 1][0] !== 10 &&
      newGame.frames < 8
    ) {
      newGame.frames++;
      newGame.result +=
        newGame.score[i][0] + newGame.score[i + 1][0] + newGame.score[i + 1][1];
      // if its a strike and the next score is also a strike
    } else if (
      newGame.score[i][0] == 10 &&
      newGame.score[i + 1][0] == 10 &&
      newGame.frames < 8
    ) {
      newGame.frames++;
      newGame.result +=
        newGame.score[i][0] + newGame.score[i + 1][0] + newGame.score[i + 2][0];
    }
    // if its a spare
    else if (newGame.score[i][0] + newGame.score[i][1] === 10) {
      newGame.frames++;
      newGame.result +=
        newGame.score[i][0] + newGame.score[i][1] + newGame.score[i + 1][0];
    } else if (newGame.score[i][0] + newGame.score[i][1] !== 10) {
      // adds up the other scores
      newGame.frames++;
      newGame.result += newGame.score[i][0] + newGame.score[i][1];
    }

    //console.log(newGame.result);
    //console.log(newGame.frames);
  }
  console.log(newGame.result);
  console.log(newGame.frames);
  return newGame.result;
};

module.exports = Bowling;

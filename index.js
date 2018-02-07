const prompt = require('prompt');
const clear = require('clear');

const Board = require('./board');

prompt.start()

const game = new Board();

const round = (lastResult) => {
  clear();
  game.render();
  const player = game.showPlayer();
  if (lastResult === 'invalid') {
    console.log(`Player ${player}, invalid entry. Please enter 0-2 for row and 0-2 for column: `);
    prompt.get(['row', 'column'], (err, result) => {
      const play = game.play(result.row, result.column);
      // clear();
      return round(play);
    });
  }
  if (lastResult === 'win') {
    console.log(`Congrats, player ${player}! You win.`);
    return;
  }
  if (lastResult === 'loss') {
    console.log('Board is full--no winners.');
    return;
  }
  if (lastResult === 'next') {
    console.log(`Player ${player}, your turn. Please enter 0-2 for row and 0-2 for column: `);
    prompt.get(['row', 'column'], (err, result) => {
      const play = game.play(result.row, result.column);
      // clear();
      return round(play);
    });
  }
}

round('next');



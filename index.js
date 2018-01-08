const prompt = require('prompt');

const Board = require('./board');

const game = new Board();
console.log(game.play(1,1));
console.log(game.play(2,2));

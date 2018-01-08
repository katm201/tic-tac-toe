
class Board {
  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }
  render() {
    let view = ''
    for (let i = 0; i < 3; i++) {
      if (i > 0) { view += '_   _   _\n\n'; }
      for (let j = 0; j < 3; j++) {
        if (j > 0) { view += ' | '; }
        view += this.board[i][j];
      }
      view += '\n';
    }
  return view;
  }
}

module.exports = Board;


class Board {
  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.players = { true: 'x', false: 'o' };
    this.turn = true;
  }

  play(row, col) {
    if (!this.checkValidPlay(row, col)) { return 'invalid'; }
    
    const piece = this.players[this.turn];
    this.board[row][col] = piece;
    this.turn = !this.turn;
    this.render();
    
    if (checkForWin()) { return 'win'; }

    return 'next';
  }

  checkValidPlay(row, col) {
    return this.board[row][col] === ' ';
  }

  checkRow(row) {
    const piece = row[0]
    for (let i = 1; i < 3; i++) {
      if (row[i] !== piece) { return false; }
    }
    return true;
  }

  checkDiagonals(corner) {
    const piece = this.board[0][corner];
    const direction = corner === 0 ? 1 : -1;
    if (this.board[1][1] !== piece) { return false; }
    if (this.board[2][1 + direction] !== piece) { return false; }
    return true; 
  }

  checkForWin() {
    for (let i = 0; i < 3; i++) {
      if (checkRow(i)) { return true; }
    }
    if (checkDiagonals(0) || checkDiagonals(2)) { return true; }
    return false;
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
  console.log(view);
  }
}

module.exports = Board;

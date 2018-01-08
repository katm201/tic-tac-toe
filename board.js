
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
    this.render();

    if (this.checkForWin()) { return 'win'; }

    this.turn = !this.turn;
    return 'next';
  }

  showPlayer() {
    return this.players[this.turn];
  }

  checkValidPlay(row, col) {
    return this.board[row][col] === ' ';
  }

  checkRow(row) {
    const piece = this.players[this.turn];
    for (let i = 0; i < 3; i++) {
      if (this.board[row][i] !== piece) { return false; }
    }
    return true;
  }

  checkColumn(col) {
    const piece = this.players[this.turn];
    for (let i = 0; i < 3; i++) {
      if (this.board[i][col] !== piece) { return false; }
    }
    return true;
  }

  checkDiagonals(corner) {
    const piece = this.players[this.turn];
    const direction = corner === 0 ? 1 : -1;
    if (this.board[0][corner] !== piece) { return false; }
    if (this.board[1][1] !== piece) { return false; }
    if (this.board[2][1 + direction] !== piece) { return false; }
    return true; 
  }

  checkForWin() {
    for (let i = 0; i < 3; i++) {
      if (this.checkRow(i)) { return true; }
      if (this.checkColumn(i)) { return true; }
    }
    if (this.checkDiagonals(0) || this.checkDiagonals(2)) { return true; }
    return false;
  }

  render() {
    let view = '\n';
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

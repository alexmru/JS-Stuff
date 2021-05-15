function findNextSquare(sq) {
    let squareRoot = Math.sqrt(sq);
    if (squareRoot % 1 === 0) {
        let nextSquareRoot = squareRoot + 1;
        return Math.pow(nextSquareRoot, 2);
    } else {
        return -1;
    }
  }

console.log(findNextSquare(144));
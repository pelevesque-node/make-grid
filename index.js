'use strict'

module.exports = (numRows, numCols, cellWidth, cellHeight) => {
  const grid = []
  if (numRows > 0 && numCols > 0) {
    for (let i = 0; i < numRows; i++) {
      grid[i] = []
      for (let j = 0; j < numCols; j++) {
        grid[i][j] = {
          x: j * cellWidth,
          y: i * cellHeight,
          w: cellWidth,
          h: cellHeight
        }
      }
    }
  }
  return grid
}

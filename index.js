'use strict'

module.exports = (numRows, numCols, cellWidth, cellHeight) => {
  const grid = []
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
  return grid
}

/* global describe, it */
'use strict'

const expect = require('chai').expect
const makeGrid = require('../index')

describe('#makeGrid()', () => {
  it('rows = 0 and cols = 0 should return an empty grid', () => {
    const numRows = 0
    const numCols = 0
    const cellWidth = 0
    const cellHeight = 0
    const result = makeGrid(numRows, numCols, cellWidth, cellHeight)
    const expected = []
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })

  it('rows = 0 and cols = 1 should return an empty grid', () => {
    const numRows = 0
    const numCols = 1
    const cellWidth = 0
    const cellHeight = 0
    const result = makeGrid(numRows, numCols, cellWidth, cellHeight)
    const expected = []
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })

  it('rows = 1 and cols = 0 should return a grid with an empty row', () => {
    const numRows = 1
    const numCols = 0
    const cellWidth = 0
    const cellHeight = 0
    const result = makeGrid(numRows, numCols, cellWidth, cellHeight)
    const expected = [[]]
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })

  it('should return a normal grid', () => {
    const numRows = 3
    const numCols = 4
    const cellWidth = 1
    const cellHeight = 2
    const result = makeGrid(numRows, numCols, cellWidth, cellHeight)
    const expected = [
      [
        { x: 0, y: 0, w: 1, h: 2 },
        { x: 1, y: 0, w: 1, h: 2 },
        { x: 2, y: 0, w: 1, h: 2 },
        { x: 3, y: 0, w: 1, h: 2 }
      ], [
        { x: 0, y: 2, w: 1, h: 2 },
        { x: 1, y: 2, w: 1, h: 2 },
        { x: 2, y: 2, w: 1, h: 2 },
        { x: 3, y: 2, w: 1, h: 2 }
      ], [
        { x: 0, y: 4, w: 1, h: 2 },
        { x: 1, y: 4, w: 1, h: 2 },
        { x: 2, y: 4, w: 1, h: 2 },
        { x: 3, y: 4, w: 1, h: 2 }
      ]
    ]
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })
})

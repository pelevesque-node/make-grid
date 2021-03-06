[![Build Status](https://travis-ci.org/pelevesque/make-grid.svg?branch=master)](https://travis-ci.org/pelevesque/make-grid)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/make-grid/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/make-grid?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# make-grid

Creates a two dimensional array arranged as a grid with `x`, `y`, `w`, `h` values on each item.

## Node Repository

https://www.npmjs.com/package/@pelevesque/make-grid

## Installation

`npm install @pelevesque/make-grid`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const makeGrid = require('@pelevesque/make-grid')
```

```js
const numRows = 3
const numCols = 5
const cellWidth = 2
const cellHeight = 3
const grid = makeGrid(numRows, numCols, cellWidth, cellHeight)

// result
grid = [
  [ { x: 0, y: 0, w: 2, h: 3 },
    { x: 2, y: 0, w: 2, h: 3 },
    { x: 4, y: 0, w: 2, h: 3 },
    { x: 6, y: 0, w: 2, h: 3 },
    { x: 8, y: 0, w: 2, h: 3 }
  ], [
    { x: 0, y: 3, w: 2, h: 3 },
    { x: 2, y: 3, w: 2, h: 3 },
    { x: 4, y: 3, w: 2, h: 3 },
    { x: 6, y: 3, w: 2, h: 3 },
    { x: 8, y: 3, w: 2, h: 3 }
  ], [
    { x: 0, y: 6, w: 2, h: 3 },
    { x: 2, y: 6, w: 2, h: 3 },
    { x: 4, y: 6, w: 2, h: 3 },
    { x: 6, y: 6, w: 2, h: 3 },
    { x: 8, y: 6, w: 2, h: 3 }
  ]
]
```

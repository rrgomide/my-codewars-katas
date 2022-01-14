const { determinant } = require('./matrix-determinant')

const ALL_TESTS = [
  {
    input: [[1]],
    output: 1,
  },

  {
    input: [
      [4, 6],
      [3, 8],
    ],
    output: 14,
  },

  {
    input: [
      [2, 4, 2],
      [3, 1, 1],
      [1, 2, 0],
    ],
    output: 10,
  },

  {
    input: [
      [6, 1, 1],
      [4, -2, 5],
      [2, 8, 7],
    ],
    output: -306,
  },

  {
    input: [
      [2, 4, -3],
      [1, 8, 7],
      [2, 3, 5],
    ],
    output: 113,
  },

  {
    input: [
      [1, 2, 3, 4],
      [5, 0, 2, 8],
      [3, 5, 6, 7],
      [2, 5, 3, 1],
    ],
    output: 24,
  },

  {
    input: [
      [2, 5, 3, 6, 3],
      [17, 5, 7, 4, 2],
      [7, 8, 5, 3, 2],
      [9, 4, -6, 8, 3],
      [2, -5, 7, 4, 2],
    ],
    output: 2060,
  },

  {
    input: [
      [1, 2, 4, 0, 9],
      [2, 3, 4, 1, 1],
      [6, 7, 3, 9, 3],
      [2, 0, 3, 0, 2],
      [4, 5, 2, 3, 1],
    ],
    output: 1328,
  },

  {
    input: [
      [2, 4, 5, 3, 1, 2],
      [2, 4, 7, 5, 3, 2],
      [1, 1, 0, 2, 3, 1],
      [1, 3, 9, 0, 3, 2],
      [1, 1, 2, 2, 4, 1],
      [0, 0, 4, 1, 2, 3],
    ],
    output: 88,
  },

  {
    input: [
      [3, 2, 1, 4, 0, 1],
      [1, 2, 3, 1, 9, 1],
      [0, 2, 1, 1, 9, 0],
      [8, 2, 1, 0, 2, 3],
      [2, 3, 4, 0, 1, 2],
      [2, 1, 0, 0, 1, 1],
    ],
    output: -536,
  },
]

describe('Matrix determinant ALL Tests', () => {
  for (let i = 0; i < ALL_TESTS.length; i++) {
    it(`Matrix Determinant Test ${i + 1}`, function () {
      const item = ALL_TESTS[i]
      expect(determinant(item.input)).toEqual(item.output)
    })
  }
})

const { expandedForm } = require('./write-number-in-expanded-form-part-1')

const BASIC_TESTS = [
  {
    input: 2,
    output: '2',
  },
  {
    input: 12,
    output: '10 + 2',
  },
  {
    input: 42,
    output: '40 + 2',
  },
  {
    input: 4982342,
    output: '4000000 + 900000 + 80000 + 2000 + 300 + 40 + 2',
  },
]

const EDGE_CASES = [
  {
    input: 420370022,
    output: '400000000 + 20000000 + 300000 + 70000 + 20 + 2',
  },
  {
    input: 70304,
    output: '70000 + 300 + 4',
  },
  {
    input: 42,
    output: '40 + 2',
  },
  {
    input: 9000000,
    output: '9000000',
  },
  {
    input: 92093403034573,
    output:
      '90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3',
  },
  {
    input: 2096039485293,
    output:
      '2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3',
  },
]

describe('Basic Tests', function () {
  for (let i = 0; i < BASIC_TESTS.length; i++) {
    const item = BASIC_TESTS[i]

    it(`Write Number in Expanded Form 1 BASIC Test ${i + 1}`, function () {
      expect(expandedForm(item.input)).toEqual(item.output)
    })
  }
})

describe('Edge Cases', function () {
  for (let i = 0; i < EDGE_CASES.length; i++) {
    const item = EDGE_CASES[i]

    it(`Write Number in Expanded Form 1 EDGE CASE ${i + 1}`, function () {
      expect(expandedForm(item.input)).toEqual(item.output)
    })
  }
})

function solution(num) {
  let x = -1
  num = num
    .toString()
    .split('')
    .reverse()
    .map(function (i) {
      x++
      return i + '0'.repeat(x)
    })
  return num
    .filter(i => !/^0+$/.test(i))
    .reverse()
    .join(' + ')
}

describe('Random Tests', function () {
  for (let test = 0; test < 100; test++) {
    let input = 1 + Math.floor(Math.random() * 100000000)
    it(`Write Number in Expanded Form 1 RANDOM TEST ${test + 1}`, function () {
      expect(expandedForm(input)).toEqual(solution(input))
    })
  }
})

const { orderWeight } = require('./weight-for-weight')

const BASIC_TESTS = [
  {
    input: '103 123 4444 99 2000',
    output: '2000 103 123 4444 99',
  },

  {
    input: '2000 10003 1234000 44444444 9999 11 11 22 123',
    output: '11 11 2000 10003 22 123 1234000 44444444 9999',
  },

  {
    input: '',
    output: '',
  },

  {
    input: '10003 1234000 44444444 9999 2000 123456789',
    output: '2000 10003 1234000 44444444 9999 123456789',
  },

  {
    input:
      '3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697',
    output:
      '3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697',
  },

  {
    input:
      '71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81',
    output:
      '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703',
  },

  {
    input:
      '387087 176 351832 100 430372 8 58052 54 175432 120 269974 147 309754 91 404858 67 271476 164 295747 111 40',
    output:
      '100 111 120 40 8 54 91 164 147 67 176 430372 58052 175432 351832 271476 309754 404858 387087 295747 269974',
  },
]

describe('Weight for Weight Kata BASIC Tests', function () {
  for (let i = 0; i < BASIC_TESTS.length; i++) {
    const testCase = BASIC_TESTS[i]

    it(`Basic test ${i + 1}`, function () {
      const { input, output } = testCase
      expect(orderWeight(input)).toBe(output)
    })
  }
})

describe('Weight for Weight Kata RANDOM Tests', function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  function weightStrNb1235(nb) {
    let n = 0,
      a = nb.split('')

    for (let i = 0; i < a.length; i++) n += +a[i]
    return n
  }

  function comp1235(a, b) {
    let r
    let cp = weightStrNb1235(a) - weightStrNb1235(b)
    if (cp == 0) {
      if (a < b) r = -1
      else r = 1
    } else {
      r = cp
    }
    return r
  }

  function orderWeight1235(strng) {
    return strng.split(' ').sort(comp1235).join(' ')
  }

  function do_ex() {
    let i = 0
    let res = ''
    while (i < 20) {
      if (i % 2 == 0) n = randint(1, 500000)
      else n = randint(1, 200)
      res += +n + ' '
      i += 1
    }
    return res + randint(1, 100)
  }

  for (let _ = 0; _ < 50; _++) {
    let a = do_ex()

    it(`Random test ${_ + 1}`, function () {
      const input = orderWeight(a)
      const output = orderWeight1235(a)

      expect(orderWeight(input)).toBe(output)
    })
  }
})

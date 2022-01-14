const BASIC_TESTS = [
  {
    input: ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'],
    output: ['WEST'],
  },

  {
    input: ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH'],
    output: [],
  },

  {
    input: ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH'],
    output: ['NORTH'],
  },

  {
    input: [
      'EAST',
      'EAST',
      'WEST',
      'NORTH',
      'WEST',
      'EAST',
      'EAST',
      'SOUTH',
      'NORTH',
      'WEST',
    ],
    output: ['EAST', 'NORTH'],
  },

  {
    input: [
      'NORTH',
      'EAST',
      'NORTH',
      'EAST',
      'WEST',
      'WEST',
      'EAST',
      'EAST',
      'WEST',
      'SOUTH',
    ],
    output: ['NORTH', 'EAST'],
  },

  {
    input: ['NORTH', 'WEST', 'SOUTH', 'EAST'],
    output: ['NORTH', 'WEST', 'SOUTH', 'EAST'],
  },
]

describe('Directions Reduction Kata BASIC Tests', function () {
  for (let i = 0; i < BASIC_TESTS.length; i++) {
    const testCase = BASIC_TESTS[i]

    it(`Basic test ${i + 1}`, function () {
      const { input, output } = testCase
      expect(orderWeight(input)).toBe(output)
    })
  }
})

// describe('More tests : . . . ', function () {
//   let rr = [
//     ['NORTH', 'EAST'],
//     ['EAST', 'SOUTH'],
//     ['SOUTH', 'WEST'],
//     ['WEST', 'NORTH'],
//     ['NORTH', 'NORTH', 'NORTH'],
//   ]

//   Test.randomize(rr).forEach(function (res) {
//     let aa = ['NORTH', 'SOUTH'],
//       bb = ['EAST', 'WEST']
//     let rnd = function () {
//       return ~~(Math.random() * 2)
//     }
//     let u = res.slice(0)

//     for (let x = 0, z = 2 + rnd(); x < z; x++) {
//       let a = rnd(),
//         b = rnd()
//       if (x % 2) {
//         u.push(aa[a])
//         u.push(aa[(a + 1) % 2])
//         u.unshift(bb[b])
//         u.unshift(bb[(b + 1) % 2])
//       } else {
//         u.push(bb[b])
//         u.push(bb[(b + 1) % 2])
//         u.unshift(aa[a])
//         u.unshift(aa[(a + 1) % 2])
//       }
//     }

//     console.log(Test.inspect(u))
//     Test.assertSimilar(dirReduc(u), res)
//   })
// })

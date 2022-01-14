// |a b c|    |- - -|   (a)  |- - -| (b)    |- - -| (c)
// |d e f|    |- e f|        |d - f|        |d e -|
// |g h i|    |- h i|        |g - i|        |g h -|

// 2  5  3
// 1 -2 -1
// 1  3  4

// |a b c d|  |- - - -| (a)  |- - - -| (b)  |- - - -| (c)    |- - - -| (d)
// |e f g h|  |- f g h|      |e - g h|      |e f - h|        |e f g -|
// |i j k l|  |- j k l|      |i - k l|      |i j - l|        |i j k -|
// |m n o p|  |- n o p|      |m - o p|      |m n - p|        |m n o -|

function determinant(m) {
  let value = 0

  if (m.length === 1) {
    value = m[0][0]
    return value
  }

  if (m.length === 2) {
    value = m[0][0] * m[1][1] - m[0][1] * m[1][0]

    return value
  }

  let currentValue = 0
  const ignoredRow = 0
  let ignoredColumn = 0
  let values = []

  for (let index = 0; index < m.length; index++) {
    currentValue = m[ignoredRow][index]

    const columnToIgnore = index
    let array = []

    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m.length; j++) {
        if (i === ignoredRow) {
          continue
        }

        if (j === columnToIgnore) {
          continue
        }

        const pair = m[i][j]
        array.push(pair)
      }

      if (array.length > 0) {
        values.push(array)
      }

      array = []
    }

    if (index % 2 === 0) {
      value += currentValue * determinant(values)
    } else {
      value -= currentValue * determinant(values)
    }

    values = []
  }

  return value
}

module.exports = { determinant }

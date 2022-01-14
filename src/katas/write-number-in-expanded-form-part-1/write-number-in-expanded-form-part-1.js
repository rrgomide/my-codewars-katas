function expandedForm(num) {
  const array = num.toString().split('').map(Number)
  const size = array.length
  let result = ''

  for (let i = 0; i < size; i++) {
    const currentItem = array[i]

    if (currentItem === 0) {
      continue
    }

    const remaining = size - i - 1
    result += (currentItem * 10 ** remaining).toString() + ' + '
  }

  return result.substring(0, result.length - 3)
}

module.exports = { expandedForm }

function orderWeight(strng) {
  const records = []

  const values = strng.split(' ')
  const maxSize = values.map(value => value.length).sort((a, b) => b - a)[0]

  for (const value of values) {
    const normalWeight = value

    const numberWeight = value
      .split('')
      .map(Number)
      .reduce((accumulator, current) => accumulator + current, 0)

    records.push({
      normalWeight,
      numberWeight,
      sort: `${numberWeight.toString().padStart(maxSize, '0')}_${normalWeight}`,
    })
  }

  records.sort((a, b) => a.sort.localeCompare(b.sort))

  return records.map(value => value.normalWeight).join(' ')
}

module.exports = { orderWeight }

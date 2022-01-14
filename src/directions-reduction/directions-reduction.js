const oppositeDirections = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST',
}

function dirReduc(arr) {
  const path = []

  for (const newDirection of arr) {
    if (path.length === 0) {
      path.push(newDirection)
      continue
    }

    const latestPath = path[path.length - 1]

    if (oppositeDirections[latestPath] === newDirection) {
      path.pop()
      continue
    }

    path.push(newDirection)
  }

  return path
}

module.exports =

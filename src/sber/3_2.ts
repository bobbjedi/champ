/**
 * Implement function getResult
 */
function getResult (ground: number[]): number {

  let bestSteps = 99999999999999
  ground.forEach((g, i) => {
    let steps = 0
    const g_ = ground.slice()
    g_.splice(i, 1)[0]
    g_.forEach(h => {
      if (h > g) {
        steps += h - g
      } else if (h < g) {
        steps += g - h
      }
    })
    if (steps < bestSteps) {
      bestSteps = steps
    }
  })
  return bestSteps
}

console.log(getResult([1, 3, 2, 2]))
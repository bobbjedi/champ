/**
 * Implement function getResult
 */
function getResult (invitedList: number, dislikeList: string[]): boolean {
  // Write your code here...
  const gu: number[] = []
  while (gu.length < invitedList) {
    gu.push(gu.length + 1)
  }
  console.log(gu)

  let isOk = false
  calcPermutations(gu, gu.length).forEach(comb => {
    // console.log('co', comb)
    comb.forEach((g, i) => {
      // if (!i || i === gu.length - 1) {
      //   return
      // }
      const left = comb[i - 1]
      const right = comb[i + 1]
      const lblock = (dislikeList.find(s => s.startsWith(left + '-')) || '-')
        .split('-')[1].split(',')
      const rblock = (dislikeList.find(s => s.startsWith(right + '-')) || '-')
        .split('-')[1].split(',')
      const my = (dislikeList.find(s => s.startsWith(g + '-')) || '-')
        .split('-')[1].split(',')
      console.log({ g, rblock, lblock, my })
      if (
        !lblock.includes(String(g))
        && !rblock.includes(String(g))
        && !my.includes(String(comb[i - 1]))
        && !my.includes(String(comb[i + 1]))
        // && !dislikeList.includes(g + '' + right)
      ) {
        isOk = true
      }
    })

  })
  return isOk
  // console.log(sets)
}

console.log(getResult(4, ['1-2,3', '3-4,5', '2-3']))

function calcPermutations (array: number[], k: number) {
  const m: number[][] = []
  const combinations: number[] = []
  const indices: boolean[] = []
  const len = array.length
  function run (level: number) {
    for (let i = 0; i < len; i++) {
      if (!indices[i]) {
        indices[i] = true
        combinations[level] = array[i]
        if (level < k - 1) {
          run(level + 1)
        } else {
          m.push(([]).concat(combinations))

        }
        indices[i] = false
      }
    }
  }
  run(0)
  return m
}
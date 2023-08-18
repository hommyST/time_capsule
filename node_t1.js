// hsl(282, 68%, 38%) 12%,
// hsl(97, 70%, 50%) 12%,
const fs = require('fs')

let str = ''

let cut = 'var(--progress-cut)'
let bg = 'var(--progress-bg)'


let gStep = 6
let pStep = 3
let isGreenTurn = true

for (let i = gStep; i < 100; i = i + (isGreenTurn ? gStep : pStep)) {
  str += `${isGreenTurn ? bg : cut} ${i}%,`
  str += '\n'

  str += `${isGreenTurn ? cut : bg} ${i}%,`
  str += '\n'

  isGreenTurn = !isGreenTurn
}

fs.writeFileSync('test.txt', str, {encoding: 'utf-8'})


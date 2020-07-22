function largestTimeFromDigits(A: number[]) {
  let max = -1
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j !== i) {
        for (let k = 0; k < 4; k++) {
          if (k !== j && k !== i) {
            const l = 6 - i - j - k
            const hour = 10 * A[i] + A[j]
            const mins = 10 * A[k] + A[l]
            if (hour < 24 && mins < 60) {
              max = Math.max(max, hour * 60 + mins)
            }
          }
        }
      }
    }
  }
  if (max >= 0) {
    let hour: number | string = parseInt(`${max / 60}`)
    let mins: number | string = parseInt(`${max % 60}`)
    hour = hour < 10 ? `0${hour}` : `${hour}`
    mins = mins < 10 ? `0${mins}` : `${mins}`
    return `${hour}:${mins}`
  } else {
    return ''
  }
}

function numWaterBottles(numBottles: number, numExchange: number) {
  let result = numBottles

  function helper(curBottles: number) {
    const exchanged = Math.floor(curBottles / numExchange)
    const empty = curBottles % numExchange
    result += exchanged

    if (exchanged + empty >= numExchange) {
      helper(exchanged + empty)
    }
  }

  helper(numBottles)

  return result
}

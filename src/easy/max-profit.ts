function maxProfit1(prices: number[]) {
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      max = Math.max(max, prices[i] - min)
    }
  }
  return max
}

function maxProfit2(prices: number[]) {
  let index = 0
  let valley = prices[0]
  let peek = prices[0]
  let maxProfit = 0
  while (index < prices.length - 1) {
    while (index < prices.length - 1 && prices[index] <= prices[index + 1]) index++
    peek = prices[index]
    while (index < prices.length - 1 && prices[index] >= prices[index + 1]) index++
    valley = prices[index]
    maxProfit += peek - valley
  }
  return maxProfit
}

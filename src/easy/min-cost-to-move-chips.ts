/*
  贪心算法
  数组表示一组筹码，下标表示第几个筹码，值表示筹码所处的位置
  移动偶数位不消耗代价，移动奇数位代价 + 1
  所以最小化代价则为偶数挪在一起，奇数挪在一起
  比较哪个比较多，把少的往多的挪
 */
function minCostToMoveChips(chips: number[]) {
  const odd = chips.filter((value) => !(value % 2))
  const even = chips.filter((value) => value % 2)

  return Math.min(odd.length, even.length)
}

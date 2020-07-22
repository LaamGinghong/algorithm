/*
两个数的最大值等于

两数差值的绝对值加上两数的和，再除以二
 */

function maximun(a: number, b: number) {
  return (Math.abs(a - b) + a + b) / 2
}

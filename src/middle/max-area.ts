function maxArea1(heights: number[]) {
  const len = heights.length
  let area = 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const width = j - i
      const height = Math.min(heights[i], heights[j])
      area = Math.max(area, width * height)
    }
  }
  return area
}

function maxArea2(heights: number[]) {
  let area = 0
  let i = 0
  let j = heights.length - 1

  while (i < j) {
    const height = Math.min(heights[i], heights[j])
    const width = j - i
    area = Math.max(area, width * height)
    if (heights[i] < heights[j]) {
      i++
    } else {
      j--
    }
  }
  return area
}

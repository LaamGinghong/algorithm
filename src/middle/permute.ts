function permute(nums: number[]) {
  const res: number[][] = []

  function backtrack(current: number[], recorder: { [key: string]: number }) {
    if (current.length === nums.length) {
      res.push(current.slice())
      return
    }

    nums.map((num) => {
      if (recorder[num]) return
      current.push(num)
      recorder[num] = 1

      backtrack(current, recorder)
      current.pop()
      delete recorder[num]
    })
  }

  backtrack([], {})

  return res
}

function removeElement(nums: number[], val: number) {
    let answer = 0
    for (const num of nums) {
        if (num !== val) {
            num[answer] = val
            answer++
        }
    }
    return answer
}

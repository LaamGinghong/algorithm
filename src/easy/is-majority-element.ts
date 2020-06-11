function isMajorityElement(nums: number[], target: number) {
    const flag = nums.length / 2
    const map = new Map<number, number>()
    let _target: number
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
        if (map.get(num) > flag) {
            _target = num
        }
    }
    return _target === target
}

isMajorityElement([438885258, 438885258]
    , 438885258
)

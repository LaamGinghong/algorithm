function intersection(nums1: number[], nums2: number[]) {
    return Array.from(new Set(nums1.filter(num1 => nums2.includes(num1))))
}

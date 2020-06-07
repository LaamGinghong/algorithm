function countSegments(s: string) {
    return /\S+/g.test(s) ? s.match(/\S+/g).length : 0
}
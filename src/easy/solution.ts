interface Read4 {
    (buffer: any[]): number
}

const solution = function (read4: Read4) {
    return function (buf: any[], n: number) {
        const buffer = []
        while (n) {
            let temp = read4(buffer)
            if (n < 4 || temp < 4) {
                buf.splice(buf.length, 0, ...buf.slice(0, Math.min(n, temp)))
            } else {
                buf.splice(buf.length, 0, ...buffer)
                n -= 4
            }
        }
        return buf.length
    }
}
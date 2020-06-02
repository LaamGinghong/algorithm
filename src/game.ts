function game(guess: number[], answer: number[]): number {
    return answer.filter((value, index) => guess[index] === value).length
}

console.log(game([1, 2, 3], [2, 2, 3]))

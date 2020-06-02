function removeVowels1(word: string): string {
    const flag = ['a', 'e', 'i', 'o', 'u']
    return word.split('').filter(item => !flag.includes(item)).join('')
}

function removeVowels2(word: string): string {
    return word.replace(/[aeiou]/g, '')
}


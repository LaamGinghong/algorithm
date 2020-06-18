function reverseWords(s: string) {
  return s
    .split(' ')
    .filter((s) => s)
    .reverse()
    .join(' ')
}

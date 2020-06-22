function kthGrammar(N: number, K: number) {
  if (N === 1) return 0
  if (K % 2) return kthGrammar(N - 1, Math.floor(K / 2) + 1)
  return kthGrammar(N - 1, K / 2) ? 0 : 1
}

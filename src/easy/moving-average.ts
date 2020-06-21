class MovingAverage {
  private readonly _size: number
  private _list: number[] = []

  constructor(size: number) {
    this._size = size
  }

  public next(value: number): number {
    this._list.push(value)
    if (this._list.length > this._size) this._list.shift()
    return (
      this._list.reduce((previousValue, currentValue) => previousValue + currentValue) /
      this._list.length
    )
  }
}

function daysBetweenDates(date1: string, date2: string): number {
  const [year1, month1, day1] = date1.split('-')
  const [year2, month2, day2] = date2.split('-')
  const amount1 = daysFrom1970(year1, month1, day1)
  const amount2 = daysFrom1970(year2, month2, day2)
  return Math.abs(amount1 - amount2)
}

const daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function daysFrom1970(year: string, month: string, day: string): number {
  let amount = 0
  for (let i = +year - 1; i > 1970; i--) {
    amount += isLeapYear(+i) ? 366 : 365
  }
  for (let i = 0; i < +month; i++) {
    if (i === 2 && isLeapYear(+year)) {
      amount += 29
      continue
    }
    amount += daysOfMonth[i]
  }
  amount += +day
  return amount - 1
}

function isLeapYear(year: number) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
}

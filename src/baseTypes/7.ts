/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {MONDAY, TUESDAY, WEDNESDAY, THURSDA, FRIDAY, SATIDAY, SUNDAY};

const isWeekend = (day:number): boolean => {
  if (day < 5) {
    return false;
  }

  return true;
}

console.log(isWeekend(Week.WEDNESDAY)); //false
console.log(isWeekend(Week.SATIDAY)); //true
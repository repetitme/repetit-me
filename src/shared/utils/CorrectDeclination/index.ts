function getCorrectWordForm(
  number: number,
  forms: [string, string, string]
): string {
  const n = Math.abs(number);
  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return forms[0];
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return forms[1];
  } else {
    return forms[2];
  }
}

export function getTimeAgoText(hours: number): string {
  if (hours === 0) return 'Только что';

  const hourWord = getCorrectWordForm(hours, ['час', 'часа', 'часов']);

  return `${hours} ${hourWord} назад`;
}

export function getYearsAgoText(years: number): string {
  if (years === 0) return 'Меньше года';

  const yearWord = getCorrectWordForm(years, ['год', 'года', 'лет']);

  return `${years} ${yearWord}`;
}

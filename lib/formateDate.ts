export function formatDate(date: string, locale: string = 'pt-BR'): string {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Data inválida");
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat(locale, options).format(parsedDate);
}

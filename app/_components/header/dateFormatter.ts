export const dateFormatter = (date: Date, locale = 'pt-BR') => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'full'
  }).format(date);
};
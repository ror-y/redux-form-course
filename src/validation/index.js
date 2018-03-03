export const required = value =>
  value ? undefined : 'Value is required';

export const minLength = value =>
  value.length < 4
    ? 'Value must be at least 4 characters'
    : undefined;

export const maxLength = value =>
  value.length > 10 ? 'Value is too long' : undefined;

export const nonWordCharacters = value =>
  /\W/g.test(value)
    ? 'Non-word character typed. Made a typo?'
    : undefined;

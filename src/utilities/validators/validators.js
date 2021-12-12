export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

//validate
export const required = (value) => {
  if (value) return undefined;
  return 'Field is required'
}
export const maxLength = (max) => (value) => {
  if (value.length > max) return `Max length is ${max} symbols`;
  return undefined;
}


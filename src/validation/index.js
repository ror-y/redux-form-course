export const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'First name is required';
  }

  if (!values.surname) {
    errors.surname = 'Surname is required';
  }

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 4) {
    errors.username = 'Username must be at least 4 characters long';
  } else if (values.username.length > 10) {
    errors.username = 'Username is too long';
  }

  return errors;
};

export const warn = values => {
  const warnings = {};

  if (/\W/g.test(values.firstname)) {
    warnings.firstname = 'Non-word character typed. Made a typo?';
  }

  return warnings;
};

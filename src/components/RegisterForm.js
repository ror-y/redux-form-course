import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from './fields';
import {
  required,
  minLength,
  maxLength
} from '../validation';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          component={customInput}
          type="text"
          label="First Name"
          validate={[required]}
        />
        <Field
          name="surname"
          component={customInput}
          type="text"
          label="Surname"
          validate={[required]}
        />
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="preference"
          component={customSelect}
          label="Preferred Formatting"
        />
        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Sign up to Newsletter?"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;

import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class RegisterFormContainer extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

export default RegisterFormContainer;

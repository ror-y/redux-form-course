import React, { Component } from 'react';
import UserForm from './UserForm';

class UserFormContainer extends Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <UserForm onSubmit={this.submit} />
    );
  }
}

export default UserFormContainer;

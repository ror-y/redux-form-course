import React from 'react';
import UserForm from './components/UserForm';

class UserFormContainer extends React.Component {
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

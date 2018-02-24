import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="preference">Preferred Formatting</label>
          <Field name="preference" component="select">
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
        <div>
          <label htmlFor="newsletter">Sign up to newsletter?</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

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

UserForm = reduxForm({
  form: 'user'
})(UserForm);

export default UserFormContainer;

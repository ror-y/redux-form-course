import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const customInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
    </div>
  )
}

const customSelect = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option />
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  )
}

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={customInput}
          type="text"
          label="Name"
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

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const customTextInput = (props) => {
  console.log('props: ', props);
  return (
    <div>
      <label>Name</label>
      <input {...props.input} type={props.type} />
    </div>
  )
}

const customSelectInput = (props) => {
  return (
    <div>
      <label>Preferred Formatting</label>
      <select {...props.input}>
        <option />
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  )
}

const customCheckboxInput = (props) => {
  return (
    <div>
      <label>Sign up to newsletter?</label>
      <input {...props.input} type={props.type} />
    </div>
  )
}

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={customTextInput} type="text" />
        <Field name="preference" component={customSelectInput} />
        <Field name="newsletter" component={customCheckboxInput} type="checkbox" />
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
